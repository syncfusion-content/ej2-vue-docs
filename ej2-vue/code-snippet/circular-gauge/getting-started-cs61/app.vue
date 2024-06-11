<template>
    <div id="app">
        <div class='wrapper'>
            <ejs-circulargauge :tooltip='tooltip'>
                <e-axes>
                    <e-axis>
                        <e-pointers>
                            <e-pointer value=70></e-pointer>
                        </e-pointers>
                    </e-axis>
                </e-axes>
            </ejs-circulargauge>
        </div>
    </div>
</template>
<script>

import { CircularGaugeComponent, AxesDirective, AxisDirective, PointerDirective, PointersDirective, GaugeTooltip } from "@syncfusion/ej2-vue-circulargauge";

export default {
    name: "App",
    components: {
        "ejs-circulargauge": CircularGaugeComponent,
        "e-axes": AxesDirective,
        "e-axis": AxisDirective,
        "e-pointers": PointersDirective,
        "e-pointer": PointerDirective,
    },
    data: function () {
        return {
            tooltip: {
                enable: true,
                template: '<div>Pointer: 70 </div>'
            }
        }
    },
    provide: {
        circulargauge: [GaugeTooltip]
    },
};
</script>
<style>
.wrapper {
    max-width: 300px;
    margin: 0 auto;
}
</style>
