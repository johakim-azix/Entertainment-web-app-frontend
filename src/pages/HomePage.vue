<template>
    <input name="profile_img" :onchange="previewImg" accept=".jpeg, .png, .jpg" type="file" style="visibility: hidden">
    <div class="scene">
        <div :class="{container:(store.state.authCredential.token!==null)}" class="hidden">
            <side-navigation @onAddImgIntent="addProfileImg" @onViewProfileImgIntent="viewProfileImg"/>
            <div class="nav-drawer">
                <router-view/>
            </div>
            <!--The user profile modal here -->
            <div class="modal-backdrop" :class="{hidden:!store.state.navigation.modal_popup.isImgShowerOpened}">
                <div class="image-preview-modal">
                    <div class="header">
                        <button v-if="store.state.navigation.modal_popup.isSelectingImg" id="refreshImg"
                                @click="addProfileImg" disabled>
                            <img style="height: 20px; width:25px" src="../assets/icons/icon-return.svg" alt="">
                        </button>
                        <strong>Image preview</strong>
                        <button @click="closeImgView">
                            <img style="height: 16px; width:16px" src="../assets/icons/icon-close.png" alt="">
                        </button>
                    </div>
                    <div class="preview">
                        <div class="background" :class="{enlarge:!(store.state.navigation.modal_popup.isSelectingImg)}">
                            <img id="bgImg" src="" alt="">
                        </div>
                        <div class="blur"></div>
                        <div class="image">
                            <img id="previewImg" src="" alt="">
                        </div>
                    </div>
                    <span :class="{hidden:!store.state.navigation.modal_popup.isUploadingImg}"></span>
                    <button id="submitProfile" v-if="store.state.navigation.modal_popup.isSelectingImg"
                            @click="saveProfile" disabled>
                        <img src="../assets/icons/icon-check.svg" alt="">
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    // @ is an alias to /src
    import sideNavigation from '@/components/side_navigation/side-navigation'
    import {inject} from "vue"

    export default {
        name: 'HomePage',
        components: {
            sideNavigation,
        },
        methods: {
            addProfileImg() {
                const imgInput = document.getElementsByName("profile_img")[0]
                imgInput.click()
            },
            viewProfileImg() {
                document.getElementById("bgImg").src = this.store.state.authCredential.avatar.large
                document.getElementById("previewImg").src = this.store.state.authCredential.avatar.large
                this.store.state.navigation.modal_popup.isImgShowerOpened = true
            },
            closeImgView() {
                this.store.state.navigation.modal_popup.isisSelectingImg = false
                this.store.state.navigation.modal_popup.isImgShowerOpened = false
            },
            async saveProfile() {
                await this.store.methods.uploadProfile()
            },
            previewImg() {
                const selectedImg = (document.getElementsByName("profile_img"))[0].files[0]
                const bgImgTag = document.getElementById("bgImg")
                if (!selectedImg) return
                const fileReader = new FileReader()
                fileReader.readAsDataURL(selectedImg)
                fileReader.onload = (event) => {
                    bgImgTag.src = event.target.result
                    bgImgTag.onload = (e) => {
                        this.treatImg(e.target)
                    }
                }
                this.store.state.navigation.modal_popup.isImgShowerOpened = true
                document.getElementById("refreshImg").disabled = false
            },
            resizeImg(imgRatio, maxWidth, maxHeight, target) {
                if ((target.width > maxWidth && target.height < maxHeight)) {
                    let height = 0
                    if (imgRatio < 1) height = maxWidth * imgRatio
                    if (imgRatio > 1) height = maxWidth / imgRatio
                    return this.drawImg(maxWidth, height, target)
                }
                if ((target.width < maxWidth && target.height > maxHeight)) {
                    let width = 0
                    if (imgRatio < 1) width = maxWidth * imgRatio
                    if (imgRatio > 1) width = maxWidth / imgRatio
                    return this.drawImg(width, maxHeight, target)
                }
                if (target.width > maxWidth && target.height > maxHeight) {
                    if (target.width > target.height) {
                        let height = 0
                        if (imgRatio < 1) height = maxHeight * imgRatio
                        if (imgRatio > 1) height = maxHeight / imgRatio
                        return this.drawImg(maxWidth, height, target)
                    } else {
                        let width = 0
                        if (imgRatio < 1) width = maxWidth * imgRatio
                        if (imgRatio > 1) width = maxWidth / imgRatio
                        return this.drawImg(width, maxHeight, target)
                    }
                }
            },
            drawImg(canvasWidth, canvasHeight, target) {
                const canvas = document.createElement("canvas")
                canvas.width = canvasWidth
                canvas.height = canvasHeight
                const context = canvas.getContext("2d")
                context.drawImage(target, 0, 0, canvas.width, canvas.height)
                return context.canvas.toDataURL("image/jpeg")
            },
            treatImg(target) {
                const previewImgTag = document.getElementById("previewImg")
                const initialRatio = target.width / target.height

                this.store.state.navigation.modal_popup.srcEncoded.large = this.resizeImg(initialRatio, 300, 300, target)
                this.store.state.navigation.modal_popup.srcEncoded.medium = this.resizeImg(initialRatio, 150, 150, target)
                this.store.state.navigation.modal_popup.srcEncoded.small = this.resizeImg(initialRatio, 60, 60, target)
                previewImgTag.src = this.store.state.navigation.modal_popup.srcEncoded.large
                if (document.getElementById("submitProfile") === null) return
                document.getElementById("submitProfile").disabled = false
            },
        },
        beforeCreate() {
                if (this.store.methods.checkSessionUserInfo()){
                    /*means we have valid user info in session the we use them*/
          this.store.methods.getUserData().then(()=>{
                        if (this.store.state.authCredential.userId!==null&&this.store.state.authCredential.userId!==undefined){
                            this.store.methods.loadTrendingList()
                            this.store.methods.loadRecommendations()
                            this.store.methods.loadMovies()
                            this.store.methods.loadSeries()
                            this.store.methods.loadBookmarked()
                        }
                    })
                }else{
                    /*means there is no valid login info in the sessio so redirect to login to get new one*/
                    this.$router.replace({name: 'login'})
                }
        },
        setup() {
            const store = inject("store")
            return {
                store
            }
        }
    }
