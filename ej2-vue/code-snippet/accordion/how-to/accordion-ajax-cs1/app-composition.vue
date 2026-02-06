<template>
  <div id="app">
    <div id="acrdnContnet1" style="display:none">
      <ul style="margin : 0px;padding:0px 16px; list-style-type: none">
        <li>Testing</li>
        <li>Development</li>
      </ul>
    </div>
    <div id="acrdnContnet2" style="display:none">
      <ul style="margin : 0px;padding:0px 16px; list-style-type: none">
        <li>Mobile</li>
        <li>Web</li>
      </ul>
    </div>
    <ejs-accordion ref="acrdnInstance">
      <e-accordionitems>
        <e-accordionitem header='Department' content='#acrdnContnet1'></e-accordionitem>
        <e-accordionitem header='Platform' content='#acrdnContnet2'></e-accordionitem>
        <e-accordionitem header='Employee Details'></e-accordionitem>
      </e-accordionitems>
    </ejs-accordion>
  </div>
</template>
<script setup>

import { AccordionComponent as EjsAccordion, AccordionItemDirective as EAccordionitem, AccordionItemsDirective as EAccordionitems } from '@syncfusion/ej2-vue-navigations';
import { Ajax } from '@syncfusion/ej2-base';
import { ref } from 'vue';

const acrdnInstance = ref(null);
const ajax = new Ajax('./Ajax.html', 'GET', true);
ajax.send().then();
ajax.onSuccess = (data) => {
  var obj = acrdnInstance.value.ej2Instances;
  obj.items[2].content = data;
  obj.refresh();
}

</script>
<style>
@import "../node_modules/@syncfusion/ej2-base/styles/material3.css";
@import "../node_modules/@syncfusion/ej2-vue-navigations/styles/material3.css";

div#headername {
  margin-left: 100px;
}
</style>