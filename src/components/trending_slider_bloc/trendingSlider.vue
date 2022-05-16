<template>
    <div class="trending-items-viewer" :class="{hidden:(store.state.trending.hasNoContent||store.state.trending.error)}">
        <h3 class="trending-items-viewer__title" >Trending </h3>
        <div class="slider" >
            <item :key="mediaItem" :media-item="mediaItem" v-for="mediaItem in trendingState.list"/>
        </div>
        <skeleton-slider v-if="trendingState.isLoading"/>
    </div>
</template>

<script>
    import {inject} from "vue"
    import item from "@/components/trending_slider_item/item";
    import skeletonSlider from "@/components/skeletons/skeleton-slider"
    export default {
        name: "trendingSlider",
        props: ["trendingState"],
        components: {
            item,
            skeletonSlider
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

    .trending-items-viewer {
        margin-top: 34px;
        padding: 0;
        color: white;

        &__title {
            margin: 0 0 24px 0;
            font-size: 32px;
            font-weight: normal;
            transition: all ease-in-out .30s;
            @media (max-width: 768px) {
                margin: 0 25px 24px 25px;
            }
            @media (max-width: 500px) {
                font-size: 20px;
                margin: 0 16px 16px 16px;
            }
        }

        .slider {
            display: flex;
            overflow-x: auto;
            padding: 0;

            &::-webkit-scrollbar {
                width: 0;
                overflow: hidden;
            }
        }

        @media (max-width: 768px) {
            /*width: calc(100% - 50px);*/
            margin: 10px auto 0 auto;
        }

        @media (max-width: 500px) {
            /*width: calc(100% - 32px);*/
            margin: 10px auto 0 auto;
        }
    }
</style>