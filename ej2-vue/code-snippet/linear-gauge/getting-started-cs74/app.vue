<template>
  <div class="content-wrapper">
    <div align='center'>
      <ejs-lineargauge :tooltip='tooltip'>
        <e-axes>
          <e-axis >
            <e-pointers>
              <e-pointer value=80 type="Bar" color="blue"></e-pointer>
            </e-pointers>
          </e-axis>
        </e-axes>
      </ejs-lineargauge>
    </div>
  </div>
</template>
<script>

import { LinearGaugeComponent, GaugeTooltip, AxisDirective, AxesDirective, PointerDirective, PointersDirective } from "@syncfusion/ej2-vue-lineargauge";

export default {
name: "App",
components: {
"ejs-lineargauge":LinearGaugeComponent,
"e-axes":AxesDirective,
"e-axis":AxisDirective,
"e-pointers":PointersDirective,
"e-pointer":PointerDirective
},
  data: function () {
    return{
      tooltip: {
        enable: true,
        position: "Center"
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