


<template>
    <div id="app">
         <div class='wrapper'>
             <ejs-circulargauge>
                 <e-axes>
                     <e-axis>
                         <e-pointers>
                             <e-pointer value=90  :animation= 'animation' ></e-pointer>
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
         animation: {
                enable: true,
                duration: 1500
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


