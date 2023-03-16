

<template>
  <div class="content-wrapper">
    <div align='center'>
      <ejs-lineargauge :axisLabelRender='axisLabelRender'>
        <e-axes>
          <e-axis>
            <e-pointers>
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
    axisLabelRender: function (event) {
    }
  }
 };
</script>
<style>
#content-wrapper {
    padding: 0px !important;
}
</style>


