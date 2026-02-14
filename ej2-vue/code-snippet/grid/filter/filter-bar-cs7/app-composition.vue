<template>
  <div id="app">
    <ejs-grid ref="grid" :dataSource="data" :allowFiltering="true" height="273px">
      <e-columns>
        <e-column field="OrderID" headerText="Order ID" textAlign="Right" width="100"></e-column>
        <e-column field="CustomerID" headerText="Customer ID" width="120" :filterBarTemplate="templateOptionsDropDown"></e-column>
        <e-column field="Freight" headerText="Freight" width="100" format="C2" textAlign="Right" :filterBarTemplate="templateOptionsNumericTextBox"></e-column>
        <e-column field="OrderDate" headerText="Order Date" width="120" format="yMd" type="date" :filterBarTemplate="templateOptionsDatePicker"></e-column>
        <e-column field="ShipCity" headerText="Ship City" width="120" :filterBarTemplate="templateOptionsComboBox"></e-column>
        <e-column field="ShipCountry" headerText="Ship Country" width="120" :filterBarTemplate="templateOptionsMultiSelect"></e-column>
      </e-columns>
    </ejs-grid>
  </div>
</template>

<script setup>
import { provide, ref } from "vue";
import { GridComponent as EjsGrid, ColumnDirective as EColumn, ColumnsDirective as EColumns, Filter, parentsUntil } from "@syncfusion/ej2-vue-grids";
import { ComboBox, DropDownList, MultiSelect } from '@syncfusion/ej2-dropdowns';
import { NumericTextBox } from '@syncfusion/ej2-inputs';
import { DatePicker } from '@syncfusion/ej2-calendars';
import { DataManager, DataUtil, Predicate, Query } from '@syncfusion/ej2-data';
import { data } from './datasource.js';

const grid = ref(null);
const numericTextBoxRef = ref(null);
const datePickerRef = ref(null);
const comboBoxRef = ref(null);
const multiSelectRef = ref(null);
let shipCityDistinctData = DataUtil.distinct(data, 'ShipCity', true);
let shipCountryDistinctData = DataUtil.distinct(data, 'ShipCountry', true);

const dropdownFunction = (e) => {
  if (e.value == 'All') {
    grid.value.ej2Instances.removeFilteredColsByField('CustomerID');
  } else {
    grid.value.ej2Instances.filterByColumn('CustomerID', 'equal', e.value);
  }
};

const handleFilterChange = (args) => {
  let targetElement = parentsUntil(args.element, 'e-filtertext');
  let columnName = targetElement.id.replace('_filterBarcell', '');
  if (args.value) {
    grid.value.ej2Instances.filterByColumn(columnName, 'equal', args.value);
  } else {
    grid.value.ej2Instances.removeFilteredColsByField(columnName);
  }
};

const multiselectFunction = (args) => {
  var selectedValues = args.value;
  if (selectedValues.length === 0) {
    var OrginalData = new DataManager(data).executeLocal(new Query());
    grid.value.ej2Instances.dataSource = OrginalData;
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
    grid.value.ej2Instances.dataSource = filteredData;
  }
};

const templateOptionsDropDown = ref({
  create() {
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
  write() {
    const dropDownListObj = new DropDownList({
      change: dropdownFunction 
    });
    dropDownListObj.appendTo('#CustomerID');
  },
});

const templateOptionsNumericTextBox = ref({
  create() {
    const input = document.createElement('input');
    numericTextBoxRef.value = input;
    return input;
  },
  write() {
    const numericTextBox = new NumericTextBox({ format: '00.00', value: 10 });
    numericTextBox.appendTo(numericTextBoxRef.value);
  },
});

const templateOptionsDatePicker = ref({
  create() {
    const input = document.createElement('input');
    datePickerRef.value = input;
    return input;
  },
  write(args) {
    const datePickerObj = new DatePicker({
      value: new Date(args.column.field),
      change: handleFilterChange,
    });
    datePickerObj.appendTo(datePickerRef.value);
  },
});

const templateOptionsComboBox = ref({
  create() {
    const comboelement = document.createElement('input');
    comboelement.id = 'ShipCity';
    comboBoxRef.value = comboelement;
    return comboelement;
  },
  write(args) {
    const comboBox = new ComboBox({
      value: args.value,
      placeholder: 'Select a city',
      change: handleFilterChange,
      dataSource: shipCityDistinctData.map((item) => item.ShipCity),
    });
    comboBox.appendTo(comboBoxRef.value);
  },
});

const templateOptionsMultiSelect = ref({
  create() {
    const multiselectelement = document.createElement('input');
    multiselectelement.id = 'ShipCountry';
    multiSelectRef.value = multiselectelement;
    return multiselectelement;
  },
  write(args) {
    const multiselect = new MultiSelect({
      value: args.value,
      placeholder: 'Select a country',
      change: multiselectFunction,
      dataSource: shipCountryDistinctData.map((item) => item.ShipCountry),
    });
    multiselect.appendTo(multiSelectRef.value);
  },
});

provide('grid', [Filter]);
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
