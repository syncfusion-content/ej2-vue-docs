

<template>
  <div id="app">
    <div id='container' style="margin:50px auto 0; width:250px;">
        <br>
        <ejs-dropdownlist id='dropdownlist' ref="DropdownInstance" placeholder='Select a game' popupHeight='200px' :fields='fields' :dataSource='dataSource'></ejs-dropdownlist>
    </div>
  </div>
</template>
<script>
import Vue from 'vue';
import { DropDownListPlugin } from "@syncfusion/ej2-vue-dropdowns";

Vue.use(DropDownListPlugin);
export default {
    mounted () {
      let dropdownObj = this.$refs.DropdownInstance;
       document.onkeyup = function (e) {
            if (e.altKey && e.keyCode === 84) {
            // press alt+t to focus the control.
            dropdownObj.$el.focus();
            }
        }
    },
  data (){
    return {
      dataSource: [
          { Id: 'Game1', Game: 'Badminton' },
          { Id: 'Game2', Game: 'Basketball' },
          { Id: 'Game3', Game: 'Cricket' },
          { Id: 'Game4', Game: 'Football' },
          { Id: 'Game5', Game: 'Golf' },
          { Id: 'Game6', Game: 'Hockey' },
          { Id: 'Game7', Game: 'Rugby' },
          { Id: 'Game8', Game: 'Snooker' },
          { Id: 'Game9', Game: 'Tennis' }
        ],
        fields: { text: 'Game', value: 'Id' }
    }
  }
}

</script>
<style>
@import "../../node_modules/@syncfusion/ej2-base/styles/material.css";
@import "../../node_modules/@syncfusion/ej2-inputs/styles/material.css";
@import "../../node_modules/@syncfusion/ej2-vue-dropdowns/styles/material.css";
</style>


