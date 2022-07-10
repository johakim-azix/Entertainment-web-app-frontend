<template>
    <div class="container">
        <div class="content">
            <div class="logo">
                <img src="../assets/logos/logo.svg" alt="">
            </div>
            <div class="loader">
                <div :class="{spin:store.state.authCredential.isRegistering}"></div>
                <div class="form-container">
                    <h1 class="form-container__title">Sign Up</h1>
                    <div class="_error"></div>
                    <div class="form-container__form">
                        <div class="form-field">
                            <input @keyup="onTyping" type="text" placeholder="Email address">
                            <span class="focus-border"></span>
                        </div>
                        <div class="form-field">
                            <input @keyup="onTyping" type="password" placeholder="Password">
                            <span class="focus-border"></span>
                        </div>
                        <div class="form-field">
                            <input @keyup="onTyping" type="password" placeholder="Repeat password">
                            <span class="focus-border"></span>
                        </div>
                        <button class="submit" disabled @click="onFormSubmit">Create an account</button>
                        <div class="shortcut">
                            Already have an account?
                            <router-link :to="{name : 'login'}"> Login</router-link>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>
</template>

<script>
    import {inject} from 'vue'

    export default {
        name: "registerView",
        methods: {
            validateEmail(email) {
                return String(email)
                    .toLowerCase()
                    .match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
            },
            validateInputs(email, pwd, pwdConfirm) {
                let results = {
                    hasIssues: false,
                    email: {
                        isEmpty: false,
                        notValid: false
                    },
                    pwd: {
                        tooShort: false
                    },
                    pwdConfirm: {
                        notMatch: false
                    }
                }
                const btnSubmit = document.getElementsByClassName("submit")[0]
                if (email.trim().length === 0) {
                    results.email.isEmpty = true
                } else {
                    if (!this.validateEmail(email)) {
                        results.email.notValid = true
                    }
                }
                if (pwd.trim().length < 8) results.pwd.tooShort = true
                if (pwd !== pwdConfirm) results.pwdConfirm.notMatch = true
                if (results.email.isEmpty || results.email.notValid || results.pwd.tooShort || results.pwdConfirm.notMatch) {
                    btnSubmit.disabled = true
                } else {
                    btnSubmit.disabled = false
                }
                return results;
            },
            onTyping() {
                const formFields = document.getElementsByClassName("form-field")
                const email = String(formFields[0].getElementsByTagName("input")[0].value)
                const pwd = String(formFields[1].getElementsByTagName("input")[0].value)
                const pwdConfirm = String(formFields[2].getElementsByTagName("input")[0].value)
                this.displayFromValidationIssues(this.validateInputs(email, pwd, pwdConfirm,))
            },
            async onFormSubmit() {
                const error = document.getElementsByClassName("_error")[0]
                const formFields = document.getElementsByClassName("form-field")
                const email = String(formFields[0].getElementsByTagName("input")[0].value)
                const pwd = String(formFields[1].getElementsByTagName("input")[0].value)
                if (await this.store.methods.register(email, pwd)){
                    await this.$router.replace({name: 'login'})
                }else{
                    error.innerText = "We're facing an issue try again if it persists come back latter!"
                    error.classList.add("animate")
                    setTimeout(() => {
                        error.classList.remove("animate")
                        this.toggleSubmitEnable()
                    }, 3900)
                }
                this.store.state.authCredential.isRegistering = false
            },
            displayFromValidationIssues(validationResults) {
                const formFields = document.getElementsByClassName("form-field")
                const emailField = formFields[0]
                const pwdField = formFields[1]
                const pwdConfirmField = formFields[2]

                if (validationResults.email.isEmpty) {
                    emailField.classList.add("error")
                    emailField.classList.add("empty-field")
                } else {
                    emailField.classList.remove("error")
                    emailField.classList.remove("empty-field")
                    if (validationResults.email.notValid) {
                        emailField.classList.add("error")
                        emailField.classList.add("not-valid-email")
                    } else {
                        emailField.classList.remove("error")
                        emailField.classList.remove("not-valid-email")
                    }
                }

                if (validationResults.pwd.tooShort) {
                    pwdField.classList.add("error")
                    pwdField.classList.add("pwd-length")
                } else {
                    pwdField.classList.remove("error")
                    pwdField.classList.remove("pwd-length")
                }

                if (validationResults.pwdConfirm.notMatch) {
                    pwdConfirmField.classList.add("error")
                    pwdConfirmField.classList.add("pwd-confirm")
                } else {
                    pwdConfirmField.classList.remove("error")
                    pwdConfirmField.classList.remove("pwd-confirm")
                }
            }
        },
        beforeCreate() {
            if (!this.store.state.isNavigatingInFromLogin) {
                this.$router.push({name:'homePage'})
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
    $semiDarkBlue: rgba(22, 29, 47);
    $white: rgba(255, 255, 255);
    $greyishBlue: rgba(90, 105, 143);
    $red: rgba(252, 71, 71, 1);

    ._error {
        color: $white;
        font-size: 14px;
        margin-top: -15px;
        margin-bottom: 0;
        opacity: 0;
        height: 0;
        border-radius: 3px;
        background-color: $red;
        overflow: hidden;
        text-align: center;

        &.animate {
            animation: error_expand .30s ease-in-out forwards, error_fade_in .30s ease-in-out forwards .30s, error_fade_out .30s ease-in-out forwards 3s, error_collapse .30s ease-in-out forwards 3.5s;
        }
    }


    @keyframes error_expand {
        to {
            height: 40px;
        }
    }

    @keyframes error_collapse {
        to {
            height: 0;
        }
    }

    @keyframes error_fade_in {
        to {
            opacity: .7;
        }
    }

    @keyframes error_fade_out {
        to {
            opacity: 0;
        }
    }

    .container {
        color: white;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        overflow: auto;
        display: flex;
        justify-content: space-around;
    }

    .content {
        max-width: 400px;
        width: 100%;
        padding-bottom: 250px;

        .logo {
            width: 32px;
            height: 25.6px;
            overflow: hidden;
            margin: 80px auto;

            img {
                height: 100%;
                width: 100%;
            }
        }

        .loader {
            border-radius: 24px;
            padding: 2px;
            background: transparent;
            position: relative;
            overflow: hidden;

            .spin {
                animation: rotate 2s infinite linear;
                background-image: conic-gradient(transparent 300deg, rgba(255, 255, 255, .3) 360deg);
                position: absolute;
                top: -50%;
                left: -25%;
                height: 200%;
                width: 150%;
                z-index: -1;
            }
            @media (max-width: 400px) {
                border-radius: 0;
            }
        }


        .form-container {
            background: $semiDarkBlue;
            padding: 32px;
            border-radius: 20px;
            transition: all ease-in-out .15s;

            &__title {
                margin: 0 0 40px 0;
                font-weight: normal;
            }

            .form-field {
                width: 100%;
                height: 37px;
                margin-bottom: 24px;
                position: relative;

                &.error {
                    &.empty-field::after {
                        content: "Can't be empty !";
                        font-size: 12px;
                        margin-top: 10px;
                        position: absolute;
                        top: 0;
                        right: 0;
                        color: $red;
                    }

                    &.not-valid-email::after {
                        content: "Not a valid email address !";
                        font-size: 12px;
                        margin-top: 10px;
                        position: absolute;
                        top: 0;
                        right: 0;
                        color: $red;
                    }

                    &.pwd-confirm::after {
                        content: "Passwords don't match !";
                        font-size: 12px;
                        margin-top: 10px;
                        position: absolute;
                        top: 0;
                        right: 0;
                        color: $red;
                    }

                    &.pwd-length::after {
                        content: "At least 8 chars !";
                        font-size: 12px;
                        margin-top: 10px;
                        position: absolute;
                        top: 0;
                        right: 0;
                        color: $red;
                    }

                    input {
                        & ~ .focus-border {
                            position: absolute;
                            bottom: -1.5px;
                            left: 0;
                            width: 100%;
                            height: 1px;
                            z-index: 99;
                        }

                        & ~ .focus-border:before, & ~ .focus-border:after {
                            content: "";
                            position: absolute;
                            bottom: 0;
                            left: 0;
                            width: 0;
                            height: 100%;
                            background-color: $red;
                            transition: 0.4s;
                        }

                        & ~ .focus-border:after {
                            left: auto;
                            right: 0;
                        }

                        &:focus ~ .focus-border:before, &:focus ~ .focus-border:after {
                            width: 50%;
                            transition: 0.4s;
                        }
                    }
                }

                input {
                    width: calc(100% - 32px);
                    height: 100%;
                    border: 0;
                    outline: 0;
                    background: transparent;
                    padding: 0 16px;
                    border-bottom: solid $greyishBlue 1px;
                    color: $white;
                    font-size: 15px;

                    & ~ .focus-border {
                        position: absolute;
                        bottom: -1.5px;
                        left: 0;
                        width: 100%;
                        height: 1px;
                        z-index: 99;
                    }

                    & ~ .focus-border:before, & ~ .focus-border:after {
                        content: "";
                        position: absolute;
                        bottom: 0;
                        left: 0;
                        width: 0;
                        height: 100%;
                        background-color: $white;
                        transition: 0.4s;
                    }

                    & ~ .focus-border:after {
                        left: auto;
                        right: 0;
                    }

                    &:focus ~ .focus-border:before, &:focus ~ .focus-border:after {
                        width: 50%;
                        transition: 0.4s;
                    }
                }
            }

            .submit {
                background: $red;
                display: block;
                padding: 15px 0;
                text-align: center;
                border-radius: 5px;
                border: 0;
                outline: 0;
                margin-bottom: 24px;
                width: 100%;
                text-decoration: none;
                color: white;
                transition: all ease-in-out .15s;
                margin-top: 30px;

                &:hover {
                    background-color: $white;
                    color: $red;
                }
            }

            .shortcut {
                text-align: center;

                a {
                    color: $red;
                    cursor: pointer;
                    margin-left: 5px;
                    transition: all ease-in-out .15s;
                    text-decoration: none;

                    &:hover {
                        text-decoration: underline;
                    }
                }
            }

            @media (max-width: 400px) {
                border-radius: 0;
            }
        }
    }

</style>