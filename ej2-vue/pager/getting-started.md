---
layout: post
title: Getting started with Vue Pager component | Syncfusion
description:  Checkout and learn about Getting started with Vue Pager component of Syncfusion Essential JS 2 and more details.
control: Getting started 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Getting started

This section explains you the steps required to create a simple pager
and demonstrate the basic usage of the pager component in Vue environment.

## Prerequisites

[System requirements for Syncfusion Vue UI components](https://ej2.syncfusion.com/vue/documentation/system-requirements/)

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

## Adding Syncfusion Pager package

All the available Essential JS 2 packages are published in [`npmjs.com`](https://www.npmjs.com/~syncfusionorg) registry.

To install pager component, use the following command

```bash
npm install @syncfusion/ej2-vue-grids --save
```

> The **--save** will instruct NPM to include the grid package inside of the `dependencies` section of the `package.json`.

## Registering Pager Component

You can register the pager component in your application by using the `Vue.use()`.

Refer to the code example given below.

```ts
import { PagerPlugin } from '@syncfuion/ej2-vue-grids';

Vue.use(PagerPlugin);
```

## Adding CSS Reference

The pager has different themes. They are:
* Material
* Office 365
* Fabric
* Bootstrap
* High Contrast

Import pager component CSS as given below in `<style>` section of the `App.vue` file.

```
<style>
<!-- Material theme used for this sample -->
@import "../node_modules/@syncfusion/ej2-vue-grids/styles/material.css";
</style>
```

## Adding Pager component

Add the Vue pager by using `<ejs-pager>` selector in `<template>` section of the `App.vue` file.

Import pager plugin into Vue application[src/App.vue] from the package `@syncfusion/ej2-vue-grids`.

Now place the below pager code in the `App.vue`.
Here the pager is rendered with `totalRecordsCount` which is used to render numeric container.

```
<template>
  <div id="app">
      <ejs-pager> </ejs-pager>
  </div>
</template>

<script>
import Vue from 'vue';
import { PagerPlugin } from '@syncfusion/ej2-vue-grids';

Vue.use(PagerPlugin);
export default {
  data () {
    return {
    }
  }
}
</script>

<style>
 @import "../node_modules/@syncfusion/ej2-vue-grids/styles/material.css";
</style>

```

Modify the template in [src/app.vue] file to render the pager component.

```
<template>
  <div id="app">
      <ejs-pager :totalRecordsCount='20'> </ejs-pager>
  </div>
</template>

<script>
import Vue from 'vue';
import { PagerPlugin } from '@syncfusion/ej2-vue-grids';

Vue.use(PagerPlugin);
export default {
  data () {
    return {
    }
  }
}
</script>

<style>
 @import "../node_modules/@syncfusion/ej2-vue-grids/styles/material.css";
</style>

```

## Page Size

`pageSize` value defines the number of records to be displayed per page. The default value for the `pageSize` is 12.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/pager/pager-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/pager/pager-cs1" %}

## Page Count

`pageCount` value defines the number of pages to be displayed in the pager component for navigation.
The default value for `pageCount` is 10 and value will be updated based on [`totalRecordsCount`](https://ej2.syncfusion.com/vue/documentation/api/pager/#totalrecordscount)
and [`pageSize`](#page-size) values.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/pager/pager-cs2/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/pager/pager-cs2" %}

## Run the application

Use the following command to run the application in browser.

```javascript
npm run dev
```

Output will be appears as follows.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/pager/pager-cs3/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/pager/pager-cs3" %}