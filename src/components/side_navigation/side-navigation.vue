<template>
    <div class="navigation"> <!--todo : component tobe-->
        <div class="logo">
            <img src="../../assets/logos/logo.svg" alt="">
        </div>
        <div id="nav" class="nav">
            <router-link
                    id="home_nav_link" :to="{name : 'homeFragment'}"
                    class="nav__link"
                    :class="{active:store.state.navigation.activeLink.home}">
                <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8 0H1C.4 0 0 .4 0 1v7c0 .6.4 1 1 1h7c.6 0 1-.4 1-1V1c0-.6-.4-1-1-1Zm0 11H1c-.6 0-1 .4-1 1v7c0 .6.4 1 1 1h7c.6 0 1-.4 1-1v-7c0-.6-.4-1-1-1ZM19 0h-7c-.6 0-1 .4-1 1v7c0 .6.4 1 1 1h7c.6 0 1-.4 1-1V1c0-.6-.4-1-1-1Zm0 11h-7c-.6 0-1 .4-1 1v7c0 .6.4 1 1 1h7c.6 0 1-.4 1-1v-7c0-.6-.4-1-1-1Z"/>
                </svg>
            </router-link>
            <router-link
                    id="movies_nav_link"
                    :to="{name : 'moviesFragment'}"
                    class="nav__link"
                    :class="{active:store.state.navigation.activeLink.movies}">
                <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16.956 0H3.044A3.044 3.044 0 0 0 0 3.044v13.912A3.044 3.044 0 0 0 3.044 20h13.912A3.044 3.044 0 0 0 20 16.956V3.044A3.044 3.044 0 0 0 16.956 0ZM4 9H2V7h2v2Zm-2 2h2v2H2v-2Zm16-2h-2V7h2v2Zm-2 2h2v2h-2v-2Zm2-8.26V4h-2V2h1.26a.74.74 0 0 1 .74.74ZM2.74 2H4v2H2V2.74A.74.74 0 0 1 2.74 2ZM2 17.26V16h2v2H2.74a.74.74 0 0 1-.74-.74Zm16 0a.74.74 0 0 1-.74.74H16v-2h2v1.26Z"/>
                </svg>
            </router-link>
            <router-link
                    id="series_nav_link"
                    :to="{name : 'seriesFragment'}"
                    class="nav__link"
                    :class="{active:store.state.navigation.activeLink.series}">
                <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20 4.481H9.08l2.7-3.278L10.22 0 7 3.909 3.78.029 2.22 1.203l2.7 3.278H0V20h20V4.481Zm-8 13.58H2V6.42h10v11.64Zm5-3.88h-2v-1.94h2v1.94Zm0-3.88h-2V8.36h2v1.94Z"/>
                </svg>
            </router-link>
            <router-link
                    id="bookmarked_nav_link"
                    :to="{name : 'bookmarkedFragment'}"
                    class="nav__link"
                    :class="{active:store.state.navigation.activeLink.bookmarked}">
                <svg width="17" height="20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15.387 0c.202 0 .396.04.581.119.291.115.522.295.694.542.172.247.258.52.258.82v17.038c0 .3-.086.573-.258.82a1.49 1.49 0 0 1-.694.542 1.49 1.49 0 0 1-.581.106c-.423 0-.79-.141-1.098-.423L8.46 13.959l-5.83 5.605c-.317.29-.682.436-1.097.436-.202 0-.396-.04-.581-.119a1.49 1.49 0 0 1-.694-.542A1.402 1.402 0 0 1 0 18.52V1.481c0-.3.086-.573.258-.82A1.49 1.49 0 0 1 .952.119C1.137.039 1.33 0 1.533 0h13.854Z"/>
                </svg>
            </router-link>
        </div>
        <div class="avatar">
            <div @click="showProfilePopup" class="image">
                <div class="background" >
                    <img v-if="store.state.authCredential.avatar.small!==null" id="bgImgSmall" :src="store.state.authCredential.avatar.medium" alt="">
                </div>
                <div class="blur"></div>
                <div class="image" :class="{restricted:(store.state.authCredential.avatar.small===null)}">
                    <img  v-if="store.state.authCredential.avatar.small===null" src="../../assets/images/avatar_place_holder.png" alt="">
                    <img id="avatar-small" v-else :src="store.state.authCredential.avatar.small " alt="">
                </div>
            </div>
            <div class="user_info" :class="{hidden:!store.state.navigation.modal_popup.isProfilePopupOpened}">
                <div class="caret"></div>
                <div class="content">
                    <div class="profile-pic">
                        <div class="pic" @click="viewProfileImg">
                            <div class="background" >
                                <img id="bgImgMedium" v-if="store.state.authCredential.avatar.medium!==null" :src="store.state.authCredential.avatar.large" alt="">
                            </div>
                            <div class="blur"></div>
                            <div class="image" :class="{restricted:(store.state.authCredential.avatar.medium===null)}">
                                <img v-if="store.state.authCredential.avatar.medium===null" src="../../assets/images/avatar_place_holder.png" alt="">
                                <img id="avatar-medium" v-else :src="store.state.authCredential.avatar.medium" alt="">
                            </div>
                        </div>
                        <button @click="triggerImgSelection">
                            <img src="../../assets/icons/icon-photo-camera.svg" alt="">
                        </button>
                    </div>
                    <span>{{store.state.authCredential.email}}</span>
                    <button @click="logout">Logout</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import {inject} from "vue"

    export default {
        name: "side-navigation",
        methods:{
            showProfilePopup(){
                this.store.state.navigation.modal_popup.isProfilePopupOpened = !this.store.state.navigation.modal_popup.isProfilePopupOpened
            },
            triggerImgSelection(){
                this.store.state.navigation.modal_popup.isSelectingImg = true
                this.$emit("onAddImgIntent")
            },
            viewProfileImg(){
                if (this.store.state.authCredential.avatar.small===null) return
                this.store.state.navigation.modal_popup.isSelectingImg = false
                this.$emit("onViewProfileImgIntent")
            },
            logout(){
                //todo : un suscribe to jwt token and delete the authCredentials from the store
                alert("loging out ")
                this.store.methods.logout()
            }
        },
        setup() {
            const store = inject('store')
            return {
                store
            }
        }
    }
