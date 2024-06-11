---
layout: post
title: Events in Vue Progressbar component | Syncfusion
description: Learn here all about Events in Syncfusion Vue Progressbar component of Syncfusion Essential JS 2 and more.
control: Events 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Events in Vue Progressbar component

## Value Change

<!-- markdownlint-disable MD033 -->

**valueChanged** event is triggered when the progress value is changed.

`App.vue`

```
<template>
    <div id='loader'>LOADING....</div>
    <div id='container'>
        <div class="row linear-parent">
            <div id="percentage" class="linear-progress">
             <ejs-progressbar
              refs=event
              id='percentage'
              type='Linear'
              :trackThickness='trackThickness'
              :progressThickness='progressThickness'
              :value='value'
              :labelStyle='labelStyle'
              :valueChanged='valueChanged'
              :showProgressValue='showProgressValue'
              :animation='animation'
              >
            </ejs-progressbar>
          </div>
         <button id="reLoad" @click="onClick()">ValueChanged</button>
       </div>
    </div>
</template>
<script setup>

import { ProgressBarComponent as EjsProgressbar } from "@syncfusion/ej2-vue-progressbar";
import {ref} from "vue";

const event = ref(null);

const trackThickness = 24;
const progressThickness = 24;
const value = 90;
const animation = {
  enable: true,
  duration: 2000,
  delay: 0
};
const labelStyle = {
  color: '#FFFFFF'
};
const showProgressValue = true;

const valueChanged = function(args) {
  args.progressColor = '#2BB20E';
  };
const onClick = ()=> {
  event.value.value = 50;
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

## ProgressCompleted

**ProgressCompleted** event is triggers when the ProgressBar attains the maximum value.

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
              :ProgressCompleted='ProgressCompleted'
              :showProgressValue='showProgressValue'
              :animation='animation'
              >
            </ejs-progressbar>
          </div>
         </div>
    </div>
</template>
<script setup>

import { ProgressBarComponent as EjsProgressbar } from "@syncfusion/ej2-vue-progressbar";

const trackThickness = 24;
const progressThickness = 24;
const value = 90;
const animation = {
  enable: true,
  duration: 2000,
  delay: 0
};
const labelStyle = {
  color: '#FFFFFF'
};
const showProgressValue = true;

const ProgressCompleted = function(args) {
  args.progressColor = '#2BB20E';
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