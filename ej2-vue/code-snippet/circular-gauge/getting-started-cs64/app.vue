
<template>
    <div id="app">
      <div class='wrapper'>
         <ejs-circulargauge ></ejs-circulargauge>
      </div>
    </div>
</template>
<script>
import { CircularGaugeComponent } from '@syncfusion/ej2-vue-circulargauge';

export default {
  components: {
    'ejs-circulargauge': CircularGaugeComponent
  },
}
</script>
<style>
  .wrapper {
    max-width: 300px;
    margin: 0 auto;
  }
</style>


