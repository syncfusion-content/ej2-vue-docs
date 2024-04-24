

<template>
    <div id="app">
        <ejs-grid :dataSource='data' height='315px'>
            <e-columns>
                <e-column field='OrderID' headerText='Order ID' textAlign='Right' width=120 hideAtMedia='(min-width: 700px)'>
                </e-column> //  column visibility hide when browser screen width lessthan 700px;
                <e-column field='CustomerID' headerText='Customer ID' width=140 hideAtMedia='(max-width: 700px)'>
                </e-column> // column Visibility show when browser screen width  500px or less;
                <e-column field='Freight' headerText='Freight' textAlign='Right' format='C' width=120
                hideAtMedia='(min-width: 500px)'>
                </e-column> // column visibility hide when browser screen width lessthan 500px;
                <e-column field='OrderDate' headerText='Order Date' textAlign='Right' format='yMd' type='date' width=140>
                </e-column> // it always shown
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
  }
}
</script>
<style>
 @import "../node_modules/@syncfusion/ej2-vue-grids/styles/tailwind.css";
</style>


