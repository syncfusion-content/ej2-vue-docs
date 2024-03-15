import Vue from "vue";
import { PivotViewPlugin, VirtualScroll } from "@syncfusion/ej2-vue-pivotview";

Vue.use(PivotViewPlugin);

/* tslint:disable */
function data(count) {
  var result = [];
  var dt = 0;
  for (var i = 1; i < count + 1; i++) {
    dt++;
    var round;
    var toString = i.toString();
    if (toString.length === 1) {
      round = "0000" + i;
    } else if (toString.length === 2) {
      round = "000" + i;
    } else if (toString.length === 3) {
      round = "00" + i;
    } else if (toString.length === 4) {
      round = "0" + i;
    } else {
      round = toString;
    }
    result.push({
      ProductID: "PRO-" + round,
      Year: "FY " + (dt + 2013),
      Price: Math.round(Math.random() * 5000) + 5000,
      Sold: Math.round(Math.random() * 80) + 10
    });
    if (dt / 4 == 1) {
      dt = 0;
    }
  }
  return result;
}

new Vue({
	el: '#app',
	template: `<div id="app">
    <ejs-pivotview :dataSourceSettings="dataSourceSettings" :width="width" :height="height"
      [virtualScrollSettings]='virtualScrollSettings' :enableVirtualization="enableVirtualization">
    </ejs-pivotview>
  </div>`,

  data () {
    return {
      dataSourceSettings: {
        dataSource: data(1000),
        enableSorting: false,
        expandAll: true,
        formatSettings: [{ name: 'Price', format: 'C0' }],
        rows: [{ name: 'ProductID' }],
        columns: [{ name: 'Year' }],
        values: [{ name: 'Price', caption: 'Unit Price' },
          { name: 'Sold', caption: 'Unit Sold' }
        ]
      },
      width: '100%',
      height: 350,
      enableVirtualization: true,
      virtualScrollSettings: {
        allowSinglePage: true
      }
    }
  },
  provide: {
    pivotview: [VirtualScroll]
  } 
});