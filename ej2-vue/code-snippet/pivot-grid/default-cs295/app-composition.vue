<template>
    <div id="app">
        <ejs-button id="export-btn" :isPrimary="isPrimary" v-on:click="btnClick">PDF Export</ejs-button>
    <ejs-pivotview id="pivotview" :height="height" :dataSourceSettings="dataSourceSettings"
      :allowPdfExport="allowPdfExport" :gridSettings="gridSettings" :cellTemplate="cellTemplate" :hyperlinkSettings="hyperlinkSettings"> </ejs-pivotview>
  </div >
</template >
<script setup>
import { PivotViewComponent as EjsPivotview, PDFExport } from "@syncfusion/ej2-vue-pivotview";
import { ButtonComponent as EjsButton } from "@syncfusion/ej2-vue-buttons";
import { employeeData } from './pivotData.js';

window.getCellContent = function (args) {
    let pivotTableObj = document.getElementById('pivotview').ej2_instances[0];
    if (args.cellInfo && args.cellInfo.axis === 'row' && args.cellInfo.valueSort.axis === 'EmployeeID') {
        var employeeId_2 = Number(args.cellInfo.actualText);
        var employee = pivotTableObj.dataSourceSettings.dataSource.find(function (emp) { return emp.EmployeeID === employeeId_2; });
        if (employee && employee.EmployeeImage) {
            var imgSrc = 'data:image/png;base64,' + employee.EmployeeImage;
            return '<div class="image"><img class="university-logo" src="' + imgSrc + '" width="87" height="87" alt="' + (employee.EmployeeID || '') + '" onload="handleImageLoad(this)"/></div>';
        }
    }
    return '';
};
window.handleImageLoad = function (imgElement) {
    try {
        var cell = imgElement.closest('th, td');
        if (cell) {
            var cellValue = cell.querySelector('.e-cellvalue');
            if (cellValue) {
                cellValue.style.display = 'none';
            }
        }
    }
    catch (error) {
        console.warn('Error handling image load:', error);
    }
}

const dataSourceSettings = {
    dataSource: employeeData,
    rows: [{ name: 'FirstName' }, { name: 'EmployeeID', caption: 'Employee Image' }],
    columns: [{ name: 'Title' }],
    values: [{ name: 'Salary' }, { name: 'OrdersCount' }],
    filterSettings: [
        { name: 'Title', type: 'Include', items: ['Sales Representative'] }
    ],
    expandAll: true,
    showSubTotals: false,
    showRowGrandTotals: false
};
const height = 320;
const allowPdfExport = true;
const isPrimary = true;

const btnClick = () => {
  let pivotGridObj = document.getElementById('pivotview').ej2_instances[0];
  pivotGridObj.pdfExport();
};

const hyperlinkSettings = {
    showRowHeaderHyperlink: true,
    cssClass: 'e-custom-class'
}

const cellTemplate = '${getCellContent(data)}';

const gridSettings = {
    layout: 'Tabular',
    pdfQueryCellInfo: function (args) {
        let pivotTableObj = document.getElementById('pivotview').ej2_instances[0];
        if (args.data && args.data.axis === 'row') {
            if (args.data.valueSort && args.data.valueSort.axis === 'FirstName') {
                var firstName_1 = args.data.actualText;
                var employee = pivotTableObj.dataSourceSettings.dataSource.find(function (emp) { return emp.FirstName === firstName_1; });
                if (employee && employee.EmailID) {
                    args.hyperLink = {
                        target: 'mailto:' + employee.EmailID,
                        displayText: args.value
                    };
                }
            }
            if (args.data.valueSort && args.data.valueSort.axis === 'EmployeeID') {
                var employeeId_1 = Number(args.data.actualText);
                var employee = pivotTableObj.dataSourceSettings.dataSource.find(function (emp) { return emp.EmployeeID === employeeId_1; });
                if (employee && employee.EmployeeImage) {
                    args.image = {
                        base64: employee.EmployeeImage,
                        height: 57.5,
                        width: 57.5
                    };
                }
            }
        }
    }
};

provide('pivotview', [
  PDFExport
]);

</script>
<style>
@import "../node_modules/@syncfusion/ej2-vue-pivotview/styles/tailwind3.css";
</style>