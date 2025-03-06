---
layout: post
title: Getting started with Vue Dashboard Layout component | Syncfusion
description:  Checkout and learn about Getting started with Vue Dashboard Layout component of Syncfusion Essential JS 2 and more details.
control: Getting started 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Getting Started with the Vue Dashboard Layout Component in Vue 2

This article provides a step-by-step guide for setting up a Vue 2 project using [Vue-CLI](https://cli.vuejs.org/) and integrating the Syncfusion Vue Dashboard Layout component.

To get start quickly with Vue Dashboard Layout, you can check on this video:

{% youtube "https://www.youtube.com/watch?v=2vjc_E8f9nI" %}

## Prerequisites

[System requirements for Syncfusion Vue UI components](https://ej2.syncfusion.com/vue/documentation/system-requirements)

## Dependencies

The following list of dependencies is required to use the DashboardLayout component in your application.

```javascript
|-- @syncfusion/ej2-vue-layouts
    |-- @syncfusion/ej2-vue-base
        |-- @syncfusion/ej2-base
    |-- @syncfusion/ej2-layouts

```

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

This article uses the [Vue Layouts component](https://www.syncfusion.com/vue-components/vue-dashboard-layout) as an example. Install the `@syncfusion/ej2-vue-layouts` package by running the following command:

```bash
npm install @syncfusion/ej2-vue-layouts --save
```
or

```bash
yarn add @syncfusion/ej2-vue-layouts
```

## Import Syncfusion CSS styles

You can import themes for the Syncfusion Vue component in various ways, such as using CSS or SASS styles from npm packages, CDN, [CRG](https://crg.syncfusion.com/) and [Theme Studio](https://ej2.syncfusion.com/vue/documentation/appearance/theme-studio). Refer to [themes topic](https://ej2.syncfusion.com/vue/documentation/appearance/theme) to know more about built-in themes and different ways to refer to themes in a Vue project.

In this article, the `Material` theme is applied using CSS styles, which are available in installed packages. The necessary `Material` CSS styles for the Dashboard Layout component and its dependents were imported into the `<style>` section of **src/App.vue** file.

{% tabs %}
{% highlight html tabtitle="~/src/App.vue" %}

<style>
@import "../node_modules/@syncfusion/ej2-base/styles/material.css";
@import "../node_modules/@syncfusion/ej2-vue-layouts/styles/material.css";
</style>

{% endhighlight %}
{% endtabs %}

>Note: If you want to refer the combined component styles, please make use of our [`CRG`](https://crg.syncfusion.com/) (Custom Resource Generator) in your application.

## Add Syncfusion Vue component

Follow the below steps to add the Vue Dashboard Layout component:

1\. First, import and register the Dashboard Layout component in the `script` section of the **src/App.vue** file.

{% tabs %}
{% highlight html tabtitle="~/src/App.vue" %}

<script>
// Import syncfusion dashboardlayout component from layouts package
import { DashboardLayoutComponent } from "@syncfusion/ej2-vue-layouts";

export default {
    components: {
        'ejs-dashboardlayout': DashboardLayoutComponent
    }
}
</script>

{% endhighlight %}
{% endtabs %}

2\. In the `template` section, define the Dashboard Layout component with [cellSpacing](https://ej2.syncfusion.com/vue/documentation/api/dashboard-layout/#cellspacing) property.

{% tabs %}
{% highlight html tabtitle="~/src/App.vue" %}

<template>
    <div>
        <div class="control-section">
            <!--  DashboardLayout element declaration -->
            <ejs-dashboardlayout id='defaultLayout' :cellSpacing="spacing" :columns="6">
                <div id="one" class="e-panel" data-row="0" data-col="0" data-sizeX="1" data-sizeY="1">
                    <div class="e-panel-container">
                        <div class="text-align">
                            <div>0</div>
                        </div>
                    </div>
                </div>
                <div id="two" class="e-panel" data-row="1" data-col="0" data-sizeX="1" data-sizeY="2">
                    <div class="e-panel-container">
                        <div class="text-align">
                            <div>1</div>
                        </div>
                    </div>
                </div>
                <div id="three" class="e-panel" data-row="0" data-col="1" data-sizeX="2" data-sizeY="2">
                    <div class="e-panel-container">
                        <div class="text-align">
                            <div>2</div>
                        </div>
                    </div>
                </div>
                <div id="four" class="e-panel" data-row="2" data-col="1" data-sizeX="1" data-sizeY="1">
                    <div class="e-panel-container">
                        <div class="text-align">
                            <div>3</div>
                        </div>
                    </div>
                </div>
                <div id="five" class="e-panel" data-row="2" data-col="2" data-sizeX="2" data-sizeY="1">
                    <div class="e-panel-container">
                        <div class="text-align">
                            <div>4</div>
                        </div>
                    </div>
                </div>
                <div id="six" class="e-panel" data-row="0" data-col="3" data-sizeX="1" data-sizeY="1">
                    <div class="e-panel-container">
                        <div class="text-align">
                            <div>5</div>
                        </div>
                    </div>
                </div>
                <div id="seven" class="e-panel" data-row="1" data-col="3" data-sizeX="1" data-sizeY="1">
                    <div class="e-panel-container">
                        <div class="text-align">
                            <div>6</div>
                        </div>
                    </div>
                </div>
                <div id="eight" class="e-panel" data-row="0" data-col="4" data-sizeX="1" data-sizeY="3">
                    <div class="e-panel-container">
                        <div class="text-align">
                            <div>7</div>
                        </div>
                    </div>
                </div>
            </ejs-dashboardlayout>
            <!-- end of dashboardlayout element -->
        </div>
    </div>
</template>

{% endhighlight %}
{% endtabs %}

3\. Declare the value for the `cellSpacing` property in the `script` section.

{% tabs %}
{% highlight html tabtitle="~/src/App.vue" %}

<script>
data: function() {
    return {
        count: 8,
        spacing: [10,10]
    };
}
</script>

{% endhighlight %}
{% endtabs %}

Here is the summarized code for the above steps in the **src/App.vue** file:

{% tabs %}
{% highlight html tabtitle="~/src/App.vue" %}
{% include code-snippet/dashboard-layout/getting-started-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}

## Run the project

To run the project, use the following command:

```bash
npm run serve
```

or

```bash
yarn run serve
```
        
{% previewsample "page.domainurl/code-snippet/dashboard-layout/getting-started-cs1" %}

## Setting the panels property using helper

You can render the DashboardLayout component by using the [**panels**](https://ej2.syncfusion.com/vue/documentation/api/dashboard-layout/#panels) property through `<e-panels>`.

{% tabs %}
{% highlight html tabtitle="~/src/App.vue" %}
{% include code-snippet/dashboard-layout/getting-started-panel-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/dashboard-layout/getting-started-panel-cs1" %}

> You can refer to our [Vue Dashboard Layout](https://www.syncfusion.com/vue-components/vue-dashboard-layout) feature tour page for its groundbreaking feature representations. You can also explore our [Vue Dashboard Layout example](https://ej2.syncfusion.com/vue/demos/#/material/dashboard-layout/default.html) to knows how to present and manipulate data.