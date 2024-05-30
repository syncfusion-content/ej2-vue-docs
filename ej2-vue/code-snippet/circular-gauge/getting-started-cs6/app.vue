<template>
    <div id="app">
        <div class='wrapper'>
            <ejs-circulargauge>
                <e-axes>
                    <e-axis startAngle=0 endAngle=180 :lineStyle='lineStyle'>
                    </e-axis>
                </e-axes>
            </ejs-circulargauge>
        </div>
    </div>
</template>
<script>
import { CircularGaugeComponent, AxesDirective, AxisDirective } from "@syncfusion/ej2-vue-circulargauge";

export default {
    name: "App",
    components: {
        "ejs-circulargauge": CirculargaugeComponent,
        "e-axes": AxesDirective,
        "e-axis": AxisDirective
    },
    data: function () {
        return {
            lineStyle: {
                width: 2,
                color: '#F8F8F8'
            }
        }
    }
};
</script>
<style>
.wrapper {
    max-width: 300px;
    max-height: 100px;
    margin: 0px;
}
</style>
