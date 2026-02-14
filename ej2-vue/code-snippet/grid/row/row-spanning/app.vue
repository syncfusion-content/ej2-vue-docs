<template>
  <div id="app">
    <ejs-grid :dataSource='data' :height='300' :width='width' :gridLines='gridLines' :allowTextWrap='textWrap' :queryCellInfo='queryCellInfoEvent'>
      <e-columns>
        <e-column field='EmployeeID' headerText='Employee ID' width='150' textAlign="Right" isPrimaryKey=true></e-column>
        <e-column field='EmployeeName' headerText='Employee Name' width='200'></e-column>
        <e-column field='9:00' headerText='9:00 AM' width='120'></e-column>
        <e-column field='9:30' headerText='9:30 AM' width='120'></e-column>
        <e-column field='10:00' headerText='10:00 AM' width='120'></e-column>
        <e-column field='10:30' headerText='10:30 AM' width='120'></e-column>
        <e-column field='11:00' headerText='11:00 AM' width='120'></e-column>
        <e-column field='11:30' headerText='11:30 AM' width='120'></e-column>
        <e-column field='12:00' headerText='12:00 PM' width='120'></e-column>
        <e-column field='12:30' headerText='12:30 PM' width='120'></e-column>
        <e-column field='1:00' headerText='1:00 PM' width='120'></e-column>
        <e-column field='1:30' headerText='1:30 PM' width='120'></e-column>
        <e-column field='2:00' headerText='2:00 PM' width='120'></e-column>
        <e-column field='2:30' headerText='2:30 PM' width='120'></e-column>
        <e-column field='3:00' headerText='3:00 PM' width='120'></e-column>
        <e-column field='3:30' headerText='3:30 PM' width='120'></e-column>
        <e-column field='4:00' headerText='4:00 PM' width='120'></e-column>
        <e-column field='4:30' headerText='4:30 PM' width='120'></e-column>
        <e-column field='5:00' headerText='5:00 PM' width='120'></e-column>
      </e-columns>
    </ejs-grid>
  </div>
</template>
<script>
import { GridComponent, ColumnsDirective, ColumnDirective } from "@syncfusion/ej2-vue-grids";
import { data, } from "./datasource.js";
export default {
name: "App",
components: {
"ejs-grid":GridComponent,
"e-columns":ColumnsDirective,
"e-column":ColumnDirective
},
  data() {
    return {
      data : data,
      gridLines : 'Both',
      width : 'auto',
      textWrap : true
    };
  },
  methods: {
   queryCellInfoEvent: function (args) {
         const data= args.data;
    switch (data.EmployeeID) {
        case 10001:
            if (args.column.field === '9:00' || args.column.field === '2:30' || args.column.field === '4:30') {
                args.colSpan = 2;
            } else if (args.column.field === '11:00') {
                args.colSpan = 3;
            } else if (args.column.field === 'EmployeeName') {
                args.rowSpan = 2;
            } else if (args.column.field === '1:00') {
                args.colSpan = 3;
                args.rowSpan = 2;
            }
            break;
        case 10002:
            if (args.column.field === '9:30' || args.column.field === '2:30' ||
                args.column.field === '4:30') {
                args.colSpan = 3;
            } else if (args.column.field === '11:00') {
                args.colSpan = 4;
            }
            break;
        case 10003:
            if (args.column.field === '9:00' || args.column.field === '11:30') {
                args.colSpan = 3;
            } else if (args.column.field === '10:30' || args.column.field === '3:30' ||
                args.column.field === '4:30' || args.column.field === '2:30') {
                args.colSpan = 2;
            }
            break;
        case 10004:
            if (args.column.field === '9:00') {
                args.colSpan = 3;
            } else if (args.column.field === '11:00') {
                args.colSpan = 4;
            } else if (args.column.field === '4:00' || args.column.field === '2:30') {
                args.colSpan = 2;
            }
            break;
        case 10005:
            if (args.column.field === '9:00') {
                args.colSpan = 4;
            } else if (args.column.field === '11:30') {
                args.colSpan = 3;
            } else if (args.column.field === '3:30' || args.column.field === '4:30' || args.column.field === '2:30') {
                args.colSpan = 2;
            }
            break;
        case 10006:
            if (args.column.field === '9:00' || args.column.field === '4:30' ||
                args.column.field === '2:30' || args.column.field === '3:30') {
                args.colSpan = 2;
            } else if (args.column.field === '10:00' || args.column.field === '11:30') {
                args.colSpan = 3;
            }
            break;
        case 10007:
            if (args.column.field === '9:00' || args.column.field === '3:00' || args.column.field === '10:30') {
                args.colSpan = 2;
            } else if (args.column.field === '11:30' || args.column.field === '4:00') {
                args.colSpan = 3;
            }
            break;
        case 10008:
            if (args.column.field === '9:00' || args.column.field === '10:30' || args.column.field === '2:30') {
                args.colSpan = 3;
            } else if (args.column.field === '4:00') {
                args.colSpan = 2;
            }
            break;
        case 10009:
            if (args.column.field === '9:00' || args.column.field === '11:30') {
                args.colSpan = 3;
            } else if (args.column.field === '4:30' || args.column.field === '2:30') {
                args.colSpan = 2;
            }
            break;
        case 100010:
            if (args.column.field === '9:00' || args.column.field === '2:30' ||
                args.column.field === '4:00' || args.column.field === '11:30') {
                args.colSpan = 3;
            } else if (args.column.field === '10:30') {
                args.colSpan = 2;
            }
            break;
        }    
    }
  }
};
</script>
<style>
@import "../node_modules/@syncfusion/ej2-base/styles/material3.css";
@import "../node_modules/@syncfusion/ej2-buttons/styles/material3.css";
@import "../node_modules/@syncfusion/ej2-calendars/styles/material3.css";
@import "../node_modules/@syncfusion/ej2-dropdowns/styles/material3.css";
@import "../node_modules/@syncfusion/ej2-inputs/styles/material3.css";
@import "../node_modules/@syncfusion/ej2-navigations/styles/material3.css";
@import "../node_modules/@syncfusion/ej2-popups/styles/material3.css";
@import "../node_modules/@syncfusion/ej2-splitbuttons/styles/material3.css";
@import "../node_modules/@syncfusion/ej2-vue-grids/styles/material3.css";
</style>