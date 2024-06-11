<template>
    <div class="content-wrapper">
        <div align='center'>
            <ejs-lineargauge :format='format'>
            </ejs-lineargauge>
        </div>
    </div>
</template>
<script setup>

import { LinearGaugeComponent as EjsLineargauge } from "@syncfusion/ej2-vue-lineargauge";

const format = 'c';

</script>
<style>
#content-wrapper {
    padding: 0px !important;
}
</style>