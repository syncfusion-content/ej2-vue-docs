
import Vue from "vue";
import { GridPlugin, Page, Toolbar ,DetailRow, getPrintGridModel } from "@syncfusion/ej2-vue-grids";
import { extend } from '@syncfusion/ej2-base';
import { employeeData, data, customerData } from './datasource.js';

Vue.use(GridPlugin);

new Vue({
	el: '#app',
	template: `
  <div id="app">
    <ejs-grid ref="grid" :dataSource="parentData" :childGrid="childGrid" :allowPaging="true" :pageSettings="pageSettings" :hierarchyPrintMode="hierarchyPrintMode" :toolbar="toolbar" :actionBegin="actionBegin" :load="load" >
      <e-columns>
        <e-column field="EmployeeID" headerText="Employee ID" width="100" textAlign="Right" />
        <e-column field="FirstName" headerText="First Name" width="120" />
        <e-column field="Title" headerText="Title" width="150" />
        <e-column field="City" headerText="City" width="100" />
      </e-columns>
    </ejs-grid>
  </div>`,

  data() {
    let secondChildGrid = {
      dataSource: customerData,
      queryString: 'CustomerID',
      columns: [
        { field: 'CustomerID', headerText: 'Customer ID', textAlign: 'Right', width: 75 },
        { field: 'Address', headerText: 'Address', width: 120 },
        { field: 'Country', headerText: 'Country', width: 100 },
      ],
    };
    return {
      parentData: employeeData,
      toolbar: ['Print'],
      pageSettings: { pageSize: 4 },
      hierarchyPrintMode: 'Expanded',
      persistedExpandedRows: {},
      childGrid: {
        dataSource: data,
        queryString: 'EmployeeID',
        columns: [
          { field: "OrderID", headerText: "Order ID", textAlign: "Right", width: 120 },
          { field: 'ShipCity', headerText: 'Ship City', width: 120 },
          { field: 'Freight', headerText: 'Freight', width: 120 },
          { field: 'ShipName', headerText: 'Ship Name', width: 150 },
        ],
        childGrid: secondChildGrid,
      },
    };
  },
  methods: {
    actionBegin(args) {
      if (args.requestType === 'paging') {
        const page = args.previousPage;
        const current = this.getExpandedState(
          this.$refs.grid.ej2Instances,
          'Expanded',
          page
        );
        this.persistedExpandedRows = {
          ...this.persistedExpandedRows,
          ...current,
        };
      }
    },
    load() {
      if (this.$refs.grid && this.$refs.grid.ej2Instances) {
        this.$refs.grid.ej2Instances.on('printGrid-Init', this.printInit);
      }
    },
    printInit(args) {
      const printGridInstance = args.printgrid;
      printGridInstance.expandedRows = extend(
        {},
        this.persistedExpandedRows,
        printGridInstance.expandedRows
      );
    },
    getExpandedState(gridInstance, mode, currentPage) {
      const expandedRowState = {};
      const gridRows = gridInstance.getRowsObject();
      for (let i = 0; i < gridRows.length; i++) {
        const gridRow = gridRows[i];
        if (gridRow.isExpand && !gridRow.isDetailRow) {
          const expandedIndex = gridInstance.allowPaging
          ? gridRow.index +
          currentPage * gridInstance.pageSettings.pageSize -
          gridInstance.pageSettings.pageSize
          : gridRow.index;
          expandedRowState[expandedIndex] = {
            isExpand: true,
            gridModel: getPrintGridModel(gridRow.childGrid, mode),
          };
        }
      }
      return expandedRowState;
    },
  },
  provide: {
    grid: [DetailRow, Toolbar, Page],
  },
});