
import Vue from "vue";
import { KanbanPlugin } from '@syncfusion/ej2-vue-kanban';
import { DataManager, ODataAdaptor } from "@syncfusion/ej2-data";
import { extend } from '@syncfusion/ej2-base';
Vue.use(KanbanPlugin);

new Vue({
	el: '#app',
	template: `
  <div id="app">
       <ejs-kanban id="kanban" keyField="Status" :dataSource="kanbanData"
        :cardSettings="cardSettings" allowDragAndDrop="false" :dialogOpen="dialogOpen">
          <e-columns>
            <e-column headerText="To Do" keyField="Open"></e-column>
            <e-column headerText="In Progress" keyField="InProgress"></e-column>
            <e-column headerText="Testing" keyField="Testing"></e-column>
            <e-column headerText="Done" keyField="Close"></e-column>
          </e-columns>
        </ejs-kanban>
  </div>
`,

  data: function() {
    let SERVICE_URI = "https://services.syncfusion.com/vue/production/api/Kanban";
    return {
        kanbanData: new DataManager({
            url: SERVICE_URI,
            adaptor: new ODataAdaptor(),
            crossDomain: true
        });
        cardSettings: {
            contentField: "Summary",
            headerField: "Id",
        }
    };
  },
  methods: {
    dialogOpen: function (args) {
        args.cancel = true;
    }
  }

});