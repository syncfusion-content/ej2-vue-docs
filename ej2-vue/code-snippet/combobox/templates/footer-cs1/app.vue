

<template>
  <div id="app">
    <div id='container' style="margin:50px auto 0; width:250px;">
        <br>
        <ejs-combobox id='combobox' :dataSource='sportsData' :footerTemplate='footerTemplate' placeholder="Select a game"></ejs-combobox>
    </div>
  </div>
</template>
<script>
import Vue from 'vue';
import { ComboBoxPlugin } from "@syncfusion/ej2-vue-dropdowns";
Vue.use(ComboBoxPlugin);

var footerVue = Vue.component("footerTemplate", {
  template: `<span class='foot'> Total list item: 4</span>`,
  data() {
    return {
      data: {}
    };
  }
});

export default {
  data (){
      var data = ["BasketBall", "Cricket", "Football", "Golf"];
    return {
        sportsData: data,
        footerTemplate : function(e) {
          return {
            template: footerVue
          }
        }
    }
  }
}
</script>
<style>
@import "../../node_modules/@syncfusion/ej2-base/styles/material.css";
@import "../../node_modules/@syncfusion/ej2-inputs/styles/material.css";
@import "../../node_modules/@syncfusion/ej2-vue-dropdowns/styles/material.css";
  .foot {
    text-indent: 1.2em;
    display: block;
    font-size: 15px;
    line-height: 40px;
    border-top: 1px solid #e0e0e0;
}
</style>


