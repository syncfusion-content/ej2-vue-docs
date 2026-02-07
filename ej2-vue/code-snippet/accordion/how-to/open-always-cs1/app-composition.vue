<template>
  <div id="app">
    <ejs-accordion ref="element" expandMode='Single' :expanding="beforeExpand" :clicked="clicked">
      <e-accordionitems>
        <e-accordionitem expanded='true' header='ASP.NET'
          content='Microsoft ASP.NET is a set of technologies in the Microsoft .NET Framework for building Web applications and XML Web services'></e-accordionitem>
        <e-accordionitem header='ASP.NET MVC'
          content='The Model-View-Controller (MVC) architectural pattern separates an application into three main components: the model, the view, and the controller.'></e-accordionitem>
        <e-accordionitem header='JavaScript'
          content='JavaScript (JS) is an interpreted computer programming language.It was originally implemented as part of web browsers so that client-side scripts could interact with the user, control the browser, communicate asynchronously, and alter the document content that was displayed.'></e-accordionitem>
      </e-accordionitems>
    </ejs-accordion>
  </div>
</template>
<script setup>

import { AccordionComponent as EjsAccordion, AccordionItemDirective as EAccordionitem, AccordionItemsDirective as EAccordionitems } from "@syncfusion/ej2-vue-navigations";
import { ref } from 'vue';

var clickEle;
const element = ref(null);
const clicked = (e) => {
  clickEle = e.originalEvent.target.closest('.e-acrdn-header');
};
const beforeExpand = (e) => {
  var obj = element.value.ej2Instances;
  var expandCount = obj.element.querySelectorAll('.e-selected').length;
  var ele = obj.element.querySelectorAll('.e-selected')[0];
  if (ele) {
    ele = ele.firstChild
  }
  if (expandCount === 1 && ele === clickEle) {
    e.cancel = true;
  }
};

</script>
<style>
@import "../node_modules/@syncfusion/ej2-base/styles/material3.css";
@import "../node_modules/@syncfusion/ej2-vue-navigations/styles/material3.css";
</style>