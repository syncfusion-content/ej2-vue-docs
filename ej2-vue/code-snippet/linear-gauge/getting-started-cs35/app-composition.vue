<template>
    <div>
        <div class="content-wrapper">
            <ejs-lineargauge style='display:block' :title ='title' ></ejs-lineargauge>
        </div>
    </div>
</template>
<script setup>
import { LinearGaugeComponent as EjsLineargauge } from "@syncfusion/ej2-vue-lineargauge";

const title = 'linear gauge';

</script>
<style>
#content-wrapper {
    padding: 0px !important;
}
</style>