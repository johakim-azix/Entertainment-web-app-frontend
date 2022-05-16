<template>
    <search-field @onSearchIntent="moveToSearchResult" place_holder="Search for movies or TV series"/>
    <trending-slider :trending-state="store.state.trending"/>
    <item-viewer name="Recommended for you" :info="{bookmarked:false, series:false, movies:false, recommendation: true}"
                 :is-loading="store.state.recommendation.isLoading" :has-issues="store.state.recommendation.error"
                 :has-no-content="store.state.recommendation.hasNoContent"
                 :media-items="store.state.recommendation.list"/>
</template>

<script>
    import searchField from '@/components/searchField/searchField'
    import trendingSlider from '@/components/trending_slider_bloc/trendingSlider'
    import itemViewer from '@/components/item_viewer_block/itemViewer'
    import {inject} from "vue"

    export default {
        name: "homeFragment",
        components: {
            searchField,
            trendingSlider,
            itemViewer
        },
        methods: {
            moveToSearchResult(){
                if (this.store.state.recommendation.list===null && this.store.state.trending.list===null) return
                if (this.store.state.recommendation.list.length!==0 || this.store.state.trending.list.length!==0){
                    this.$router.push({name:"homeSearch"})
                }else{
                    //todo : say there is nothing to filter on
                    console.log("there is nothing to filter on : home")
                }
            }
        },
        mounted() {
            let navLinks = (document.getElementById("nav")).getElementsByTagName("a")
            let navHome = document.getElementById("home_nav_link")
            for (let i = 0; i < navLinks.length; i++) {
                navLinks[i].classList.remove("active")
            }
            navHome.classList.add("active")
        },
        setup() {
            const store = inject('store')
            store.state.navigation.activeLink.home = true
            store.state.navigation.activeLink.bookmarked = false
            store.state.navigation.activeLink.movies = false
            store.state.navigation.activeLink.series = false
            return {
                store
            }
        }
    }
</script>