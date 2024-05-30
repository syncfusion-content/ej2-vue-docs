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
    majorTicks: {
        interval: 10,
        position: 'Inside',
        height: 10,
    },
    pointers: [],
    minorTicks: {
        interval: 5,
        position: 'Inside',
        height: 5,
    }
},
{
    pointers: [],
    majorTicks: {
        interval: 10,
        position: 'Inside',
        height: 10,
        color: '#27d5ff'
    },
    minorTicks: {
        interval: 5,
        position: 'Inside',
        height: 5,
        color: '#27d5ff'
    }
}]

</script>
<style>
.wrapper {
    max-width: 300px;
    margin: 0 auto;
}
</style>
