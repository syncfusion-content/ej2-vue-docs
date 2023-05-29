


<template>
    <div id="app">
        <div class='wrapper'>
           <ejs-circulargauge enablePointerDrag='true' height='250px' width='250px'>
              <e-axes>
                  <e-axis>
                      <e-pointers>
                          <e-pointer value=50></e-pointer>
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


