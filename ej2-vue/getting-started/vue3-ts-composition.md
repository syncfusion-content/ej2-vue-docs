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

This section offers a step-by-step guide for setting up a [Vite](https://vitejs.dev/) project with a TypeScript environment and integrating the Syncfusion Vue components with the [Composition API](https://vuejs.org/guide/introduction.html#composition-api) effectively. If you need information on getting started with the Vue [Options API](https://vuejs.org/guide/introduction.html#options-api), follow this [link](./vue3-ts-options).

## Prerequisites

[System requirements for Syncfusion Vue UI components](../system-requirements)

## Set up the Vite project

A recommended approach for beginning with Vue is to scaffold a project using [Vite](https://vitejs.dev/). To create a new Vite project, you can execute one of the commands that are specific to either NPM or Yarn.

```bash
npm create vite@latest
```

or

```bash
yarn create vite
```

Executing one of the above commands will lead you to set up additional configurations for the project:

1.Define the project name: We can specify the name of the project directly. Let's specify the name of the project as `my-project` for this article.

```bash
? Project name: » my-project
```

2.Select `Vue` as the framework.

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

3.Choose `TypeScript` as framework variant to build this Vite project using TypeScript and Vue.

```bash
? Select a variant: » - Use arrow-keys. Return to submit.
  JavaScript
> TypeScript
  Customize with create-vue ↗
  Nuxt ↗
```

4.Upon completing the aforementioned steps to create the `my-project`, run the following command to install its dependencies:

```bash
cd my-project
npm install
```

or

```bash
cd my-project
yarn install
```

Now that `my-project` is ready to run with default settings, let's add Syncfusion components to the project.

## Add Syncfusion packages to the project

In order to proceed, install the required Syncfusion Vue component package from the public [npmjs.com](https://www.npmjs.com/~syncfusionorg) registry.

This article utilizes the Schedule component as an example. So, run the below command to install the Syncfusion Schedule component package.

```bash
npm install @syncfusion/ej2-vue-schedule --save
```

or

```bash
yarn add @syncfusion/ej2-vue-schedule
```

## Import the Syncfusion styles

Once you have installed the Syncfusion component packages, you will need to import the necessary themes based on the components.

Syncfusion Vue component comes with built-in [themes](https://ej2.syncfusion.com/vue/documentation/appearance/theme/), which are available in installed packages. It is quite simple to adapt the Syncfusion Vue components based on the project style by referring to any of the built-in themes.

To add the styles, you can reference the CSS or SASS files of the Syncfusion Vue components as follows:

### Import CSS styles

To import the necessary CSS styles for the Schedule component, as well as its dependent styles, into the `src/App.vue` file, you can use the provided code snippet within the `<style>` section. Let's import the `Material` theme for the Schedule component.

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

### Import SASS styles

Run the below command to add the SASS package in order to use SCSS styles for the Schedule component and its dependencies in this project.

```bash
npm install sass
```

or

```bash
yarn add sass
```

Then, within the `<style>` section of the `src/App.vue` file, import the necessary styles and specify the language as `SCSS` using the `lang` attribute. Let's import the `Material` theme for the Schedule component.

```html
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

To make use of SASS files in a Vite project, add the following configuration setup to the `vite.config.js` file.

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

You can checkout the [themes topic](https://ej2.syncfusion.com/vue/documentation/appearance/theme/) to know more about built-in themes and different ways to refer themes in Vue project.

## Integrate the Syncfusion Vue component to the project

Once we have finished all the essential configurations for rendering the Syncfusion Vue component with the Composition API in your Vite project, proceed with the following steps to add the Schedule component:

  1.First, add the `setup` attribute to the `script` tag to indicate that Vue will be using the Composition API. And import the Schedule component in the `script` section of the `src/App.vue` file.

```html
<script setup>
  import { ScheduleComponent as EjsSchedule, ViewsDirective as EViews, ViewDirective as EView, ResourcesDirective as EResources, ResourceDirective as EResource, EventSettingsModel, Day, Week, WorkWeek, Month, Agenda, DragAndDrop, Resize } from "@syncfusion/ej2-vue-schedule";
</script>
```
   
  2.In the `template` section, define the Schedule component with appointments. To populate the empty Scheduler with appointments, define either the local JSON data or remote data through the [dataSource](https://ej2.syncfusion.com/vue/documentation/api/schedule/eventSettingsModel/#datasource) property available within the [eventSettings](https://ej2.syncfusion.com/vue/documentation/api/schedule#eventsettings) option. Additionally, it is necessary to include the start and end time fields to define any appointments.

```html
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

  3.Declare the values for the `dataSource` property in the `script` section.

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

  4.To generate a Schedule with particular views, need to inject the relevant modules into the Schedule. This can be accomplished by utilizing the `provide` method within the `src/App.vue` file.

```ts
<script setup lang="ts">
  import { provide } from "vue";
  provide('schedule', [Day, Week, WorkWeek, Month, Agenda, DragAndDrop, Resize]);
</script>
```

The `src/App.vue` file contains the summarized code for the above steps.

```html
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

## Run the project

To run the project, execute the following command:

```bash
npm run dev
```

or

```bash
yarn run dev
```

The output will appear as follows:

![vue3-ts-composition](../common/appearance/images/vue3-ts-composition.png)