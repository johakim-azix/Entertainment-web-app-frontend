<script>
    import {provide} from 'vue'
    import store from '@/store/store'

    export default {
        name: 'App',
        setup() {
            provide('store', store)
            return store
        }
    }
</script>

<template>
    <router-view/>
</template>

<style lang="scss">

    $red: rgba(252, 71, 71, 1);
    $greyishBlue: rgba(90, 105, 143);
    $darkBlue: rgba(16, 20, 30);
    $semiDarkBlue: rgba(22, 29, 47);
    $white: rgba(255, 255, 255);

    @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600&display=swap');

    body {
        background: $darkBlue;
        font-family: "outfit";
    }


    .scene {
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        width: 100%;
        display: flex;
    }

    .container {
        width: 100%;
        display: flex !important;
        overflow: auto;
        padding: 0;
        @media (max-width: 768px) {
            justify-content: space-around;
            flex-wrap: wrap;
        }

        &::-webkit-scrollbar {
            width: 0;
        }
    }

    .nav-drawer {
        height: 100%;
        width: calc(100% - 0px);
        overflow-y: auto;
        overflow-x: hidden;
        @media (max-width: 768px) {
            width: 100%;
            padding-top: 70px;
        }

        @media (max-width: 500px) {
            padding-top: 0;
        }

        &::-webkit-scrollbar {
            width: 0;
        }
    }

    .A {
        display: inline-block;
        @media (max-width: 768px) {
            margin: 0;
        }
    }

    .B {
        display: inline-block;
        @media (max-width: 768px) {
            margin: 0;
        }
    }

    .C {
        display: inline-block;
        @media (max-width: 768px) {
            margin: 0;
        }
    }

    @keyframes rotate {
        to {
            transform: rotate(360deg);
        }
    }

    .btn-bookmark {
        outline: 0;
        border: 0;
        width: 32px;
        height: 32px;
        background: rgba(24.24, 30.3, 45.45, .3);
        padding: 15px;
        border-radius: 100%;
        cursor: pointer;
        color: white;
        transition: opacity ease-in-out .15s;

        &.error::before{
            content: "Oops Try again later!";
            position: absolute;
            right: 0;
            color: white;
            top: 30px;
            width: 390%;
            background-color: rgba(252, 71, 71);
            border-radius: 2px;
            padding: 5px;
            display: block;
        }

        &.error::after{
            content: "";
            width: 20px;
            height: 20px;
            background-color: rgba(252, 71, 71);
            z-index: -1;
            position: absolute;
            top: 26px;
            right: 5px;
            transform: rotate(45deg);
            border: solid rgba(255,255,255,.7) 1px;
        }

        &.loading {
            animation: btn-bookmark-skeleton-loading ease-in-out 1s alternate infinite;
        }

        &.request-going:after {
            content: "";
            background-image: conic-gradient(transparent 220deg, rgba(255, 255, 255, .3) 360deg);
            height: 32px;
            width: 32px;
            right: 0;
            top: 0;
            z-index: 0 !important;
            border-radius: 100%;
            position: absolute;
            animation: rotate 2s infinite linear;
        }

        svg {
            display: block;
            width: fit-content;
            color: white;
            margin-top: -5px;
            margin-left: -4.5px;
            stroke: white;
            fill: transparent;
            transition: all ease-in-out .15s;
        }

        &:hover {
            background: rgba(255, 255, 255, .3);

            svg {
                stroke: #161D2F;
            }
        }

        &:focus, &.active {
            background: rgba(24.24, 30.3, 45.45, .3);

            svg {
                stroke: white;
                fill: white;
            }
        }
    }

    .btn-play {
        display: flex;
        justify-content: space-around;
        align-items: center;
        margin: 0 auto;
        align-self: center;
        width: 90px;
        height: 38px;
        border-radius: 50px;
        padding-right: 10px;
        background-color: rgba(255, 255, 255, .4);
        opacity: 0;
        cursor: pointer;
        transition: opacity ease-in-out .30s;

        svg {
            fill: white;
            transition: all ease-in-out .15s;
        }

        span {
            color: white;
            transition: color ease-in-out .15s;
        }

        &:hover {
            span {
                color: rgba(16, 20, 30);
            }

            svg {
                fill: rgba(16, 20, 30);
            }
        }
    }

    .nav__link.active {
        svg {
            fill: white !important;
        }
    }


    .loading {
        border-radius: 2px;
        background: rgba(24.24, 30.3, 45.45, .5);
        color: transparent;
    }

    @keyframes item-skeleton-loading {
        from {
            background: rgba(24.24, 30.3, 45.45, .8);
        }
        to {
            background: rgba(24.24, 30.3, 45.45, .5);
        }
    }

    @keyframes btn-bookmark-skeleton-loading {
        from {
            background: rgba(24.24, 30.3, 45.45, .5);
        }
        to {
            background: rgba(24.24, 30.3, 45.45, .1);
        }
    }
</style>
