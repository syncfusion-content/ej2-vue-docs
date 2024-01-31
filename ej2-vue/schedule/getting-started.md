---
layout: post
title: Getting started with Vue Schedule component | Syncfusion
description:  Checkout and learn about Getting started with Vue Schedule component of Syncfusion Essential JS 2 and more details.
control: Getting started 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Getting Started with the Vue Schedule Component in Vue 2

This article provides a step-by-step guide for setting up a Vue 2 project using [Vue-CLI](https://cli.vuejs.org/) and integrating the Syncfusion Vue Schedule component.

Check out this video to see how to develop a Vue Scheduler application:

{% youtube "https://www.youtube.com/watch?v=Wak6k6cYPiA" %}

## Prerequisites

[System requirements for Syncfusion Vue UI components](https://ej2.syncfusion.com/vue/documentation/system-requirements)

## Setting up the Vue 2 project

To generate a Vue 2 project using Vue-CLI, use the [vue create](https://cli.vuejs.org/#getting-started) command. Follow these steps to install Vue CLI and create a new project:

```bash
npm install -g @vue/cli
vue create quickstart
cd quickstart
npm run serve
```

or

```bash
yarn global add @vue/cli
vue create quickstart
cd quickstart
yarn run serve
```

When creating a new project, choose the option `Default ([Vue 2] babel, eslint)` from the menu.

![Vue 2 project](../appearance/images/vue2-terminal.png)

Once the `quickstart` project is set up with default settings, proceed to add Syncfusion components to the project.

## Add Syncfusion Vue packages

Syncfusion packages are available at [npmjs.com](https://www.npmjs.com/search?q=ej2-vue). To use Vue components, install the required npm package.

This article uses the [Vue Schedule component](https://www.syncfusion.com/vue-components/vue-scheduler) as an example. Install the `@syncfusion/ej2-vue-schedule` package by running the following command:

```bash
npm install @syncfusion/ej2-vue-schedule --save
```
or

```bash
yarn add @syncfusion/ej2-vue-schedule
```

> The **--save** will instruct NPM to include the Scheduler package inside of the `dependencies` section of the `package.json`.

## Import Syncfusion CSS styles

You can import themes for the Syncfusion Vue component in various ways, such as using CSS or SASS styles from npm packages, CDN, [CRG](https://crg.syncfusion.com/) and [Theme Studio](https://ej2.syncfusion.com/vue/documentation/appearance/theme-studio). Refer to [themes topic](https://ej2.syncfusion.com/vue/documentation/appearance/theme) to know more about built-in themes and different ways to refer to themes in a Vue project.

In this article, the `Material` theme is applied using CSS styles, which are available in installed packages. The necessary `Material` CSS styles for the Schedule component and its dependents were imported into the `<style>` section of **src/App.vue** file.

{% tabs %}
{% highlight html tabtitle="~/src/App.vue" %}

<style>
@import '/node_modules/@syncfusion/ej2-base/styles/material.css';
@import '/node_modules/@syncfusion/ej2-buttons/styles/material.css';
@import '/node_modules/@syncfusion/ej2-calendars/styles/material.css';
@import '/node_modules/@syncfusion/ej2-dropdowns/styles/material.css';
@import '/node_modules/@syncfusion/ej2-inputs/styles/material.css';
@import '/node_modules/@syncfusion/ej2-navigations/styles/material.css';
@import '/node_modules/@syncfusion/ej2-popups/styles/material.css';
@import '/node_modules/@syncfusion/ej2-vue-schedule/styles/material.css';
</style>

{% endhighlight %}
{% endtabs %}

## Add Syncfusion Vue component

Follow the below steps to add the Vue Schedule component using:

1\. First, import and register the Schedule component in the `script` section of the **src/App.vue** file.

{% tabs %}
{% highlight html tabtitle="~/src/App.vue" %}

<script>
import { ScheduleComponent } from '@syncfusion/ej2-vue-schedule';
</script>

{% endhighlight %}
{% endtabs %}

2\. In the `template` section, define the Schedule component property.

{% tabs %}
{% highlight html tabtitle="~/src/App.vue" %}

<template>
  <div id='app'>
    <ejs-schedule ></ejs-schedule>
  </div>
</template>

{% endhighlight %}
{% endtabs %}

## Module injection

The crucial step on creating a Schedule with specific views, is to inject the required modules. The modules that are available with common Schedule basic functionality are as follows.

* **Day** - Inject this module for displaying day view.
* **Week** - Inject this module for displaying week view.
* **WorkWeek** - Inject this module for displaying work week view.
* **Month** - Inject this module for displaying month view.
* **Agenda** - Inject this module for  displaying agenda view.
* **MonthAgenda** - Inject this module for displaying month agenda view.
* **TimelineViews** - Inject this module for displaying timeline day, timeline week, timeline work week view.
* **TimelineMonth** - Inject this module for displaying timeline month view.

These modules should be injected into the Schedule using the `provide` method within the `app.vue` file as shown below. On doing so, only the injected views will be loaded and displayed on the Schedule.

`[src/app/app.vue]`

```html
<template>
  <div id='app'>
    <ejs-schedule ></ejs-schedule>
  </div>
</template>
<script>
import { ScheduleComponent, Day, Week, WorkWeek, Month, Agenda } from '@syncfusion/ej2-vue-schedule';

export default {
  components: {
    'ejs-schedule': ScheduleComponent
  },
  provide: {
    schedule: [Day, Week, WorkWeek, Month, Agenda]
  }
}
</script>
```

## Run the project

To run the project, use the following command:

```bash
npm run serve
```

or

```bash
yarn run serve
```

The output will display the empty Scheduler.

## Populating appointments

To populate the empty Scheduler with appointments, define either the local JSON data or remote data through the `dataSource` property available within the `eventSettings` option. To define any appointments, start and end time fields are mandatory. In the following example, you can see the appointment defined with default fields such as Id, Subject, StartTime and EndTime.

```html
<template>
  <div id='app'>
      <ejs-schedule height='550px' :selectedDate='selectedDate' :eventSettings='eventSettings'></ejs-schedule>
  </div>
</template>
<script>
  import { ScheduleComponent, Day, Week, WorkWeek, Month, Agenda } from '@syncfusion/ej2-vue-schedule';
  export default {
      components: {
        'ejs-schedule': ScheduleComponent
      },
      data () {
        return {
          selectedDate: new Date(2018, 1, 15),
          eventSettings: {
            dataSource: [{
              Id: 1,
              Subject: 'Meeting',
              StartTime: new Date(2018, 1, 15, 10, 0),
              EndTime: new Date(2018, 1, 15, 12, 30)
            }]
          }
        }
      },
      provide: {
        schedule: [Day, Week, WorkWeek, Month, Agenda]
      }
  }
</script>
```

You can also provide different names to these default fields, for which the custom names of those fields must be mapped appropriately within fields property as shown below.

```html
<template>
  <div id='app'>
      <ejs-schedule height='550px' :selectedDate='selectedDate' :eventSettings='eventSettings'></ejs-schedule>
  </div>
</template>
<script>
  import { ScheduleComponent, Day, Week, WorkWeek, Month, Agenda } from '@syncfusion/ej2-vue-schedule';
  
  let data = [{
    Id: 2,
    EventName: 'Meeting',
    StartTime: new Date(2018, 1, 15, 10, 0),
    EndTime: new Date(2018, 1, 15, 12, 30),
    IsAllDay: false
  }];

  export default {
    components: {
      'ejs-schedule': ScheduleComponent
    },
    data () {
      return {
        selectedDate: new Date(2018, 1, 15),
        eventSettings: {
          dataSource: data,
          fields: {
            id: 'Id',
            subject: { name: 'EventName' },
            isAllDay: { name: 'IsAllDay' },
            startTime: { name: 'StartTime' },
            endTime: { name: 'EndTime' }
          }
        }
      }
    },
    provide: {
      schedule: [Day, Week, WorkWeek, Month, Agenda]
    }
  }
</script>
```

The other fields available in Scheduler can be referred from [here](./appointments/#event-fields).

## Setting date

Scheduler usually displays the system date as its current date. To change the current date of Scheduler with specific date, define the [`selectedDate](../api/schedule/#selecteddate) property.

`[src/app/app.vue]`

```html
<template>
  <div id='app'>
      <ejs-schedule height='550px' :selectedDate='selectedDate'></ejs-schedule>
  </div>
</template>
<script>
  import { ScheduleComponent, Day, Week, WorkWeek, Month, Agenda } from '@syncfusion/ej2-vue-schedule';

  export default {
    components: {
      'ejs-schedule': ScheduleComponent
    },
    data (){
      return {
        selectedDate: new Date(2018, 1, 15)
      }
    },
    provide: {
      schedule: [Day, Week, WorkWeek, Month, Agenda]
    }
  }
</script>
```

## Setting view

Scheduler displays `week` view by default. To change the current view, define the applicable view name to the [`currentView`](../api/schedule/#currentview) property. The applicable view names are,

* Day
* Week
* WorkWeek
* Month
* Year
* Agenda
* MonthAgenda
* TimelineDay
* TimelineWeek
* TimelineWorkWeek
* TimelineMonth
* TimelineYear

```html
<template>
    <div id='app'>
        <ejs-schedule height='550px' :selectedDate='selectedDate' :currentView='currentView'>
        </ejs-schedule>
    </div>
</template>
<script>
  import { ScheduleComponent, Day, WorkWeek, Agenda, Month, Week } from '@syncfusion/ej2-vue-schedule';
  export default {
    components: {
      'ejs-schedule': ScheduleComponent
    },
    data () {
      return {
        selectedDate: new Date(2018, 1, 15),
        currentView: 'Month',
      }
    },
    provide: {
      schedule: [Day, WorkWeek, Agenda, Month, Week]
    }
  }
</script>
```

## Individual view customization

Each individual Scheduler views can be customized with its own options such as setting different start and end hour on Week and Work Week views, whereas hiding the weekend days on Month view alone.
This can be achieved by defining views property to accept the array of object type, where each object depicts the individual view customization.

The output will display the Scheduler with the specified view configuration.

{% tabs %}
{% highlight html tabtitle="~/src/App.vue" %}
{% include code-snippet/schedule/view-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/schedule/view-cs1" %}

> You can also explore our [Vue Scheduler example](https://ej2.syncfusion.com/vue/demos/#/material/schedule/overview.html) that shows how to use the toolbar buttons to play with Scheduler functionalities.
