<template>
    <div v-if="(store.state.search.hasNoContent && !store.state.search.isLoading && !store.state.search.error)" class="info">
        <svg fill="rgba(90, 105, 143)" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" width="250px"
             height="250px">
            <path d="M 25 2 C 12.309295 2 2 12.309295 2 25 C 2 37.690705 12.309295 48 25 48 C 37.690705 48 48 37.690705 48 25 C 48 12.309295 37.690705 2 25 2 z M 25 4 C 36.609824 4 46 13.390176 46 25 C 46 36.609824 36.609824 46 25 46 C 13.390176 46 4 36.609824 4 25 C 4 13.390176 13.390176 4 25 4 z M 25 11 A 3 3 0 0 0 22 14 A 3 3 0 0 0 25 17 A 3 3 0 0 0 28 14 A 3 3 0 0 0 25 11 z M 21 21 L 21 23 L 22 23 L 23 23 L 23 36 L 22 36 L 21 36 L 21 38 L 22 38 L 23 38 L 27 38 L 28 38 L 29 38 L 29 36 L 28 36 L 27 36 L 27 21 L 26 21 L 22 21 L 21 21 z"/>
        </svg>
        <p style="color: rgba(252, 71, 71, 1)"><strong style="font-size: 18px;color: white">Your search results will be displayed here !!!</strong>
            <br><br>You can close
            the search section any time by clicking on any navigation item!!</p>
    </div>
    <search-field  @onSearchConstraintSubmit="loadMediaForConstrain" :place_holder="store.state.search.placeHolder"/>
    <item-viewer :name="store.state.search.name"
                 :info="{bookmarked:false, series:false, movies:false, recommendation: false}"
                 :is-loading="store.state.search.isLoading" :has-issues="store.state.search.error"
                 :has-no-content="false" :media-items="store.state.search.list"/>
</template>

<script>
    import searchField from "@/components/searchField/searchField";
    import itemViewer from "@/components/item_viewer_block/itemViewer";
    import {inject} from "vue"

    export default {
        name: "searchFragment",
        components: {
            searchField,
            itemViewer
        },
        setup() {
            const store = inject('store')
            store.state.search.isSearching = true
            store.state.search.isLoading = false
            store.state.search.hasNoContent = true
            store.state.search.name = ""
            store.state.search.list = []


            async function loadMediaForConstrain(constraints) {
                if (constraints.trim().length === 0){
                    store.state.search.name = ""
                    store.state.search.hasNoContent = true
                    store.state.search.list = []
                    return
                }
                store.state.search.strSearch = constraints
                store.state.search.list = []
                if (store.state.navigation.activeLink.home) await store.methods.filterMedia(constraints, false, null)
                if (store.state.navigation.activeLink.movies) await store.methods.filterMedia(constraints, false, "Movie")
                if (store.state.navigation.activeLink.series) await store.methods.filterMedia(constraints, false, "TV Series")
                if (store.state.navigation.activeLink.bookmarked) await store.methods.filterMedia(constraints, true, null)
            }

            return {
                store,
                loadMediaForConstrain
            }
        },
        unmounted() {
            this.store.state.search.isSearching = false
        }
    }
</script>

<style lang="scss" scoped>
    .hidden {
        display: none !important;
    }

    .info {
        color: white;
        position: absolute;
        top: 200px;
        width: calc(100% - 220px);
        right: 20px;
        padding: 40px;
        text-align: center;
        @media screen and (max-width: 768px){
            width: calc(100% - 120px);
            right: 20px;
            left: 20px;
        }
        svg {
            height: 100%;
            width: 100%;
            max-width: 200px;
            max-height: 200px;
            margin-left: auto;
            margin-right: auto;
            margin-top: 50px;
            display: block;
        }
    }

</style>
