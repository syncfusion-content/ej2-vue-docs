

<template>
  <div class="content-wrapper">
    <div align='center'>
      <ejs-lineargauge >
        <e-axes>
          <e-axis :showLastLabel=true maximum=115>
            <e-pointers>
              <e-pointer value=20 height=15 width=15 color='#757575' offset=30></e-pointer>
            </e-pointers>
          </e-axis>
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
    }
  }
};
</script>
<style>
#content-wrapper {
    padding: 0px !important;
}
</style>


