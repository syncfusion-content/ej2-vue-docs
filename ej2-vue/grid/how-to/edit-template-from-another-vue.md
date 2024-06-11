---
layout: post
title: Edit template from another vue in Vue Grid component | Syncfusion
description: Learn here all about Edit template from another vue in Syncfusion Vue Grid component of Syncfusion Essential JS 2 and more.
control: Edit template from another vue 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Edit template from another vue in Vue Grid component

You can achieve the dialog template editing using another vue page.

```
<template>
    <div id="app">
         <ejs-grid :dataSource="data" :editSettings="editSettings" :actionBegin="actionBegin" :actionComplete="actionComplete" :toolbar="toolbar" height="273px">
      <e-columns>
        <e-column field="OrderID" headerText="Order ID" textAlign="Right" :isPrimaryKey="true" width="100"></e-column>
        <e-column field="CustomerID" headerText="Customer ID" width="120"></e-column>
        <e-column field="ShipCountry" headerText="Ship Country" width="150"></e-column>
      </e-columns>
    </ejs-grid>
    </div>
</template>
<script setup>
import { provide } from "vue";
import { GridComponent as EjsGrid, ColumnDirective as EColumn, ColumnsDirective as EColumns, Page, Toolbar, Edit } from "@syncfusion/ej2-vue-grids";
import { data } from './datasource.js';
import DialogTemplate from "./dialogtemp.vue";
import { DataUtil } from '@syncfusion/ej2-data';
      const editSettings = {
        allowEditing: true,
        allowAdding: true,
        allowDeleting: true,
        mode: "Dialog",
        template: function() {
          return { template: DialogTemplate };
        }
      };
      const toolbar = ["Add", "Edit", "Delete", "Update", "Cancel"];
      provide('grid',  [Page, Edit, Toolbar]);
      const actionBegin = (args) => {
      if (args.requestType === "save") {
        // cast string to integer value.
        args.data["Freight"] = parseFloat(args.form.querySelector("#Freight").value);
      }
    },
    const actionComplete(args) {
      // Set initail Focus
      if (args.requestType === "beginEdit") {
        args.form.elements.namedItem("OrderID").focus();
      }
    }
</script>
<style>
 @import "https://cdn.syncfusion.com/ej2/material.css";
 @import "https://stackpath.bootstrapcdn.com/bootstrap/4.1.2/css/bootstrap.min.css";

.form-group.col-md-6 {
    width: 250px;
    height: 54px;
}
.form-group.col-md-12 {
    height: 72px;
}
#ShipAddress {
    resize: vertical;
}

</style>
```

Create new vue page with the name of `dialogtemp.vue` and paste the below code.

```
<template>
  <div formGroup="orderForm">
    <div class="form-row">
      <div class="form-group col-md-6">
        <div class="e-float-input e-control-wrapper">
          <input  ref="OrderID" id="OrderID" name="OrderID" v-model="data.OrderID" type="text" :disabled="!data.isAdd">
          <span class="e-float-line"></span>
          <label class="e-float-text e-label-top" for="OrderID">Order ID</label>
        </div>
      </div>
      <div class="form-group col-md-6">
        <div class="e-float-input e-control-wrapper">
          <input ref="CustomerID" id="CustomerID" name="CustomerID" v-model="data.CustomerID" type="text">
          <span class="e-float-line"></span>
          <label class="e-float-text e-label-top" for="CustomerID">Customer Name</label>
        </div>
      </div>
    </div>
    <div class="form-row">
      <div class="form-group col-md-6">
        <ejs-numerictextbox id="Freight" placeholder="Freight" v-model="data.Freight" floatLabelType="Always" ></ejs-numerictextbox>
      </div>
      <div class="form-group col-md-6">
        <ejs-datepicker id="OrderDate" placeholder="Order Date" v-model="data.OrderDate" floatLabelType="Always" ></ejs-datepicker>
      </div>
    </div>
    <div class="form-row">
      <div class="form-group col-md-6">
        <ejs-dropdownlist id="ShipCountry" v-model="data.ShipCountry" :dataSource="shipCountryDistinctData"  :fields="{text: 'ShipCountry', value: 'ShipCountry' }" placeholder="Ship Country" popupHeight="300px" floatLabelType="Always" ></ejs-dropdownlist>
    </div>
      <div class="form-group col-md-6">
        <ejs-dropdownlist id="ShipCity" v-model="data.ShipCity" :dataSource="shipCityDistinctData" :fields="{text: 'ShipCity', value: 'ShipCity' }" placeholder="Ship City" popupHeight="300px" floatLabelType="Always"></ejs-dropdownlist>
      </div>
    </div>
    <div class="form-row">
      <div class="form-group col-md-12">
        <div class="e-float-input e-control-wrapper">
          <textarea id="ShipAddress" name="ShipAddress" type="text" v-model="data.ShipAddress"></textarea>
          <span class="e-float-line"></span>
          <label class="e-float-text e-label-top" for="ShipAddress">Ship Address</label>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { data } from './datasource.js';
import { DataUtil } from "@syncfusion/ej2-data";
import { onmount, ref } from "vue";
const OrderID = ref(null);
const CustomerID = ref(null);
    let shipCity = DataUtil.distinct(data, "ShipCity", true);
    let shipCountry = DataUtil.distinct(data, "ShipCountry", true);
      const shipCityDistinctData = shipCity;
      const shipCountryDistinctData = shipCountry;
  onmounted() {
    // Set initail Focus
    if (this.data.isAdd) {
      OrderID.value.focus();
    } else {
      CustomerID.value.focus();
    }
  }
</script>
```