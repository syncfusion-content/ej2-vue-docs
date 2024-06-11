---
layout: post
title: Animation in Vue Progressbar component | Syncfusion
description: Learn here all about Animation in Syncfusion Vue Progressbar component of Syncfusion Essential JS 2 and more.
control: Animation 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---
# Animation in Vue Progressbar component

<!-- markdownlint-disable MD033 -->

Progress Bar support to animate the progress by using `animation` property. Enable the animation by setting **enable** property and also you can control the speed by using **duration** property.

`App.vue`

```
<template>
    <div id='loader'>LOADING....</div>
    <div id='container'>
        <div class="row linear-parent">
            <div id="percentage" class="linear-progress">
             <ejs-progressbar
               id="percentage"
               type='Circular'
               :value='value'
               :animation="animation"
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

const value = 100;
const animation = {
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