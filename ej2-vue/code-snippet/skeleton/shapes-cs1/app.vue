

<template>
    <div>
        <div id="skeletonCard">
            <div class='cardProfile'>
                <ejs-skeleton id="cardProfile" shape="Circle" width="60px"></ejs-skeleton>
            </div>
            <div class="cardinfo">
                <ejs-skeleton id="text1" width="30%" height='15px'></ejs-skeleton><br/>
                <ejs-skeleton id="text2" width="15%" height='15px'></ejs-skeleton>
            </div>
            <div class="cardContent">
                <ejs-skeleton id="cardImage" shape="Rectangle" width="100%" height='150px'></ejs-skeleton>
            </div>
            <div class="cardoptions">
                <ejs-skeleton id="rightOption" shape="Rectangle" width="20%" height='32px'></ejs-skeleton>
                <ejs-skeleton id="leftOption" shape="Rectangle" width="20%" height='32px'></ejs-skeleton>
            </div>
        </div>
    </div>
</template>

<script>
    import Vue from 'vue';
    import { SkeletonPlugin } from "@syncfusion/ej2-vue-notifications";

    Vue.use(SkeletonPlugin);

    export default {
        data: function () {
            return {};
        }
    }
</script>

<style>
    @import "../node_modules/@syncfusion/ej2-base/styles/material.css";
    @import "../node_modules/@syncfusion/ej2-notifications/styles/material.css";

    #skeletonCard {
      padding: 10px;
      line-height: inherit;
      height: 330px;
    }

    #skeletonCard .cardProfile {
      float: left;
      margin-right: 15px;
    }

    #skeletonCard .cardinfo {
      margin-top: 10px;
      overflow: hidden;
    }

    #skeletonCard .cardContent {
      margin: 20px 0px 20px;
    }

    #skeletonCard .cardoptions {
      display: flex;
      justify-content: space-between;
    }

</style>


