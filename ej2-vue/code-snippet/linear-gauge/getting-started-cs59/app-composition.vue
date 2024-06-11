<template>
  <div class="content-wrapper">
    <div align='center'>
      <ejs-lineargauge>
        <e-axes>
          <e-axis>
            <e-pointers>
              <e-pointer value=80 type= 'Bar' color= '#f44141'></e-pointer>
            </e-pointers>
          </e-axis>
        </e-axes>
      </ejs-lineargauge>
   </div>
  </div>
</template>
<script setup>

import { LinearGaugeComponent as EjsLineargauge, AxesDirective as EAxes, AxisDirective as EAxis,
  PointerDirective as EPointer, PointersDirective as EPointers } from "@syncfusion/ej2-vue-lineargauge";

</script>
<style>
#content-wrapper {
    padding: 0px !important;
}
</style>