</script>

<style lang="scss" scoped>
    .hidden{
        display: none;
    }

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

                svg {
                    margin: 0 auto;
                    fill: #5A698F;
                    transition: all ease-in-out .30s;
                }

                @media (max-width: 768px) {
                    margin: 0 10px;
                }

                @media (max-width: 500px) {
                    margin: 0 1px;
                }
            }

            &__link:hover {
                background: rgba(255, 255, 255, .1);

                svg {
                    fill: white;
                }
            }
        }

        .avatar {
            align-self: flex-end;
            border: solid white 1px;
            border-radius: 100%;
            height: 50px;
            width: 50px;
            margin: 0 auto;
            cursor: pointer;

            &>.image{
                border-radius: 100%;
                height: 100%;
                width: 100%;
                overflow: hidden!important;
                position: relative;
                display: flex;
                justify-content: space-around;
                background-color: rgba(255,255,255,.07);
                .background{
                    position: absolute;
                    background: #161D2F;
                    height: 100%;
                    width: 100%;
                    display: flex;
                    align-items: center;
                    justify-content: space-around;

                    img {
                        height : fit-content;
                        width:fit-content;
                        -webkit-filter: blur(2px);
                        -moz-filter: blur(2px);
                        -o-filter: blur(2px);
                        -ms-filter: blur(2px);
                        filter: blur(2px);
                    }
                }
                .blur{
                    position: absolute;
                    background: rgba(0, 0, 0);
                    opacity: .5;
                    height: 100%;
                    width: 100%;
                }
                &>.image{
                    background: transparent;
                    height: 100%;
                    width: 100%;
                    z-index: 0;
                    display: flex;
                    align-items: center;
                    justify-content: space-around;
                    img{
                        height: fit-content;
                        width: fit-content;
                    }
                    &.restricted{
                        img{
                            height: 80% !important;
                            width: 80% !important;
                        }
                    }
                }
            }


            .user_info {
                width: 250px;
                height: fit-content;
                position: absolute;
                bottom: 20px;
                left: 95px;
                right: auto;
                top: auto;
                z-index: 1;
                cursor: default;
                @media screen and (max-width: 768px){
                    right: 0;
                    top: calc(100% - 5px);
                    bottom: auto;
                    left: auto;
                }

                .caret {
                    width: 24px;
                    height: 24px;
                    background: #161D2F;
                    border: solid #5A698F 1px;
                    transform: rotate(45deg);
                    z-index: -1 !important;
                    bottom: 30px;
                    left: 5px;
                    position: absolute;
                    @media screen and (max-width: 768px){
                        right: 25px;
                        top: 5px;
                        bottom: auto;
                        left: auto;
                    }
                }

                .content {
                    background: #161D2F;
                    border-radius: 5px;
                    max-width: 100% !important;
                    height: fit-content;
                    margin-left: 13px;
                    margin-top: auto;
                    padding: 20px;
                    z-index: 1 !important;
                    display: flex;
                    justify-content: space-around;
                    flex-wrap: wrap;
                    box-shadow: 3px 3px 6px rgba(0, 0, 0, .5);
                    @media screen and (max-width: 768px){
                        margin-top: 10px;
                        margin-left: auto;
                    }
                    .profile-pic {
                        width: 150px;
                        height: 150px;
                        border: solid rgba(255,255,255,.5) 2px;
                        position: relative;
                        border-radius: 100%;
                        box-shadow: 0px 0px 10px rgba(0, 0, 0, .5);
                        .pic{
                            height: 100%;
                            width: 100%;
                            border-radius: 100%;
                            overflow: hidden!important;
                            position: relative;
                            display: flex;
                            align-items: center;
                            justify-content: space-around;
                            background-color: rgba(255,255,255,.08);

                            .background{
                                position: absolute;
                                background: #161D2F;
                                height: 100%;
                                width: 100%;
                                display: flex;
                                align-items: center;
                                justify-content: space-around;

                                img {
                                    height : fit-content;
                                    width:fit-content;
                                    -webkit-filter: blur(2px);
                                    -moz-filter: blur(2px);
                                    -o-filter: blur(2px);
                                    -ms-filter: blur(2px);
                                    filter: blur(2px);
                                }
                            }
                            .blur{
                                position: absolute;
                                background: rgba(0, 0, 0);
                                opacity: .5;
                                height: 100%;
                                width: 100%;
                            }
                            & > .image{
                                background: transparent;
                                height: 100%;
                                width: 100%;
                                z-index: 0;
                                display: flex;
                                align-items: center;
                                justify-content: space-around;
                                img{
                                    height: fit-content;
                                    width: fit-content;
                                }
                                &.restricted{
                                    img{
                                        height: 80% !important;
                                        width: 80% !important;
                                    }
                                }
                            }
                            img{
                                height: 70%;
                                width: 70%;
                            }
                        }

                        button {
                            position: absolute;
                            right: 0;
                            bottom: 0;
                            width: 40px;
                            height: 40px;
                            border-radius: 100%;
                            outline: 0;
                            background: rgba(0, 0, 0, .8);
                            border: solid rgba(255,255,255,.5) 1px;
                            color: rgba(255,255,255,1);
                            box-shadow: 2px 2px 3px rgba(0, 0, 0, .2);
                            overflow: hidden;
                            display: flex;
                            align-items: center;
                            justify-content: space-around;
                            cursor: pointer;
                            transition: all ease-in-out .15s;
                            &:hover{
                                background-color: rgba(255,255,255,.2);
                            }
                            img{
                                height: 80%;
                                width: 80%;
                            }
                        }
                    }

                    span {
                        margin: 10px auto;
                        display: block;
                        width: 100%;
                        text-align: center;
                        font-weight: bold;
                        color: white;
                    }

                    & > button {
                        outline: 0;
                        border: 0;
                        margin-left: 0;
                        margin-right: 0;
                        border-radius: 3px;
                        padding: 5px 10px;
                        background-color: rgba(252, 71, 71, 1);
                        color: rgba(255, 255, 255);
                        cursor: pointer;
                        box-shadow: 2px 2px 3px rgba(0, 0, 0, .2);
                        transition: all ease-in-out .15s ;
                        &:hover{
                            background-color: white;
                            color: rgba(252, 71, 71, 1);

                        }
                    }
                }
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
            margin: 0;
            border-radius: 0;
            padding: 5px 16px;
        }
    }
</style>