---
layout: post
title: Getting started Vue 3 using Composition API with Vue Scheduler component | Syncfusion
description:  Checkout and learn about Getting started Vue 3 using Composition API with Vue Scheduler component of Syncfusion Essential JS 2 and more details.
control: Getting started Vue 3 using Composition API 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Getting Started with Syncfusion Scheduler Component in Vue 3 using Composition API

This article provides a step-by-step guide for setting up a [Vite](https://vitejs.dev/) project with a JavaScript environment and integrating the Syncfusion Vue Scheduler component using the [Composition API](https://vuejs.org/guide/introduction.html#composition-api).

The `Composition API` is a new feature introduced in Vue.js 3 that provides an alternative way to organize and reuse component logic. It allows developers to write components as functions that use smaller, reusable functions called composition functions to manage their properties and behavior.

## Prerequisites

[System requirements for Syncfusion Vue UI components](https://ej2.syncfusion.com/vue/documentation/system-requirements/)

## Set up the Vite project

A recommended approach for beginning with Vue is to scaffold a project using [Vite](https://vitejs.dev/). To create a new Vite project, use the below command.

```bash
npm create vite@latest
```

Using the above command will lead you to set up additional configurations for the project as below:

1.Define the project name: We can specify the name of the project directly. Let's specify the name of the project as `my-project` for this article.

```bash
? Project name: » my-project
```

2.Select `Vue` as the framework. It will creates a Vue 3 project.

```bash
? Select a framework: » - Use arrow-keys. Return to submit.
Vanilla
> Vue
  React
  Preact
  Lit
  Svelte
  Others
```

3.Choose `JavaScript` as framework variant to build this Vite project using JavaScript and Vue.

```bash
? Select a variant: » - Use arrow-keys. Return to submit.
> JavaScript
  TypeScript
  Customize with create-vue ↗
  Nuxt ↗
```

4.Upon completing the aforementioned steps to create the `my-project`, run the following command to install its dependencies:

```bash
cd my-project
npm install
```
Now that `my-project` is ready to run with default settings, let's add Syncfusion Scheduler component to the project.

## Adding Syncfusion Vue Scheduler package in the application

All the available Essential JS 2 packages are published in [`npmjs.com`](https://www.npmjs.com/~syncfusionorg) registry.

Install the `Scheduler` component by using the below npm command.

```bash
npm install @syncfusion/ej2-vue-schedule --save
```

## Adding CSS reference for Syncfusion Vue Scheduler component

Import the needed css styles for the Scheduler component along with dependency styles in the `<style>` section of the `src/App.vue` file as follows.

```html
<style>
  @import '../node_modules/@syncfusion/ej2-base/styles/material.css';
  @import '../node_modules/@syncfusion/ej2-buttons/styles/material.css';
  @import '../node_modules/@syncfusion/ej2-calendars/styles/material.css';
  @import '../node_modules/@syncfusion/ej2-dropdowns/styles/material.css';
  @import '../node_modules/@syncfusion/ej2-inputs/styles/material.css';
  @import '../node_modules/@syncfusion/ej2-navigations/styles/material.css';
  @import '../node_modules/@syncfusion/ej2-popups/styles/material.css';
  @import '../node_modules/@syncfusion/ej2-vue-schedule/styles/material.css';
</style>
```

> **Note**: Scheduler component use other Syncfusion components too, the dependent component's CSS references need to be added for using all the Scheduler functionalities.

## Adding Syncfusion Vue Scheduler component in the application

Follow the below steps to add the Vue Scheduler component using `Composition API`:

1.First, add the `setup` attribute to the `script` tag to indicate that Vue will be using the `Composition API`. And import the Scheduler component in the `script` section of the **src/App.vue** file. And inject the required views using the vue `provide` method.

```html
<script setup>
import { provide } from "vue";
import {
  ScheduleComponent as EjsSchedule, ViewsDirective as EViews, ViewDirective as EView,
  ResourcesDirective as EResources, ResourceDirective as EResource,
  Day, Week, WorkWeek, Month, Agenda
} from "@syncfusion/ej2-vue-schedule";

provide('schedule', [Day, Week, WorkWeek, Month, Agenda]);
</script>
```
   
2.In the `template` section, define the Scheduler component with the [selectedDate](https://ej2.syncfusion.com/vue/documentation/api/schedule/#selecteddate), [eventSettings](https://ej2.syncfusion.com/vue/documentation/api/schedule/#eventsettings) properties and [resources](https://ej2.syncfusion.com/vue/documentation/api/schedule/#resources) definition with [dataSource](https://ej2.syncfusion.com/vue/documentation/api/schedule/resourcesModel/#datasource) property.

```html
<template>
  <ejs-schedule height='550px' width='100%' :selectedDate='selectedDate' :eventSettings='eventSettings'>
    <e-views>
      <e-view option='Day'></e-view>
      <e-view option='Week'></e-view>
      <e-view option='WorkWeek'></e-view>
      <e-view option='Month'></e-view>
      <e-view option='Agenda'></e-view>
    </e-views>
    <e-resources>
      <e-resource field="OwnerId" title="Owner" name="Owners" :dataSource="ownerDataSource" textField="OwnerText"
        idField="Id" colorField="OwnerColor">
      </e-resource>
    </e-resources>
  </ejs-schedule>
</template>
```

3.Declare the values for the `selectedDate`, `eventSettings` and `resources` `dataSource` properties in the `script` section.

```js
<script setup>
const selectedDate = new Date(2023, 7, 8);
const eventSettings = {
  dataSource: [
    {
      Id: 1,
      Subject: 'Surgery - Andrew',
      EventType: 'Confirmed',
      StartTime: new Date(2023, 7, 10, 9, 0),
      EndTime: new Date(2023, 7, 10, 10, 0),
      OwnerId: 2
    },
    {
      Id: 2,
      Subject: 'Consulting - John',
      EventType: 'Confirmed',
      StartTime: new Date(2023, 7, 9, 10, 0),
      EndTime: new Date(2023, 7, 9, 11, 30),
      OwnerId: 3
    },
    {
      Id: 3,
      Subject: 'Therapy - Robert',
      EventType: 'Requested',
      StartTime: new Date(2023, 7, 8, 11, 30),
      EndTime: new Date(2023, 7, 8, 12, 30),
      OwnerId: 1
    }
  ]
};
const ownerDataSource = [
  { OwnerText: "Nancy", Id: 1, OwnerColor: "#ffaa00" },
  { OwnerText: "Steven", Id: 2, OwnerColor: "#f8a398" },
  { OwnerText: "Michael", Id: 3, OwnerColor: "#7499e1" }
];
</script>
```

Here is the summarized code for the above steps in the **src/App.vue** file:

```html
<template>
  <ejs-schedule height='550px' width='100%' :selectedDate='selectedDate' :eventSettings='eventSettings'>
    <e-views>
      <e-view option='Day'></e-view>
      <e-view option='Week'></e-view>
      <e-view option='WorkWeek'></e-view>
      <e-view option='Month'></e-view>
      <e-view option='Agenda'></e-view>
    </e-views>
    <e-resources>
      <e-resource field="OwnerId" title="Owner" name="Owners" :dataSource="ownerDataSource" textField="OwnerText"
        idField="Id" colorField="OwnerColor">
      </e-resource>
    </e-resources>
  </ejs-schedule>
</template>

<script setup>
import { provide } from "vue";
import {
  ScheduleComponent as EjsSchedule, ViewsDirective as EViews, ViewDirective as EView,
  ResourcesDirective as EResources, ResourceDirective as EResource,
  Day, Week, WorkWeek, Month, Agenda
} from "@syncfusion/ej2-vue-schedule";

provide('schedule', [Day, Week, WorkWeek, Month, Agenda]);

const selectedDate = new Date(2023, 7, 8);
const eventSettings = {
  dataSource: [
    {
      Id: 1,
      Subject: 'Surgery - Andrew',
      EventType: 'Confirmed',
      StartTime: new Date(2023, 7, 10, 9, 0),
      EndTime: new Date(2023, 7, 10, 10, 0),
      OwnerId: 2
    },
    {
      Id: 2,
      Subject: 'Consulting - John',
      EventType: 'Confirmed',
      StartTime: new Date(2023, 7, 9, 10, 0),
      EndTime: new Date(2023, 7, 9, 11, 30),
      OwnerId: 3
    },
    {
      Id: 3,
      Subject: 'Therapy - Robert',
      EventType: 'Requested',
      StartTime: new Date(2023, 7, 8, 11, 30),
      EndTime: new Date(2023, 7, 8, 12, 30),
      OwnerId: 1
    }
  ]
};
const ownerDataSource = [
  { OwnerText: "Nancy", Id: 1, OwnerColor: "#ffaa00" },
  { OwnerText: "Steven", Id: 2, OwnerColor: "#f8a398" },
  { OwnerText: "Michael", Id: 3, OwnerColor: "#7499e1" }
];
</script>

<style>
@import '../node_modules/@syncfusion/ej2-base/styles/material.css';
@import '../node_modules/@syncfusion/ej2-buttons/styles/material.css';
@import '../node_modules/@syncfusion/ej2-calendars/styles/material.css';
@import '../node_modules/@syncfusion/ej2-dropdowns/styles/material.css';
@import '../node_modules/@syncfusion/ej2-inputs/styles/material.css';
@import '../node_modules/@syncfusion/ej2-navigations/styles/material.css';
@import '../node_modules/@syncfusion/ej2-popups/styles/material.css';
@import '../node_modules/@syncfusion/ej2-vue-schedule/styles/material.css';
</style>
```

## Run the project

To run the project, use the following command:

```bash
npm run dev
```

The output will appear as follows:

![vue3-js-composition](./images/vue3-composition-scheduler.png)

Refer the sample [Vue 3 using Composition API Scheduler getting started](https://github.com/SyncfusionExamples/vue3-schedule-getting-started)