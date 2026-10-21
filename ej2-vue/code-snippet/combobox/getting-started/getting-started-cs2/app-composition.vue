<template>
  <div id="app">
    <div id='container' style="margin:50px auto 0; width:250px;">
      <br>
      <ejs-combobox id='combobox' :dataSource='sportsData' placeholder='Select a game'
        :floatLabelType="auto"></ejs-combobox>
    </div>
  </div>
</template>
<script setup>
import { ComboBoxComponent as EjsCombobox } from "@syncfusion/ej2-vue-dropdowns";

const sportsData = ['Badminton', 'Cricket', 'Football', 'Golf', 'Tennis'];

</script>
<style>
@import "../node_modules/@syncfusion/ej2-material3-theme/styles/combo-box/index.css";

.e-input-group.e-control-wrapper.e-float-input .e-float-text::after {
  content: '*';
  color: red;
}
</style>
