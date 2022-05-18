import {reactive} from "vue"
import env from "../../env.configs"

const state = reactive({
    isNavigatingInFromLogin: false,
    authCredential: {
        isLogin: false,
        isLogingOut: false,
        isRegistering: false,
        isInputsValid: false,
        token: null,
        tokenType: null,
        userId: null,
        email: null,
        avatar: {
            large: null,
            medium: null,
            small: null,
        },
    },
    trending: {
        list: [],
        isLoading: false,
        error: false,
        hasNoContent: false
    },
    recommendation: {
        list: [],
        isLoading: false,
        error: false,
        hasNoContent: false
    },
    movies: {
        list: [],
        isLoading: false,
        error: false,
        hasNoContent: false
    },
    series: {
        list: [],
        isLoading: false,
        error: false,
        hasNoContent: false
    },
    bookmarked: {
        list: [],
        isLoading: false,
        error: false,
        hasNoContent: false
    },
    search: {
        list: [],
        isLoading: false,
        error: false,
        hasNoContent: false,
        name: "",
        strSearch: "",
        placeHolder: null,
        isSearching: false
    },
    navigation: {
        activeLink: {
            home: false,
            movies: false,
            series: false,
            bookmarked: false
        },
        modal_popup: {
            isImgShowerOpened: false,
            isProfilePopupOpened: false,
            isUploadingImg: false,
            isSelectingImg: false,
            srcEncoded: {
                large: "",
                medium: "",
                small: ""
            }
        }
    }
})


