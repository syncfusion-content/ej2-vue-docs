---
layout: post
title: Types in Vue Progressbar component | Syncfusion
description: Learn here all about Types in Syncfusion Vue Progressbar component of Syncfusion Essential JS 2 and more.
control: Types 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---
# Types in Vue Progressbar component

Visualize progress in different shapes (rectangle, circle, and semi-circle) to give a unique appearance to your app design.

## Linear

Set **type** to Linear to get the linear progress bar. It also support secondary progress and different mode of progress.

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
              >
              </ejs-progressbar>
              </div>
              <div id="indeterminate" class="linear-progress">
              <ejs-progressbar
              id='indeterminate'
              type='Linear'
              height='60'
              :value='value2'
              :isIndeterminate='isIndeterminate'
             >
              </ejs-progressbar>
              </div>
              <div id="buffer" class="linear-progress">
              <ejs-progressbar
              id='buffer'
              type='Linear'
              height='60'
              :value='value3'
              :secondaryProgress='secondaryProgress'
              :animation=' animation'
              >
              </ejs-progressbar>
              </div>
              <div id="segment" class="linear-progress">
              <ejs-progressbar
              id='segment'
              type='Linear'
              height='60'
              :value='value4'
              :segmentCount='count'
              :animation='animation'
              >
              </ejs-progressbar>
              </div>
         </div>
      </div>
</template>
<script setup>

import { ProgressBarComponent as EjsProgressbar } from "@syncfusion/ej2-vue-progressbar";

const value1 = 100;
const value2 = 20;
const value3 = 40;
const value4 = 100;
const isIndeterminate = true;
const secondaryProgress = 60;
const animation =  {
  enable: true,
  duration: 2000,
  delay: 0
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

## Circular

Set **type** to Circular to get the circular progress bar. It also support secondary progress and different mode of progress.

`App.vue`

```
<template>
     <div id='loader'>LOADING....</div>
      <div id='container'>
          <div class="row linear-parent">
              <div id="determinate" class="linear-progress">
              <ejs-progressbar
              id='determinate'
              type='Circular'
              height='60'
              :value='value1'
              :animation='animation'
              >
              </ejs-progressbar>
              </div>
              <div id="indeterminate" class="linear-progress">
              <ejs-progressbar
              id='indeterminate'
              type='Circular'
              height='60'
              :value='value2'
              :isIndeterminate='isIndeterminate'
             >
              </ejs-progressbar>
              </div>
              <div id="buffer" class="linear-progress">
              <ejs-progressbar
              id='buffer'
              type='Circular'
              height='60'
              :value='value3'
              :secondaryProgress='secondaryProgress'
              :animation=' animation'
              >
              </ejs-progressbar>
              </div>
              <div id="segment" class="linear-progress">
              <ejs-progressbar
              id='segment'
              type='Circular'
              height='60'
              :value='value4'
              :segmentCount='count'
              :animation='animation'
              >
              </ejs-progressbar>
              </div>
         </div>
      </div>
</template>
<script setup>

import { ProgressBarComponent as EjsProgressbar } from "@syncfusion/ej2-vue-progressbar";

const value1 = 100;
const value2 = 20;
const value3 = 40;
const value4 = 100;
const isIndeterminate = true;
const secondaryProgress = 60;
const animation =  {
  enable: true,
  duration: 2000,
  delay: 0
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