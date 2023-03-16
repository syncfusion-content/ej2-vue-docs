

<template>
    <div id="app">
      <div class="container">
        <div class="control-group" style="text-align:center;margin: 100px auto">
          Best Employee of the year:  <ejs-inplaceeditor id="element" type="DropDownList" mode="Inline" value="Andrew Fuller" name="Employee" :url="serviceUrl" primaryKey="Employee" adaptor="UrlAdaptor" :model="dropdownModel" :actionSuccess= "actionSuccess" :created='created'></ejs-inplaceeditor>
        </div>
        <table style="margin:auto;width:50%">
          <tr>
            <td style="text-align: left">
               Old Value :
            </td>
            <td id="oldValue" ref="oldValue" style="text-align: left">

            </td>
          </tr>
          <tr>
            <td style="text-align: left">
               New Value :
            </td>
            <td id="newValue" ref="newValue" style="text-align: left">
                Andrew Fuller
            </td>
          </tr>
        </table>
      </div>
    </div>
</template>
<script>
import Vue from 'vue';
import { InPlaceEditorPlugin, MultiSelect, ActionEventArgs } from '@syncfusion/ej2-vue-inplace-editor';

Vue.use(InPlaceEditorPlugin);
export default {
  name: 'app',
  data () {
    return {
      serviceUrl: "https://ej2services.syncfusion.com/development/web-services/api/Editor/UpdateData",
      dropdownModel: {
           dataSource: ['Andrew Fuller', 'Janet Leverling', 'Laura Callahan', 'Margaret Hamilt', 'Michael Suyama', 'Nancy Davloio', 'Robert King'],
           popupHeight: '200px',
           placeholder: 'Select employee'
      },
    }
  },
  methods: {
    created: function() {
      this.newValue = this.$refs.newValue;
      this.oldValue = this.$refs.oldValue;
    },
    actionSuccess: function(e){
      this.oldValue.textContent =  this.newValue.textContent;
      this.newValue.textContent = e.value;
    }
  },
  provide:{
        "inplaceeditor":[MultiSelect]
  }
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

.e-inplaceeditor {
    min-width: 200px;
    text-align: left
}

</style>



