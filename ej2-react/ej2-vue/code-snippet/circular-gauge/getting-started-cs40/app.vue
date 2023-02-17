


<template>
<div id="app">
    <div class='wrapper'>
        <ejs-circulargauge>
            <e-axes>
                <e-axis>
                    <e-pointers>
                        <e-pointer value=60   type= 'RangeBar' radius= '60%'  roundedCornerRadius= 10 :animation ='animation'></e-pointer>
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
          animation: { enable: false }
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


