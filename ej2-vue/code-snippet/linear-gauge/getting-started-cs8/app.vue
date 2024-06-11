<template>
  <div class="content-wrapper">
    <div align='center'>
      <ejs-lineargauge>
        <e-axes>
          <e-axis minimum= 20  maximum= 140 :majorTicks='majorTicks' :minorTicks='minorTicks'>
          </e-axis>
        </e-axes>
      </ejs-lineargauge>
    </div>
  </div>
</template>
<script>

import { LinearGaugeComponent, AxisDirective, AxesDirective } from "@syncfusion/ej2-vue-lineargauge";

export default {
name: "App",
components: {
"ejs-lineargauge":LinearGaugeComponent,
"e-axes":AxesDirective,
"e-axis":AxisDirective

},
  data: function () {
    return {
      majorTicks: {
        interval: 20,
        color: "Orange",
        position: "Outside"
      },
      minorTicks: {
        interval: 5,
        color: 'red',
        position: "Cross"
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