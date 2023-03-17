


<template>
    <div id="app">
        <div class='wrapper'>
            <ejs-circulargauge>
                 <e-axes>
                     <e-axis>
                         <e-pointers>
                             <e-pointer value=90  radius= '50%' :needleTail= 'needleTail' :cap ='cap'></e-pointer>
                        </e-pointers>
                     </e-axis>
                  </e-axes>
            </ejs-circulargauge>
        </div>
    </div>
</template>
<script>
import Vue from 'vue';
import { CircularGaugePlugin } from "@syncfusion/ej2-vue-circulargauge";

Vue.use(CircularGaugePlugin);
export default {
    data: function () {
        return {
           cap: {
                radius: 10
            },
            needleTail: {
                length: '25%'
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
</style>


