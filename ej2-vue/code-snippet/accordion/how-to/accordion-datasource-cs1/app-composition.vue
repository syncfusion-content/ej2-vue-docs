<template>
  <div id="app">

    <ejs-accordion ref="accordionInc">

    </ejs-accordion>
  </div>
</template>
<script setup>

import { AccordionComponent as EjsAccordion } from '@syncfusion/ej2-vue-navigations';
import { DataManager, Query, ODataV4Adaptor } from '@syncfusion/ej2-data';
import { onMounted, ref } from 'vue';

const accordionInc = ref(null);

onMounted(() => {
  new DataManager({ url: 'https://services.odata.org/V4/Northwind/Northwind.svc/Employees', adaptor: new ODataV4Adaptor })
    .executeQuery(new Query().range(4, 7)).then((e) => {
      var result = e.result;
      var obj = accordionInc.value.ej2Instances
      var itemsData = [];
      var mapping = { header: 'FirstName', content: 'Notes' };
      for (var i = 0; i < result.length; i++) {

        itemsData.push({ header: result[i][mapping.header], content: result[i][mapping.content] });
      }
      obj.items = itemsData;
      obj.refresh();
    })
});

</script>
<style>
@import "../node_modules/@syncfusion/ej2-base/styles/material.css";
@import "../node_modules/@syncfusion/ej2-vue-navigations/styles/material.css";
</style>