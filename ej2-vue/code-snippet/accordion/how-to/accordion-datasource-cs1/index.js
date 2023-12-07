
import Vue from 'vue';
import { AccordionPlugin } from '@syncfusion/ej2-vue-navigations';
import { DataManager, Query, ODataV4Adaptor, ReturnOption } from '@syncfusion/ej2-data';
Vue.use(AccordionPlugin);

new Vue({
	el: '#app',
	template: `
    <div id="app">

    <ejs-accordion ref="accordionInc">

    </ejs-accordion>
  </div>
`,

  name: 'app',
  data () {

}, mounted(){

  new DataManager({ url: 'https://services.odata.org/V4/Northwind/Northwind.svc/Employees', adaptor: new ODataV4Adaptor})
    .executeQuery(new Query().range(4, 7)).then((e) => {

    var result = e.result;
        var obj = this.$refs.accordionInc.ej2Instances
         var itemsData =[];
        var  mapping =  { header: 'FirstName', content: 'Notes' };
      for(var i= 0; i < result.length; i++) {

        itemsData.push({ header: result[i][mapping.header], content: result[i][mapping.content] });
      }
     obj.items = itemsData;
      obj.refresh();

}
}

});