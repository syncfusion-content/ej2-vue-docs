---
layout: post
title: Getting started with Vue Bullet chart component | Syncfusion
description:  Checkout and learn about Getting started with Vue Bullet chart component of Syncfusion Essential JS 2 and more details.
control: Getting started 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Getting Started

This section explains you the steps required to create a simple Bullet Chart and demonstrate the basic usage of the Bullet Chart control.

## Prerequisites

[System requirements for Syncfusion Vue UI components](https://ej2.syncfusion.com/vue/documentation/system-requirements/)

## Dependencies

Below is the list of minimum dependencies required to use the Bullet Chart component.

```javascript
|-- @syncfusion/ej2-vue-charts
    |-- @syncfusion/ej2-base
    |-- @syncfusion/ej2-data
    |-- @syncfusion/ej2-pdf-export
    |-- @syncfusion/ej2-file-utils
    |-- @syncfusion/ej2-compression
    |-- @syncfusion/ej2-charts
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

## Adding Syncfusion Bullet Chart package

All the available Essential JS 2 packages are published in [`npmjs.com`](https://www.npmjs.com/~syncfusionorg) registry.

To install Bullet Chart component, use the following command

```bash
npm install @syncfusion/ej2-vue-charts --save
```

> The **--save** will instruct NPM to include the Bullet Chart package inside of the `dependencies` section of the `package.json`.

## Registering Bullet Chart Component

You can register the Bullet Chart component in your application by using the `Vue.use()`.

Refer to the code example given below.

```ts
import { BulletChartPlugin } from '@syncfusion/ej2-vue-charts';

Vue.use(BulletChartPlugin);
```

> Registering `BulletChartPlugin` in vue, will register the Bullet Chart component along with its required child directives globally.

## Adding Bullet Chart Component

* Add the Vue Bullet Chart by using `<ejs-bulletchart>` selector in `<template>` section of the `App.vue` file.

    {% tabs %}
    {% highlight html tabtitle="app.vue" %}
    {% include code-snippet/bullet-chart/getting-started/initialize-cs1/app.vue %}
    {% endhighlight %}
    {% endtabs %}
            
    {% previewsample "page.domainurl/code-snippet/bullet-chart/getting-started/initialize-cs1" %}

* Now run the application in the browser using the below command.

    ```
    npm run dev
    ```

## Module Injection

Bullet Chart component are segregated into individual feature-wise modules. In order to use a particular feature, you need to inject its feature module using `provide` method. In the current application,we are going to use tooltip feature of the Bullet Chart.

* `BulletTooltip` - Inject this provider to use tooltip feature.

These modules should be injected to the provide method as follows,

 ```ts
import Vue from "vue";
import { BulletChartPlugin, BulletTooltip } from "@syncfusion/ej2-vue-charts";

Vue.use(BulletChartPlugin);

export default {
  provide: {
    bulletChart: [BulletTooltip]
  }
};
 ```

## BulletChart With Data

This section explains how to plot local data to the Bullet Chart.

```ts
let data: any[] = [
       { value: 100, target: 80 },
       { value: 200, target: 180 },
       { value: 300, target: 280 },
       { value: 400, target: 380 },
       { value: 500, target: 480 },
];
```

Now assign the local data to [`dataSource`](https://ej2.syncfusion.com/vue/documentation/api/bullet-chart/#datasource) property. **value** and **target** values should be mapped with [`valueField`](https://ej2.syncfusion.com/vue/documentation/api/bullet-chart/#valuefield) and  [`targetField`](https://ej2.syncfusion.com/vue/documentation/api/bullet-chart/#targetfield) respectively.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/bullet-chart/getting-started/datasource-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/bullet-chart/getting-started/datasource-cs1" %}

## Add Bullet Chart Title

You can add a title using [`title`](https://ej2.syncfusion.com/vue/documentation/api/bullet-chart/#title) property to the Bullet Chart to provide quick
information to the user about the data plotted in the Bullet Chart.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/bullet-chart/getting-started/title-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/bullet-chart/getting-started/title-cs1" %}

## Ranges

You can add a range using `e-bullet-range` of the `e-bullet-range-collection`.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/bullet-chart/getting-started/ranges-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/bullet-chart/getting-started/ranges-cs1" %}

## Tooltip

You can use tooltip for the Bullet Chart by setting the [`enable`](https://ej2.syncfusion.com/vue/documentation/api/bullet-chart/bulletTooltipSettingsModel/#enable) property to true in [`tooltip`](https://ej2.syncfusion.com/vue/documentation/api/bullet-chart/#tooltip) object and by injecting the `BulletTooltip` module using `provide` method.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/bullet-chart/getting-started/tooltip-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/bullet-chart/getting-started/tooltip-cs1" %}