const methods = {
    async register(email, password) {
        const url = env.configs.API_URL + "register"
        const headers = new Headers({
            "Content-type": "application/json"
        })
        const body = {
            email: email,
            password: password
        }
        state.authCredential.isRegistering = true
        const response = await fetch(url, {
            method: "POST",
            headers: headers,
            body: JSON.stringify(body)
        })
        return response.status === 201
    },
    async login(email, password) {
        try {
            state.authCredential.isLogin = true

            const url = env.configs.API_URL + "login"
            const headers = new Headers({
                "Content-type": "application/json"
            })
            const body = {
                email: email,
                password: password
            }
            state.authCredential.isLogin = true
            const response = await fetch(url, {
                method: "POST",
                headers: headers,
                body: JSON.stringify(body),
                credentials: "include"
            })
            const jsonResponse = await response.json()
            if (response.status === 200) {
                state.authCredential.userId = jsonResponse.data.id
                state.authCredential.email = jsonResponse.data.email
                state.authCredential.avatar = jsonResponse.data.avatar
                state.authCredential.token = jsonResponse.data.accessToken
                state.authCredential.tokenType = jsonResponse.data.tokenType
                state.authCredential.isLogin = false
            }
            return response.status
        } catch (e) {
            console.log(e.message)
            state.authCredential.isLogin = false
        }
    },
    async logout() {
        try {
            const url = env.configs.API_URL + "logout"
            state.authCredential.isLogingOut = true
            const response = await fetch(url, {
                method: "GET",
                credentials: "include"
            })
            if (response.status === 200) { //reinitialize everything on the user and navogation
                state.authCredential = {
                    isLogin: false,
                    isLogingOut: false,
                    isRegistering: false,
                    isInputsValid: false,
                    token: null,
                    tokenType: null,
                    userId: null,
                    email: null,
                    avatar: {
                        large: null,
                        medium: null,
                        small: null,
                    }
                }

                state.navigation = {
                    activeLink: {
                        home: false,
                        movies: false,
                        series: false,
                        bookmarked: false
                    },
                    modal_popup: {
                        isImgShowerOpened: false,
                        isProfilePopupOpened: false,
                        isUploadingImg: false,
                        isSelectingImg: false,
                        srcEncoded: {
                            large: "",
                            medium: "",
                            small: ""
                        }
                    }
                }
                state.authCredential.isLogingOut = false
            }
            return response.status
        } catch (e) {
            console.log(e.message)
            state.authCredential.isLogingOut = true
        }
    },
    async loadTrendingList() {
        const body = {
            userId: state.authCredential.userId,
            constraints: {
                isTrending: true,
                isBookmarked: false,
                category: null
            }
        }
        await methods.fetchData(state.authCredential.tokenType + " " + state.authCredential.token, state.trending, JSON.stringify(body))
    },
    async loadRecommendations() {
        const body = {
            userId: state.authCredential.userId,
            constraints: {
                isTrending: false,
                isBookmarked: false,
                category: null
            }
        }
        await methods.fetchData(state.authCredential.tokenType + " " + state.authCredential.token, state.recommendation, JSON.stringify(body))
    },
    async loadMovies() {
        const body = {
            userId: state.authCredential.userId,
            constraints: {
                isTrending: false,
                isBookmarked: false,
                category: "Movie"
            }
        }
        await methods.fetchData(state.authCredential.tokenType + " " + state.authCredential.token, state.movies, JSON.stringify(body))
    },
    async loadSeries() {
        const body = {
            userId: state.authCredential.userId,
            constraints: {
                isTrending: false,
                isBookmarked: false,
                category: "TV Series"
            }
        }
        await methods.fetchData(state.authCredential.tokenType + " " + state.authCredential.token, state.series, JSON.stringify(body))
    },
    async loadBookmarked() {
        const body = {
            userId: state.authCredential.userId,
            constraints: {
                isTrending: false,
                isBookmarked: true,
                category: null
            }
        }
        await methods.fetchData(state.authCredential.tokenType + " " + state.authCredential.token, state.bookmarked, JSON.stringify(body))
    },
    async fetchData(token, stateProperty, strBody) {
        try {
            const url = env.configs.API_URL + "medias/filter"
            stateProperty.isLoading = true
            state.search.name = ""
            const headers = new Headers({
                "Content-type": "application/json",
                "Authorization": token
            })

            const response = await fetch(url, {
                method: "POST",
                headers: headers,
                body: strBody,
                credentials: "include"
            })

            const jsonResponse = await response.json()
            if (response.status === 200) {

                if (jsonResponse.data === null || jsonResponse.data.length === 0) {
                    stateProperty.hasNoContent = true
                    state.search.name = "No results for '" + state.search.strSearch + "'"
                } else {
                    stateProperty.list = jsonResponse.data
                    stateProperty.hasNoContent = false
                    state.search.name = "Found " + state.search.list.length + " results for '" + state.search.strSearch + "'"
                }
            }

            if (response.status === 500) {
                throw new Error(jsonResponse.issues)
            }
            stateProperty.isLoading = false
            stateProperty.error = false
        } catch (e) {
            stateProperty.isLoading = false
            stateProperty.error = true
        }
    },
    async addBookmarked(itemData, btnId) {
        const btn = document.getElementById(btnId)
        try {
            btn.disabled = true //disable the btn
            btn.classList.toggle("request-going")

            const url = env.configs.API_URL + "add/bookmark"
            const headers = new Headers({
                "Content-type": "application/json",
                "Authorization": state.authCredential.token
            })
            const body = {
                userId: state.authCredential.userId,
                mediaId: itemData._id
            }
            const response = await fetch(url, {
                method: "POST",
                headers: headers,
                body: JSON.stringify(body)
            })
            const jsonResponse = await response.json()
            if (response.status === 200) {
                methods.refreshLists(jsonResponse.data[0])
                if (btn.classList.contains("active")) {
                    btn.classList.remove("active")
                } else {
                    btn.classList.add("active")
                }
            }
            if (response.status === 405) {
                throw jsonResponse.data.message
            }
            if (response.status === 500) {
                throw jsonResponse.data.message
            }
            btn.disabled = false
            btn.classList.toggle("request-going")
        } catch (e) {
            btn.disabled = false
            btn.classList.toggle("request-going")
            btn.classList.toggle("error")
        }
    },
    async filterMedia(strSearch, bookmarked, category) {
        const body = {
            userId: state.authCredential.userId,
            constraints: {
                strSearch: strSearch,
                isTrending: false,
                isBookmarked: bookmarked,
                category: category
            }
        }
        await methods.fetchData(state.authCredential.tokenType + " " + state.authCredential.token, state.search, JSON.stringify(body))
    },
    async uploadProfile() {
        state.navigation.modal_popup.isUploadingImg = true
        const url = env.configs.API_URL + "upload/avatar"
        const headers = new Headers({
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            "Authorization": 'Bearer ' + state.authCredential.token
        })
        const response = await fetch(url, {
            method: "POST",
            headers: headers,
            body: JSON.stringify({
                userId: state.authCredential.userId,
                avatarLarge: state.navigation.modal_popup.srcEncoded.large,
                avatarMedium: state.navigation.modal_popup.srcEncoded.medium,
                avatarSmall: state.navigation.modal_popup.srcEncoded.small,
            })
        })
        if (response.status === 200) {
            const jsonResponse = await response.json()
            state.authCredential.avatar = jsonResponse.data.avatar
            state.navigation.modal_popup.isUploadingImg = false
        } else {
            state.navigation.modal_popup.isUploadingImg = false
        }
    },
    refreshLists(mediaUpdates) {
        methods.refreshTrendings(mediaUpdates)
        methods.refreshBookmarks(mediaUpdates)
        methods.refreshMovies(mediaUpdates)
        methods.refreshSeries(mediaUpdates)
        methods.refreshRecommendations(mediaUpdates)
    },
    refreshTrendings(mediaUpdates) {
        if (state.trending.list !== null && state.trending.list !== undefined) {
            let trendingIndex = null
            state.trending.list.forEach((media, index) => {
                if (media._id === mediaUpdates._id) {
                    trendingIndex = index
                }
            })
            if (trendingIndex === null) return
            state.trending.list.splice(trendingIndex, 1, mediaUpdates) //replace the item by i'ts updated version
        } else {
            return;
        }
    },
    refreshBookmarks(mediaUpdates) {
        if (state.bookmarked.list !== null && state.bookmarked.list !== undefined) {
            let bookmarkIndex = null
            state.bookmarked.list.forEach((media, index) => {
                if (media._id === mediaUpdates._id) {
                    bookmarkIndex = index
                }
            })
            if (bookmarkIndex !== null) {
                state.bookmarked.list.splice(bookmarkIndex, 1)
                if (state.bookmarked.list.length === 0) {
                    state.bookmarked.hasNoContent = true
                }
            } else {
                state.bookmarked.list.push(mediaUpdates)
            }
        } else {
            state.bookmarked.list = [mediaUpdates]
            state.bookmarked.hasNoContent = false
        }
    },
    refreshMovies(mediaUpdates) {
        if (state.movies.list !== null && state.movies.list !== undefined) {
            let movieIndex = null
            state.movies.list.forEach((media, index) => {
                if (media._id === mediaUpdates._id) {
                    movieIndex = index
                }
            })
            if (movieIndex === null) return
            state.movies.list.splice(movieIndex, 1, mediaUpdates) //replace the item by i'ts updated version
        } else {
            return;
        }
    },
    refreshSeries(mediaUpdates) {
        if (state.series.list !== null && state.series.list !== undefined) {
            let serieIndex = null
            state.series.list.forEach((media, index) => {
                if (media._id === mediaUpdates._id) {
                    serieIndex = index
                }
            })
            if (serieIndex === null) return
            state.series.list.splice(serieIndex, 1, mediaUpdates) //replace the item by i'ts updated version
        } else {
            return;
        }
    },
    refreshRecommendations(mediaUpdates) {
        if (state.recommendation.list !== null && state.recommendation.list !== undefined) {
            let recommendationIndex = null
            state.recommendation.list.forEach((media, index) => {
                if (media._id === mediaUpdates._id) {
                    recommendationIndex = index
                }
            })
            if (recommendationIndex === null) return
            state.recommendation.list.splice(recommendationIndex, 1, mediaUpdates) //replace the item by i'ts updated version
        } else {
            return;
        }
    },
    async refreshToken() {
        try {
            const url = env.configs.API_URL + "refresh/token"
            const response = await fetch(url, {
                method: "GET",
                credentials: "include"
            })
            if (response.status === 200) {
                const jsonResponse = await response.json()
                state.authCredential.userId = jsonResponse.data.id
                state.authCredential.email = jsonResponse.data.email
                state.authCredential.avatar = jsonResponse.data.avatar
                state.authCredential.token = jsonResponse.data.accessToken
                state.authCredential.tokenType = jsonResponse.data.tokenType
            } else {
                throw "Had an issue while refreshing the token! means the refresh token is no longer valid!!"
            }
        } catch (e) {
            throw e.message
        }
    }
}

export default {
    state,
    methods
}