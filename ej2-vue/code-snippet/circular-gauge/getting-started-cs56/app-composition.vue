<template>
  <div id="app">
    <div class='wrapper'>
      <ejs-circulargauge enableRangeDrag='true' height='250px' width='250px'>
        <e-axes>
          <e-axis :ranges='ranges'>
            <e-pointers>
              <e-pointer value=50></e-pointer>
            </e-pointers>
          </e-axis>
        </e-axes>
      </ejs-circulargauge>
    </div>
  </div>
</template>
<script setup>

import { CircularGaugeComponent as EjsCirculargauge, AxesDirective as EAxes, AxisDirective as EAxis, PointersDirective as EPointers, PointerDirective as EPointer } from "@syncfusion/ej2-vue-circulargauge";

const ranges = [{
  start: 0,
  end: 100,
  startWidth: 8, endWidth: 8,
  radius: '108%',
  color: '#30B32D'
}]

</script>
<style>
.wrapper {
  max-width: 300px;
  margin: 0 auto;
}
</style>
