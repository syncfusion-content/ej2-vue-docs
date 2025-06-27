---
layout: post
title: Event binding in Vue Common control | Syncfusion
description: Learn here all about Event binding in Syncfusion Vue Common control of Syncfusion Essential JS 2 and more.
control: common
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Event Binding

Syncfusion<sup style="font-size:70%">&reg;</sup> Vue UI components support Binding of both Custom and Native Events. For more information, refer official [Vue Documentation](https://vuejs.org/v2/guide/events.html)

## Custom events

Custom events are the `Component` specific events provided by Syncfusion<sup style="font-size:70%">&reg;</sup> Vue components supported through `v-on` directive. The Syntax for Binding Custom Event is `v-on:event-name="function"`.

Refer the below code snippet for Binding of Custom Events.

```

// Custom Event Binding

<template>
  <div id="calendar">
    <ejs-calendar @created="display" />
  </div>
</template>

<script setup>
import { CalendarComponent as EjsCalendar } from '@syncfusion/ej2-vue-calendars';

const display = () => {
  alert('Calendar Created');
}
</script>

<style>
@import "../node_modules/@syncfusion/ej2-base/styles/material.css";
@import "../node_modules/@syncfusion/ej2-vue-buttons/styles/material.css";
@import "../node_modules/@syncfusion/ej2-vue-calendars/styles/material.css";

#calendar {
  max-width: 250px;
  margin: 0 auto;
}
</style>

```

## Native events

Native events are the DOM events of Syncfusion<sup style="font-size:70%">&reg;</sup> Vue component's root element. `.native` modifier for `v-on` directive is used for binding these events. The Syntax for Binding Native Event is `v-on:event-name.native="function"`.

Refer the below code snippet for Binding Native Events.

```

//Native Event Binding

<template>
  <div id="button">
    <ejs-button :content="name" @click="clicked"></ejs-button>
  </div>
</template>

<script setup>
import { ButtonComponent as EjsButton } from "@syncfusion/ej2-vue-buttons";

const name = "Button";
const clicked = () => {
  alert('Button Clicked');
}
</script>

<style>
@import "../node_modules/@syncfusion/ej2-base/styles/material.css";
@import "../node_modules/@syncfusion/ej2-vue-buttons/styles/material.css";
</style>

```
