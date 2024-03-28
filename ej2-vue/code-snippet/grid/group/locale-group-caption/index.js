
import Vue from "vue";
import { GridPlugin, Group } from "@syncfusion/ej2-vue-grids";
import { data } from './datasource.js';
import { L10n, setCulture } from '@syncfusion/ej2-base';

setCulture('ar');

L10n.load({
  ar: {
    grid: {
      GroupDropArea: 'اسحب رأس العمود هنا لتجميع العمود',
      Item: 'بند',
      Items: 'العناصر',
      GroupCaption: ' هي خلية تسمية توضيحية جماعية',
    },
  },
});

Vue.use(GridPlugin);


new Vue({
	el: '#app',
	template: `
    <div id="app">
      <ejs-grid :dataSource='data' :allowGrouping='true' height='267px'>
        <e-columns>
          <e-column field='OrderID' headerText='Order ID' textAlign='Right' width=90></e-column>
          <e-column field='CustomerID' headerText='Customer ID' width=100></e-column>
          <e-column field='ShipCity' headerText='Ship City' width=100></e-column>
          <e-column field='ShipName' headerText='Ship Name' width=120></e-column>
        </e-columns>
      </ejs-grid>
    </div>
`,

  data() {
    return {
      data: data,
    };
  },
  provide: {
    grid: [Group]
  }

});