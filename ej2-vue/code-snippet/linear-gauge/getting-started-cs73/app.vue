

<template>
  <div class="content-wrapper">
    <div align='center'>
      <ejs-lineargauge :tooltip='tooltip'>
        <e-axes>
          <e-axis >
            <e-pointers>
              <e-pointer value=80></e-pointer>
            </e-pointers>
          </e-axis>
        </e-axes>
      </ejs-lineargauge>
    </div>
  </div>
</template>
<script>
import Vue from 'vue';
import { LinearGaugePlugin, GaugeTooltip } from "@syncfusion/ej2-vue-lineargauge";
Vue.use(LinearGaugePlugin);
export default {
  data: function () {
    return{
      tooltip: {
        enable: true,
        fill: '#e5bcbc',
        border: {
          color: '#d80000',
          width: 2
        }
      }
    }
  },
  provide: {
    lineargauge: [ GaugeTooltip]
  },
};
</script>
<style>
#content-wrapper {
    padding: 0px !important;
}
</style>


