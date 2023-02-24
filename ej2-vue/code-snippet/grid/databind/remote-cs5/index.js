
import Vue from "vue";
import { GridPlugin } from "@syncfusion/ej2-vue-grids";
import { DataManager, ODataAdaptor } from "@syncfusion/ej2-data";

Vue.use(GridPlugin);

class SerialNoAdaptor extends ODataAdaptor {
    processResponse() {
        let i = 0;
        //calling base class processResponse function
        let original = super.processResponse.apply(this, arguments);
        //Adding serial number
        original.result.forEach((item) => item['Sno'] = ++i);
        return { result: original.result, count: original.count };
    }
}


new Vue({
	el: '#app',
	template: `
    <div id="app">
        <ejs-grid :dataSource="data">
          <e-columns>
            <e-column field='Sno' headerText='SNO' textAlign='Right' width=150></e-column>
            <e-column field='CustomerID' headerText='Customer ID' width=120></e-column>
            <e-column field='Freight' headerText='Freight' textAlign='Right' format='C2' width=90></e-column>
            <e-column field='OrderDate' headerText='Order Date' textAlign='Right' format='yMd' type='date' width=120></e-column>
          </e-columns>
        </ejs-grid>
    </div>
`,

  data() {
    let SERVICE_URI =
      "https://js.syncfusion.com/demos/ejServices/Wcf/Northwind.svc/Orders?$top=7";
    return {
      data: new DataManager({
        url: SERVICE_URI,
        adaptor: new SerialNoAdaptor()
      })
    };
  }

});