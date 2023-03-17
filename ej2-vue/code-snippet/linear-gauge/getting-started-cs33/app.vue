

<template>
  <div class="content-wrapper">
    <div align='center'>
      <ejs-lineargauge :valueChange='valueChange'>
        <e-axes>
          <e-axis>
            <e-pointers enableDrag=true>
              <e-pointer></e-pointer>
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
  methods: {
    valueChange: function (event) {
    }
  }
 };
</script>
<style>
#content-wrapper {
    padding: 0px !important;
}
</style>


