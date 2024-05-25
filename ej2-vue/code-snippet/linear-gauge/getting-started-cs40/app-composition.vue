<template>
    <div class="content-wrapper">
        <div align='center'>
            <ejs-lineargauge :margin='margin' background= 'skyblue':border ='border'>
            </ejs-lineargauge>
        </div>
    </div>
</template>
<script setup>

import { LinearGaugeComponent as EjsLineargauge } from "@syncfusion/ej2-vue-lineargauge";

const border = { color: "#FF0000", width: 2 };
const margin = {
    left: 20,
    top: 20,
    right: 20,
    bottom: 20
 };

</script>
<style>
#content-wrapper {
    padding: 0px !important;
}
</style>