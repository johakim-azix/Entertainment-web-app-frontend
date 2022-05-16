<template>
    <div id="section-no-content" class="queue">
        <div class="error-panel">
            <div class="container">
                <img src="../../assets/icons/icon-empty-folder.png" alt="">
                <strong class="hidden" :class="{show:info.bookmarked}">
                    It looks like you haven't bookmarked any content yet!!<br>
                    bookmark content and it will show up here.
                </strong>
                <strong class="hidden" :class="{show:info.movies}">
                    It looks like you haven't added any content yet!!<br>
                    Add Movies and they will show up here.
                </strong>
                <strong class="hidden" :class="{show:info.series}">
                    It looks like you haven't added any content yet!!<br>
                    Add series and they will show up here.
                </strong>
                <strong class="hidden" :class="{show:info.recommendation}">
                    It looks like you haven't added any content yet!!<br>
                    Add content and it will show up here.
                </strong>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "issue-block-no-content",
        props: ["info"]
    }
</script>

<style lang="scss" scoped>
    .hidden{
        display: none!important;
    }
    .show{
        display: block!important;
    }
    .error-panel {
        display: flex;
        justify-content: space-around;
        width: 100%;

        .container {
            border: solid #161D2F 1px;
            background-color: #161D2F;
            border-radius: 5px;
            display: block!important;
            width: 100%;
            margin-bottom: 20px;
            color: white;
            min-height: 750px;
            padding: 30px;

            img {
                height: 100%;
                width: 100%;
                max-width: 200px;
                max-height: 200px;
                margin-left: auto;
                margin-right: auto;
                margin-top: 80px;
                display: block
            }

            strong {
                display: block;
                text-align: center;
                margin-top: 20px
            }
        }
    }
</style>