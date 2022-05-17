<template>
    <div class="search"> <!--todo : a component to be : search component -->
        <img src="../../assets/icons/icon-search.svg" alt="">
        <input id="searchInput" :disabled="(!(
                    (store.state.navigation.activeLink.home&&(store.state.recommendation.list.length!==0 &&store.state.trending.list.length!==0))
                    ||(store.state.navigation.activeLink.movies&&store.state.movies.list.length!==0)
                    ||(store.state.navigation.activeLink.series&&store.state.series.list.length!==0)
                    ||(store.state.navigation.activeLink.bookmarked&&store.state.bookmarked.list.length!==0))
                    )"
               @focus="emitOnSearchIntent"
               @keyup.enter="submitSearchConstraints"
               type="search"
               :placeholder="place_holder">
        <span class="focus-border"></span>
    </div>
</template>

<script>


    import {inject} from "vue"

    export default {
        name: "searchField",
        props: ["place_holder"],
        setup(props, context) {
            const store = inject('store')
            // eslint-disable-next-line vue/no-setup-props-destructure
            store.state.search.placeHolder = props.place_holder
            setTimeout(() => {
                if (store.state.search.isSearching) (document.getElementById("searchInput")).focus()
            }, 5)

            function submitSearchConstraints() {
                context.emit("onSearchConstraintSubmit", document.getElementById("searchInput").value)
            }

            function emitOnSearchIntent() {
                context.emit("onSearchIntent")
            }

            return {
                store,
                emitOnSearchIntent,
                submitSearchConstraints
            }
        }
    }
</script>

<style lang="scss" scoped>
    $greyishBlue: rgba(90, 105, 143);

    .search {
        height: fit-content;
        position: relative;
        margin-top: 30px;
        transition: all ease-in-out .30s;
        margin-right: 32px;

        img {
            position: absolute;
            left: 0;
            top: 12px;
            display: inline-block;
            height: 32px;
            width: 32px;
            color: white;
            transition: all ease-in-out .30s;
            @media (max-width: 500px) {
                height: 24px;
                width: 24px;
            }
        }

        input {
            width: 100%;
            padding: 15px 0 15px 40px;
            border: 0;
            outline: 0;
            font-size: 24px;
            border-bottom: solid transparent 1px;
            color: white;
            background: transparent;
            transition: all ease-in-out .30s;

            & ~ .focus-border {
                position: absolute;
                bottom: 0;
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
                background-color: $greyishBlue;
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

            @media (max-width: 500px) {
                font-size: 16px;
                padding: 15px 0 15px 30px;
            }
        }

        @media (max-width: 768px) {
            width: calc(100% - 60px);
            margin: 10px auto 0 auto;
        }

        @media (max-width: 500px) {
            width: calc(100% - 35px);
            margin: 10px auto 0 auto;
        }
    }
</style>