---
layout: post
title: Getting started with Vue Kanban component | Syncfusion
description:  Checkout and learn about Getting started with Vue Kanban component of Syncfusion Essential JS 2 and more details.
control: Getting started 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Getting Started

This section briefly explains how to create **Kanban** component and configure its available functionalities in VueJS Environment.

## Prerequisites

[System requirements for Syncfusion Vue UI components](https://ej2.syncfusion.com/vue/documentation/system-requirements/)

## Installation and Configuration

You can use [`Vue CLI`](https://github.com/vuejs/vue-cli) to setup your vue applications.
To install Vue CLI use the following command.

```bash
npm install -g @vue/cli
npm install -g @vue/cli-init
```

Create a new Vue project using the following `Vue CLI` command.

```bash
vue init webpack-simple quickstart

cd quickstart
npm install

```

## Adding Syncfusion Kanban Package

All the available Essential JS 2 packages are published in `npmjs.com` registry.

Install the `Kanban` component by using the below npm command.

```bash
npm install @syncfusion/ej2-vue-kanban --save
```

> The **--save** will instruct NPM to include the Kanban package inside of the `dependencies` section of the `package.json`.

## Adding CSS Reference

Kanban CSS files are available in the `ej2-vue-kanban` and its sub-component package folder. It should be referenced as given below within the `<style>` section of `App.vue` file.

```
@import '../node_modules/@syncfusion/ej2-base/styles/material.css';
@import '../node_modules/@syncfusion/ej2-buttons/styles/material.css';
@import '../node_modules/@syncfusion/ej2-layouts/styles/material.css';
@import '../node_modules/@syncfusion/ej2-dropdowns/styles/material.css';
@import '../node_modules/@syncfusion/ej2-inputs/styles/material.css';
@import '../node_modules/@syncfusion/ej2-navigations/styles/material.css';
@import '../node_modules/@syncfusion/ej2-popups/styles/material.css';
@import '../node_modules/@syncfusion/ej2-vue-kanban/styles/material.css';
```

## Registering Kanban Component

Import the Kanban plugin in your application from the `ej2-vue-kanban` package as given below and register the same using `Vue.use()`.

```
import { KanbanPlugin } from '@syncfusion/ej2-vue-kanban';

Vue.use(KanbanPlugin);
```

> By Registering Kanban plugin in Vue, all its child directives are also globally registered.

## Initialize the Kanban

Add the EJ2 Vue Kanban using `<ejs-kanban>` to the `<template>` section of the `App.vue` file in src directory.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/kanban/getting-started-empty-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/kanban/getting-started-empty-cs1" %}

The output will display the kanban header.

## Populating cards

To populate the empty Kanban with cards, define the local JSON data or remote data using the `dataSource` property. To define `dataSource`, the mandatory fields in JSON object should be relevant to `keyField`. In the following example, you can see the cards defined with default fields such as ID, Summary, and Status.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/kanban/getting-started-key-field-cs2/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/kanban/getting-started-key-field-cs2" %}

## Enable swimlane

`Swimlane` can be enabled by mapping the fields `swimlaneSettings.keyField` to appropriate column name in dataSource. This enables the grouping of the cards based on the mapped column values.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/kanban/getting-started-swimlane-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/kanban/getting-started-swimlane-cs1" %}
