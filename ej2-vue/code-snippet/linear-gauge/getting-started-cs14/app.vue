

<template>
  <div class="content-wrapper">
    <div align='center'>
      <ejs-lineargauge :orientation='orientation' :axes= 'axes' >
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
      orientation: "Horizontal",
      axes: [{
        minimum: 20,
        maximum: 140,
      }]
    }
  }
};
</script>


