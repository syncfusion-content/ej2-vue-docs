

<template>
    <div>
        <ejs-skeleton height='15px'></ejs-skeleton>
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
</style>


