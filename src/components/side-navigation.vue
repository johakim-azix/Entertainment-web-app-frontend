<template>
    <div class="navigation"> <!--todo : component tobe-->
        <div class="logo">
            <img src="../assets/logos/logo.svg" alt="">
        </div>
        <div class="nav">
            <router-link :to="{name :'home'}" class="nav__link active"><img src="../assets/icons/icon-nav-home.svg" alt=""></router-link>
            <router-link :to="{name :'movies'}" class="nav__link"><img src="../assets/icons/icon-nav-movies.svg" alt=""></router-link>
            <router-link :to="{name : 'series'}" class="nav__link"><img src="../assets/icons/icon-nav-tv-series.svg" alt=""></router-link>
            <router-link :to="{name : 'bookmarked'}" class="nav__link"><img src="../assets/icons/icon-nav-bookmark.svg" alt=""></router-link>
<!--            <button class="nav__link active"><img src="../assets/icons/icon-nav-home.svg" alt=""></button>-->
<!--            <button class="nav__link"><img src="../assets/icons/icon-nav-movies.svg" alt=""></button>-->
<!--            <button class="nav__link"><img src="../assets/icons/icon-nav-tv-series.svg" alt=""></button>-->
<!--            <button class="nav__link"><img src="../assets/icons/icon-nav-bookmark.svg" alt=""></button>-->
            <!--todo : download search svg 24x24 same color with the others-->
            <!--                    <button class="nav__link"><img src="./assets/icons/icon-nav-bookmark.svg" alt=""></button>-->
        </div>
        <div class="avatar">
            <img src="../assets/images/image-avatar.png" alt="">
        </div>
    </div>
</template>

<script>
    export default {
        name: "side-navigation"
    }
</script>

<style lang="scss" scoped>
    .navigation {
        background: #161D2F;
        border-radius: 20px;
        padding: 20px 5px;
        min-height: calc(100% - 80px);
        width: 70px;
        margin: 20px 32px;
        display: flex;
        flex-direction: column;
        transition: all ease-in-out .30s;
        transition: height ease-in-out .15s;

        .logo {
            margin: 15px auto;
            @media (max-width: 768px) {
                margin: 0 auto 0 0;
            }
        }

        .nav {
            align-self: flex-start;
            width: fit-content;
            margin: 40px auto auto auto;
            @media (max-width: 768px) {
                display: flex;
                margin: 0;
                align-self: center;
            }

            &__link {
                width: 30px;
                height: 30px;
                background: transparent;
                cursor: pointer;
                display: flex;
                align-items: center;
                outline: 0;
                border: 0;
                margin-bottom: 20px;
                border-radius: 3px;
                transition: all ease-in-out .30s;

                img{
                    margin: 0 auto;
                }
                @media (max-width: 768px) {
                    margin: 0 10px;
                }

                @media (max-width: 500px) {
                    margin: 0 1px;
                }
            }

            &__link:hover{
                background: rgba(255,255,255,.1);
            }
        }

        .avatar {
            align-self: flex-end;
            border: solid white 1px;
            border-radius: 100%;
            height: 50px;
            width: 50px;
            margin: 0 auto;
            overflow: hidden;
            cursor: pointer;
            img {
                height: 100%;
                width: 100%;
            }

            @media (max-width: 768px) {
                align-self: center;
                margin: 0 0 0 auto;
                width: 32px;
                height: 32px;
            }
        }

        @media (max-width: 768px) {
            flex-direction: row;
            align-items: center;
            justify-content: space-between;
            width: calc(100% - 88px);
            margin: 10px 25px 5px 25px;
            border-radius: 10px;
            padding: 5px 20px;
            min-height: 40px;
            height: 40px !important;
            position: absolute;
            z-index: 1;
        }

        @media (max-width: 500px) {
            position: relative;
            width: 100%;
            margin: 0 ;
            border-radius: 0;
            padding: 5px 16px;
        }
    }
</style>