<template>
    <div id="app">
        <ejs-grid ref='grid' :dataSource='data' :allowFiltering='true' height='273px'>
            <e-columns>
                <e-column field='OrderID' headerText='Order ID' textAlign='Right' width=100></e-column>
                <e-column field='CustomerID' headerText='Customer ID' width=120 :filterBarTemplate='templateOptionsDropDown'></e-column>
                <e-column field="Freight" headerText="Freight" width="100" format="C2" textAlign="Right" :filterBarTemplate="templateOptionsNumericTextBox" />
                <e-column field="OrderDate" headerText="Order Date" width="120" format="yMd" type="date" :filterBarTemplate="templateOptionsDatePicker" />
                <e-column field="ShipCity" headerText="Ship City" width="120" :filterBarTemplate="templateOptionsComboBox"></e-column>
                <e-column field="ShipCountry" headerText="Ship Country" width="120" :filterBarTemplate="templateOptionsMultiSelect"></e-column>
            </e-columns>
        </ejs-grid>
    </div>
</template>
<script>

import { GridComponent, ColumnsDirective, ColumnDirective, Filter } from "@syncfusion/ej2-vue-grids";
import { ComboBox, DropDownList, MultiSelect } from '@syncfusion/ej2-dropdowns';
import { DataManager, DataUtil, Predicate, Query } from '@syncfusion/ej2-data';
import { DatePicker } from '@syncfusion/ej2-calendars';
import { NumericTextBox } from '@syncfusion/ej2-inputs';
import { data } from './datasource.js';
export default {
name: "App",
components: {
"ejs-grid":GridComponent,
"e-columns":ColumnsDirective,
"e-column":ColumnDirective
},
  data() {
    return {
        data: data,
        templateOptionsDropDown: {
            create: function () {
                const dropdown = document.createElement('select');
                dropdown.id = 'CustomerID';
                const option = document.createElement('option');
                option.value = 'All';
                option.innerText = 'All';
                dropdown.appendChild(option);
                data.forEach((item) => {
                    const option = document.createElement('option');
                    option.value = item.CustomerID;
                    option.innerText = item.CustomerID;
                    dropdown.appendChild(option);
                });
                return dropdown;
            },
            write: function () {
                const dropdownFunction = (e) => {
                    const gridObj = document.getElementsByClassName("e-grid")[0].ej2_instances[0];
                    if (e.value === "All") {
                        gridObj.removeFilteredColsByField("CustomerID");
                    } else {
                        gridObj.filterByColumn("CustomerID", "equal", e.value);
                    }
                };
                let dropDownList = new DropDownList({
                    change: dropdownFunction
                });
                dropDownList.appendTo('#CustomerID');
            }
        },
        templateOptionsNumericTextBox:{
            create() {
                let numElement  = document.createElement('input');
                numElement.id = "Freight";
                return numElement;
            },
            write() {
            const numericTextBox = new NumericTextBox({ format: '00.00', value: 10 });
            numericTextBox.appendTo('#Freight');
            },
        },
        templateOptionsDatePicker: {
            create() {
                let numElement = document.createElement('input');
                numElement.id = "OrderDate";
                return numElement;
            },
            write(args) {
                const handleFilterChange = (args) => {
                    const gridObj = document.getElementsByClassName("e-grid")[0].ej2_instances[0];
                    if (args.value) {
                        gridObj.filterByColumn('OrderDate', 'equal', args.value);
                    } else {
                        gridObj.removeFilteredColsByField('OrderDate');
                    }
                };
                const datePickerObj = new DatePicker({
                    value: new Date(args.column.field),
                    change: handleFilterChange,
                });
                datePickerObj.appendTo('#OrderDate');
            },
        },
        templateOptionsComboBox: {
            create() {
                const comboelement = document.createElement('input');
                comboelement.id = 'ShipCity';
                return comboelement;
                },
            write(args) {
                const handleFilterChange = (args) => {
                    const gridObj = document.getElementsByClassName("e-grid")[0].ej2_instances[0];
                    if (args.value) {
                        gridObj.filterByColumn('ShipCity', 'equal', args.value);
                    } else {
                        gridObj.removeFilteredColsByField('ShipCity');
                    }
                    };
                    let shipCityDistinctData = DataUtil.distinct(data, 'ShipCity', true);
                const comboBox = new ComboBox({
                    value: args.value,
                    placeholder: 'Select a city',
                    change: handleFilterChange,
                    dataSource: shipCityDistinctData.map((item) => item.ShipCity),
                });
                comboBox.appendTo('#ShipCity');
            },
        },
        templateOptionsMultiSelect: {
            create() {
                const multiselectelement = document.createElement('input');
                multiselectelement.id = 'ShipCountry';
                return multiselectelement;
                },
            write(args) {
                const multiselectFunction = (args) => {
                    const gridObj = document.getElementsByClassName("e-grid")[0].ej2_instances[0];
                    var selectedValues = args.value;
                    if (selectedValues.length === 0) {
                        var OrginalData = new DataManager(data).executeLocal(new Query());
                        gridObj.dataSource = OrginalData;
                    } else {
                        var predicate = null;
                        for (let x = 0; x < selectedValues.length; x++) {
                        if (predicate === null) {
                            predicate = new Predicate('ShipCountry', 'equal', selectedValues[x]);
                        } else {
                            predicate = predicate.or('ShipCountry', 'equal', selectedValues[x]);
                        }
                        }
                        var filteredData = new DataManager(data).executeLocal(new Query().where(predicate));
                        gridObj.dataSource = filteredData;
                    }
                };
                let shipCountryDistinctData = DataUtil.distinct(data, 'ShipCountry', true);
                const multiselect = new MultiSelect({
                    value: args.value,
                    placeholder: 'Select a country',
                    change: multiselectFunction,
                    dataSource: shipCountryDistinctData.map((item) => item.ShipCountry),
                });
                multiselect.appendTo('#ShipCountry');
            },
        }
    };
},
  provide: {
    grid: [Filter]
  }
}
</script>
<style>
  @import "../node_modules/@syncfusion/ej2-base/styles/tailwind.css";
  @import "../node_modules/@syncfusion/ej2-buttons/styles/tailwind.css";
  @import "../node_modules/@syncfusion/ej2-calendars/styles/tailwind.css";
  @import "../node_modules/@syncfusion/ej2-dropdowns/styles/tailwind.css";
  @import "../node_modules/@syncfusion/ej2-inputs/styles/tailwind.css";
  @import "../node_modules/@syncfusion/ej2-navigations/styles/tailwind.css";
  @import "../node_modules/@syncfusion/ej2-popups/styles/tailwind.css";
  @import "../node_modules/@syncfusion/ej2-splitbuttons/styles/tailwind.css";
  @import "../node_modules/@syncfusion/ej2-vue-grids/styles/tailwind.css";
</style>