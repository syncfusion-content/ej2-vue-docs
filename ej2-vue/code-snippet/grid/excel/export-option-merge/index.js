import Vue from "vue";
import { GridPlugin, Toolbar, ExcelExport } from "@syncfusion/ej2-vue-grids";
import { data } from './datasource.js';

Vue.use(GridPlugin);

new Vue({
  el: '#app',
  template: `
    <div id="app">
      <ejs-grid style="margin-top: 10px" ref='grid' id='Grid' :dataSource='data' :toolbar='toolbarOptions' height='220px'
      :allowExcelExport='true' :toolbarClick='toolbarClick' :dataBound="onDataBound" :excelQueryCellInfo="excelQueryCellInfo" :excelExportComplete="excelExportComplete">
          <e-columns>
              <e-column field='OrderID' headerText='Order ID' textAlign='Right' width=100></e-column>
             <e-column field='CustomerID' headerText='Customer ID' width=150></e-column>
             <e-column field='City' headerText='Ship City' width=150></e-column>
 
        </e-columns>
      </ejs-grid>
    </div>
  `,

  data() {
    return {
      data: data,
      toolbarOptions: ['ExcelExport'],
      gridcells:"",
      currentOrderID:null,
      rowspanCount:1
    };
  },
  methods: {
      toolbarClick: function(args) {
         if (args.item.id === 'Grid_excelexport') { // 'Grid_excelexport' -> Grid component id + _ + toolbar item name
            this.$refs.grid.excelExport();
        } 
      },
      onDataBound: function() {
        let previousData= null;
        let startRowIndex = null;
        let endRowIndex= null;
        let grid = this.$refs.grid.ej2Instances;
        let rows =  grid.getRows();
        let data =  grid.getCurrentViewRecords();

        for (let i = 0, len = rows.length; i < len; i++) {
            if (!previousData) {
                previousData = data[i]['OrderID'];
                startRowIndex = parseInt(rows[i].getAttribute("aria-rowindex"));
            }
            else if (previousData === data[i]['OrderID']) {
                rows[i].children[0].classList.add('e-hide');
            }
            else if (previousData && previousData !== data[i]['OrderID']) {
                if (grid.getRows().length > 0 && grid.getRows().length > startRowIndex) {
                    endRowIndex = parseInt(rows[i].getAttribute("aria-rowindex"), 10);
                    let targetRow = this.$refs.grid.getRows()[startRowIndex];
                    let currentRowChild = rows[i] && rows[i].children[0];
                    if (targetRow && currentRowChild) {
                      let targetCell = [].slice.call(targetRow.querySelectorAll('.e-rowcell')).filter((cell) =>
                        parseInt(cell.getAttribute('aria-colindex'), 10) === parseInt(currentRowChild.getAttribute('aria-colindex'))
                      );
                      if (targetCell[0]) {
                        targetCell[0].setAttribute("rowSpan", endRowIndex - startRowIndex);
                      }
                    }
                    previousData = data[i]['OrderID'];
                    startRowIndex = parseInt(rows[i].getAttribute("aria-rowindex"), 10);
                }
            }
            if (rows[i].children[0].classList.contains("e-hide") || i < len) {
                endRowIndex = parseInt(rows[i].getAttribute("aria-rowindex"), 10);
                if (endRowIndex > 0) {
                  let targetRow = grid.getRows()[startRowIndex];  
                  let currentRowChild = rows[i] && rows[i].children[0];
                  if (targetRow && currentRowChild) {
                      let targetCell = [].slice.call(targetRow.querySelectorAll('.e-rowcell')).filter((cell) =>
                          parseInt(cell.getAttribute('aria-colindex'), 10) === parseInt(currentRowChild.getAttribute('aria-colindex'))
                      );
                      if (targetCell.length > 0) {
                          targetCell[0].setAttribute("rowSpan", endRowIndex - startRowIndex + 1);
                      }
                  }
                }
            }
        }
        
      },
      excelQueryCellInfo(args) {

        if (!this.currentOrderID && args.column.field == "OrderID") {
            this.currentOrderID = args.data["OrderID"];
            this.gridcells = args.cell;
        }
        else if (this.currentOrderID && args.column.field == "OrderID" && this.currentOrderID == args.data["OrderID"]) {
            this.rowspanCount++;
        } else if (this.currentOrderID !== args.data["OrderID"] && args.column.field == "OrderID") {
            this.gridcells.rowSpan = this.rowspanCount;
            this.currentOrderID = args.data["OrderID"];
            this.gridcells = args.cell;
            this.rowspanCount = 1;
        }
    },
    // Reset the excel export global variable values
    excelExportComplete() {
        this.currentOrderID = null;
        this.gridcells = null;
        this.rowspanCount=1;
      }
      
  },
  provide: {
    grid: [Toolbar, ExcelExport]
  }

});
