<template>
    <div class="movie-items-viewer" ><!--todo : component to be : items displayer -->
        <h3 class="movie-items-viewer__title">{{name}}</h3>
        <div id="section-item-list" :class="{hidden:(hasIssues||hasNoContent)}" class="queue">
            <item :key="mediaItem" :itemData="mediaItem" v-for="mediaItem in mediaItems" />
        </div>
        <skeleton-item-viewer v-if="isLoading"/>
        <issue-server-error :class="{hidden:!(hasIssues&&!hasNoContent)}"/>
        <issue-no-content :info="info"  :class="{hidden:!hasNoContent}"/>
    </div>
</template>

<script>
    import Item from "@/components/itemViewer_item/item";
    import skeletonItemViewer from "@/components/skeletons/skeleton-item-viewer"
    import issueNoContent from "@/components/isues/issue-block-no-content"
    import issueServerError from "@/components/isues/issue-block-server-error"
    import {inject} from "vue"
    export default {
        name: "itemViewer",
        components: {
            Item,
            skeletonItemViewer,
            issueNoContent,
            issueServerError
        },
        props: ["info","name","mediaItems", "isLoading","hasIssues", "hasNoContent", "noContentCaption"],
        setup(){
            const store = inject("store")
            const watchMovie = ()=>{
                /*todo : to move to store and and the method will let us navigate to the details page*/
            }
            return {
                store,
                watchMovie
            }
        },
    }
</script>

<style lang="scss" scoped>

    $greyishBlue: rgba(90, 105, 143);

    .hidden{
        display:none!important;
    }

    .movie-items-viewer {
        margin-top: 20px!important;
        margin-right: 32px;
        padding: 0;
        @media (max-width: 768px) {
            padding: 0;
            width: calc(100% - 50px);
            margin: auto;
        }

        @media (max-width: 500px) {
            padding: 0;
            width: calc(100% - 32px);
            margin: auto;
        }

        &__title {
            color: white;
            margin: 0 0 24px 0;
            font-size: 32px;
            font-weight: normal;
            transition: all ease-in-out .30s;
            @media (max-width: 500px) {
                font-size: 20px;
                margin: 0 0 16px 0;
            }
        }

        .queue {
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;

        }
    }
</style>