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
      animation: { enable: false },
      majorTicks: {
        height: 5
      },
      ranges: [{
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
