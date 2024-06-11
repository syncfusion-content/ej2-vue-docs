---
layout: post
title: Range in Vue Progressbar component | Syncfusion
description: Learn here all about Range in Syncfusion Vue Progressbar component of Syncfusion Essential JS 2 and more.
control: Range 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Range in Vue Progressbar component

<!-- markdownlint-disable MD033 -->
Range represents the entire span of the ProgressBar and can be defined using the `minimum` and `maximum` properties.

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
              :minimum='minimum'
              :maximum='maximum'
              :trackThickness='trackThickness'
              :progressThickness='progressThickness'
              :value='value'
              :labelStyle='labelStyle'
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
const minimum = 10;
const maximum = 90;
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