

<template>
    <div id="app">
        <div class='wrapper'>
           <ejs-lineargauge style='display:block' align='center' id='gauge' orientation="Horizontal">
            <e-axes>
                <e-axis  :majorTicks='majorTicks' :minorTicks='minorTicks' :labelStyle='labelStyle'>
                    <e-pointers>
                    <e-pointer :value='value' markerType="Image" imageUrl="https://ej2.syncfusion.com/vue/demos/src/linear-gauge/images/step-count.png" width="40" height="40" offset="-27"></e-pointer>
                    </e-pointers>
                </e-axis>
            </e-axes>
        </ejs-lineargauge>
        </div>
    </div>
</template>

<script>
import Vue from 'vue';
import { LinearGaugePlugin } from '@syncfusion/ej2-vue-lineargauge';
Vue.use(LinearGaugePlugin);



export default {
    data() {
        return {
            minorTicks: {
                position:'Outside'
            },
            majorTicks:{
              interval:20,
              position:'Outside'
            },
            labelStyle: {
                font: {
                    fontFamily: 'inherit'
                },
                position:'Outside'
            },
            value:60
        }
    }
}
</script>
<style>
.wrapper {
    max-width: 400px;
    margin: 0 auto;
}
</style>


