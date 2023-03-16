

<template>
    <div>
        <div class="content-wrapper">
            <ejs-lineargauge style='display:block' :title ='title' ></ejs-lineargauge>
        </div>
    </div>
</template>
<script>
import Vue from 'vue';
import { LinearGaugePlugin } from "@syncfusion/ej2-vue-lineargauge";

Vue.use(LinearGaugePlugin);
export default {
    data: function () {
        return {
            title: 'linear gauge',
        }
    }
};
</script>
<style>
#content-wrapper {
    padding: 0px !important;
}
</style>


