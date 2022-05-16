<template>
    <div class="queue">
        <div class="item">
            <div class="item__attach loading">
                <div class="cover">
                </div>
                <button class="btn-bookmark"></button>
            </div>
            <div class="item__caption">
                <div class="loading">
                    <small class="A">itemData.year</small>
                    .
                    <small class="B">itemData.category</small>
                    .
                    <small class="C">itemData.rating</small>
                </div>
                <strong class="loading">itemData.title</strong>
            </div>
        </div>
        <div class="item">
            <div class="item__attach loading">
                <div class="cover">
                </div>
                <button class="btn-bookmark"></button>
            </div>
            <div class="item__caption">
                <div class="loading">
                    <small class="A">itemData.year</small>
                    .
                    <small class="B">itemData.category</small>
                    .
                    <small class="C">itemData.rating</small>
                </div>
                <strong class="loading">itemData.title</strong>
            </div>
        </div>
        <div class="item">
            <div class="item__attach loading">
                <div class="cover">
                </div>
                <button class="btn-bookmark"></button>
            </div>
            <div class="item__caption">
                <div class="loading">
                    <small class="A">itemData.year</small>
                    .
                    <small class="B">itemData.category</small>
                    .
                    <small class="C">itemData.rating</small>
                </div>
                <strong class="loading">itemData.title</strong>
            </div>
        </div>
        <div class="item">
            <div class="item__attach loading">
                <div class="cover">
                </div>
                <button class="btn-bookmark"></button>
            </div>
            <div class="item__caption">
                <div class="loading">
                    <small class="A">itemData.year</small>
                    .
                    <small class="B">itemData.category</small>
                    .
                    <small class="C">itemData.rating</small>
                </div>
                <strong class="loading">itemData.title</strong>
            </div>
        </div>
        <div class="item">
            <div class="item__attach loading">
                <div class="cover">
                </div>
                <button class="btn-bookmark"></button>
            </div>
            <div class="item__caption">
                <div class="loading">
                    <small class="A">itemData.year</small>
                    .
                    <small class="B">itemData.category</small>
                    .
                    <small class="C">itemData.rating</small>
                </div>
                <strong class="loading">itemData.title</strong>
            </div>
        </div>
        <div class="item">
            <div class="item__attach loading">
                <div class="cover">
                </div>
                <button class="btn-bookmark"></button>
            </div>
            <div class="item__caption">
                <div class="loading">
                    <small class="A">itemData.year</small>
                    .
                    <small class="B">itemData.category</small>
                    .
                    <small class="C">itemData.rating</small>
                </div>
                <strong class="loading">itemData.title</strong>
            </div>
        </div>
        <div class="item">
            <div class="item__attach loading">
                <div class="cover">
                </div>
                <button class="btn-bookmark"></button>
            </div>
            <div class="item__caption">
                <div class="loading">
                    <small class="A">itemData.year</small>
                    .
                    <small class="B">itemData.category</small>
                    .
                    <small class="C">itemData.rating</small>
                </div>
                <strong class="loading">itemData.title</strong>
            </div>
        </div>
        <div class="item">
            <div class="item__attach loading">
                <div class="cover">
                </div>
                <button class="btn-bookmark"></button>
            </div>
            <div class="item__caption">
                <div class="loading">
                    <small class="A">itemData.year</small>
                    .
                    <small class="B">itemData.category</small>
                    .
                    <small class="C">itemData.rating</small>
                </div>
                <strong class="loading">itemData.title</strong>
            </div>
        </div>
        <div class="item">
            <div class="item__attach loading">
                <div class="cover">
                </div>
                <button class="btn-bookmark"></button>
            </div>
            <div class="item__caption">
                <div class="loading">
                    <small class="A">itemData.year</small>
                    .
                    <small class="B">itemData.category</small>
                    .
                    <small class="C">itemData.rating</small>
                </div>
                <strong class="loading">itemData.title</strong>
            </div>
        </div>
        <div class="item">
            <div class="item__attach loading">
                <div class="cover">
                </div>
                <button class="btn-bookmark"></button>
            </div>
            <div class="item__caption">
                <div class="loading">
                    <small class="A">itemData.year</small>
                    .
                    <small class="B">itemData.category</small>
                    .
                    <small class="C">itemData.rating</small>
                </div>
                <strong class="loading">itemData.title</strong>
            </div>
        </div>
        <div class="item">
            <div class="item__attach loading">
                <div class="cover">
                </div>
                <button class="btn-bookmark"></button>
            </div>
            <div class="item__caption">
                <div class="loading">
                    <small class="A">itemData.year</small>
                    .
                    <small class="B">itemData.category</small>
                    .
                    <small class="C">itemData.rating</small>
                </div>
                <strong class="loading">itemData.title</strong>
            </div>
        </div>
        <div class="item">
            <div class="item__attach loading">
                <div class="cover">
                </div>
                <button class="btn-bookmark"></button>
            </div>
            <div class="item__caption">
                <div class="loading">
                    <small class="A">itemData.year</small>
                    .
                    <small class="B">itemData.category</small>
                    .
                    <small class="C">itemData.rating</small>
                </div>
                <strong class="loading">itemData.title</strong>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "skeleton-item-viewer"
    }
</script>

<style lang="scss" scoped>
    .queue {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;

    }
    .item {
        min-width: 200px;
        width: calc(25% - 40px);
        margin-right: 40px;
        margin-bottom: 32px;
        border: solid transparent 1px;
        transition: all ease-in-out .15s;

        &__attach {
            background: rgba(24.24, 30.3, 45.45, .8);
            width: 100%;
            height: 150px;
            overflow: hidden;
            border-radius: 10px;
            position: relative;

            &.loading{
                animation: item-skeleton-loading ease-in-out 1s alternate infinite;
            }


            & > img {
                width: 100%;
                height: 100%;
            }

            button {
                position: absolute;
                right: 10px;
                top: 10px;
                background: rgba(24.24, 30.3, 45.45, .5);

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

            .loading{
                border-radius: 2px;
                background: rgba(24.24, 30.3, 45.45, .8);
                color: transparent;
                animation: item-skeleton-loading ease-in-out 1s alternate infinite;
            }

            img {
                width: 12px;
                height: 12px;
                margin-right: 5px;
            }

            strong {
                margin: 5px 0 0 0;
                height: 15px;
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