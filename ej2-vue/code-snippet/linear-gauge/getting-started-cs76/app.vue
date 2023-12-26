

<template>
    <div id="app">
        <div class='wrapper'>
             <ejs-lineargauge animationDuration='3000'  style='display:block' align='center' id='defaultContainer' :orientation='orientation'>
                <e-annotations>
                    <e-annotation :axisIndex='axisIndex' :axisValue='axisValue' :x='positionX' zIndex='1' :y='positionY' :zIndex='zIndex' :content="content">
                    </e-annotation>
                </e-annotations>
                <e-axes>
                    <e-axis :majorTicks='majorTicks' :minorTicks='minorTicks' :labelStyle='labelStyle' >
                        <e-pointers>
                            <e-pointer :value='value' :height='height' :placement='placement' :width='width' :offset='offset' :markerType='markerType' ></e-pointer>
                        </e-pointers>
                        <e-ranges>
                        <e-range start=0 end="50" startWidth="10" endWidth="10" color="#F45656" offset="35"></e-range>
                        </e-ranges>
                    </e-axis>
                </e-axes>
             </ejs-lineargauge>
        </div>
    </div>
</template>

<script>
import Vue from 'vue';
import { LinearGaugePlugin, Annotations } from '@syncfusion/ej2-vue-lineargauge';
Vue.use(LinearGaugePlugin);



export default {
    data() {
        return {
          content:'<div id="pointer" style="width: 70px;margin-left:-25%;margin-top: 42%;font-size: 16px;">10 MPH</div>',
        orientation:"Horizontal",
        value:10,
        height:15,
        width:15,
        offset:-40,
        markerType:'Triangle',
        placement:'Near',
        majorTicks: { 
            interval: 10,
            height:20,
            color:'#9E9E9E'
        },
        minorTicks:{
            interval: 2,
            height:10,
            color:'#9E9E9E'
        },
        labelStyle:{
            offset: 48,
            font: {
                fontFamily: 'inherit'
            }
        },
        axisIndex: 0,
        axisValue: 10,
        positionX: 10,
        positionY: -70,
        zIndex:'1'
        }
    },
     provide: {
        lineargauge: [Annotations]
    },
}
</script>
<style>
.wrapper {
    max-width: 400px;
    margin: 0 auto;
}
</style>


