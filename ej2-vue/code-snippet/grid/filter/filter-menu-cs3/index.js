
import Vue from "vue";
import { GridPlugin, Filter, Page } from "@syncfusion/ej2-vue-grids";
import { data } from './datasource.js'
Vue.use(GridPlugin);


new Vue({
  el: '#app',
  template: `
    <div id="app">
      <ejs-grid ref='grid' :dataSource='data' :allowFiltering='true' :filterSettings='filterOptions' 
      allowPaging= 'true' :pageSettings="pageSettings" :actionComplete="actionComplete" height='273px'>
        <e-columns>
            <e-column field='OrderID' headerText='Order ID' textAlign='Right' width=100></e-column>
            <e-column field="OrderDate" headerText="Order Date" width="180" type="datetime" :format="formatoptions" textAlign="Right"></e-column>
            <e-column field="ShippedDate" headerText="Shipped Date" width="180" type="datetime" :format="formatoptions" textAlign="Right"></e-column>
            <e-column field='ShipCountry' headerText='Ship Country' width=100></e-column>
        </e-columns>
      </ejs-grid>
    </div>
`,

  data() {
    return {
      data: data,
      pageSettings: { pageCount: 5 },
      filterOptions: {
        type: 'Menu'
      },
      formatoptions: { type: 'dateTime', format: 'M/d/y HH:mm' }
    };
  },
  methods: {
    actionComplete: function (args) {
      if (args.requestType === 'filterAfterOpen') {
        var columnObj = this.$refs.grid.getColumnByField(args.columnName);
        if (columnObj.type === 'datetime') {
          var dateObj = (document.getElementById('dateui-' + columnObj.uid))['ej2_instances'][0];
          dateObj.timeFormat = 'HH:mm';
        }
      }
    }
  },
  provide: {
    grid: [Filter, Page]
  }

});