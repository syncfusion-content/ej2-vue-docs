<template>
    <div class="content-wrapper">
        <div align='center'>
            <ejs-lineargauge :title ='title' :titleStyle ='titleStyle'>
            </ejs-lineargauge>
        </div>
    </div>
</template>
<script setup>

import { LinearGaugeComponent as EjsLineargauge } from "@syncfusion/ej2-vue-lineargauge";

const title = 'linear gauge';
const titleStyle = {
    fontFamily: "Arial",
    fontStyle: 'italic',
    fontWeight: 'regular',
    color: "#E27F2D",
    size: '23px'
};

</script>
<style>
#content-wrapper {
    padding: 0px !important;
}
</style>