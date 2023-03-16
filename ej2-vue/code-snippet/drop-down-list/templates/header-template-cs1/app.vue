

<template>
  <div id="app">
    <div class='combobox'>
        <br>
        <ejs-combobox id='combobox' sortOrder="Ascending" :dataSource='employeeData' :itemTemplate='itemTemplate' :headerTemplate='headerTemplate' :fields='fields' :query='query' placeholder="Select an employee"></ejs-combobox>
    </div>
  </div>
</template>
<script>
import Vue from 'vue';
import { ComboBoxPlugin } from "@syncfusion/ej2-vue-dropdowns";
Vue.use(ComboBoxPlugin);
import { Query, DataManager, Predicate, ODataV4Adaptor } from '@syncfusion/ej2-data';

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
  data (){
    return {
        employeeData : new DataManager({
            url: 'https://services.odata.org/V4/Northwind/Northwind.svc/',
            adaptor: new ODataV4Adaptor,
            crossDomain: true
        }),
        query : new Query().from('Employees').select(['FirstName', 'City', 'EmployeeID']).take(6),
        fields : { text: 'FirstName', value: 'EmployeeID' },
        headerTemplate :  function(e) {
                return {
                    template: headerVue
                };
        },
        itemTemplate : function(e) {
                return {
                    template: itemVue
                };
        }
    }
  }
}
</script>
<style>
@import "../../node_modules/@syncfusion/ej2-base/styles/material.css";
@import "../../node_modules/@syncfusion/ej2-inputs/styles/material.css";
@import "../../node_modules/@syncfusion/ej2-vue-dropdowns/styles/material.css";
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


