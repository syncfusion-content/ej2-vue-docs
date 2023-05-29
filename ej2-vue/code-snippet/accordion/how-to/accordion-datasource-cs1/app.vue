

<template>
    <div id="app">

    <ejs-accordion ref="accordionInc">

    </ejs-accordion>
  </div>
</template>
<script>
import Vue from 'vue';
import { AccordionPlugin } from '@syncfusion/ej2-vue-navigations';
import { DataManager, Query, ODataAdaptor, ReturnOption } from '@syncfusion/ej2-data';
Vue.use(AccordionPlugin);
export default {
  name: 'app',
  data () {

}, mounted(){

  new DataManager({ url: 'https://js.syncfusion.com/ejServices/Wcf/Northwind.svc/Employees', adaptor: new ODataAdaptor})
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
}
</script>
<style>
  @import "../node_modules/@syncfusion/ej2-base/styles/material.css";
  @import "../node_modules/@syncfusion/ej2-vue-navigations/styles/material.css";
</style>


