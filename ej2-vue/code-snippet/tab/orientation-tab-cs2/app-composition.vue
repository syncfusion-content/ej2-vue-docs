<template>
  <div id='container'>
    <div className="EventLog" id="EventLog"></div>
    <div>
      <ejs-dropdownlist id="dropdown" :dataSource='dropdownData' :change='dropdownChange' index='0'
        floatLabelType="Always" placeholder="Select Tab Item using dropdown" :fields='fields'></ejs-dropdownlist>
    </div>
    <ejs-tab id='element' ref="element" heightAdjustMode='Auto' :selecting='selecting' :selected='selected'
      height='150px' width='700px'>
      <e-tabitems>
        <e-tabitem :header='headerText0' :content="content0"></e-tabitem>
        <e-tabitem :header='headerText1' :content="content1"></e-tabitem>
        <e-tabitem :header='headerText2' :content="content2"></e-tabitem>
        <e-tabitem :header='headerText3' :content="content3"></e-tabitem>
        <e-tabitem :header='headerText4' :content="content4"></e-tabitem>
        <e-tabitem :header='headerText5' :content="content5"></e-tabitem>
        <e-tabitem :header='headerText6' :content="content6"></e-tabitem>
        <e-tabitem :header='headerText7' :content="content7"></e-tabitem>
      </e-tabitems>
    </ejs-tab>
  </div>
</template>
<script setup>

import { TabComponent as EjsTab, TabItemsDirective as ETabitems, TabItemDirective as ETabitem } from '@syncfusion/ej2-vue-navigations';
import { DropDownListComponent as EjsDropdownlist } from "@syncfusion/ej2-vue-dropdowns";

const dropdownData = [
  { text: 'HTML', Id: 0 },
  { text: 'C-Sharp(C#)', Id: 1 },
  { text: 'Java', Id: 2 },
  { text: 'VB.NET', Id: 3 },
  { text: 'Xamarin', Id: 4 },
  { text: 'ASP.NET', Id: 5 },
  { text: 'ASP.NET MVC', Id: 6 },
  { text: 'JavaScript', Id: 7 }
];

const fields = { text: 'text', value: 'Id' };
const headerText0 = { text: 'HTML' };
const headerText1 = { text: 'C Sharp(C#)' };
const headerText2 = { text: 'Java' };
const headerText3 = { text: 'VB.Net' };
const headerText4 = { text: 'Xamarin' };
const headerText5 = { text: 'ASP.NET' };
const headerText6 = { text: 'ASP.NET MVC' };
const headerText7 = { text: 'JavaScript' };

const content0 = 'HyperText Markup Language, commonly referred to as HTML, is the standard markup language used to ' +
  'create web pages. Along with CSS, and JavaScript, HTML is a cornerstone technology, used by most websites to create visually ' +
  'engaging web pages, user interfaces for web applications, and user interfaces for many mobile applications.[1] Web ' +
  'browsers can read HTML files and render them into visible or audible web pages. HTML describes the structure of a ' +
  'website semantically along with cues for presentation, making it a markup language, rather than a programming language.';

const content1 = 'C# is intended to be a simple, modern, general-purpose, object-oriented programming language. Its ' +
  'development team is led by Anders Hejlsberg. The most recent version is C# 5.0, which was released on August 15, 2012.';

const content2 = 'Java is a set of computer software and specifications developed by Sun Microsystems, later acquired ' +
  'by Oracle Corporation, that provides a system for developing application software and deploying it in a cross-platform ' +
  'computing environment. Java is used in a wide variety of computing platforms from embedded devices and mobile phones to ' +
  'enterprise servers and supercomputers. While less common, Java applets run in secure, sandboxed environments to ' +
  'provide many features of native applications and can be embedded in HTML pages.';

const content3 = 'The command-line compiler, VBC.EXE, is installed as part of the freeware .NET Framework SDK. Mono also ' +
  'includes a command-line VB.NET compiler. The most recent version is VB 2012, which was released on August 15, 2012.';

const content4 = 'Xamarin is a San Francisco, California based software company created in May 2011[3] by the engineers ' +
  'that created Mono,[4] Mono for Android and MonoTouch that are cross-platform implementations of the Common Language ' +
  'Infrastructure (CLI) and Common Language Specifications (often called Microsoft .NET). With a C#-shared codebase, ' +
  'developers can use Xamarin tools to write native Android, iOS, and Windows apps with native user interfaces and share ' +
  'code across multiple platforms.[5] Xamarin has over 1 million developers in more than 120 countries around the World ' +
  'as of May 2015.';

const content5 = 'ASP.NET is an open-source server-side web application framework designed for web development to produce ' +
  'dynamic web pages. It was developed by Microsoft to allow programmers to build dynamic web sites, web applications ' +
  'and web services. It was first released in January 2002 with version 1.0 of the .NET Framework, and is the successor ' +
  'to Microsoft\'s Active Server Pages (ASP) technology. ASP.NET is built on the Common Language Runtime (CLR), allowing ' +
  'programmers to write ASP.NET code using any supported .NET language. The ASP.NET SOAP extension framework allows ' +
  'ASP.NET components to process SOAP messages.';

const content6 = 'The ASP.NET MVC is a web application framework developed by Microsoft, which implements the ' +
  'model–view–controller (MVC) pattern. It is open-source software, apart from the ASP.NET Web Forms component which is ' +
  'proprietary. In the later versions of ASP.NET, ASP.NET MVC, ASP.NET Web API, and ASP.NET Web Pages (a platform using ' +
  'only Razor pages) will merge into a unified MVC 6.The project is called ASP.NET vNext.';

const content7 = 'JavaScript (JS) is an interpreted computer programming language. It was originally implemented as ' +
  'part of web browsers so that client-side scripts could interact with the user, control the browser, communicate ' +
  'asynchronously, and alter the document content that was displayed.[5] More recently, however, it has become common in ' +
  'both game development and the creation of desktop applications.';


const selected = (args) => {
  getInteractionDetail(args.isInteracted);
};
const selecting = (args) => {
  getInteractionDetail(args.isInteracted);
};
const dropdownChange = (args) => {
  let tabObj = document.getElementById('element');
  tabObj.ej2_instances[0].select(args.value);
};
const getInteractionDetail = (interact) => {
  let eventlog = interact
    ? 'Tab Item selected by user interaction'
    : 'Tab Item selected by programmatically';
  document.getElementById('EventLog').innerHTML = document.getElementById(
    'EventLog').innerHTML = '<b>' + eventlog + '</b></span>';
};

</script>
<style>
@import "../node_modules/@syncfusion/ej2-vue-navigations/styles/material3.css";
@import "../node_modules/@syncfusion/ej2-vue-dropdowns/styles/material3.css";

#app {
  color: #008cff;
  height: 40px;
  left: 45%;
  position: absolute;
  top: 45%;
  width: 30%;
}

.e-content .e-item {
  font-size: 12px;
  margin: 10px;
  text-align: justify;
}

#element {
  margin-top: 80px;
  margin-left: 80px;
}

#default {
  margin-top: 15px;
}
</style>