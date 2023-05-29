

<template>
  <div class="content-wrapper">
    <div align='center'>
      <ejs-lineargauge >
        <e-axes>
          <e-axis :labelStyle='labelStyle'></e-axis>
          <e-axis :opposedPosition='opposedPosition' :labelStyle='labelStyle1'></e-axis>
        </e-axes>
      </ejs-lineargauge>
    </div>
  </div>
</template>
<script>
import Vue from 'vue';
import { LinearGaugePlugin } from "@syncfusion/ej2-vue-lineargauge";
Vue.use(LinearGaugePlugin);
export default {
  data: function () {
    return {
      labelStyle: {
        format: '{value}°C'
      },
      opposedPosition: true,
      labelStyle1: {
        format: '{value}°F'
      }
    }
  }
};
</script>
<style>
#content-wrapper {
    padding: 0px !important;
}
</style>


