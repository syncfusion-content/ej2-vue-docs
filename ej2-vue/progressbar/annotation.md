---
layout: post
title: Annotation in Vue Progressbar component | Syncfusion
description: Learn here all about Annotation in Syncfusion Vue Progressbar component of Syncfusion Essential JS 2 and more.
control: Annotation 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---
# Annotation in Vue Progressbar component

## Annotation

In the circular progress bar, you can add any view to the center using the **Content** property in annotation.

For example, you can include add, start, or pause button to control the progress. You can also add an image that indicates the actual task in progress or add custom text that conveys how far the task is completed.

`App.vue`

```
<template>
    <div id='loader'>LOADING....</div>
    <div id='container'>
        <div class="row linear-parent">
            <div id="percentage" class="linear-progress">
             <ejs-progressbar
               id='percentage'
               type='Circular'
               :trackThickness='trackThickness'
               :progressThickness='progressThickness'
              >
            <e-progressbar-annotations>
              <e-progressbar-annotation
                :content="content"
               ></e-progressbar-annotation>
            </e-progressbar-annotations>
           </ejs-progressbar>
          </div>
       </div>
    </div>
</template>
<script setup>
import { provide } from "vue";

import { Browser } from "@syncfusion/ej2-base";
import { ProgressBarComponent as EjsProgressbar, ProgressAnnotation } from "@syncfusion/ej2-vue-progressbar";

const trackThickness = 10;
const progressThickness = 10;
const content = '<div id="point1" style="font-size:20px;font-weight:bold;color:#ffffff;fill:#ffffff"><span>60%span><div>';

provide('progressbar',  [ProgressAnnotation]);

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

## Label

You can show the progress value in both linear and cicular progress bar using **showProgressValue** property.

`App.vue`

```
<template>
    <div id='loader'>LOADING....</div>
    <div id='container'>
        <div class="row linear-parent">
            <div id="percentage" class="linear-progress">
             <ejs-progressbar
              id='percentage'
              type='Linear'
              :trackThickness='trackThickness'
              :progressThickness='progressThickness'
              :value='value'
              :labelStyle='labelStyle'
              :textRender='textRender'
              :showProgressValue='showProgressValue'
              :animation='animation'
              >
            </ejs-progressbar>
          </div>
       </div>
    </div>
</template>
<script setup>
import { provide } from "vue";

import { Browser } from "@syncfusion/ej2-base";
import { ProgressBarComponent as EjsProgressbar } from "@syncfusion/ej2-vue-progressbar";

const trackThickness = 24;
const progressThickness = 24;
const value = 50;
const animation = {
  enable: true,
  duration: 2000,
  delay: 0
};
const labelStyle = {
  color: '#FFFFFF'
};
const showProgressValue = true;

const textRender = function(args){
  args.text = '50';
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