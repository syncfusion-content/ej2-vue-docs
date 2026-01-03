
import Vue from "vue";
import { PivotViewPlugin, Pager } from "@syncfusion/ej2-vue-pivotview";
import { DataManager, WebApiAdaptor } from '@syncfusion/ej2-data';
import { Pager as GridPager } from '@syncfusion/ej2-grids';
import { isNullOrUndefined } from "@syncfusion/ej2-base";

Vue.use(PivotViewPlugin);

let remoteData: DataManager = new DataManager({
  url: "https://bi.syncfusion.com/northwindservice/api/orders",
  adaptor: new WebApiAdaptor(),
  crossDomain: true
});

let rowPager: GridPager;
let columnPager: GridPager;


new Vue({
	el: '#app',
	template: `
    <div id="app">
        <ejs-pivotview id="pivotview-template" ref="pivotview" :dataSourceSettings="dataSourceSettings" :height="height" :enablePaging="enablePaging" :pageSettings="pageSettings" :pagerSettings="pagerSettings" :gridSettings="gridSettings" :dataBound="onDataBound"> </ejs-pivotview>
    </div>
`,

  data () {
    return {
      dataSourceSettings: {
        dataSource: remoteData as DataManager,
        expandAll: true,
        filters: [],
        columns: [{ name: 'ProductName', caption: 'Product Name' }],
        rows: [{ name: 'ShipCountry', caption: 'Ship Country' }, { name: 'ShipCity', caption: 'Ship City' }],
        formatSettings: [{ name: 'UnitPrice', format: 'C0' }],
        values: [{ name: 'Quantity' }, { name: 'UnitPrice', caption: 'Unit Price' }]
      },
      height: 350,
      enablePaging: true,
      pageSettings: {
        rowPageSize: 10,
        columnPageSize: 5,
        currentColumnPage: 1,
        currentRowPage: 1
      },
      pagerSettings: {
        template: '#template'
      },
      gridSettings: { columnWidth: 120 },
    }
  },
  methods: {
    onDataBound: function() {
      this.updateTemplate()
    },
    updateTemplate() {
        let pivotObj = document.getElementById('pivotview-template').ej2_instances[0];;
        if (!isNullOrUndefined(rowPager)) {
            rowPager.destroy();
            rowPager = null;
        }
        rowPager = new GridPager({
            pageSize: pivotObj.pageSettings.rowPageSize,
            totalRecordsCount: pivotObj.engineModule.rowCount,
            currentPage: pivotObj.pageSettings.currentRowPage,
            pageCount: 5,
            click: this.rowPageClick
        });
        rowPager.appendTo('#row-pager');
        if (!isNullOrUndefined(columnPager)) {
            columnPager.destroy();
            columnPager = null;
        }
        columnPager = new GridPager({
            pageSize: pivotObj.pageSettings.columnPageSize,
            totalRecordsCount: pivotObj.engineModule.columnCount,
            currentPage: pivotObj.pageSettings.currentColumnPage,
            pageCount: 5,
            click: this.columnPageClick
        });
        columnPager.appendTo('#column-pager');
    },
    rowPageClick(args: any) {
        let pivotObj = document.getElementById('pivotview-template').ej2_instances[0];;
        pivotObj.pageSettings.currentRowPage = args.currentPage;
        pivotObj.refreshData();
    },
    columnPageClick(args: any) {
        let pivotObj = document.getElementById('pivotview-template').ej2_instances[0];;
        pivotObj.pageSettings.currentColumnPage = args.currentPage;
        pivotObj.refreshData();
    }
  },
  provide: {
    pivotview: [Pager]
  }

});