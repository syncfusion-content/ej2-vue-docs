<template>
  <div id="app">
    <div id='container' style="margin:50px auto 0; width:250px;">
      <br>
      <ejs-multiselect id='multiselect' sortOrder='Ascending' :headerTemplate='headerTemplate'
        :itemTemplate='itemTemplate' :dataSource='employeeData' :query='query' :fields='fields'
        placeholder="Select an employee"></ejs-multiselect>
    </div>
  </div>
</template>
<script>
import { MultiSelectComponent } from "@syncfusion/ej2-vue-dropdowns";
import { Query, DataManager, ODataV4Adaptor } from '@syncfusion/ej2-data';

var headerVue = Vue.component("headerTemplate", {
  template: `<span class='head'><span class='name'>Name</span><span class='city'>City</span></span>`,
  data() {
    return {
      data: {}
    };
  }
});

var itemVue = Vue.component("itemTemplate", {
  template: `<span class='item' ><span class='name'>{{data.FirstName}}</span><span class='city'>{{data.City}}</span></span>`,
  data() {
    return {
      data: {}
    };
  }
});

export default {
  name: "App",
  components: {
    "ejs-multiselect": MultiselectComponent,

  },

  data() {
    return {
      employeeData: new DataManager({
        url: 'https://services.odata.org/V4/Northwind/Northwind.svc/',
        adaptor: new ODataV4Adaptor,
        crossDomain: true
      }),
      query: new Query().from('Employees').select(['FirstName', 'City', 'EmployeeID']).take(6),
      fields: { text: 'FirstName', value: 'EmployeeID' },
      headerTemplate: function (e) {
        return {
          template: headerVue
        }
      },
      itemTemplate: function (e) {
        return {
          template: itemVue
        }
      }
    }
  }
}

</script>
<style>
@import "../../node_modules/@syncfusion/ej2-base/styles/material.css";
@import "../../node_modules/@syncfusion/ej2-inputs/styles/material.css";
@import "../../node_modules/@syncfusion/ej2-vue-dropdowns/styles/material.css";
@import "../../node_modules/@syncfusion/ej2-buttons/styles/material.css";

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
</style>