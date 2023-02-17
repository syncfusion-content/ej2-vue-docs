


<template>
    <div id="app">
        <div class='wrapper'>
            <ejs-circulargauge>
                <e-axes>
                    <e-axis :pointers= 'pointers' :startAngle = 270 :endAngle= 90 :lineStyle= 'lineStyle' :labelStyle= 'labelStyle' :majorTicks= 'majorTicks' :minorTicks= 'minorTicks' :radius= 'radius' :minimum= 0 :maximum= 100>
                    </e-axis>
                </e-axes>
            </ejs-circulargauge>
        </div>
    </div>
</template>
<script>
import Vue from 'vue';
import { CircularGaugePlugin, Gradient} from "@syncfusion/ej2-vue-circulargauge";

Vue.use(CircularGaugePlugin);
export default {
    data: function () {
        var pointerRadialGradient = {
            radius: '50%',
            innerPosition: { x: '50%', y: '50%' },
            outerPosition: { x: '50%', y: '50%' },
            colorStop: [
                { color: '#FEF3F9', offset: '0%', opacity: 0.9 },
                { color: '#E63B86', offset: '60%', opacity: 0.9 }]  
        }  
        return {
            lineStyle: { width: 3, color: '#E63B86' },
            labelStyle: {
                font: { size: '0px'}
            }, majorTicks: {
                height: 0
            }, minorTicks: {
                height: 0
            },
            radius: '90%',
            pointers: [{
                radius: '80%',
                value: 80,
                animation: { enable: true, duration: 1000 },
                pointerWidth: 10,
                radialGradient: pointerRadialGradient,
                cap: {
                    radius: 8,
                    color: 'white',
                    border: {
                        color: '#E63B86',
                        width: 1
                    }
                },
                needleTail: {
                    length: '20%',
                    radialGradient: pointerRadialGradient
                }
             }, {
                radius: '60%', value: 40,
                animation: { duration: 1000 },
                pointerWidth: 10,
                radialGradient: pointerRadialGradient,
                cap: {
                    radius: 8, color: 'white',
                    border: { color: '#E63B86', width: 1 }
                },
                needleTail: {
                    length: '20%',
                    radialGradient: pointerRadialGradient
                }
             }]
      }
    },
    provide: {
        circulargauge: [Gradient]
    }
};
</script>
<style>
  .wrapper {
    max-width: 500px;
    margin: 0 auto;
  }
</style>


