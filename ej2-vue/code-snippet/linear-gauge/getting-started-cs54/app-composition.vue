<template>
  <div class="content-wrapper">
    <div align='center'>
      <button v-on:click="clicked">Click</button>
      <ejs-lineargauge ref='gauge'>
        <e-axes>
          <e-axis>
            <e-pointers>
              <e-pointer value=10></e-pointer>
            </e-pointers>
          </e-axis>
        </e-axes>
      </ejs-lineargauge>
    </div>
  </div>
</template>
<script setup>

import { ref } from "vue";
import { LinearGaugeComponent as EjsLineargauge, AxesDirective as EAxes, AxisDirective as EAxis,
  PointerDirective as EPointer, PointersDirective as EPointers } from "@syncfusion/ej2-vue-lineargauge";

const gauge = ref(null);

const clicked = () => {
  gauge.value.ej2Instances.refresh();
};

</script>
<style>
#content-wrapper {
    padding: 0px !important;
}
</style>