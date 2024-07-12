---
layout: post
title: Module injection in Vue Schedule component | Syncfusion
description: Learn here all about Module injection in Syncfusion Vue Schedule component of Syncfusion Essential JS 2 and more.
control: Module injection 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Module injection in Vue Schedule component

The crucial step on creating a Scheduler with required views, is to import and inject the required modules. The modules that are available on Scheduler to work with its related functionalities are as follows.

* `Day` - Inject this module to work with day view.
* `Week` - Inject this module to work with week view.
* `WorkWeek` - Inject this module to work with work week view.
* `Month` - Inject this module to work with month view.
* `Year` - Inject this module to work with year view.
* `Agenda` - Inject this module to work with agenda view.
* `MonthAgenda` - Inject this module to work with month agenda view.
* `TimelineViews` - Inject this module to work with timeline day, timeline week, and timeline work week views.
* `TimelineMonth` - Inject this module to work with timeline month view.
* `TimelineYear` - Inject this module to work with timeline year view.
* `DragAndDrop` - Inject this module to allow drag and drop of appointments on Scheduler.
* `Resize` - Inject this module for enabling the resize functionality of appointments on Scheduler.
* `ExcelExport` - Inject this module for exporting the Scheduler events data as excel file format.
* `ICalendarExport` - Inject this module for exporting the Scheduler events data to an ICS file.
* `ICalendarImport` - Inject this module for importing the Scheduler events data from an ICS file.

## Module injection

The required modules should be injected into the Scheduler using the `provide` method of Scheduler within the `app.vue` file as shown below. On doing so, only the injected module functionalities will be loaded and can be worked with Scheduler.

`[src/app.vue]`

```html
  provide: {
    schedule: [Day, Week, WorkWeek, Month, Agenda, MonthAgenda]
  },
```

**Note:** If a Scheduler [`currentView`](https://ej2.syncfusion.com/vue/documentation/api/schedule#currentview) is set to any one of the available views without injecting that respective view module, then a script error will occur and the Scheduler will not render.

> You can refer to our [Vue Scheduler](https://www.syncfusion.com/vue-components/vue-scheduler) feature tour page for its groundbreaking feature representations. You can also explore our [Vue Scheduler example](https://ej2.syncfusion.com/vue/demos/#/material/schedule/overview.html) to knows how to present and manipulate data.