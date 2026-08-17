---
layout: post
title: Event Binding in Vue Components | Syncfusion
description: Learn how to bind custom component events and native DOM events to Syncfusion Vue components using the v-on directive.
control: Common
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Event Binding in Syncfusion® Vue Components

Syncfusion<sup style="font-size:70%">&reg;</sup> Vue UI components support binding both custom component events and native DOM events. For general Vue guidance, see the official Vue documentation: https://vuejs.org/v2/guide/events.html

## Custom events

Custom events are component-specific events provided by Syncfusion<sup style="font-size:70%">&reg;</sup> Vue components. Bind them using the v-on directive or its shorthand @. Syntax:

v-on:event-name="handler"  or  @event-name="handler"

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
@import "../node_modules/@syncfusion/ej2-material3-theme/styles/calendar/index.css";

#calendar {
  max-width: 250px;
  margin: 0 auto;
}
</style>

```

## Native events

Native events are DOM events fired by a component's root element. In Vue 2, you bind them with the `.native` modifier:

v-on:event-name.native="handler"  or  @event-name.native="handler"

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
@import "../node_modules/@syncfusion/ej2-material3-theme/styles/button/index.css";
</style>

```
