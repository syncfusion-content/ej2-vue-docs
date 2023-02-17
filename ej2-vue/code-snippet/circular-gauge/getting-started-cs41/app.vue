


<template>
<div id="app">
    <div class='wrapper'>
        <ejs-circulargauge>
            <e-axes>
                <e-axis>
                    <e-pointers>
                        <e-pointer value=50   type= 'RangeBar' radius= '60%' color= '#007DD1' pointerWidth: 15 :border= 'border'></e-pointer>
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
          border: {
                color: 'grey',
                width: 2
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


