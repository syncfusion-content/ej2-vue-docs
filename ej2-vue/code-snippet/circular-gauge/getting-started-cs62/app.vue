<template>
    <div id="app">
        <div class='wrapper'>
            <ejs-circulargauge id='tooltip-container' ref="gauge" enablePointerDrag='enablePointerDrag'
                :tooltipRender='tooltipRender' :tooltip='tooltip'>
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
        "e-pointer": PointerDirective
    },
    data: function () {
        return {
            enablePointerDrag: true,
            tooltip: {
                enable: true,
                template: '<div id=\'templateWrap\'><div class=\'des\'>pointer <span>${Math.round(value)} </span></div></div>'
            }
        }
    },
    provide: {
        circulargauge: [GaugeTooltip]
    },
    methods: {
        tooltipRender: function (args) {
            let value = args.pointer.currentValue;
            debugger;
            this.$refs.gauge.ej2Instances.setPointerValue(0, 0, value);
        }
    }
};
</script>
<style>
.wrapper {
    max-width: 300px;
    margin: 0 auto;
}

#templateWrap .des {
    float: right;
    padding-left: 10px;
    line-height: 30px;
}
</style>
