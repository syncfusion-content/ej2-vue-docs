
import Vue from "vue";
import { SpreadsheetPlugin } from "@syncfusion/ej2-vue-spreadsheet";

Vue.use(SpreadsheetPlugin);

new Vue({
	el: '#app',
	template: `
   <ejs-spreadsheet ref="spreadsheet" :openUrl="openUrl" :allowOpen="true" :created="created"></ejs-spreadsheet>
`,

   data: () => {
    return {
      openUrl: 'https://ej2services.syncfusion.com/production/web-services/api/spreadsheet/open',
    }
  },
  methods: {
    created: function () {
         fetch("https://js.syncfusion.com/demos/ejservices/data/Spreadsheet/LargeData.xlsx") // fetch the remote url
                .then((response) => {
                    response.blob().then((fileBlob) => { // convert the excel file to blob
                    var file = new File([fileBlob], "Sample.xlsx"); //convert the blob into file
                    this.$refs.spreadsheet.open({ file: file }); // open the file into Spreadsheet
                    })
                })
      }
    }

});