<template>
  <div class="content-wrapper">
    <div align='center'>
      <ejs-lineargauge :dragEnd='dragEnd'>
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

import { LinearGaugeComponent as EjsLineargauge, AxesDirective as EAxes, AxisDirective as EAxis,
  PointersDirective as EPointers, PointerDirective as EPointer} from "@syncfusion/ej2-vue-lineargauge";

const dragEnd = () => {
};

</script>
<style>
#content-wrapper {
    padding: 0px !important;
}
</style>