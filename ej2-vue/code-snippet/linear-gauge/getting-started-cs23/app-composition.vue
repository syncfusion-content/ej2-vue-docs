<template>
  <div class="content-wrapper">
    <div align='center'>
      <ejs-lineargauge :dragMove='dragMove'>
        <e-axes>
          <e-axis>
            <e-pointers>
              <e-pointer enableDrag=true></e-pointer>
            </e-pointers>
          </e-axis>
        </e-axes>
      </ejs-lineargauge>
    </div>
  </div>
</template>
<script setup>

import { LinearGaugeComponent as EjsLineargauge, AxisDirective as EAxis, AxesDirective as EAxes, PointerDirective as EPointer, PointersDirective as EPointers } from "@syncfusion/ej2-vue-lineargauge";

const dragMove = () => {
};

</script>
<style>
#content-wrapper {
    padding: 0px !important;
}
</style>