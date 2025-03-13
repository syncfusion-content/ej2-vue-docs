
import Vue from "vue";
import { GridPlugin, Page, Toolbar, ColumnChooser} from "@syncfusion/ej2-vue-grids";
import { TreeViewPlugin } from "@syncfusion/ej2-vue-navigations";
import { ButtonPlugin } from '@syncfusion/ej2-vue-buttons';
import { stackedHeaderData } from './datasource.js';
Vue.use(GridPlugin, Page, Toolbar, ColumnChooser);
Vue.use(ButtonPlugin);
Vue.use(TreeViewPlugin );

new Vue({
	el: '#app',
	template: `
  <div id='app'>
    <div>
      <ejs-grid ref='gridInstance' id='gridInstance' :dataSource="data" :allowPaging='true' :showColumnChooser='true' :columnChooserSettings='columnChooserSettings' :toolbar='toolbar'>
        <e-columns>
          <e-column field='CustomerID' headerText='Customer ID' width='160' textAlign='Right' :showInColumnChooser="false" :isPrimaryKey='true'></e-column>
          <e-column field='CustomerName' headerText='Name' width='100' minWidth='100'></e-column>
          <e-column headerText='Order Details' :columns='orderColumns' textAlign='Center'></e-column>
          <e-column headerText='Shipping Details' :columns='shipColumns' textAlign='Center'></e-column>
          <e-column headerText='Delivery Status' :columns='deliveryColumns' textAlign='Center'></e-column>
        </e-columns>
        <template v-slot:template="{data}">
          <div  v-if="data && data.columns && data.columns.length">
            <ejs-treeview id='treeview' :fields='dataProcess(data)' cssClass="no-border"  :enableRtl="enableRTL"  :showCheckBox='true' :keyPress='nodeCheck' :nodeClicked='nodeCheck'></ejs-treeview>
          </div>
          <div v-else class="no-record-text">No Matches Found</div>
        </template>
        <template v-slot:headerTemplate>
          <div>
            <span class="e-icons e-columns" id="column-chooser-icon"></span> 
            <span id="column-chooser-text">Column Options</span>
          </div>
        </template>
        <template v-slot:footerTemplate>
          <ejs-button v-on:click='columnChooserSubmit'>Apply</ejs-button>
          <ejs-button v-on:click='columnChooserClose'>Close</ejs-button>
        </template>
      </ejs-grid>
    </div>
  </div>
`,

data: () => {
  return {
      data: stackedHeaderData,
      toolbar: ['ColumnChooser'],
      columnChooserSettings: { enableSearching: true, template: 'template', headerTemplate: 'headerTemplate', footerTemplate: 'footerTemplate' },
      enableRTL: false,
      orderColumns: [
            { field: 'OrderID', headerText: 'ID', textAlign: 'Right', width: 90, minWidth: 90 },
            { field: 'OrderDate', headerText: 'Date', textAlign: 'Right', width: 110, minWidth: 100, format: 'yMd' }
        ],
        shipColumns: [
            { field: 'ShipCountry', headerText: 'Country', textAlign: 'Left', width: 115  },
            { field: 'Freight', headerText: 'Charges', textAlign: 'Right', width: 130 },
        ],
        deliveryColumns: [
            { field: 'Status', headerText: 'Status', textAlign: 'Center', width: 110  }
        ],
    }
},
methods: {
    nodeCheck: function (args) {
        let checkedNode = [args.node];
        var treeObj = document.getElementById('treeview').ej2_instances[0];
        if (args.event.target.classList.contains('e-fullrow') || args.event.key == "Enter") {
        let getNodeDetails = treeObj.getNode(args.node);
            if (getNodeDetails.isChecked == 'true') {
                treeObj.uncheckAll(checkedNode);
            } else {
                treeObj.checkAll(checkedNode);
            }
        }
    },
    dataProcess: function (args) {
        const parentNodes = [
        { id: 1, name: 'Order Details', hasChild: true, expanded: true },
        { id: 2, name: 'Shipping Details', hasChild: true, expanded: true },
        { id: 3, name: 'Delivery Status', hasChild: true, expanded: true },
    ];
        let treeData = [];
        if (args.columns && args.columns.length) {
        treeData = args.columns.map((column) => {
            let parentId;
            switch (column.field) {
                case 'OrderID':
                case 'OrderDate':
                    parentId = 1;
                    break;
                case 'ShipCountry':
                case 'Freight':
                    parentId = 2;
                    break;
                case 'Status':
                    parentId = 3;
                    break;
                default :
                    break;
            }
            return {
            id: column.uid,
            name: column.headerText,
            pid: parentId,
            isChecked: column.visible
            };
        });
        const uniquePids = [];
        treeData.forEach((item) => {
            if (uniquePids.indexOf(item.pid) === -1) {
                uniquePids.push(item.pid);
            }
        });
        const filteredParents = parentNodes.filter((parent) => uniquePids.indexOf(parent.id) !== -1);
        treeData.push(...filteredParents);
        } else {
            treeData = [];
        }
        const fields = { dataSource: treeData, id: 'id', parentID: 'pid', text: 'name', hasChildren: 'hasChild' };
        return fields;
    },
    columnChooserClose: function() {
        var gridInstance = document.getElementById('gridInstance').ej2_instances[0];
        gridInstance.columnChooserModule.hideDialog();
    },
    columnChooserSubmit: function (){
        const checkedElements = [];
        const uncheckedElements = [];
        var gridInstance = document.getElementById('gridInstance').ej2_instances[0];
        var treeObj = document.getElementById('treeview').ej2_instances[0];
        var showColumns = gridInstance.getVisibleColumns().filter(function (column) { return (column.showInColumnChooser === true); });
        showColumns = showColumns.map(function (col) { return col.headerText; });
        const treeItems = document.querySelectorAll('.e-list-item');
        treeItems.forEach(item => {
            const itemDetails = treeObj.getNode(item);
            if (!itemDetails.hasChildren) {
                if (item.getAttribute('aria-checked') === 'true') {
                checkedElements.push(itemDetails.text);
            } else {
                uncheckedElements.push(itemDetails.text);
            }
            }
        });
        showColumns = showColumns.filter((col) => uncheckedElements.indexOf(col) === -1);
        checkedElements.forEach(item => {
            if (!showColumns.includes(item)) {
                showColumns.push(item);
            }
        });
        var columnsToUpdate = { visibleColumns: showColumns, hiddenColumns: uncheckedElements };
        gridInstance.columnChooserModule.changeColumnVisibility(columnsToUpdate);
    },
},
computed: {
    enableRTL() {
      const gridInstance = document.getElementById('gridInstance').ej2_instances[0];
      return gridInstance.enableRtl;
    }
},
provide: {
    grid: [Page, Toolbar, ColumnChooser]
}

});