

<template>
    <div id="app">
        <ejs-grid :dataSource='data' height='315'>
            <e-columns>
                <e-column field='EmployeeID' headerText='Employee ID' textAlign='Right' width=90></e-column>
                <e-column field='Name' headerText='Full Name' :valueAccessor= 'valueAccess' width=120></e-column>
                <e-column field='Title' headerText='Title' width=150></e-column>
            </e-columns>
        </ejs-grid>
    </div>
</template>
<script>
import Vue from "vue";
import { GridPlugin } from "@syncfusion/ej2-vue-grids";
import { data } from './datasource.js';

Vue.use(GridPlugin);

export default {
  data() {
    return {
      data: data
    };
  },
  methods: {
    valueAccess: function(field, data, column) {
        return data[field].map((s) => { return s.LastName || s.FirstName; }).join(' ');
    }
  }
}
</script>
<style>
 @import "../node_modules/@syncfusion/ej2-vue-grids/styles/tailwind.css";
</style>


