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
<script>

import { AccordionComponent, AccordionItemDirective, AccordionItemsDirective } from "@syncfusion/ej2-vue-navigations";
import { Ajax } from '@syncfusion/ej2-base';

export default {
  name: "App",
  components: {
    "ejs-accordion": AccordionComponent,
    "e-accordionitems": AccordionItemsDirective,
    "e-accordionitem": AccordionItemDirective
  },

  data() {
    let ajax = new Ajax('./Ajax.html', 'GET', true);
    ajax.send().then();
    ajax.onSuccess = (data) => {
      var obj = this.$refs.acrdnInstance.ej2Instances
      obj.items[2].content = data;
      obj.refresh();
    }
  }
}

</script>
<style>
@import "../node_modules/@syncfusion/ej2-base/styles/material.css";
@import "../node_modules/@syncfusion/ej2-vue-navigations/styles/material.css";

div#headername {
  margin-left: 100px;
}
</style>