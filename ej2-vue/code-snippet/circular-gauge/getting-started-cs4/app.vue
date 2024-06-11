<template>
    <div id="app">
        <div class='wrapper'>
            <ejs-circulargauge title='Speedometer' :titleStyle='titleStyle'>
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
            titleStyle: {
                color: '#27d5ff'
            }
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
