<template>
  <div id="app">
    <div class='wrapper'>
      <ejs-circulargauge>
        <e-axes>
          <e-axis :ranges='ranges'></e-axis>
        </e-axes>
      </ejs-circulargauge>
    </div>
  </div>
</template>
<script>

import { CircularGaugeComponent } from "@syncfusion/ej2-vue-circulargauge";

export default {
  name: "App",
  components: {
    "ejs-circulargauge": CircularGaugeComponent,
    "e-axes": AxesDirective,
    "e-axis": AxisDirective
  },
  data: function () {
    return {
      ranges: [{
        start: 40,
        end: 80
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
