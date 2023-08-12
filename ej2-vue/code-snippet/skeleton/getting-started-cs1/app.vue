

<template>
    <div>
        <ejs-skeleton height='15px'></ejs-skeleton>
    </div>
</template>

<script>
    import { SkeletonComponent } from "@syncfusion/ej2-vue-notifications";

    export default {
        components: {
            'ejs-skeleton': SkeletonComponent
        },
        data: function () {
            return {};
        }
    }
</script>

<style>
    @import "../node_modules/@syncfusion/ej2-base/styles/material.css";
    @import "../node_modules/@syncfusion/ej2-notifications/styles/material.css";
</style>


