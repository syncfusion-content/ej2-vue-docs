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
<script>

import { CircularGaugeComponent, AxesDirective, AxisDirective, PointerDirective, PointersDirective } from "@syncfusion/ej2-vue-circulargauge";

export default {
  name: "App",
  components: {
    "ejs-circulargauge": CircularGaugeComponent,
    "e-axes": AxesDirective,
    "e-axis": AxisDirective,
    "e-pointers": PointersDirective,
    "e-pointer": PointerDirective
  },
  data: function () {
    return {
      ranges: [{
        start: 0,
        end: 100,
        startWidth: 8, endWidth: 8,
        radius: '108%',
        color: '#30B32D'
      }]
    }
  }
};
</script>
<style>
.wrapper {
  max-width: 300px;
  margin: 0 auto;
}
</style>
