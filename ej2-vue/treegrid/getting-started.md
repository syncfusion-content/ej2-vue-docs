---
layout: post
title: Getting started with Vue TreeGrid component | Syncfusion
description:  Checkout and learn about Getting started with Vue TreeGrid component of Syncfusion Essential JS 2 and more details.
control: Getting started 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Getting Started with the Vue TreeGrid component in Vue 2

This article provides a step-by-step guide for setting up a Vue 2 project using [Vue-CLI](https://cli.vuejs.org) and integrating the Syncfusion<sup style="font-size:70%">&reg;</sup> Vue TreeGrid component

To get started quickly with Vue tree grid, check out this video:
{% youtube "https://www.youtube.com/watch?v=FEMyOHKjjao" %}

## Prerequisites

[System requirements for Syncfusion<sup style="font-size:70%">&reg;</sup> Vue UI components](https://ej2.syncfusion.com/vue/documentation/system-requirements)

## Setting up the Vue 2 project

To generate a Vue 2 project using Vue-CLI, execute the [vue create](https://cli.vuejs.org#getting-started) command. Follow these steps to install Vue CLI and create a new project:

```bash
npm install -g @vue/cli
vue create quickstart
```

or

```bash
yarn global add @vue/cli
vue create quickstart
```

When creating a new project, select the option `Default ([Vue 2] babel, eslint)` from the menu.

![Vue 2 project](images/vue2-terminal.png)

Navigate to the project directory:

```bash
cd quickstart
```

## Add Syncfusion<sup style="font-size:70%">&reg;</sup> Vue TreeGrid packages

To install the TreeGrid component, use the following command:

```bash
npm install @syncfusion/ej2-vue-treegrid --save
```
or

```bash
yarn add @syncfusion/ej2-vue-treegrid
```

## Adding CSS reference

The following CSS files are available in the ../node_modules/@syncfusion package folder. Add these as references in **src/App.vue**.

{% tabs %}
{% highlight html tabtitle="~/src/App.vue" %}

<style>

@import '../node_modules/@syncfusion/ej2-base/styles/material3.css';  
@import '../node_modules/@syncfusion/ej2-buttons/styles/material3.css';  
@import '../node_modules/@syncfusion/ej2-calendars/styles/material3.css';  
@import '../node_modules/@syncfusion/ej2-dropdowns/styles/material3.css';  
@import '../node_modules/@syncfusion/ej2-inputs/styles/material3.css';  
@import '../node_modules/@syncfusion/ej2-navigations/styles/material3.css';
@import '../node_modules/@syncfusion/ej2-popups/styles/material3.css';
@import '../node_modules/@syncfusion/ej2-splitbuttons/styles/material3.css';
@import "../node_modules/@syncfusion/ej2-grids/styles/material3.css";
@import "../node_modules/@syncfusion/ej2-treegrid/styles/material3.css";
</style>

{% endhighlight %}
{% endtabs %}

## Adding TreeGrid component

The treegrid code should be added in the **src/App.vue** file.

{% tabs %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/treegrid/getting-started/default-cs4/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/treegrid/getting-started/default-cs4" %}

## Run the application

```bash
npm run serve
```

## See Also

* [Grid Feature Modules](./module)
* [Getting Started with Syncfusion<sup style="font-size:70%">&reg;</sup> JavaScript documentation](https://ej2.syncfusion.com/documentation/treegrid/getting-started)
* [Getting Started with Syncfusion<sup style="font-size:70%">&reg;</sup> JavaScript (ES5) documentation](https://ej2.syncfusion.com/javascript/documentation/treegrid/getting-started)
* [Getting Started with Syncfusion<sup style="font-size:70%">&reg;</sup> Angular documentation](https://ej2.syncfusion.com/angular/documentation/treegrid/getting-started)
* [Getting Started with Syncfusion<sup style="font-size:70%">&reg;</sup> React documentation](https://ej2.syncfusion.com/react/documentation/treegrid/getting-started)
* [Getting Started with Syncfusion<sup style="font-size:70%">&reg;</sup> ASP.NET Core documentation](https://ej2.syncfusion.com/aspnetcore/documentation/tree-grid/getting-started-core)
* [Getting Started with Syncfusion<sup style="font-size:70%">&reg;</sup> ASP.NET MVC documentation](https://ej2.syncfusion.com/aspnetmvc/documentation/tree-grid/getting-started-mvc)
* [Getting Started with Syncfusion<sup style="font-size:70%">&reg;</sup> Blazor documentation](https://blazor.syncfusion.com/documentation/treegrid/getting-started-webapp)
