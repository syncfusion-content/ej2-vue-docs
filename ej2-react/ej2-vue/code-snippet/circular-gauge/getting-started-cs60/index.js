
import Vue from 'vue';
import {CircularGaugePlugin, GaugeTooltip, Annotations } from "@syncfusion/ej2-vue-circulargauge";
Vue.use(CircularGaugePlugin);
;
new Vue({
	el: '#app',
	template: `
<div id="app">
      <div class='wrapper'>
        <ejs-circulargauge  style='display:block' align='center' id='tooltip-container'  :enablePointerDrag='enablePointerDrag' :tooltip='tooltip'>
            <e-axes>
                <e-axis :annotations='annotations' :radius='gaugeradius' :startAngle='startAngle' minimum=0 maximum=120 :endAngle='endAngle' :majorTicks='majorTicks' :lineStyle='lineStyle' :minorTicks='minorTicks' :labelStyle='labelStyle' :ranges='ranges'>
                    <e-pointers>
                        <e-pointer :value='value' :cap='cap' :radius='pointerRadius' :color='color' :animation='animation'></e-pointer>
                    </e-pointers>
                </e-axis>
            </e-axes>
        </ejs-circulargauge>
    </div>
</div>
`,

    data: function () {
        return {
            annotations: [{
                  content: 'CircularGauge', zIndex:'1', angle: 180
            }],
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
                type:['Pointer', 'Range', 'Annotation'],
                enable: true,
                enableAnimation: false,
                annotationSettings: { template:'<div>CircularGauge</div>' },
                rangeSettings: { fill:'red' }
            },
            enablePointerDrag: true
        }
    },
    provide: {
        circulargauge: [GaugeTooltip, Annotations]
    },
 
});