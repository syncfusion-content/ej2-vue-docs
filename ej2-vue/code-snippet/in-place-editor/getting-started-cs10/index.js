
import Vue from 'vue';
import { InPlaceEditorPlugin } from "@syncfusion/ej2-vue-inplace-editor";
import { DataManager, WebApiAdaptor, Query } from '@syncfusion/ej2-data';

Vue.use(InPlaceEditorPlugin);


new Vue({
	el: '#app',
	template: `
<div id="app">
    <table class="table-section">
       <tr>
            <td>select customer name:</td>
        <td>
            <ejs-inplaceeditor ref="dropObj" id="dropdownEle" mode="Inline" type="DropDownList" value='Maria Anders' :model="dropdownModel">
            </ejs-inplaceeditor>
        </td>
        </tr>
    </table>
  </div>
`,

  data (){
        return {
            dm: new DataManager({
                    url: 'https://js.syncfusion.com/demos/ejServices/Wcf/Northwind.svc/Customers/',
                    adaptor: new WebApiAdaptor
                }).executeQuery(new Query().take(8)).then((e) => {
                    this.dropdownModel.dataSource = e.result.d;
            }),
            dropdownModel: {  
                dataSource: [{}],
                placeholder:"Select a customer",
                query: new Query().from('Customers').select(['ContactName', 'CustomerID']).take(6),
                fields: { text: 'ContactName', value: 'CustomerID' }
            }
        }
    },
    mounted: function() {
        this.dropObj = this.$refs.dropObj.ej2Instances;
    }

});