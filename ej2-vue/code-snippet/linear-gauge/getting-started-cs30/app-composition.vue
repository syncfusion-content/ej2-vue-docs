<template>
  <div class="content-wrapper">
    <div align='center'>
      <ejs-lineargauge :loaded='loaded'>
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
<script setup>

import { LinearGaugeComponent as EjsLineargauge, PointerDirective as EPointer, PointersDirective as EPointers,
  AxesDirective as EAxes, AxisDirective as EAxis } from "@syncfusion/ej2-vue-lineargauge";

const loaded = () => {
};

</script>
<style>
#content-wrapper {
    padding: 0px !important;
}
</style>