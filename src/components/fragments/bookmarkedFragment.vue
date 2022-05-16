<template>
    <search-field focused="" @onSearchIntent="moveToSearchResult" place_holder="Search for bookmarked shows"/>
    <item-viewer name="Bookmarked Movies" :info="{bookmarked:true, series:false, movies:false, recommendation: false}"
                 :is-loading="store.state.bookmarked.isLoading" :has-issues="store.state.bookmarked.error"
                 :has-no-content="store.state.bookmarked.hasNoContent" :media-items="store.state.bookmarked.list"/>
</template>

<script>
    import searchField from '@/components/searchField/searchField'
    import itemViewer from '@/components/item_viewer_block/itemViewer'
    import {inject} from "vue"

    export default {
        name: "bookmarkedFragment",
        components: {
            searchField,
            itemViewer
        },
        methods: {
            moveToSearchResult(){
                if (this.store.state.bookmarked.list===null)return
                if (this.store.state.bookmarked.list.length!==0){
                    this.$router.push({name:"bookmarkedSearch"})
                }else{
                    //todo : display an info info saying there is nothing to filter opn !!
                    console.log("there is nothing to filter on ")
                }
            }
        },
        setup() {
            const store = inject("store")
            store.state.navigation.activeLink.bookmarked = true
            store.state.navigation.activeLink.home = false
            store.state.navigation.activeLink.movies = false
            store.state.navigation.activeLink.series = false

            if (store.state.bookmarked.list !== null && store.state.bookmarked.list !== undefined) {
                store.state.bookmarked.hasNoContent = store.state.bookmarked.list.length === 0 && store.state.bookmarked.isLoading === false;
            }
            return {
                store
            }
        }
    }
</script>
