<template>
  <div id="app">
    <div class="control-group">
      <h3> Modify Basic Details </h3>
      <table>
        <tr>
          <td>Name</td>
          <td class='left'>
            <ejs-inplaceeditor id="element" type="Text" mode="Inline" value="Andrew"
              :model="textModel"></ejs-inplaceeditor>
          </td>
        </tr>
        <tr>
          <td>Date of Birth</td>
          <td class='left'>
            <ejs-inplaceeditor id="dateofbirth" type="Date" mode="Inline" :value="dateValue"
              :model="dateModel"></ejs-inplaceeditor>
          </td>
        </tr>
        <tr>
          <td>Gender</td>
          <td class='left'>
            <ejs-inplaceeditor id="gender" type="DropDownList" mode="Inline" value="Male"
              :model="dropdownModel"></ejs-inplaceeditor>
          </td>
        </tr>
      </table>
    </div>
  </div>
</template>
<script setup>
import { InPlaceEditorComponent as EjsInplaceeditor } from '@syncfusion/ej2-vue-inplace-editor';

const dateValue = new Date('04/12/2018');
const dateModel = {
  showTodayButton: true,
  placeholder: 'Select date of birth'
};
const textModel = {
  placeholder: 'Enter your name'
};
const dropdownModel = {
  dataSource: ['Male', 'Female'],
  placeholder: 'Select gender'
};
</script>
<style>
@import "../node_modules/@syncfusion/ej2-base/styles/material.css";
@import "../node_modules/@syncfusion/ej2-buttons/styles/material.css";
@import "../node_modules/@syncfusion/ej2-calendars/styles/material.css";
@import "../node_modules/@syncfusion/ej2-dropdowns/styles/material.css";
@import "../node_modules/@syncfusion/ej2-inputs/styles/material.css";
@import "../node_modules/@syncfusion/ej2-lists/styles/material.css";
@import "../node_modules/@syncfusion/ej2-navigations/styles/material.css";
@import "../node_modules/@syncfusion/ej2-popups/styles/material.css";
@import "../node_modules/@syncfusion/ej2-richtexteditor/styles/material.css";
@import "../node_modules/@syncfusion/ej2-splitbuttons/styles/material.css";
@import "../node_modules/@syncfusion/ej2-vue-inplace-editor/styles/material.css";
</style>

<style>
#app {
  visibility: hidden;
}

#app .control-group {
  text-align: center;
  margin-top: 50px;
}

#app .control-group table {
  width: 400px;
  margin: auto;
}

#app .control-group table td {
  height: 70px;
  width: 150px;
}

#app .control-group table td.left {
  text-align: left;
}
</style>
