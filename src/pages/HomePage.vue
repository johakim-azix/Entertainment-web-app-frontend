<template>
    <main-header></main-header>
    <div class="footer">
        <div class="container">
            <div class="bloc-left">
                <div class="logo">
                    <img src="../assets/logos/logo-footer.svg" alt="">
                </div>
                <div class="social-media visible-small">
                    <div>
                        <img src="../assets/icons/icon-facebook.svg" alt="">
                    </div>
                    <div>
                        <img src="../assets/icons/icon-youtube.svg" alt="">
                    </div>
                    <div>
                        <img src="../assets/icons/icon-tweeter.svg" alt="">
                    </div>
                    <div>
                        <img src="../assets/icons/icon-pinterest.svg" alt="">
                    </div>
                    <div>
                        <img src="../assets/icons/icon-instagram.svg" alt="">
                    </div>
                </div>
                <div class="nav">
                    <div class="nav__link"><a href="">HOME</a></div>
                    <div class="nav__link"><a href="">STORIES</a></div>
                    <div class="nav__link"><a href="">FEATURES</a></div>
                    <div class="nav__link"><a href="">PRICINGS</a></div>
                </div>
                <div class="social-media visible-large">
                    <div>
                        <img src="../assets/icons/icon-facebook.svg" alt="">
                    </div>
                    <div>
                        <img src="../assets/icons/icon-youtube.svg" alt="">
                    </div>
                    <div>
                        <img src="../assets/icons/icon-tweeter.svg" alt="">
                    </div>
                    <div>
                        <img src="../assets/icons/icon-pinterest.svg" alt="">
                    </div>
                    <div>
                        <img src="../assets/icons/icon-instagram.svg" alt="">
                    </div>
                </div>
            </div>
            <div class="bloc-right">
                <a href="">GET AN INVITE<img src="../assets/icons/icon-arrow-right.svg" alt=""></a>
                <span>Copyright 2019. All Rights Reserved</span>
            </div>
        </div>
    </div>
</template>

<script>
    import mainHeader from "@/components/MainHeader";
    export default {
        name: "HomePage",
        components: {
            mainHeader,
        }
    }
</script>

<style lang="scss" scoped>
    .footer{
        background: black;
        display:flex;
        justify-content: space-around;
        .container{
            justify-content: space-between;
            margin: 40px 0;
        }
        .bloc-left{
            /*border: solid white 1px;*/
            display: flex;
            justify-content: space-between;
            flex-wrap: wrap;
            width: 480px;
            .logo{
                height: fit-content;
            }

            .nav{
                height: fit-content;
                width: 250px;
                align-self: flex-end;
                &__link{
                    margin-bottom: 20px;
                    a{
                        text-decoration: none;
                        color: white;
                        font-weight: bold;
                        font-size: 12px;
                        display: block;
                        transition: all ease-in-out .15s;
                        &:hover{
                            color:rgba(255,255,255,.3)
                        }
                    }
                    &:last-child{
                        margin-bottom: 0;
                    }
                }
            }

            .social-media{
                width: fit-content;
                &>div{
                    margin-right: 10px;
                }
                &.visible-small{
                    border: solid blue 1px;
                    display: none;
                    @media screen and (max-width: 590px) {
                        display: flex;
                    }
                }

                &.visible-large{
                    display: flex;
                    margin-top: -30px;
                    @media screen and (max-width: 590px) {
                        display: none;
                    }
                }
            }
        }

        .bloc-right{
            /*border: solid white 1px;*/
            color: white;
            display: flex;
            flex-wrap: wrap;
            height: 100%;
            &>*{
                display: block;
                width: 100%;
                height: fit-content;
                text-align: right;
                transition: all ease-in-out .15s;
            }
            &>*:first-child{
                align-self: flex-start;
                color: white;
                text-decoration: none;
                cursor: pointer;
                img{
                    margin-left: 10px;
                }
                &:hover{
                    text-decoration: underline;
                }
            }

            &>*:last-child{
                align-self: flex-end;
                color: rgba(255,255,255,.3);
            }
        }
    }

</style>