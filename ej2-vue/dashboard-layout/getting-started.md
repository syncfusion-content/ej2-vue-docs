---
layout: post
title: Getting Started with Vue Dashboard Layout | Syncfusion
description: Set up a Vue 2 project with Vue CLI and integrate the Syncfusion Vue Dashboard Layout component, including CSS themes and rendering panels in App.vue.
control: Getting Started
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Getting Started with Vue Dashboard Layout

This article provides a step-by-step guide for setting up a Vue 2 project using [Vue-CLI](https://cli.vuejs.org) and integrating the Syncfusion<sup style="font-size:70%">&reg;</sup> Vue Dashboard Layout component.

To get start quickly with Vue Dashboard Layout, you can check on this video:

{% youtube "https://www.youtube.com/watch?v=2vjc_E8f9nI" %}

## Prerequisites

[System requirements for Syncfusion<sup style="font-size:70%">&reg;</sup> Vue UI components](https://ej2.syncfusion.com/vue/documentation/system-requirements)

## Setting up the Vue 2 project

Easily set up a Vue 2 application using Vue CLI, which provides a reliable development environment, a streamlined project structure, and optimized builds compared to older setup tools. For detailed steps, refer to the Vue CLI [installation instructions](https://cli.vuejs.org/guide/installation.html).

> **Note:** To create a Vue 2 application using Vue CLI, refer to this [documentation](https://ej2.syncfusion.com/vue/documentation/getting-started/vue-2-vue-cli) for more details.

To create a new Vue 2 application, run the following commands based on your preferred package manager:

```bash
npm install -g @vue/cli
vue create quickstart
```

or

```bash
yarn global add @vue/cli
vue create quickstart
```

During the setup process, the CLI will prompt you for a few configuration options. Select the following:

- **Which linter to use?** → **Default ([Vue 2] babel, eslint)**
- **Install with npm and start now?** → **Yes**

Selecting **Yes** automatically installs the project dependencies and starts the development server.

After verifying that the application starts successfully, terminate the development server in the terminal and proceed to the next step.

Navigate to the project directory:

```bash
cd quickstart
```

## Adding Vue Dashboard Layout packages

To install the Dashboard Layout package, use the following command:

```bash
npm install @syncfusion/ej2-vue-layouts --save
```
or

```bash
yarn add @syncfusion/ej2-vue-layouts
```

## Adding CSS reference

Themes for Syncfusion<sup style="font-size:70%">&reg;</sup> components can be applied using CSS files provided through [npm theme packages](https://www.npmjs.com/package/@syncfusion/ej2-material3-theme). For available themes, refer to the [Themes](https://ej2.syncfusion.com/vue/documentation/appearance/theme) documentation.

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
@import "../node_modules/@syncfusion/ej2-material3-theme/styles/dashboard-layout/index.css";

</style>

{% endhighlight %}
{% endtabs %}

## Adding Dashboard Layout component

The Dashboard Layout code should be added in the **src/App.vue** file.

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

<script>
// Import syncfusion dashboardlayout component from layouts package
import { DashboardLayoutComponent } from "@syncfusion/ej2-vue-layouts";

export default {
    components: {
        'ejs-dashboardlayout': DashboardLayoutComponent
    }
}
</script>

<style>
@import "../node_modules/@syncfusion/ej2-material3-theme/styles/dashboard-layout/index.css";
</style>

{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/dashboard-layout/getting-started-cs1" %}

## Run the application

To run the project, use the following command:

```bash
npm run serve
```

or

```bash
yarn run serve
```

## See also

* [Getting Started with Vue UI Components with the Nuxt Framework](https://ej2.syncfusion.com/vue/documentation/getting-started/nuxt-3)

* [Getting Started with Vue UI Components with Vite and PNPM](https://ej2.syncfusion.com/vue/documentation/getting-started/pnpm)

* [Getting started with testing Vue UI components in the Vitest project](https://ej2.syncfusion.com/vue/documentation/getting-started/vitest)

* [Getting Started with Syncfusion<sup style="font-size:70%">&reg;</sup> Vue UI Components using direct scripts](https://ej2.syncfusion.com/vue/documentation/getting-started/direct-scripts)