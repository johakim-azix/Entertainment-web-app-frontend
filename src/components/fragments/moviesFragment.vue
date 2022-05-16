<template>
    <search-field @onSearchIntent="moveToSearchResult"  place_holder="Search for movies"/>
    <item-viewer name="Movies" :info="{bookmarked:false, series:false, movies:true, recommendation: false}" :is-loading="store.state.movies.isLoading" :has-issues="store.state.movies.error" :has-no-content="store.state.movies.hasNoContent" :media-items="store.state.movies.list"/>
</template>

<script>
    import searchField from '@/components/searchField/searchField'
    import itemViewer from '@/components/item_viewer_block/itemViewer'
    import {inject} from "vue"

    export default {
        name: "moviesFragment",
        components: {
            searchField,
            itemViewer
        },
        methods: {
            moveToSearchResult(){
                if (this.store.state.movies.list===null)return
                if (this.store.state.movies.list.length!==0){
                    this.$router.push({name:"moviesSearch"})
                }else {
                    //todo : says there is nothing to filter on
                    console.log("the is nothing to filter on : movies")
                }
            }
        },
        setup(){
            const store = inject('store')
            store.state.navigation.activeLink.movies = true
            store.state.navigation.activeLink.bookmarked = false
            store.state.navigation.activeLink.home = false
            store.state.navigation.activeLink.series = false
            return {
                store
            }
        }
    }
</script>
