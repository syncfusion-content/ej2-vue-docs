<template>
  <div id="app">
    <div class='combobox'>
      <br>
      <ejs-combobox id='combobox' sortOrder="Ascending" :dataSource='employeeData' :itemTemplate='itemTemplate'
        :headerTemplate='headerTemplate' :fields='fields' :query='query'
        placeholder="Select an employee"></ejs-combobox>
    </div>
  </div>
</template>
<script setup>
import { createApp } from "vue";
import { ComboBoxComponent as EjsCombobox } from "@syncfusion/ej2-vue-dropdowns";
import { Query, DataManager, ODataV4Adaptor } from '@syncfusion/ej2-data';

let headerVue = createApp().component("headerTemplate", {
  template: `<span class='head'><span class='name'>Name</span><span class='city'>City</span></span>`,
  data() {
    return {
      data: {}
    };
  }
});

let itemVue = createApp().component("itemTemplate", {
  template: `<span class='item' ><span class='name'>{{data.FirstName}}</span><span class='city'>{{data.City}}</span></span>`,
  data() {
    return {
      data: {}
    };
  }
});


const employeeData = new DataManager({
  url: 'https://services.odata.org/V4/Northwind/Northwind.svc/',
  adaptor: new ODataV4Adaptor,
  crossDomain: true
});
const query = new Query().from('Employees').select(['FirstName', 'City', 'EmployeeID']).take(6);
const fields = { text: 'FirstName', value: 'EmployeeID' };
const headerTemplate = function (e) {
  return {
    template: headerVue
  };
};
const itemTemplate = function (e) {
  return {
    template: itemVue
  };
};

</script>
<style>
@import "../node_modules/@syncfusion/ej2-base/styles/material.css";
@import "../node_modules/@syncfusion/ej2-inputs/styles/material.css";
@import "../node_modules/@syncfusion/ej2-vue-dropdowns/styles/material.css";

.head,
.item {
  display: table;
  width: 100%;
  margin: auto;
}

.head {
  height: 40px;
  font-size: 15px;
  font-weight: 600;
}

.name,
.city {
  display: table-cell;
  vertical-align: middle;
  width: 50%;
}

.head .name {
  text-indent: 16px;
}

.head .city {
  text-indent: 10px;
}

#app {
  color: #008cff;
  height: 40px;
  position: absolute;
  width: 90%;
  top: 10%;
}

.combobox {
  width: 30%;
  margin: 0 auto;
}
</style>
