
import Vue from 'vue';
import { InPlaceEditorPlugin } from "@syncfusion/ej2-vue-inplace-editor";
import { DataManager, ODataV4Adaptor, Query } from '@syncfusion/ej2-data';

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

 dm= new DataManager({
    url: 'https://services.odata.org/V4/Northwind/Northwind.svc/Customers',
    adaptor: new ODataV4Adaptor,
    crossDomain: true
}),


data (){
return {
dropdownModel: {  
    dataSource: dm,
    placeholder:"Select a customer",
    fields : { text: 'ContactName', value: 'CustomerID' },
    query : new Query().select(['ContactName', 'CustomerID']).take(6),
}
}
},
mounted: function() {
this.dropObj = this.$refs.dropObj.ej2Instances;
}
});

