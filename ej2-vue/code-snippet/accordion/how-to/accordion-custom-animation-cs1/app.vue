<template>
  <div id="app">
    <div style='padding-top: 25px'>
      <div class='row'>
        <div class="col-xs-6 col-sm-6 col-lg-6 col-md-6">
          <label> Expand Animation </label>
        </div>
        <div class="col-xs-6 col-sm-6 col-lg-6 col-md-6">
          <div class='custom_drop'><ejs-dropdownlist ref="expandInstance" :change='expandAnimationChange' index='0'
              :dataSource='expandAni' placeholder='Expand Animation'></ejs-dropdownlist></div>
        </div>
      </div>
      <div class='row'>
        <div class="col-xs-6 col-sm-6 col-lg-6 col-md-6">
          <label> Collapse Animation </label>
        </div>
        <div class="col-xs-6 col-sm-6 col-lg-6 col-md-6">
          <div class='custom_drop'><ejs-dropdownlist ref="collapseInstance" :change='collapseAnimationChange' index='1'
              :dataSource='expandAni' placeholder='Collapse Animation'></ejs-dropdownlist></div>
        </div>
      </div>
      <div style='padding-top: 25px'>
        <ejs-accordion ref="acrdnInstance">
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
    </div>
  </div>
</template>
<script>

import { AccordionComponent, AccordionItemDirective, AccordionItemsDirective } from "@syncfusion/ej2-vue-navigations";
import { DropDownListComponent } from '@syncfusion/ej2-vue-dropdowns';

export default {
  name: "App",
  components: {
    "ejs-dropdownlist": DropDownListComponent,
    "ejs-accordion": AccordionComponent,
    "e-accordionitems": AccordionItemsDirective,
    "e-accordionitem": AccordionItemDirective
  },
  data: function () {
    return {
      expandAni: ['SlideDown', 'SlideUp', 'FadeIn', 'FadeOut', 'FadeZoomIn', 'FadeZoomOut', 'ZoomIn', 'ZoomOut', 'None']
    };
  },
  methods: {
    expandAnimationChange: function () {
      var obj = this.$refs.acrdnInstance.ej2Instances;
      var ddlobj = this.$refs.expandInstance.ej2Instances;
      obj.animation.expand.effect = ddlobj.value;
    },
    collapseAnimationChange: function () {
      var obj = this.$refs.acrdnInstance.ej2Instances;
      var ddlobj = this.$refs.collapseInstance.ej2Instances;
      obj.animation.collapse.effect = ddlobj.value;
    }
  }
}

</script>
<style>
@import "../node_modules/@syncfusion/ej2-base/styles/material.css";
@import "../node_modules/@syncfusion/ej2-vue-navigations/styles/material.css";
</style>