---
layout: post
title: Frequently asked questions in Vue Schedule component | Syncfusion
description: Learn here all about Frequently asked questions in Syncfusion Vue Schedule component of Syncfusion Essential JS 2 and more.
control: Frequently asked questions 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Frequently Asked Questions in Vue Schedule Component

This section provides solutions to common issues encountered while working with the Vue Schedule component.

## Maximum Call Stack Size Exceeded

**Error Image:**

![Maximum call stack size exceeded](./images/max-call-stack-size.png)

**Solution:**

This error occurs when a view used in the Schedule component is not imported and injected. Each view such as `Day`, `TimelineWeek`, `TimelineMonth`, and `Agenda` must be injected before use. If a view is referenced without injection, the Schedule component throws a **Maximum call stack size exceeded** error.

In the following example, the `Day` view is used without injection, which results in the issue. Injecting the required view modules resolves the problem.

```
<template>
  <div>
    <div id="app">
      <div id="container">
        <ejs-schedule id="Schedule" width="100%" height="550px">
          <e-views>
            <e-view option="Day"></e-view>
            <e-view option="TimelineWeek"></e-view>
            <e-view option="TimelineMonth"></e-view>
            <e-view option="Agenda"></e-view>
          </e-views>
        </ejs-schedule>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import {
  SchedulePlugin,
  TimelineViews,
  TimelineMonth,
  Agenda,
} from "@syncfusion/ej2-vue-schedule";
```

## Grouping with Empty Resources

Grouping without providing any resource data will throw the following problems.

* Normal(vertical) views are rendered, but you are not able to perform CRUD operations
* Timeline views not at all render and shows empty scheduler table

So, we suggest to avoid grouping with empty resources in the scheduler.

## Not providing e-field in editor template

**Error:** While using editor template, value of  `e-field` is missing in editor window.

**Solution:** The `e-field` attribute is mandatory for processing field values within the editor window. Refer to the detailed guidance in the editor template documentation: [here](https://ej2.syncfusion.com/vue/documentation/schedule/editor-template#customizing-event-editor-using-template)

## Missing CSS Reference

**Error Image:**

  ![Missing CSS reference](./images/missing-css-reference.png)

**Solution:**

This issue occurs when the required CSS files for the Schedule component are not included. Adding the appropriate CSS references resolves the problem.

```

      <! –– scheduler CSS is referred from this link ––>
<link href="https://cdn.syncfusion.com/ej2/tailwind3.css" rel="stylesheet">
                      or
      <! –– From here ––>

<style>
@import "/node_modules/@syncfusion/ej2-base/styles/tailwind3.css";
@import "/node_modules/@syncfusion/ej2-buttons/styles/tailwind3.css";
@import "/node_modules/@syncfusion/ej2-calendars/styles/tailwind3.css";
@import "/node_modules/@syncfusion/ej2-dropdowns/styles/tailwind3.css";
@import "/node_modules/@syncfusion/ej2-inputs/styles/tailwind3.css";
@import "/node_modules/@syncfusion/ej2-navigations/styles/tailwind3.css";
@import "/node_modules/@syncfusion/ej2-popups/styles/tailwind3.css";
@import "/node_modules/@syncfusion/ej2-vue-schedule/styles/tailwind3.css";
</style>

```

## QuickInfoTemplate at bottom

When using the [`quickInfoTemplate`](https://ej2.syncfusion.com/vue/documentation/api/schedule#quickinfotemplates) in scheduler, sometimes quickinfo popup not shown fully at the bottom area of scheduler. This can be resolved by using the [`cellClick`](https://ej2.syncfusion.com/vue/documentation/api/schedule#cellclick) and [`eventClick`](https://ej2.syncfusion.com/vue/documentation/api/schedule#eventclick) events and below code snippet.

```
<template>
    <ejs-schedule
          id="Schedule"
          width="100%"
          height="550px"
          :cellClick="onClick"
          :eventClick="onClick"
        >
    </ejs-schedule>
</template>
 .
 .
var eventAdded = false;

methods: {
  onClick: function () {
    if (!this.eventAdded) {
      let popupInstance = document.querySelector('.e-quick-popup-wrapper').ej2_instances[0];
      popupInstance.open = () => {
        popupInstance.refreshPosition();
      };
      this.eventAdded = true;
    }
  }
}
```

## Not Importing Culture Files When using Localization

**Error Image:**

![Locale import issue](./images/locale-import-issue.png)

 While using [`locale`](https://ej2.syncfusion.com/vue/documentation/schedule/localization) in scheduler, not importing the required culture files properly throws the problem.

**Solution:** Properly add and import the culture files(numberingSystems, timeZoneNames, loadCldr, L10n etc.,) in your project will resolve the problem.

```javascript
import { loadCldr, L10n } from '@syncfusion/ej2-base';
import enNumberData from '@syncfusion/ej2-cldr-data/main/en-GB/numbers.json';
import entimeZoneData from '@syncfusion/ej2-cldr-data/main/en-GB/timeZoneNames.json';
import enGregorian from '@syncfusion/ej2-cldr-data/main/en-GB/ca-gregorian.json';
import enNumberingSystem from '@syncfusion/ej2-cldr-data/supplemental/numberingSystems.json';

loadCldr(frNumberData, frtimeZoneData, frGregorian, frNumberingSystem);

L10n.load({
  'en-GB': {
    schedule: {
      day: 'Day',
      week: 'Week',
      workWeek: 'Work Week',
      month: 'Month'
      }
    }
  });

```
