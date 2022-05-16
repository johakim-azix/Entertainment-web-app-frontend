<template>
    <div class="slider">
        <div class="item loading">
            <div class="item__cover">
                <button  class="btn-bookmark"></button>
                <div class="caption" style="color: transparent">
                    <div class="loading">
                        <small class="A">mediaItem.year</small>
                        .
                        <img src="" alt="">
                        <small class="B">mediaItem.category</small>
                        .
                        <small class="C">mediaItem.rating</small>
                    </div>
                    <strong class="loading" style="margin-top: 5px; display: inline-block">mediaItem.title</strong>
                </div>
            </div>
        </div>
        <div class="item loading">
            <div class="item__cover">
                <button  class="btn-bookmark"></button>
                <div class="caption" style="color: transparent">
                    <div class="loading">
                        <small class="A">mediaItem.year</small>
                        .
                        <img src="" alt="">
                        <small class="B">mediaItem.category</small>
                        .
                        <small class="C">mediaItem.rating</small>
                    </div>
                    <strong class="loading" style="margin-top: 5px; display: inline-block">mediaItem.title</strong>
                </div>
            </div>
        </div>
        <div class="item loading">
            <div class="item__cover">
                <button  class="btn-bookmark"></button>
                <div class="caption" style="color: transparent">
                    <div class="loading">
                        <small class="A">mediaItem.year</small>
                        .
                        <img src="" alt="">
                        <small class="B">mediaItem.category</small>
                        .
                        <small class="C">mediaItem.rating</small>
                    </div>
                    <strong class="loading" style="margin-top: 5px; display: inline-block">mediaItem.title</strong>
                </div>
            </div>
        </div>
        <div class="item loading">
            <div class="item__cover">
                <button  class="btn-bookmark"></button>
                <div class="caption" style="color: transparent">
                    <div class="loading">
                        <small class="A">mediaItem.year</small>
                        .
                        <img src="" alt="">
                        <small class="B">mediaItem.category</small>
                        .
                        <small class="C">mediaItem.rating</small>
                    </div>
                    <strong class="loading" style="margin-top: 5px; display: inline-block">mediaItem.title</strong>
                </div>
            </div>
        </div>
        <div class="item loading">
            <div class="item__cover">
                <button  class="btn-bookmark"></button>
                <div class="caption" style="color: transparent">
                    <div class="loading">
                        <small class="A">mediaItem.year</small>
                        .
                        <img src="" alt="">
                        <small class="B">mediaItem.category</small>
                        .
                        <small class="C">mediaItem.rating</small>
                    </div>
                    <strong class="loading" style="margin-top: 5px; display: inline-block">mediaItem.title</strong>
                </div>
            </div>
        </div>
        <div class="item loading">
            <div class="item__cover">
                <button  class="btn-bookmark"></button>
                <div class="caption" style="color: transparent">
                    <div class="loading">
                        <small class="A">mediaItem.year</small>
                        .
                        <img src="" alt="">
                        <small class="B">mediaItem.category</small>
                        .
                        <small class="C">mediaItem.rating</small>
                    </div>
                    <strong class="loading" style="margin-top: 5px; display: inline-block">mediaItem.title</strong>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "skeleton-slider"
    }
</script>

<style lang="scss" scoped>
    .slider {
        display: flex;
        overflow-x: auto;
        padding: 0;

        &::-webkit-scrollbar {
            width: 0;
            overflow: hidden;
        }
    }
    .item{
        background: rgba(24.24, 30.3, 45.45, .8);
        width: 470px;
        min-width: 400px;
        height: 230px;
        border-radius: 8px;
        overflow: hidden;
        position: relative;
        margin-right: 30px;
        transition: all ease-in-out .30s;

        &.loading{
            animation: item-skeleton-loading ease-in-out 1s alternate infinite;
        }

        &:first-child{
            margin-left: 0;
            @media (max-width: 768px) {
                margin-left: 30px;
            }
            @media (max-width: 500px) {
                margin-left: 16px;
            }
        }
        &__cover{
            background: rgba(0,0,0,.1);
            position: absolute;
            height: 100%;
            width: 100%;
            top: 0;
            left:0;
            display: flex;

            button{
                position: absolute;
                right: 10px;
                top: 10px;
                background: rgba(24.24, 30.3, 45.45, .5);
            }

            .caption{
                align-self: flex-end;
                padding: 24px;
                transition: all ease-in-out .30s;
                position: absolute;
                width: calc(100% - 50px);

                &>div{
                    height: 15px;
                }

                img{
                    width: 12px;
                    height: 12px;
                    margin: 0 5px 0 0;
                }

                strong{
                    font-size: 24px;
                    height: 20px;
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