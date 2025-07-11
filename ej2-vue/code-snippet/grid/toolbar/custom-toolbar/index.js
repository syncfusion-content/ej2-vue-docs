
import Vue from "vue";
import { GridPlugin, Toolbar, Edit } from "@syncfusion/ej2-vue-grids";
import { AutoCompletePlugin } from '@syncfusion/ej2-vue-dropdowns';
import { data } from './datasource.js';

Vue.use(GridPlugin);
Vue.use(AutoCompletePlugin);

new Vue({
  el: '#app',
  template: `
    <div id="app">
    <ejs-grid ref="grid" :dataSource='data' height='270px' :toolbar='toolbar'  :editSettings='editSettings'>
      <e-columns>
        <e-column field='OrderID' headerText='Order ID' textAlign='Right' isPrimaryKey="true" width=90></e-column>
        <e-column field='CustomerID' headerText='Customer ID' width=100></e-column>
        <e-column field='ShipCity' headerText='Ship City' width=100></e-column>
        <e-column field='ShipName' headerText='Ship Name' width=120></e-column>
      </e-columns>
    </ejs-grid>
    <div id="toolbar-template">
      <ejs-autocomplete :dataSource='dropDownData' placeholder="Search ShipCity" @change="onChange"></ejs-autocomplete>
    </div>
  </div>`,

  data() {
    return {
      data: data,
      dropDownData: [
        'Reims',
        'Münster',
        'Rio de Janeiro',
        'Lyon',
        'Charleroi',
        'Bern',
        'Genève',
        'San Cristóbal',
        'Graz',
        'México D.F.',
        'Albuquerque',
        'Köln'
      ],
      editSettings: {
        allowEditing: true,
        allowAdding: true,
        allowDeleting: true,
        mode: "Normal",
      },
      toolbar: ['Add', 'Edit', 'Delete', { template: '#toolbar-template', align: "Left", tooltipText: "Custom Component AutoComplete" }],
    };
  },
  methods: {
    onChange: function (event) {
      const selectedCity = event.value;
      // perform search action for ShipCity column.
      this.$refs.grid.ej2Instances.search(selectedCity);
    }
  },
  provide: {
    grid: [Toolbar, Edit]
  }

});