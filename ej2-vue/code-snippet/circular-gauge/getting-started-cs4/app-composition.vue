<template>
    <div id="app">
        <div class='wrapper'>
            <ejs-circulargauge title='Speedometer' :titleStyle='titleStyle'>
            </ejs-circulargauge>
        </div>
    </div>
</template>
<script setup>

import { CircularGaugeComponent as EjsCirculargauge } from "@syncfusion/ej2-vue-circulargauge";

const titleStyle = {
    color: '#27d5ff'
}

</script>
<style>
.wrapper {
    max-width: 300px;
    margin: 0 auto;
}
</style>
