


<template>
  <div id="app">
    <div class='wrapper'>
      <ejs-button id='print' isToggle="true" v-on:click.native='clickPrint'> Print
      </ejs-button>
      <ejs-circulargauge id="gauge" ref="gauge" allowPrint="true">
      </ejs-circulargauge>
    </div>
  </div>
</template>
<script>
import Vue from 'vue';
import { CircularGaugePlugin, Print } from "@syncfusion/ej2-vue-circulargauge";
import { ButtonPlugin } from '@syncfusion/ej2-vue-buttons';
Vue.use(CircularGaugePlugin);
Vue.use(ButtonPlugin);
export default {
  data() {
    return {
    }
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

