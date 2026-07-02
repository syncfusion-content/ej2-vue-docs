---
layout: post
title: Getting started with Vue DataGrid component | Syncfusion
description:  Checkout and learn about Getting started with Vue DataGrid component of Syncfusion Essential JS 2 and more details.
control: Getting started 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Getting Started with the Vue DataGrid Component in Vue 2

This article provides a step-by-step guide for setting up a Vue 2 project using [Vue-CLI](https://cli.vuejs.org) and integrating the Syncfusion<sup style="font-size:70%">&reg;</sup> Vue DataGrid component.

To get started quickly with Vue DataGrid, check this video:

{% youtube "https://www.youtube.com/watch?v=pU0ERPrY2go" %}

## Prerequisites

[System requirements for Syncfusion<sup style="font-size:70%">&reg;</sup> Vue UI components](https://ej2.syncfusion.com/vue/documentation/system-requirements)

## Setup the Vue 2 project

To generate a Vue 2 project using Vue-CLI, use the [vue create](https://cli.vuejs.org#getting-started) command. Follow these steps to install Vue CLI and create a new project:

```bash
npm install -g @vue/cli
vue create quickstart
```

or

```bash
yarn global add @vue/cli
vue create quickstart
```

When creating a new project, choose the option `Default ([Vue 2] babel, eslint)` from the menu.

![Vue 2 project](./images/vue2-terminal.png)

Navigate to the project directory:

```bash
cd quickstart
```

## Add Syncfusion<sup style="font-size:70%">&reg;</sup> Vue Grids package

To install the Grids package, use the following command:

```bash
npm install @syncfusion/ej2-vue-grids --save
```
or

```bash
yarn add @syncfusion/ej2-vue-grids
```

## Adding CSS reference

You can add the CSS files required for the Syncfusion Vue DataGrid component using one of the following methods.

### Option 1: Add CSS References from a theme package

Themes for Syncfusion<sup style="font-size:70%">&reg;</sup> DataGrid components can be applied using CSS files provided through [npm theme packages](https://www.npmjs.com/package/@syncfusion/ej2-material3-theme). For available themes, refer to the [Themes](https://ej2.syncfusion.com/vue/documentation/appearance/theme) documentation.
 
Install the **Material 3** theme package using the following command:

{% tabs %}
{% highlight bash tabtitle="npm" %}
 
npm install @syncfusion/ej2-material3-theme --save
 
{% endhighlight %}
{% endtabs %}
 
Then add the following CSS reference to the **src/App.vue** file:

{% tabs %}
{% highlight html tabtitle="Options API ~/src/App.vue" %}

<style>
    @import "../node_modules/@syncfusion/ej2-material3-theme/grids/grid/index.css";
</style>

{% endhighlight %}
{% endtabs %}

### Option 2: Add CSS References from component packages

After installing the grid package, the required CSS files are available in the corresponding Syncfusion packages under the **node_modules/@syncfusion** directory. Add the following CSS references to the **src/App.vue** file:

```css
<style>
    @import "../node_modules/@syncfusion/ej2-base/styles/material3.css";
    @import "../node_modules/@syncfusion/ej2-buttons/styles/material3.css";
    @import "../node_modules/@syncfusion/ej2-calendars/styles/material3.css";
    @import "../node_modules/@syncfusion/ej2-dropdowns/styles/material3.css";
    @import "../node_modules/@syncfusion/ej2-inputs/styles/material3.css";
    @import "../node_modules/@syncfusion/ej2-navigations/styles/material3.css";
    @import "../node_modules/@syncfusion/ej2-popups/styles/material3.css";
    @import "../node_modules/@syncfusion/ej2-splitbuttons/styles/material3.css";
    @import '../node_modules/@syncfusion/ej2-notifications/styles/material3.css';
    @import "../node_modules/@syncfusion/ej2-vue-grids/styles/material3.css";
</style>
```

## Adding DataGrid component

The DataGrid code should be added in the **src/App.vue** file.

{% tabs %}
{% highlight html tabtitle="Options API ~/src/App.vue" %}
{% include code-snippet/grid/getting-started/default-cs6/app.vue %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/grid/getting-started/default-cs6" %}

## Run the application

```bash
npm run serve
```

or

```bash
yarn run serve
```

## See also

* [DataGrid Feature Modules](./module)
* [Getting Started with the Vue DataGrid Component in Vue 3](https://ej2.syncfusion.com/vue/documentation/grid/vue-3-getting-started)
* [Testing the Vue DataGrid](https://www.syncfusion.com/forums/140772/testing-the-vue-grid)
* [Switching themes programmatically in Vue DataGrid](https://www.syncfusion.com/forums/145386/switching-themes-programmatically-in-vue-grid)