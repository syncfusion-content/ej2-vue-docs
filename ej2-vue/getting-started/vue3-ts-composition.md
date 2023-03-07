---
layout: post
title: Vue3 ts composition with Vue Getting started component | Syncfusion
description:  Checkout and learn about Vue3 ts composition with Vue Getting started component of Syncfusion Essential JS 2 and more details.
control: Vue3 ts composition 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Getting Started with Syncfusion Vue UI Components in TypeScript with the Composition API

This section provides a step-by-step guide on setting up a Vite project with a TypeScript environment and effectively integrating the Syncfusion Vue components with the Composition API.

## Prerequisites

[System requirements for Syncfusion Vue UI components](../system-requirements)

## Creating a Vue application with Vite

To get started with developing modern web projects quickly, consider using [Vite](https://vitejs.dev/), a rapid development tool. To create a new Vite project, choose any one of the ways listed [here](https://vitejs.dev/guide/#scaffolding-your-first-vite-project). One of the commands is illustrated below:

```bash
npm create vite@latest
```

or

```bash
yarn create vite
```

When using Vite for the first time, it asks to install an additional package. This package is essential for creating a new Vite project, so select "y" to proceed.

```bash
Need to install the following packages:
create-vite@latest
Ok to proceed? (y)
```

Now, need to select a name for the new project. When choosing a name, it's recommended to use kebab-case for multiple words.

```bash
? Project name: » vite-project
```

The next step is to select Vue as the framework for the new project.

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

For this application, choose the TypeScript variant.
```bash
? Select a variant: » - Use arrow-keys. Return to submit.
  JavaScript
> TypeScript
  Customize with create-vue ↗
  Nuxt ↗
```

After creating the application, execute the following command to install its dependencies:

```bash
cd vite-project
npm install
```

or

```bash
cd vite-project
yarn install
```

## Add Syncfusion packages to the application

To proceed, install the necessary Syncfusion Vue component package in this application. These packages can be found on the public [`npmjs.com`](https://www.npmjs.com/~syncfusionorg) registry, so select the required component to install.

This article uses the Schedule component as an example. To install the package for the Schedule component, run the following command:

```bash
npm install @syncfusion/ej2-vue-schedule --save
```

or

```bash
yarn add @syncfusion/ej2-vue-schedule
```

## Import the Syncfusion styles

Once the Syncfusion component packages are installed in this application, import the necessary themes based on the components. To add the styles, simply reference the CSS or SASS files of the Syncfusion Vue components in the following manner.

### Import CSS styles

To include the required CSS styles for the Schedule component, along with its dependent styles, import them within the `<style>` section of the `src/App.vue` file in the following manner:

```
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

### Import SASS styles
To enable the usage of SASS files within this application, it requires the SASS package to be installed. Install it by executing the following command:

```bash
npm install sass
```

or

```bash
yarn add sass
```

In order to use SCSS styles for the Schedule component and its dependencies, import the required styles within the `<style>` section of the `src/App.vue` file using the lang attribute to specify the language as SCSS. This can be accomplished as demonstrated below:

```
<style lang="scss">
  @import '../node_modules/@syncfusion/ej2-base/styles/material.scss';
  @import '../node_modules/@syncfusion/ej2-buttons/styles/material.scss';
  @import '../node_modules/@syncfusion/ej2-calendars/styles/material.scss';
  @import '../node_modules/@syncfusion/ej2-dropdowns/styles/material.scss';
  @import '../node_modules/@syncfusion/ej2-inputs/styles/material.scss';
  @import '../node_modules/@syncfusion/ej2-navigations/styles/material.scss';
  @import '../node_modules/@syncfusion/ej2-popups/styles/material.scss';
  @import '../node_modules/@syncfusion/ej2-vue-schedule/styles/material.scss';
</style>
```

To utilize SASS files, include the following configuration setup in the `vite.config.ts` file.

```ts
export default defineConfig({
  plugins: [vue()],
  css: {
    preprocessorOptions: {
      scss: {
        includePaths: ["node_modules/@syncfusion"]
      }
    }
  }
})
```

## Add the Syncfusion Vue component to the application

After completing all the necessary configurations required to render the Syncfusion Vue component with Composition API, add the Schedule component using the following steps:

  1. In the `<script>` section of the `src/App.vue` file, add `setup` attribute and import the Schedule component, its child directives, and required modules.

```
<script setup>
  import { ScheduleComponent as EjsSchedule, ViewsDirective as EViews, ViewDirective as EView, ResourcesDirective as EResources, ResourceDirective as EResource, EventSettingsModel, Day, Week, WorkWeek, Month, Agenda, DragAndDrop, Resize } from "@syncfusion/ej2-vue-schedule";
</script>
```
   
  2. In the `template` section, define the Schedule component with appointments. To populate the empty Scheduler with appointments, define either the local JSON data or remote data through the [dataSource](https://ej2.syncfusion.com/vue/documentation/api/schedule/eventSettingsModel/#datasource) property available within the [eventSettings](https://ej2.syncfusion.com/vue/documentation/api/schedule#eventsettings) option. Additionally, it is necessary to include the start and end time fields to define any appointments.

```
<template>
  <div id='app'>
    <ejs-schedule height='550px' width='100%' :selectedDate='selectedDate' :eventSettings='eventSettings'>
      <e-views>
        <e-view option='Day'></e-view>
        <e-view option='Week' startHour='07:00' endHour='15:00'></e-view>
        <e-view option='WorkWeek' startHour='10:00' endHour='18:00'></e-view>
        <e-view option='Month' showWeekend=false></e-view>
        <e-view option='Agenda'></e-view>
      </e-views>
      <e-resources>
        <e-resource field="OwnerId" title="Owner" name="Owners" :dataSource="ownerDataSource" textField="OwnerText"
          idField="Id" colorField="OwnerColor">
        </e-resource>
      </e-resources>
    </ejs-schedule>
  </div>
</template>
```

  3. In the `script` section, declare the Schedular appointment values using `datasource` property.

```ts
<script setup>
const eventSettings: EventSettingsModel = {
  dataSource: [
    {
      Id: 1,
      Subject: 'Surgery - Andrew',
      EventType: 'Confirmed',
      StartTime: new Date(2021, 7, 10, 9, 0),
      EndTime: new Date(2021, 7, 10, 10, 0),
      OwnerId: 2
    },
    {
      Id: 2,
      Subject: 'Consulting - John',
      EventType: 'Confirmed',
      StartTime: new Date(2021, 7, 11, 10, 0),
      EndTime: new Date(2021, 7, 11, 11, 30),
      OwnerId: 3
    },
    {
      Id: 3,
      Subject: 'Therapy - Robert',
      EventType: 'Requested',
      StartTime: new Date(2021, 7, 12, 11, 30),
      EndTime: new Date(2021, 7, 12, 12, 30),
      OwnerId: 1
    }
  ]
};
</script>
```

  4. To create a Schedule with specific views, need to inject the required modules into the Schedule. This can be done by using the `provide` method within the `src/App.vue` file. By injecting the required views, only those views will be loaded and displayed on the Schedule. Here's an example of how to inject the required modules.

```ts
<script setup lang="ts">
  import { provide } from "vue";
  provide('schedule', [Day, Week, WorkWeek, Month, Agenda, DragAndDrop, Resize]);
</script>
```

  5. To summarize the above steps, update the `src/App.vue` file with the following code:

```
<template>
  <div id='app'>
    <ejs-schedule height='550px' width='100%' :selectedDate='selectedDate' :eventSettings='eventSettings'>
      <e-views>
        <e-view option='Day'></e-view>
        <e-view option='Week' startHour='07:00' endHour='15:00'></e-view>
        <e-view option='WorkWeek' startHour='10:00' endHour='18:00'></e-view>
        <e-view option='Month' showWeekend=false></e-view>
        <e-view option='Agenda'></e-view>
      </e-views>
      <e-resources>
        <e-resource field="OwnerId" title="Owner" name="Owners" :dataSource="ownerDataSource" textField="OwnerText"
          idField="Id" colorField="OwnerColor">
        </e-resource>
      </e-resources>
    </ejs-schedule>
  </div>
</template>

<script setup lang="ts">
import { ScheduleComponent as EjsSchedule, Day, Week, WorkWeek, Month, Agenda, DragAndDrop, Resize, ViewsDirective as EViews, ViewDirective as EView, ResourcesDirective as EResources, ResourceDirective as EResource } from "@syncfusion/ej2-vue-schedule";
import { provide } from "vue";

provide('schedule', [Day, Week, WorkWeek, Month, Agenda, DragAndDrop, Resize]);

const selectedDate: Date = new Date(2021, 7, 12);
const allowMultiple: boolean = true;
const ownerDataSource: Record<string, any>[] = [
  { OwnerText: 'Nancy', Id: 1, OwnerColor: '#ffaa00' },
  { OwnerText: 'Steven', Id: 2, OwnerColor: '#f8a398' },
  { OwnerText: 'Michael', Id: 3, OwnerColor: '#7499e1' }];
const eventSettings: EventSettingsModel = {
  dataSource: [
    {
      Id: 1,
      Subject: 'Surgery - Andrew',
      EventType: 'Confirmed',
      StartTime: new Date(2021, 7, 10, 9, 0),
      EndTime: new Date(2021, 7, 10, 10, 0),
      OwnerId: 2
    },
    {
      Id: 2,
      Subject: 'Consulting - John',
      EventType: 'Confirmed',
      StartTime: new Date(2021, 7, 11, 10, 0),
      EndTime: new Date(2021, 7, 11, 11, 30),
      OwnerId: 3
    },
    {
      Id: 3,
      Subject: 'Therapy - Robert',
      EventType: 'Requested',
      StartTime: new Date(2021, 7, 12, 11, 30),
      EndTime: new Date(2021, 7, 12, 12, 30),
      OwnerId: 1
    }
  ]
};
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

## Run the application

To run the application, execute the following command:

```bash
npm run dev
```

or

```bash
yarn run dev
```

The output will appears as follows.

![vue3-ts-composition](../appearance/images/vue3-ts-composition.png)