</script>

<style lang="scss" scoped>
    .hidden {
        display: none;
    }
    .modal-backdrop {
        background-color: rgba(255, 255, 255, .2);
        height: 100%;
        width: 100%;
        position: absolute;
        z-index: 2;
        display: flex;
        justify-content: space-around;

        &.hidden {
            display: none;
        }

        .image-preview-modal {
            background-color: white;
            width: fit-content;
            height: fit-content;
            overflow: hidden;
            margin-top: 70px;
            border-radius: 3px;
            position: relative;

            & > span {
                display: block;
                position: absolute;
                bottom: 7.8px;
                right: 0;
                left: 0;
                margin: auto;
                z-index: 10;
                width: 43px;
                height: 43px;
                border-radius: 100%;
                background-image: conic-gradient(transparent 200deg, rgba(255, 255, 255, .9) 360deg);
                animation: rotate 2s infinite linear;

                &.hidden {
                    display: none;
                }
            }

            & > button {
                position: absolute;
                bottom: 10px;
                right: 0;
                left: 0;
                margin: auto;
                z-index: 10;
                width: 40px;
                height: 40px;
                border-radius: 100%;
                outline: 0;
                border: solid rgba(255, 255, 255, .5) 1px;
                overflow: hidden;
                display: flex;
                justify-content: space-around;
                align-items: center;
                background: #161D2F;
                box-shadow: 2px 2px 3px rgba(0, 0, 0, .5);

                &.hidden {
                    z-index: -10
                }

                img {
                    height: 50%;
                    width: 60%;
                }
            }

            .header {
                height: 40px;
                display: flex;
                justify-content: space-between;
                align-items: center;
                padding: 0 5px;
                background: #161D2F;
                color: white;

                strong {
                    padding: 0 10px;
                }

                button {
                    display: flex;
                    align-items: center;
                    border: solid 1px rgba(255, 255, 255, .0);
                    border-radius: 10px;
                    padding: 5px 10px;
                    outline: 0;
                    color: white;
                    background: transparent;
                    transition: all ease-in-out .15s;

                    &:hover {
                        border: solid 1px rgba(255, 255, 255, .3);
                    }
                }
            }

            .preview {
                overflow: auto;
                height: 300px;
                width: 300px;
                position: relative;
                display: flex;
                justify-content: space-around;
                align-items: center;

                .background {
                    display: flex;
                    justify-content: space-around;
                    align-items: center;
                    overflow: hidden;

                    &.enlarge {
                        img {
                            height: 200%;
                            width: 200%
                        }
                    }

                    img {
                        -webkit-filter: blur(5px);
                        -moz-filter: blur(5px);
                        -o-filter: blur(5px);
                        -ms-filter: blur(5px);
                        filter: blur(5px);
                    }
                }

                .background, .blur, .image {
                    height: 100%;
                    width: 100%;
                    position: absolute;
                }

                .blur {
                    background: rgba(0, 0, 0);
                    opacity: .5;
                }

                .image {
                    position: relative;
                    background: transparent;
                    max-width: 400px;
                    max-height: 400px;
                    margin: auto;
                    overflow: hidden;
                    display: flex;
                    align-items: center;
                    justify-content: space-around;

                    img {
                        height: fit-content !important;
                        width: fit-content !important;
                    }
                }
            }
        }
    }
</style>