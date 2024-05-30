<template>
  <div id="app">
    <div class='wrapper'>
      <ejs-circulargauge>
        <e-axes>
          <e-axis minimum=0 maximum=120 :majorTicks='majorTicks' :ranges='ranges'>
            <e-pointers>
              <e-pointer value=70 radius='60%' :animation='animation'></e-pointer>
            </e-pointers>
          </e-axis>
        </e-axes>
      </ejs-circulargauge>
    </div>
  </div>
</template>
<script setup>
import { CircularGaugeComponent as EjsCirculargauge, AxesDirective as EAxes, AxisDirective as EAxis, PointersDirective as EPointers, PointerDirective as EPointer } from "@syncfusion/ej2-vue-circulargauge";

const animation = { enable: false }
const majorTicks = {
  height: 5
}
const ranges = [{
  start: 0,
  end: 40,
  startWidth: 15,
  endWidth: 15,
  roundedCornerRadius: 10,
  radius: '110%'
}, {
  start: 40,
  end: 80,
  startWidth: 15,
  endWidth: 15,
  roundedCornerRadius: 10,
  radius: '110%'
}, {
  start: 80,
  end: 120,
  startWidth: 15,
  endWidth: 15,
  roundedCornerRadius: 10,
  radius: '110%'
}]

</script>
<style>
.wrapper {
  max-width: 300px;
  margin: 0 auto;
}
</style>
