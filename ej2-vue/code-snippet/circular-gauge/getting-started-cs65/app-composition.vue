<template>
  <div id="app">
    <div class='wrapper'>
      <ejs-circulargauge>
        <e-axes>
          <e-axis>
            <e-pointers>
              <e-pointer :value='val' />
            </e-pointers>
          </e-axis>
        </e-axes>
      </ejs-circulargauge>
    </div>
  </div>
</template>
<script setup>
import { CircularGaugeComponent as EjsCirculargauge, AxesDirective as EAxes, AxisDirective as EAxis, PointersDirective as EPointers, PointerDirective as EPointer } from '@syncfusion/ej2-vue-circulargauge';

const val = 35;

</script>
<style>
.wrapper {
  max-width: 300px;
  margin: 0 auto;
}
</style>
