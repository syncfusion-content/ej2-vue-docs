<template>
    <div id="app">
        <div class='wrapper'>
            <ejs-circulargauge :axes='axes'>
            </ejs-circulargauge>
        </div>
    </div>
</template>

<script setup>
import { CircularGaugeComponent as EjsCirculargauge } from "@syncfusion/ej2-vue-circulargauge";

const axes = [{
    startAngle: 270,
    endAngle: 90
}]

</script>
<style>
.wrapper {
    max-width: 300px;
    margin: 0 auto;
}
</style>
