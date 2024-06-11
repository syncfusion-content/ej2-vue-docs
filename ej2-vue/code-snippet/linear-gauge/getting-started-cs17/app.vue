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

import { LinearGaugeComponent, AxesDirective, AxisDirective } from "@syncfusion/ej2-vue-lineargauge";

export default {
name: "App",
components: {
"ejs-lineargauge":LinearGaugeComponent,
"e-axes":AxesDirective,
"e-axis":AxisDirective
},
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