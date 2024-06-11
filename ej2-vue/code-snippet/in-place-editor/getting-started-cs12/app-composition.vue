<template>
  <div id="app">
    <div id='container'>
      <div class="control-group">
        <table>
          <tr>
            <td><b>TextBox :</b></td>
            <ejs-inplaceeditor id="textbox" type="Text" mode="Inline" :model="textModel" v-model="value">
            </ejs-inplaceeditor>

            <ejs-inplaceeditor id="textbox2" type="Text" mode="Inline" :model="textModel" v-model="value">
            </ejs-inplaceeditor>
          </tr>
          <tr>
            <td><b>Datepicker :</b></td>
            <ejs-inplaceeditor id="dateeditor1" mode="Inline" type="Date" :model="dateModel" v-model="datePickerValue">
            </ejs-inplaceeditor>

            <ejs-inplaceeditor id="dateeditor2" mode="Inline" type="Date" :model="dateModel" v-model="datePickerValue">
            </ejs-inplaceeditor>
          </tr>
          <tr>
            <td><b>DropDownList :</b></td>
            <ejs-inplaceeditor id="dropDowneditor1" mode="Inline" type="DropDownList" :model="dropdownModel"
              v-model="dropdownValue">
            </ejs-inplaceeditor>

            <ejs-inplaceeditor id="dropDowneditor2" mode="Inline" type="DropDownList" :model="dropdownModel"
              v-model="dropdownValue">
            </ejs-inplaceeditor>
          </tr>
        </table>
      </div>
    </div>
  </div>
</template>
<script setup>
import { InPlaceEditorComponent as EjsInplaceeditor } from '@syncfusion/ej2-vue-inplace-editor';


let frameWorkList = ['Android', 'JavaScript', 'jQuery', 'TypeScript',
  'Angular', 'React', 'Vue', 'Ionic'];

const value = 'Andrew';
const dropdownValue = 'Android';
const datePickerValue = new Date('11/23/2018');
const textModel = {
  placeholder: 'Enter employee name'
};
const dropdownModel = {
  placeholder: 'Select frameWorks',
  dataSource: frameWorkList
};
const dateModel = {
  placeholder: 'Select date'
}

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
