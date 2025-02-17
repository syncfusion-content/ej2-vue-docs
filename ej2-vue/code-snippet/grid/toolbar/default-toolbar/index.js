
import Vue from "vue";
import { GridPlugin, Toolbar, Edit } from "@syncfusion/ej2-vue-grids";
import { data } from './datasource.js';

Vue.use(GridPlugin);


new Vue({
	el: '#app',
	template: `
    <div id="app">
      <div style="margin-left:180px"><p style="color:red;" id="message">{{message}}</p></div>
      <ejs-grid ref="grid" :dataSource='data' :editSettings='editSettings' height='270px' :toolbar='toolbar' :toolbarClick='clickHandler'>
        <e-columns>
          <e-column field='OrderID' headerText='Order ID' textAlign='Right' width=90 isPrimaryKey="true"></e-column>
          <e-column field='CustomerID' headerText='Customer ID' width=100></e-column>
          <e-column field='ShipCity' headerText='Ship City' width=100></e-column>
          <e-column field='ShipName' headerText='Ship Name' width=120></e-column>
        </e-columns>
      </ejs-grid>
    </div>
`,

data() {
  return {
    data: data,
    editSettings: { allowEditing: true, allowAdding: true, allowDeleting: true },
    toolbar: ['Add', 'Edit', 'Delete', 'Update', 'Cancel'],
    message:""
  };
},
methods: {
  clickHandler:function(args){
    console.log(args)
      if (args.item.text === 'Add') { 
          args.cancel = true;
          const newRecord = {
              OrderID: 10247,
              CustomerID: 'TOMSP',
              ShipName: 'Hanari Carnes',
              ShipCity: 'Lyon',
          };
          this.$refs.grid.ej2Instances.addRecord(newRecord);
          this.message = 'The default adding action is cancelled, and a new record is added using the addRecord method.';
      }
  }
},

provide: {
    grid: [Edit, Toolbar]
}

});