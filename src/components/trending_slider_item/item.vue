<template>
    <div class="item">
        <img :src="env.configs.IMG_URL+mediaItem.images.trending.large" alt="">
        <div class="item__cover">
            <button :id="'slider-btn-bookmark'+mediaItem._id" v-on:click="store.methods.addBookmarked(mediaItem,'slider-btn-bookmark'+mediaItem._id)" class="btn-bookmark" :class="{active:mediaItem.isBookmarked}">
                <svg width="12" height="14" xmlns="http://www.w3.org/2000/svg">
                    <path d="m10.518.75.399 12.214-5.084-4.24-4.535 4.426L.75 1.036l9.768-.285Z"  stroke-width="1.5"/>
                </svg>
            </button>
            <div class="btn-play">
                <svg width="30" height="30" xmlns="http://www.w3.org/2000/svg"><path d="M15 0C6.713 0 0 6.713 0 15c0 8.288 6.713 15 15 15 8.288 0 15-6.712 15-15 0-8.287-6.712-15-15-15Zm-3 21V8l9 6.5-9 6.5Z"/></svg>
                <span>Play</span>
            </div>
            <div class="caption">
                <div>
                    <small class="A">{{mediaItem.year}}</small>
                    .
                    <img src="../../assets/icons/icon-category-movie.svg" alt="">
                    <small class="B">{{mediaItem.category}}</small>
                    .
                    <small class="C">{{mediaItem.rating}}</small>
                </div>
                <strong>{{mediaItem.title}}</strong>
            </div>
        </div>
    </div>
</template>

<script>
    import {inject} from "vue"
    import env from "../../../env.configs"
    export default {
        // eslint-disable-next-line vue/multi-word-component-names
        name: "item",
        props: ["mediaItem"],
        setup(){
            const store = inject("store")
            return {
                store,
                env
            }
        }
    }
</script>

<style lang="scss" scoped>
    .item{
        width: 470px;
        min-width: 400px;
        height: 230px;
        border-radius: 8px;
        overflow: hidden;
        position: relative;
        margin-right: 30px;
        transition: all ease-in-out .30s;

        &:first-child{
            margin-left: 0;
            @media (max-width: 768px) {
                margin-left: 30px;
            }
            @media (max-width: 500px) {
                margin-left: 16px;
            }
        }

        & > img{
            width: 100%;
            height: 100%;
        }

        &__cover{
            background: rgba(0,0,0,.1);
            position: absolute;
            height: 100%;
            width: 100%;
            top: 0;
            left:0;
            display: flex;
            /*todo : apply gradient from bottom*/


            &:hover{
                background: rgba(0,0,0,.4);
                & > .btn-play{
                    opacity: 1;
                }
            }

            /*button:after{*/
            /*    content: "";*/
            /*    background-image: conic-gradient( transparent 220deg,rgba(255,255,255,.3) 360deg);*/
            /*    height: 32px;*/
            /*    width: 32px;*/
            /*    right: 0;*/
            /*    top: 0;*/
            /*    z-index: 0!important;*/
            /*    border-radius: 100%;*/
            /*    position: absolute;*/
            /*    animation: rotate 2s infinite linear;*/
            /*}*/
            button{
                position: absolute;
                right: 10px;
                top: 10px;
                z-index: 0;
                /*background: red;*/
            }



            .caption{
                align-self: flex-end;
                padding: 24px;
                font-size: 15px;
                transition: all ease-in-out .30s;
                position: absolute;
                width: calc(100% - 50px);

                img{
                    width: 12px;
                    height: 12px;
                    margin: 0 5px 0 0;
                }

                strong{
                    font-size: 24px;
                    transition: all ease-in-out .30s;
                    @media (max-width: 500px) {
                        font-weight: normal;
                        font-size: 16px;
                    }
                }
                @media (max-width: 500px) {
                    padding: 16px;
                }
            }
        }
        @media (max-width: 500px) {
            width: 240px;
            min-width: 240px;
            height: 140px;
            margin-right: 16px;
        }

        @media (max-width: 380px) {
            width: 240px;
            min-width: 300px;
            height: 180px;
        }
    }
</style>