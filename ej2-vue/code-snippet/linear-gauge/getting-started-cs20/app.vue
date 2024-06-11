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

import { LinearGaugeComponent, AxesDirective, AxisDirective, PointerDirective, PointersDirective } from "@syncfusion/ej2-vue-lineargauge";

export default {
name: "App",
components: {
"ejs-lineargauge":LinearGaugeComponent,
"e-axes":AxesDirective,
"e-axis":AxisDirective,
"e-pointers":PointersDirective,
"e-pointer":PointerDirective
},
  methods: {
    axisLabelRender: function () {
    }
  }
 };
</script>
<style>
#content-wrapper {
    padding: 0px !important;
}
</style>