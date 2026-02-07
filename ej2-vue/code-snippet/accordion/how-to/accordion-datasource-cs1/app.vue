<template>
  <div id="app">

    <ejs-accordion ref="accordionInc">

    </ejs-accordion>
  </div>
</template>
<script>

import { AccordionComponent } from '@syncfusion/ej2-vue-navigations';
import { DataManager, Query, ODataV4Adaptor } from '@syncfusion/ej2-data';

export default {
  name: "App",
  components: {
    "ejs-accordion": AccordionComponent
  },
  mounted() {

    new DataManager({ url: 'https://services.odata.org/V4/Northwind/Northwind.svc/Employees', adaptor: new ODataV4Adaptor })
      .executeQuery(new Query().range(4, 7)).then((e) => {
        var result = e.result;
        var obj = this.$refs.accordionInc.ej2Instances
        var itemsData = [];
        var mapping = { header: 'FirstName', content: 'Notes' };
        for (var i = 0; i < result.length; i++) {
          itemsData.push({ header: result[i][mapping.header], content: result[i][mapping.content] });
        }
        obj.items = itemsData;
        obj.refresh();
      });
  }
}
</script>
<style>
@import "../node_modules/@syncfusion/ej2-base/styles/material3.css";
@import "../node_modules/@syncfusion/ej2-vue-navigations/styles/material3.css";
</style>