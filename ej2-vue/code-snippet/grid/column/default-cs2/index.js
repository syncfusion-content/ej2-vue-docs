
import Vue from 'vue';
import { GridPlugin } from '@syncfusion/ej2-vue-grids';

Vue.use(GridPlugin);

new Vue({
	el: '#app',
	template: `
  <div id="app">
      <ejs-grid :dataSource="data"> </ejs-grid>
  </div>
`,

  data () {
    return {
      data: [
      { OrderID: 10248, CustomerID: 'VINET', EmployeeID: 5 },
      { OrderID: 10249, CustomerID: 'TOMSP', EmployeeID: 6 },
      { OrderID: 10250, CustomerID: 'HANAR', EmployeeID: 4 }]
    }
  }

});