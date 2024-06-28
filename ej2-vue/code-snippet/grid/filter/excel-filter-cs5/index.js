
import Vue from "vue";
import { GridPlugin, Filter, } from "@syncfusion/ej2-vue-grids";
import { data } from "./datasource.js";

Vue.use(GridPlugin);

var itemTemplate = Vue.component('itemTemplate', {
  data: () => {
    return {
      categoryIcons: {
        Beverages: 'fas fa-coffee',
        Condiments: 'fas fa-leaf',
        Confections: 'fas fa-birthday-cake',
        DairyProducts: 'fas fa-ice-cream',
        Grains: 'fas fa-seedling',
        Meat: 'fas fa-drumstick-bite',
        Produce: 'fas fa-carrot',
        Seafood: 'fas fa-fish',
      },
    };
  },
  template: `<div><span :class="this.categoryIcons[data.CategoryName]"></span> {{data.CategoryName}}</div>`,
  components: {},
});

new Vue({
  el: '#app',
  template: `
    <div id="app">
      <ejs-grid ref='grid' id='grid' :dataSource='data' :allowFiltering='true' :filterSettings='filterOptions' height='273px'>
        <e-columns>
          <e-column field="CategoryName"  headerText="Category Name" :filter="columnFilterSettings"  width="120" ></e-column>
          <e-column field="Delivered"  headerText="Delivered"  width="120" displayAsCheckBox="true" ></e-column>
          <e-column field="ProductID" headerText="ProductID"  width="120" ></e-column>
        </e-columns>
      </ejs-grid>
    </div>
`,

  data: () => {
    return {
      data: data,
      filterOptions: {
        type: 'Excel'
      },
      columnFilterSettings: {
        type: 'Excel',
        itemTemplate: function () {
          return {
            template: itemTemplate,
          };
        },
      }
    };
  },
  provide: {
    grid: [Filter]
  }
});