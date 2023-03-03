---
layout: post
title: Getting started with Vue Range navigator component | Syncfusion
description:  Checkout and learn about Getting started with Vue Range navigator component of Syncfusion Essential JS 2 and more details.
control: Getting started 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Getting Started

This section explains you the steps required to create a simple range navigator and demonstrate the basic usage of the range navigator control.

## Prerequisites

[System requirements for Syncfusion Vue UI components](https://ej2.syncfusion.com/vue/documentation/system-requirements/)

## Dependencies

Below is the list of minimum dependencies required to use the range navigator component.

```javascript
|-- @syncfusion/ej2-vue-charts
    |-- @syncfusion/ej2-base
    |-- @syncfusion/ej2-data
    |-- @syncfusion/ej2-pdf-export
    |-- @syncfusion/ej2-file-utils
    |-- @syncfusion/ej2-compression
    |-- @syncfusion/ej2-navigations
    |-- @syncfusion/ej2-calendars
    |-- @syncfusion/ej2-vue-base
    |-- @syncfusion/ej2-svg-base
```

## Installation and Configuration

## Setup Vue Environment

You can use [`Vue CLI`](https://github.com/vuejs/vue-cli) to setup your vue applications.

To install Vue CLI use the following commands.

```bash
npm install -g @vue/cli
npm install -g @vue/cli-init
```

## Create a Vue Application

Start a new Vue application using below Vue CLI command.

```bash
vue init webpack-simple quickstart

cd quickstart
npm install
```

## Adding Syncfusion range navigator package

All the available Essential JS 2 packages are published in [`npmjs.com`](https://www.npmjs.com/~syncfusionorg) registry.

To install range navigator component, use the following command

```bash
npm install @syncfusion/ej2-vue-charts --save
```

> The **--save** will instruct NPM to include the range navigator package inside of the `dependencies` section of the `package.json`.

## Registering Range Navigator Component

You can register the range navigator component in your application by using the `Vue.use()`.

Refer to the code example given below.

```ts
import { RangeNavigatorPlugin } from '@syncfusion/ej2-vue-charts';

Vue.use(RangeNavigatorPlugin);
```

> Registering `RangeNavigatorPlugin` in vue, will register the range navigator component along with its required child directives globally.

## Adding Range Navigator to the Project

* Add the Vue Range Navigator by using `<ejs-rangenavigator>` selector in `<template>` section of the `App.vue` file.
The below example shows a basic range navigator,

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/rangenavigator/getting-started-cs9/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/rangenavigator/getting-started-cs9" %}

## Run the application

The quickstart project is configured to compile and run the application in the browser. Use the following command to run the application.

* Now run the application in the browser using the below command.

```
npm run dev
```

## Module Injection

To create range navigator with additional features, inject the required modules. The following modules are used to extend rangenavigator’s basic functionality.

•`AreaSeries` - Inject this module to use area series.
•`DateTime` - Inject this module to use date time axis.
•`RangeTooltip` - Inject this module to show the tooltip.

These modules should be injected to the provide section as follows,

 ```javascript
import Vue from "vue";
import { RangeNavigatorPlugin, AreaSeries, DateTime, RangeTooltip } from "@syncfusion/ej2-vue-charts";

Vue.use(RangeNavigatorPlugin);

export default {
  provide: {
    rangeNavigator: [AreaSeries, DateTime, RangeTooltip]
  }
};
</script>
 ```

## Populate Range Navigator with Data

Now, we are going to provide data to the range navigator. Add a series object to the range navigator by using [`series`](https://ej2.syncfusion.com/vue/documentation/api/range-navigator/rangeNavigatorSeries/) property. Now map the field names x and y in the JSON data to the [`xName`](https://ej2.syncfusion.com/vue/documentation/api/range-navigator/rangeNavigatorSeries/#xname) and [`yName`](https://ej2.syncfusion.com/vue/documentation/api/range-navigator/rangeNavigatorSeries/#yname) properties of the series, then set the JSON data to dataSource property. Since the JSON contains Datetime data, set the [`valueType`](https://ej2.syncfusion.com/vue/documentation/api/range-navigator/rangeNavigatorModel/#valuetype) range Navigator to `Category`. By default, the axis valueType is `Numeric`.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/rangenavigator/getting-started-cs10/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/rangenavigator/getting-started-cs10" %}

## Enable Tooltip

The tooltip is useful to show the selected data. You can enable tooltip by setting the `enable` property as true in tooltip object and by injecting `RangeTooltip` module using `provide` method.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/rangenavigator/getting-started-cs11/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/rangenavigator/getting-started-cs11" %}