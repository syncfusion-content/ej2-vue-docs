<template>
    <div id="app">
        <div class='wrapper'>
            <ejs-circulargauge :axes='axes'>
            </ejs-circulargauge>
        </div>
    </div>
</template>

<script>
import { CircularGaugeComponent } from "@syncfusion/ej2-vue-circulargauge";

export default {
    name: "App",
    components: {
        "ejs-circulargauge": CircularGaugeComponent
    },

    data: function () {
        return {
            axes: [{
                startAngle: 270,
                endAngle: 90
            }]
        }
    }
};
</script>
<style>
.wrapper {
    max-width: 300px;
    margin: 0 auto;
}
</style>
