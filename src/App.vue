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
    :root{

    }
    body{
        padding: 0!important;
        margin: 0!important;
        scroll-behavior: smooth;
        background: rgba(0,0,0,.2);
    }
    .container{
        display: flex;
        flex-wrap: wrap;
        max-width: 1000px;
        justify-content: space-between;
        align-items: center;
        width:100%;
        /*border: solid red 1px;*/
        padding: 0 10px;
    }

    .btn{
        border: 0;
        outline: 0;
        cursor: pointer;
        padding: 12px 24px;
        border-radius: 2px;
        transition: all ease-in-out .15s;
        &.btn-first{
            background: black;
            color: white;
            box-shadow: 2px 2px 3px rgba(0,0,0,.4);
            &:hover{
                background: rgba(0,0,0,.2);
                color : black;
            }
        }
    }

    .link{
        cursor: pointer;
        transition: all ease-in-out .15s;
    }

    .visible-small{
        display: none;
        @media screen and (max-width: 590px) {
            display: block;
        }
    }

    .visible-large{
        display: block;
        @media screen and (max-width: 590px) {
            display: none;
        }
    }

</style>
