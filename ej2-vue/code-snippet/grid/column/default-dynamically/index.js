
import Vue from 'vue';
import { GridPlugin } from '@syncfusion/ej2-vue-grids';
import { DropDownListPlugin } from "@syncfusion/ej2-vue-dropdowns";
import { ButtonPlugin } from '@syncfusion/ej2-vue-buttons';
import { data } from './datasource.js';

Vue.use(GridPlugin);
Vue.use(DropDownListPlugin);
Vue.use(ButtonPlugin);

new Vue({
  el: '#app',
  template: `
    <div id="app">
      <ejs-button id="button" cssClass="e-outline" @click.native="addTemplateColumn">Add Column</ejs-button>
      <ejs-grid style="margin-top: 10px" id="grid" ref="grid" :dataSource="dataSet" height="315px">
        <e-columns>
          <e-column field="OrderID" headerText="Order ID" width="150"></e-column>
          <e-column field="CustomerID" headerText="Customer Name" width="150"></e-column>
          <e-column field="Freight" headerText="Freight" width="150"  >
          </e-column>
        </e-columns>
            <template v-slot:columnTemplate="{data}">
                    <ejs-dropdownlist id="data.OrderID" :dataSource="dataSet" :value="data.ShipCountry" :fields='fields' index=0></ejs-dropdownlist>
                </template>
                <template  v-slot:headerTemplate >
                    <div>
                    <span class="e-icons e-location"></span> Ship Country
                    </div>
                </template>
      </ejs-grid>
  </div>
`,

data() {
  return {
    dataSet: data,
    fields: { text: 'ShipCountry', value: 'ShipCountry'}
  };
}
,
methods: {

  addTemplateColumn:function() {
    const grid = this.$refs.grid.$el.ej2_instances[0];
    var templateColumnValues = {field: 'ShipCountry', headerText: 'Ship Country', width: 100, headerTemplate: "headerTemplate", template: "columnTemplate"};
    grid.columns.push(templateColumnValues);
    grid.refreshColumns();
  }
}

});