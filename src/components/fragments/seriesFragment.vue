<template>
    <search-field  @onSearchIntent="moveToSearchResult"  place_holder="Search for TV series"/>
    <item-viewer name="TV series" :info="{bookmarked:false, series:true, movies:false, recommendation: false}" :is-loading="store.state.series.isLoading" :has-issues="store.state.series.error" :has-no-content="store.state.series.hasNoContent" :media-items="store.state.series.list" />
</template>

<script>
    import searchField from '@/components/searchField/searchField'
    import itemViewer from '@/components/item_viewer_block/itemViewer'
    import {inject} from "vue"
    export default {
        name: "seriesFragment",
        components: {
            searchField,
            itemViewer
        },
        methods: {
            moveToSearchResult(){
                if (this.store.state.series.list===null) return
                if (this.store.state.series.list.length!==0){
                    this.$router.push({name:"seriesSearch"})
                }else {
                    //todo : says there is nothing to filter on
                    console.log("the is nothing to filter on : series")
                }
            }
        },
        setup(){
            const store = inject('store')
            store.state.navigation.activeLink.series = true
            store.state.navigation.activeLink.movies = false
            store.state.navigation.activeLink.bookmarked = false
            store.state.navigation.activeLink.home = false
            return {
                store
            }
        }
    }
</script>

<style scoped>

</style>