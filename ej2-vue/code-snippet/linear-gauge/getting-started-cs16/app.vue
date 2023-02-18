

<template>
  <div class="content-wrapper">
    <div align='center'>
      <ejs-lineargauge >
        <e-axes>
          <e-axis opposedPosition= true></e-axis>
        </e-axes>
      </ejs-lineargauge>
    </div>
  </div>
</template>
<script>
import Vue from 'vue';
import { LinearGaugePlugin } from "@syncfusion/ej2-vue-lineargauge";
Vue.use(LinearGaugePlugin);
export default { };
</script>
<style>
#content-wrapper {
    padding: 0px !important;
}
</style>


