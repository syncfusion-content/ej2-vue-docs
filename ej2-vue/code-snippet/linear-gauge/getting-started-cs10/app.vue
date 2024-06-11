<template>
  <div class="content-wrapper">
    <div align='center'>
      <ejs-lineargauge >
        <e-axes>
          <e-axis :labelStyle='labelStyle2'>
          </e-axis>
        </e-axes>
      </ejs-lineargauge>
    </div>
  </div>
</template>
<script>

import { LinearGaugeComponent, AxisDirective, AxesDirective} from "@syncfusion/ej2-vue-lineargauge";

export default {
name: "App",
components: {
"ejs-lineargauge":LinearGaugeComponent,
"e-axes":AxesDirective,
"e-axis":AxisDirective
},
  data: function () {
    return {
      labelStyle2: {
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