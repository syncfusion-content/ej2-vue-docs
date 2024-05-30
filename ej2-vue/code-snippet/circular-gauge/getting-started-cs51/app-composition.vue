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
<script setup>
import { CircularGaugeComponent as EjsCirculargauge } from "@syncfusion/ej2-vue-circulargauge";

const ranges = [{
  start: 40,
  end: 80
}]

</script>
<style>
.wrapper {
  max-width: 300px;
  margin: 0 auto;
}
</style>
