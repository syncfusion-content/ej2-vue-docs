<template>
    <div id="app">
        <div class='wrapper'>
            <ejs-circulargauge>
                <e-axes>
                    <e-axis minimum=50 maximum=250>
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
    }
};
</script>
<style>
.wrapper {
    max-width: 300px;
    margin: 0 auto;
}
</style>
