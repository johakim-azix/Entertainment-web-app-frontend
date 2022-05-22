<template>
    <div class="header">
        <div class="container">
            <a class="logo">
                <img src="../assets/logos/logo-header.svg" alt="">
            </a>
            <div class="nav">
                <a class="nav__link nav__link-active visible-large">STORIES</a>
                <a class="nav__link visible-large">FEATURES</a>
                <a class="nav__link visible-large">PRICING</a>
            </div>
            <a class="btn btn-first visible-large">GET AN INVITE</a>
            <div class="btn-menu visible-small" @click="toggleDropMenu">
                <div class="bar"></div>
                <div class="bar"></div>
                <div class="bar"></div>
            </div>
            <ul class="visible-small drop-menu">
                <li>
                    <hr>
                </li>
                <li>
                    <a href="">STORIES</a>
                </li>
                <li>
                    <a href="">FEATURES</a>
                </li>
                <li>
                    <a href="">PRICING</a>
                </li>
                <li>
                    <hr>
                </li>
                <li>
                    <a class="btn btn-first">GET AN INVITE</a>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    export default {
        name: "MainHeader",
        methods:{
            toggleDropMenu(){
                document.getElementsByClassName("drop-menu")[0].classList.toggle("open")
            }
        }
    }
</script>

<style lang="scss" scoped>
    .header{
        display: flex;
        justify-content: space-around;
        height: fit-content;
        padding: 10px 0;
        margin: 0!important;
        font-size: 12px;
        font-weight: bold;
        background: white;
        transition: all ease-in-out .30s;
    }

    .logo{
        cursor: pointer;
        align-self: center;
    }

    .nav{
        display: flex;
        width: fit-content;
        &__link{
            padding: 5px;
            margin: 0 10px;
            cursor: pointer;
            color: black;
            &:hover, &.active{
                color: rgba(0,0,0,.4);
            }
        }
    }

    .btn-menu{
        border: solid rgba(0,0,0,.3) 1px;
        padding: 5px;
        border-radius: 2px;
        &.open{
            .bar:first-child{

            }

            .bar:last-child{

            }
        }
    }

    .bar{
        display: block!important;
        background: black;
        height: 2px;
        width: 20px;
        margin: 3px 0;
    }


    .drop-menu{
        width: 100%;
        overflow: hidden;
        height: fit-content;
        list-style: none;
        padding: 0;
        margin-top: -5px;
        display: none;
        border: solid transparent 2px;
        &.open{
            display: none!important;
            @media screen and (max-width: 590px){
                display: block !important;
            }
        }

        li{
            height: fit-content;
            a{
                display: block;
                padding: 10px;
                text-align: center;
                text-decoration: none;
                color: black;
                transition: all ease-in-out .15s;
                &:hover{
                    color: rgba(0,0,0,.4);
                }
            }
            .btn-first{
                display: block;
                text-align: center;
                color: white;
                border-radius: 0;
                box-shadow: 2px 2px 3px rgba(0,0,0,.4);
                margin: 10px 2px;
            }

            hr{
                margin: 10px 0;
                height: 1px;
                border: 0;
                background: rgba(0,0,0,.2);
            }
        }
    }
</style>