---
layout: post
title: States in Vue Progressbar component | Syncfusion
description: Learn here all about States in Syncfusion Vue Progressbar component of Syncfusion Essential JS 2 and more.
control: States 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---
# States in Vue Progressbar component

Visualize progress in different modes.

## Determinate

This is the default state. You can use it when the progress estimation is known.

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
            height='60'
            :value='value'
            >
            </ejs-progressbar>
          </div>
       </div>
    </div>
</template>
<script setup>

import { ProgressBarComponent as EjsProgressbat } from "@syncfusion/ej2-vue-progressbar";

const value = 100;

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

## Indeterminate

By enabling the **IsIndeterminate** property, the state of the progress bar can be changed to indeterminate when the progress cannot be estimated or is not being calculated. It can be combined with determinate mode to know that the application is estimating progress before the actual progress starts.

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
            height='60'
            :value='value'
            :isIndeterminate='isIndeterminate'
            >
            </ejs-progressbar>
          </div>
       </div>
    </div>
</template>
<script setup>

import { ProgressBarComponent as EjsProgressbar } from "@syncfusion/ej2-vue-progressbar";

const value = 20;
const isIndeterminate = true;

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

## Buffer

You can use a secondary progress indicator when the primary progress depends on the secondary progress. This will allow users to visualize both primary and secondary progress simultaneously.

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
            height='60'
            :value='value'
            :secondaryProgress='secondaryProgress'
            >
            </ejs-progressbar>
          </div>
       </div>
    </div>
</template>
<script setup>

import { ProgressBarComponent as EjsProgressbar } from "@syncfusion/ej2-vue-progressbar";

const value = 40;
const secondaryProgress = 60;

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