
import Vue from "vue";
import { GridPlugin, Filter } from "@syncfusion/ej2-vue-grids";
import { DropDownList } from '@syncfusion/ej2-dropdowns';
import { data } from './datasource.js'
Vue.use(GridPlugin);


new Vue({
	el: '#app',
	template: `
    <div id="app">
        <ejs-grid ref='grid' :dataSource='data' :allowFiltering='true' height='273px'>
            <e-columns>
                <e-column field='OrderID' headerText='Order ID' textAlign='Right' width=100></e-column>
                <e-column field='EmployeeID' headerText='Employee ID' width=120 :filterBarTemplate='templateOptions'></e-column>
                <e-column field='ShipCity' headerText='Ship City' width=100></e-column>
                <e-column field='ShipName' headerText='Ship Name' width=100></e-column>
            </e-columns>
        </ejs-grid>
    </div>
`,

  data() {
    return {
      data: data,
      templateOptions: {
            create: function (args) {
                const dd = document.createElement('input');
                dd.id = 'EmployeeID';
                return dd;
            },
            write: function (args) {
               let DropDownListObj: DropDownList = new DropDownList({
                   dataSource: ['All','1','3','4','5','6','8','9'],
                   fields: { text: 'EmployeeID', value: 'EmployeeID' },
                   placeholder: 'Select a value',
                   popupHeight: '200px',
                   change: function(e) {
                       var gridObj = (document.getElementsByClassName('e-grid')[0] as any).ej2_instances[0];
                       if(e.value =='All') {
                           gridObj.removeFilteredColsByField('EmployeeID');
                        } else {
                            gridObj.filterByColumn('EmployeeID','equal',parseInt(e.value as any));
                        }
                    }
                });
               DropDownListObj.appendTo('#EmployeeID');
            }
        }
    };
  },
  provide: {
    grid: [Filter]
  }

});