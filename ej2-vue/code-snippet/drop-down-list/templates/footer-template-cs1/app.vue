

<template>
  <div id="app">
    <div id='container' style="margin:50px auto 0; width:250px;">
        <br>
        <ejs-dropdownlist id='dropdownlist' placeholder='Select a game' :footerTemplate='footerTemplate' :dataSource='dataSource'></ejs-dropdownlist>
    </div>
  </div>
</template>
<script>
import Vue from 'vue';
import { DropDownListPlugin } from "@syncfusion/ej2-vue-dropdowns";
Vue.use(DropDownListPlugin);
var itemVue = Vue.component("itemTemplate", {
  template: `<span class='foot'> Total list item: 5</span>`,
  data() {
    return {
      data: {}
    };
  }
});
export default {
  data (){
      var sportsData =  ['Badminton', 'Cricket', 'Football', 'Golf', 'Tennis'];
    return {
        footerTemplate : function(e) {
          return {
            template: itemVue
          }
        },
        dataSource : sportsData,
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


