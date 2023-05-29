
import Vue from "vue";
import { KanbanPlugin } from '@syncfusion/ej2-vue-kanban';
import { ButtonPlugin } from "@syncfusion/ej2-vue-buttons";
import { Ajax } from '@syncfusion/ej2-base';

Vue.use(KanbanPlugin);
Vue.use(ButtonPlugin);

new Vue({
	el: '#app',
	template: `
  <div id="app">
    <ejs-button v-on:click.native="btnClick">Load Data</ejs-button>
       <ejs-kanban ref="kanbanObj" id="kanban" keyField="ShipCountry" :dataSource="kanbanData"
        :cardSettings="cardSettings">
          <e-columns>
            <e-column headerText="Denmark" keyField="Denmark"></e-column>
            <e-column headerText="Brazil" keyField="Brazil"></e-column>
            <e-column headerText="Switzerland" keyField="Switzerland"></e-column>
            <e-column headerText="Germany" keyField="Germany"></e-column>
          </e-columns>
        </ejs-kanban>
  </div>
`,

  data: function() {
    return {
        cardSettings: {
            contentField: "ShippedDate",
            headerField: "OrderID"
        },
    };
  },
  methods: {
    btnClick: function (args){
        this.kanbanObj = this.$refs.kanbanObj.ej2Instances;
        var ajax = new Ajax("https://ej2services.syncfusion.com/production/web-services/api/Orders", "GET");
        ajax.send();
        ajax.onSuccess = function (result) {
            this.kanbanObj.dataSource = JSON.parse(result);
        };
      }
  }

});