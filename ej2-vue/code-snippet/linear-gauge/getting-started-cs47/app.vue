

<template>
  <div class="content-wrapper">
    <div align='center'>
      <ejs-lineargauge  width= '100%' height= '50%'></ejs-lineargauge>
    </div>
  </div>
</template>
<script>
import Vue from 'vue';
import { LinearGaugePlugin } from '@syncfusion/ej2-vue-lineargauge';
Vue.use(LinearGaugePlugin);
export default { }
</script>
<style>
#content-wrapper {
    padding: 0px !important;
}
</style>


