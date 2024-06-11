<template>
  <div id="app">
    <div class='wrapper'>
      <ejs-button id='print' isToggle="true" v-on:click='clickPrint'> Print
      </ejs-button>
      <ejs-circulargauge id="gauge" ref="gauge" allowPrint="true">
      </ejs-circulargauge>
    </div>
  </div>
</template>
<script>
import { CircularGaugeComponent, Print } from "@syncfusion/ej2-vue-circulargauge";
import { ButtonComponent } from '@syncfusion/ej2-vue-buttons';


export default {
  name: "App",
  components: {
    "ejs-button": ButtonComponent,
    "ejs-circulargauge": CircularGaugeComponent
  },
  methods: {
    clickPrint: function (args) {
      this.$refs.gauge.ej2Instances.print();
    }
  },
  provide: {
    circulargauge: [Print],
  }
};
</script>
<style>
.wrapper {
  max-width: 300px;
  margin: 0 auto;
}
</style>
