
import Vue from "vue";
import { SpreadsheetPlugin } from "@syncfusion/ej2-vue-spreadsheet";

Vue.use(SpreadsheetPlugin);

new Vue({
	el: '#app',
	template: `
   <ejs-spreadsheet :openUrl="openUrl" :allowOpen="true" :beforeOpen="beforeOpen"></ejs-spreadsheet>
`,

   data: () => {
    return {
      openUrl: 'https://ej2services.syncfusion.com/production/web-services/api/spreadsheet/open',
    }
  },
  methods: {
    beforeOpen: function (args) {
        // your code snippets here
      }
    }

});