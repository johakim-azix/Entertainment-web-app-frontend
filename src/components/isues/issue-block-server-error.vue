<template>
    <div class="queue" >
        <div class="error-panel">
            <div class="container">
                <img src="../../assets/icons/icon.error.svg" alt="">
                <strong >
                    Oops something went wrong !! <br> Please reload the page!
                </strong>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "issue-block-server-error"
    }
</script>

<style lang="scss" scoped>
    .error-panel{
        display: flex;
        justify-content: space-around;
        width: 100%;

        .container{
            border:solid #161D2F 1px;
            background-color: #161D2F;
            border-radius: 5px;
            display: block!important;
            width:100%;
            margin-bottom: 20px;
            color: white;
            min-height: 750px;
            padding: 30px;

            img{
                height: 100%;
                width: 100%;
                max-width: 200px;
                max-height: 200px;
                margin-left: auto;
                margin-right: auto;
                margin-top: 80px;
                display: block
            }

            strong{
                display: block;
                text-align: center;
                margin-top: 20px
            }
        }
    }
</style>