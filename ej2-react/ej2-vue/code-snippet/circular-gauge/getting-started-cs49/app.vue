


<template>
    <div id="app">
        <div class='wrapper'>
            <ejs-button id='print' isToggle="true" v-on:click.native='clickPrint'>
            </ejs-button>
            <ejs-circulargauge id="gauge" ref="gauge">
            </ejs-circulargauge>
        </div>
  </div>
</template>
<script>
import Vue from 'vue';
import { CircularGaugePlugin } from "@syncfusion/ej2-vue-circulargauge";
import { ButtonPlugin } from '@syncfusion/ej2-vue-buttons';
Vue.use(CircularGaugePlugin, ButtonPlugin);
export default {
  data () {
    return {
    }
  },
methods: {
    clickPrint:function(args){
        this.$refs.gauge.ej2Instances.print();
    }
}
};
</script>
<style>
  .wrapper {
    max-width: 300px;
    margin: 0 auto;
  }

  @import '../node_modules/@syncfusion/ej2-base/styles/material.css';
  @import '../node_modules/@syncfusion/ej2-buttons/styles/material.css';

</style>


