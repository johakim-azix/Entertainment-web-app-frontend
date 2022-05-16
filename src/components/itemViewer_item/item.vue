<template>
    <div class="item"> <!--todo : component to be : movie item component -->
        <div class="item__attach">
            <img :src="'http://localhost:4000/'+itemData.images.regular.large" :alt="itemData.images.regular.large">
            <div class="cover">
                <div class="btn-play">
                    <svg width="30" height="30" xmlns="http://www.w3.org/2000/svg">
                        <path d="M15 0C6.713 0 0 6.713 0 15c0 8.288 6.713 15 15 15 8.288 0 15-6.712 15-15 0-8.287-6.712-15-15-15Zm-3 21V8l9 6.5-9 6.5Z"/>
                    </svg>
                    <span>Play</span>
                </div>
            </div>
            <button :id="'item-viewer-btn-bookmark'+itemData._id" v-on:click="store.methods.addBookmarked(itemData,'item-viewer-btn-bookmark'+itemData._id )" class="btn-bookmark" :class="{active:itemData.isBookmarked}">
                <svg width="12" height="14" xmlns="http://www.w3.org/2000/svg">
                    <path d="m10.518.75.399 12.214-5.084-4.24-4.535 4.426L.75 1.036l9.768-.285Z" stroke-width="1.5"/>
                </svg>
            </button>
        </div>
        <div class="item__caption">
            <div>
                <small class="A">{{itemData.year}}</small>
                .
                <img src="../../assets/icons/icon-category-movie.svg" alt="">
                <small class="B">{{itemData.category}}</small>
                .
                <small class="C">{{itemData.rating}}</small>
            </div>
            <strong>{{itemData.title}}</strong>
        </div>
    </div>
</template>

<script>
    import {inject} from "vue"

    export default {
        // eslint-disable-next-line vue/multi-word-component-names
        name: "item",
        props: ["itemData"],
        setup() {
            const store = inject("store")
            return {
                store
            }
        }
    }
</script>

<style lang="scss" scoped>
    .btn_hidden{
        display: none;
    }
    .item {
        min-width: 200px;
        width: calc(25% - 40px);
        margin-right: 40px;
        margin-bottom: 32px;
        border: solid transparent 1px;
        transition: all ease-in-out .15s;

        &__attach {
            background: rgba(0, 0, 0, .2);
            width: 100%;
            height: 150px;
            overflow: hidden;
            border-radius: 10px;
            position: relative;

            & > img {
                width: 100%;
                height: 100%;
            }

            /*todo : : upcoming tasks : complete the error state of the form fields; */
            .cover { /*complete this part*/
                position: absolute;
                height: 100%;
                width: 100%;
                left: 0;
                top: 0;
                z-index: 0;
                background-color: rgba(0, 0, 0, 0);
                display: flex;
                justify-content: space-around;
                align-items: center;
                transition: background-color ease-in-out 0.15s;

                &:hover {
                    background-color: rgba(0, 0, 0, .4);

                    & > .btn-play {
                        opacity: 1
                    }
                }
            }


            button {
                position: absolute;
                right: 10px;
                top: 10px;
                z-index: 0;
            }

            @media (max-width: 768px) {
                height: 130px;
            }

            @media (max-width: 500px) {
                height: 130px;
            }

            @media (max-width: 380px) {
                height: 180px;
            }
        }

        &__caption {
            padding: 10px 5px;
            color: white;
            font-size: 13px;

            img {
                width: 12px;
                height: 12px;
                margin-right: 5px;
            }

            strong {
                margin: 5px 0 0 0;
                font-size: 18px;
                display: inline-block;
                font-weight: normal;
                @media (max-width: 500px) {
                    font-size: 14px;
                }
            }
        }

        &:nth-child(4n+3) {
            margin-right: 40px;
        }

        &:nth-child(4n+4) {
            margin-right: 0;
        }

        @media (max-width: 1096px) {
            margin-right: 15px;
            width: calc(33% - 10px);
            min-width: 100px;

            &:nth-child(3n+3) {
                margin-right: 0;
            }

            &:nth-child(3n+1), &:nth-child(3n+2) {
                margin-right: 15px;
            }
        }

        @media (max-width: 768px) {
            width: calc(33% - 10px);
            margin-bottom: 24px;
            min-width: 100px;
            &:nth-child(3n+3) {
                margin-right: 0;
            }
            &:nth-child(3n+1), &:nth-child(3n+2) {
                margin-right: 10px;
            }
        }

        @media (max-width: 500px) {
            margin-right: 15px;
            width: calc(50% - 10px);
            min-width: 164px;
            margin-bottom: 16px;
            &:nth-child(2n+2) {
                margin-right: 0;

            }

            &:nth-child(2n+3) {
                margin-right: 15px;
            }
        }

        @media (max-width: 380px) {
            margin-right: 0;
            width: 100%;
            min-width: 100%;
        }
    }
</style>