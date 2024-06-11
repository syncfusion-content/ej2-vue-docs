<template>
  <div class="content-wrapper">
    <div align='center'>
      <button v-on:click="clicked">Click</button>
      <ejs-lineargauge ref='gauge'>
        <e-axes>
          <e-axis>
            <e-pointers>
              <e-pointer value=80></e-pointer>
            </e-pointers>
          </e-axis>
        </e-axes>
      </ejs-lineargauge>
    </div>
  </div>
</template>
<script>

import { LinearGaugeComponent, PointerDirective, PointersDirective, AxesDirective, AxisDirective } from "@syncfusion/ej2-vue-lineargauge";

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
    clicked: function () {
      this.$refs.gauge.ej2Instances.setPointerValue(0, 0, 30);
    }
  }
 };
</script>
<style>
#content-wrapper {
    padding: 0px !important;
}
</style>