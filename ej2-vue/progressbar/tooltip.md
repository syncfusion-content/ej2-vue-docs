---
layout: post
title: Tooltip in Vue Progressbar component | Syncfusion
description: Learn here all about Tooltip in Syncfusion Vue Progressbar component of Syncfusion Essential JS 2 and more.
control: Tooltip 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---
# Tooltip in Vue Progressbar component

## Tooltip

The tooltip for the progress bar is used to represent the progress value. During the initial load, it can be enabled by using the [`enable`](https://ej2.syncfusion.com/vue/documentation/api/progressbar/tooltipSettings/#enable) property. The [`showTooltipOnHover`](https://ej2.syncfusion.com/vue/documentation/api/progressbar/tooltipSettings/#showtooltiponhover) property can show the tooltip on mouseover.

`App.vue`

```
<template>
     <div id='loader'>LOADING....</div>
      <div id='container'>
          <div class="row linear-parent">
              <div id="determinate" class="linear-progress">
              <ejs-progressbar
              id='determinate'
              type='Linear'
              height='60'
              :value='value1'
              :animation='animation'
              :tooltip='tooltip'
              </div>
         </div>
      </div>
</template>
<script setup>

import { ProgressBarComponent as EjsProgressbar } from "@syncfusion/ej2-vue-progressbar";

const value1 =100;
const animation = {
  enable: true,
  duration: 2000,
  delay: 0
};
const tooltip = {
  enable: true,
  showTooltipOnHover: true
};

</script>
<style>
  #loader {
    color: #008cff;
    height: 40px;
    left: 45%;
    position: absolute;
    top: 45%;
    width: 30%;
}
  #container {
    display: -webkit-box;
}
</style>

```

## Format

By default, the tooltip shows information about progress. In addition to that, show more information in the tooltip using the [`format`](https://ej2.syncfusion.com/vue/documentation/api/progressbar/tooltipSettings/#format) property.

`App.vue`

```
<template>
     <div id='loader'>LOADING....</div>
      <div id='container'>
          <div class="row linear-parent">
              <div id="determinate" class="linear-progress">
              <ejs-progressbar
              id='determinate'
              type='Linear'
              height='60'
              :value='value1'
              :animation='animation'
              :tooltip='tooltip'
              </div>
         </div>
      </div>
</template>
<script setup>

import { ProgressBarComponent as EjsProgressbar } from "@syncfusion/ej2-vue-progressbar";

const value1 =100;
const animation = {
  enable: true,
  duration: 2000,
  delay: 0
};
const tooltip = {
  enable: true,
  format: "Progress: ${value}"
};

</script>
<style>
  #loader {
    color: #008cff;
    height: 40px;
    left: 45%;
    position: absolute;
    top: 45%;
    width: 30%;
}
  #container {
    display: -webkit-box;
}
</style>

```

## Customization

The [`fill`](https://ej2.syncfusion.com/vue/documentation/api/progressbar/tooltipSettings/#fill) and [`border`](https://ej2.syncfusion.com/vue/documentation/api/progressbar/tooltipSettings/#border) properties are used to customize the background color and border of the tooltip respectively. The [`textStyle`](https://ej2.syncfusion.com/vue/documentation/api/progressbar/tooltipSettings/#textstyle) property in the tooltip is used to customize the font of the tooltip text.

`App.vue`

```
<template>
     <div id='loader'>LOADING....</div>
      <div id='container'>
          <div class="row linear-parent">
              <div id="determinate" class="linear-progress">
              <ejs-progressbar
              id='determinate'
              type='Linear'
              height='60'
              :value='value1'
              :animation='animation'
              :tooltip='tooltip'
              </div>
         </div>
      </div>
</template>
<script setup>

import { ProgressBarComponent as EjsProgressbar } from "@syncfusion/ej2-vue-progressbar";

const value1 =100;
const animation = {
  enable: true,
  duration: 2000,
  delay: 0
};
const tooltip = {
  enable: true,
  format: "Progress: ${value}"
};

</script>
<style>
  #loader {
    color: #008cff;
    height: 40px;
    left: 45%;
    position: absolute;
    top: 45%;
    width: 30%;
}
  #container {
    display: -webkit-box;
}
</style>

```