<template>
    <div id="app">
        <div class='wrapper'>
            <ejs-circulargauge :animationDuration=2000 :background='background' style='display:block' align='center'
                id='gauge'>
                <e-axes>
                    <e-axis :radius='gaugeRadius' :annotations='annotations' :startAngle='startAngle'
                        :endAngle='endAngle' :majorTicks='majorTicks' :lineStyle='lineStyle' :minorTicks='minorTicks'
                        :labelStyle='labelStyle'>
                        <e-pointers>
                            <e-pointer :value='value' :radius='pointerRadius' :color='color'
                                :pointerWidth='pointerWidth' :cap='cap' :needleTail='needleTail'></e-pointer>
                        </e-pointers>
                        <e-ranges>
                            <e-range start="0" end="30" color="#E63B86" startWidth="22" endWidth="22" radius="60%"
                                :linearGradient="linearGradient"></e-range>
                            <e-range start="30" end="60" color="#E0E0E0" startWidth="22" endWidth="22"
                                radius="60%"></e-range>
                        </e-ranges>
                    </e-axis>
                </e-axes>
            </ejs-circulargauge>
        </div>
    </div>
</template>

<script>

import { CircularGaugeComponent, AxesDirective, AxisDirective, PointerDirective, PointersDirective, RangesDirective, RangeDirective, Annotations, Gradient } from '@syncfusion/ej2-vue-circulargauge';

export default {
    name: "App",
    components: {
        "ejs-circulargauge": CircularGaugeComponent,
        "e-axes": AxesDirective,
        "e-axis": AxisDirective,
        "e-pointers": PointersDirective,
        "e-pointer": PointerDirective,
        "e-ranges": RangesDirective,
        "e-range": RangeDirective
    },
    data() {
        return {
            annotations: [{
                angle: 165,
                radius: '35%',
                content: '<div style="font-size:18px;margin-left: -20px;margin-top: -12px; color:#9DD55A">60</div>',
                zIndex: '1'
            }],
            linearGradient: {
                startValue: '0%',
                endValue: '100%',
                colorStop: [
                    { color: '#9e40dc', offset: '0%', opacity: 1 },
                    { color: '#d93c95', offset: '70%', opacity: 1 },
                ],
            },
            gaugeRadius: '80%',
            startAngle: 230,
            endAngle: 130,
            background: 'transparent',
            majorTicks: {
                offset: 5
            },
            lineStyle: { width: 8, color: '#E0E0E0' },
            minorTicks: {
                offset: 5
            },
            labelStyle: {
                font: {
                    fontFamily: 'inherit'
                },
                offset: -1
            },
            value: 60,
            pointerRadius: '60%',
            pointerWidth: 7,
            color: '#c06c84',
            cap: {
                radius: 8,
                color: '#c06c84',
                border: { width: 0 }
            },
            needleTail: {
                length: '0%',
            }
        }
    },
    provide: {
        circulargauge: [Annotations, Gradient]
    },
}
</script>
<style>
.wrapper {
    max-width: 400px;
    margin: 0 auto;
}
</style>
