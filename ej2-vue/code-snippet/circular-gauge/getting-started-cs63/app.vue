<template>
    <div id="app">
        <div class='wrapper'>
            <ejs-circulargauge style='display:block' align='center' id='tooltip-container' ref="gauge" :title='title'
                :titleStyle='titleStyle' :enablePointerDrag='enablePointerDrag' :tooltipRender='tooltipRender'
                :tooltip='tooltip'>
                <e-axes>
                    <e-axis :radius='gaugeradius' :startAngle='startAngle' minimum=0 maximum=120 :endAngle='endAngle'
                        :majorTicks='majorTicks' :lineStyle='lineStyle' :minorTicks='minorTicks'
                        :labelStyle='labelStyle' :ranges='ranges'>
                        <e-pointers>
                            <e-pointer :value='value' :cap='cap' :radius='pointerRadius' :color='color'
                                :animation='animation'></e-pointer>
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
            title: 'Tooltip Customization',
            titleStyle: {
                size: '15px',
                color: 'grey'
            },
            gaugeradius: '90%',
            startAngle: 240,
            endAngle: 120,
            lineStyle: {
                width: 0
            },
            majorTicks: {
                color: 'white',
                offset: -5,
                height: 12
            },
            minorTicks: {
                width: 0
            },
            labelStyle: {
                useRangeColor: true,
                font: {
                    color: '#424242',
                    size: '13px',
                    fontFamily: 'Roboto'
                }
            },
            value: 70,
            pointerRadius: '60%',
            color: '#33BCBD',
            cap: {
                radius: 10,
                border: {
                    color: '#33BCBD',
                    width: 5
                }
            },
            animation: {
                enable: true,
                duration: 1500
            },
            ranges: [{
                start: 0,
                end: 50,
                startWidth: 10,
                endWidth: 10,
                radius: '102%',
                color: '#3A5DC8',
            }, {
                start: 50,
                end: 120,
                radius: '102%',
                startWidth: 10,
                endWidth: 10,
                color: '#33BCBD',
            }],
            tooltip: {
                enable: true,
                fill: 'transparent',
                template: "<div id='templateWrap'><img src='src/circulargauge/images/range1.png'/><img src='src/circulargauge/images/range3.png'/><div class='des'><span>${Math.round(pointers[0].value)} MPH</span></div></div>",
                border: {
                    color: '#33BCBD',
                    width: 2
                }
            },
            enablePointerDrag: true
        }
    },
    provide: {
        circulargauge: [GaugeTooltip]
    },
    methods: {
        load: function (args) {
            let selectedTheme = location.hash.split("/")[1];
            selectedTheme = selectedTheme ? selectedTheme : "Material";
            args.gauge.theme =
                selectedTheme.charAt(0).toUpperCase() + selectedTheme.slice(1);
        },
        tooltipRender: function (args) {
            let color;
            let cotainerObj = this.$refs.gauge.ej2Instances;
            let value = args.pointer.currentValue;
            debugger;
            let content = args.content;
            if (value >= 0 && value <= 50) {
                let color = '#3A5DC8';
                content.children[1].remove();
                args.textStyle.color = color;
                args.border.color = color;
                cotainerObj.axes[0].pointers[0].animation.enable = false;
                cotainerObj.axes[0].pointers[0].color = color;
                cotainerObj.axes[0].pointers[0].cap.border.color = color;
                cotainerObj.setPointerValue(0, 0, value);
            } else {
                let color = '#33BCBD';
                content.children[0].remove();
                args.textStyle.color = color;
                args.border.color = color;
                cotainerObj.axes[0].pointers[0].animation.enable = false;
                cotainerObj.axes[0].pointers[0].color = color;
                cotainerObj.axes[0].pointers[0].cap.border.color = color;
                cotainerObj.setPointerValue(0, 0, value);
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

#templateWrap img {
    border-radius: 30px;
    width: 30px;
    height: 30px;
    margin: 0 auto;
}

#templateWrap .des {
    float: right;
    padding-left: 10px;
    line-height: 30px;
}
</style>