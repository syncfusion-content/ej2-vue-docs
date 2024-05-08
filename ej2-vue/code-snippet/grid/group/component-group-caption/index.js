
import Vue from "vue";
import { GridPlugin, Group } from "@syncfusion/ej2-vue-grids";
import { ChipList  } from '@syncfusion/ej2-vue-buttons';
import { data } from './datasource.js';

Vue.use(GridPlugin);


new Vue({
	el: '#app',
	template: `
    <div id="app">
      <ejs-grid :dataSource='data' :allowGrouping='true' :groupSettings='groupOptions' :dataBound='dataBound' height='267px'>
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
      text:'one',
      groupOptions: { columns: ['CustomerID'], captionTemplate: '<div class="groupChip">${key}</div>' },
    };
  },
  methods: {
    dataBound(){
      var groupCaptions = document.getElementsByClassName('groupChip');    
      for (var i = 0; i < groupCaptions.length; i++) {
        let chip = new ChipList({});
        chip.appendTo(groupCaptions[i]);
      }
    }
  },
  provide: {
    grid: [Group]
  }

});