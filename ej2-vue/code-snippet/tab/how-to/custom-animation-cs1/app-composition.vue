<template>
  <div id="app">
    <div style='padding-top: 25px'>
      <div class='row'>
        <div class="col-xs-6 col-sm-6 col-lg-6 col-md-6">
          <label> Previous Animation </label>
        </div>
        <div class="col-xs-6 col-sm-6 col-lg-6 col-md-6">
          <div class='custom_drop'><ejs-dropdownlist ref="previousInstance" :change='previousAnimationChange' index='0'
              :dataSource='animationData' placeholder='Previous Animation'></ejs-dropdownlist></div>
        </div>
      </div>
      <div class='row'>
        <div class="col-xs-6 col-sm-6 col-lg-6 col-md-6">
          <label> Next Animation </label>
        </div>
        <div class="col-xs-6 col-sm-6 col-lg-6 col-md-6">
          <div class='custom_drop'><ejs-dropdownlist ref="nextInstance" :change='nextAnimationChange' index='1'
              :dataSource='animationData' placeholder='Next Animation'></ejs-dropdownlist></div>
        </div>
      </div>
      <div style='padding-top: 25px'>
        <ejs-tab id='element' ref="element">
          <e-tabitems>
            <e-tabitem :header='headerText0' :content="content0"></e-tabitem>
            <e-tabitem :header='headerText1' :content="content1"></e-tabitem>
            <e-tabitem :header='headerText2' :content="content2"></e-tabitem>
          </e-tabitems>
        </ejs-tab>
      </div>
    </div>
  </div>
</template>
<script setup>

import { TabComponent as EjsTab, TabItemsDirective as ETabitems, TabItemDirective as ETabitem } from '@syncfusion/ej2-vue-navigations';
import { DropDownListComponent as EjsDropdownlist } from "@syncfusion/ej2-vue-dropdowns";
import { ref } from 'vue';

const previousInstance = ref(null);
const nextInstance = ref(null);
const element = ref(null);
const headerText0 = { text: 'ASP.NET' };
const headerText1 = { text: 'ASP.NET MVC' };
const headerText2 = { text: 'JavaScript' };

const content0 = 'ASP.NET is an open-source server-side web application framework designed for web development to produce ' +
  'dynamic web pages. It was developed by Microsoft to allow programmers to build dynamic web sites, web applications ' +
  'and web services. It was first released in January 2002 with version 1.0 of the .NET Framework, and is the successor ' +
  'to Microsoft\'s Active Server Pages (ASP) technology. ASP.NET is built on the Common Language Runtime (CLR), allowing ' +
  'programmers to write ASP.NET code using any supported .NET language. The ASP.NET SOAP extension framework allows ' +
  'ASP.NET components to process SOAP messages.';

const content1 = 'The ASP.NET MVC is a web application framework developed by Microsoft, which implements the ' +
  'model–view–controller (MVC) pattern. It is open-source software, apart from the ASP.NET Web Forms component which is ' +
  'proprietary. In the later versions of ASP.NET, ASP.NET MVC, ASP.NET Web API, and ASP.NET Web Pages (a platform using ' +
  'only Razor pages) will merge into a unified MVC 6.The project is called ASP.NET vNext.';

const content2 = 'JavaScript (JS) is an interpreted computer programming language. It was originally implemented as ' +
  'part of web browsers so that client-side scripts could interact with the user, control the browser, communicate ' +
  'asynchronously, and alter the document content that was displayed.[5] More recently, however, it has become common in ' +
  'both game development and the creation of desktop applications.';
const animationData = ['SlideLeftIn', 'SlideRightIn', 'FadeIn', 'FadeOut', 'FadeZoomIn', 'FadeZoomOut', 'ZoomIn', 'ZoomOut', 'None'];

const previousAnimationChange = () => {
  var tabObj = element.value.ej2Instances;
  var ddlobj = previousInstance.value.ej2Instances;
  tabObj.animation.previous.effect = ddlobj.value;
};
const nextAnimationChange = () => {
  var tabObj = element.value.ej2Instances;
  var ddlobj = nextInstance.value.ej2Instances;
  tabObj.animation.next.effect = ddlobj.value;
}


</script>

<style>
@import "../node_modules/@syncfusion/ej2-base/styles/material.css";
@import "../node_modules/@syncfusion/ej2-vue-buttons/styles/material.css";
@import "../node_modules/@syncfusion/ej2-vue-popups/styles/material.css";
@import "../node_modules/@syncfusion/ej2-vue-navigations/styles/material.css";
</style>