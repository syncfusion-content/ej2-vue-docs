---
layout: post
title: Vue Grid Getting Started with Vue 3 | Syncfusion
description: Learn how to get started with Vue Data Grid in Vue 3 using Vite, Composition API, Options API, project setup, and grid configuration.
control: Vue 3 getting started
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Getting Started with Vue Data Grid in Vue 3

This article provides a step-by-step guide for setting up a [Vite](https://vitejs.dev/) project with a JavaScript environment and integrating the Syncfusion<sup style="font-size:70%">&reg;</sup> Vue Tree Grid component using the [Composition API](https://vuejs.org/guide/introduction.html#composition-api) / [Options API](https://vuejs.org/guide/introduction.html#options-api).

The `Composition API`, introduced in Vue.js 3, provides an alternative way to organize and reuse component logic.

The `Options API` is the traditional approach to writing Vue.js components, organizing component logic into a series of options that define the component's properties and behavior. These options include data, methods, computed properties, watchers, life cycle hooks, and more.

## Prerequisites

| Requirement | Version |
|-------------|---------|
| Vue | 3.0 or higher |
| Node.js | 16.0.0 or above |

### Vue supported versions

| Vue version | Minimum Syncfusion Vue Tree Grid version |
| ------------- | ------------------------------------------- |
|[Vue v3.0](https://blog.vuejs.org/posts/vue-3-as-the-new-default) | 19.2.44 and above |

### Browser support

| Browser | Supported versions |
|---|---|
| Chrome | Latest |
| Firefox | Latest |
| Opera | Latest |
| Edge | 13+ |
| Internet Explorer (IE) | 11+ |
| Safari | 9+ |
| iOS Safari | 9+ |
| Android Browser / Chrome for Android | 4.4+ |
| Windows Mobile | IE 11+ |

## Setup for local development

Easily set up a Vue 3 application using [Vite](https://vitejs.dev), which provides a faster development environment, smaller bundle sizes, and optimized builds compared to traditional tools. For detailed steps, refer to the Vite [installation instructions](https://vitejs.dev/guide). Vite sets up your environment using JavaScript and optimizes your application for production.

> **Note:** To create a Vue application using `create-vue`, refer to this [documentation](https://ej2.syncfusion.com/vue/documentation/getting-started) for more details.

To create a new Vue 3 application, run one of the following commands based on your preferred language:

***Vue with JavaScript***

```bash
npm create vite@latest my-app -- --template vue
```

***Vue with TypeScript***

```bash
npm create vite@latest my-app -- --template vue-ts
```

During the setup process, the CLI will prompt you for a few configuration options. Select the following:

- **Which linter to use?** → **Default ([Vue 3] babel, eslint)**
- **Install with npm and start now?** → **Yes**

Selecting **Yes** automatically installs the project dependencies and starts the development server.

After verifying that the application starts successfully, terminate the development server in the terminal and proceed to the next step.

Then, navigate to the project directory:

```bash
cd my-app
```

## Add Vue Tree Grid packages

To install the Tree Grid component, use the following command:

```bash
npm install @syncfusion/ej2-vue-treegrid --save
```

or

```bash
yarn add @syncfusion/ej2-vue-treegrid
```

> Before including Syncfusion styles, make sure to remove the default styles defined in **style.css**. This helps prevent unintended style overrides and ensures that Syncfusion components render correctly.


## Adding CSS reference

Themes for Syncfusion<sup style="font-size:70%">&reg;</sup> Tree Grid components can be applied using CSS files provided through [npm theme packages](https://www.npmjs.com/package/@syncfusion/ej2-material3-theme). For available themes, refer to the [Themes](https://ej2.syncfusion.com/vue/documentation/appearance/theme) documentation.
 
Install the **Material 3** theme package using the following command:

{% tabs %}
{% highlight bash tabtitle="npm" %}
 
npm install @syncfusion/ej2-material3-theme --save
 
{% endhighlight %}
{% endtabs %}
 
Then add the following CSS reference to the **src/App.vue** file:

{% tabs %}
{% highlight html tabtitle="Composition API ~/src/App.vue" %}

<style>
    @import "../node_modules/@syncfusion/ej2-material3-theme/styles/treegrid/index.css";
</style>

{% endhighlight %}
{% endtabs %}

## Adding Tree Grid component

The tree grid code should be added in the **src/App.vue** file.

{% tabs %}
{% highlight html tabtitle="Composition API ~/src/App.vue" %}
{% raw %}
<template>
    <div id="app">
        <!-- Assigns the dataset to the TreeGrid component -->
        <ejs-treegrid :dataSource="data" :treeColumnIndex='1' childMapping='subtasks'>
          <!-- Define the columns to be displayed -->
          <e-columns>
                <e-column field='TaskID' headerText='Task ID' textAlign='Right' width=150></e-column>
                <e-column field='TaskName' headerText='Task Name' width=170></e-column>
                <e-column field='StartDate' headerText='Start Date' textAlign='Right' format='yMd' width=130></e-column>
                <e-column field='EndDate' headerText='End Date' textAlign='Right' format='yMd' width=130></e-column>
                <e-column field='Duration' headerText='Duration' textAlign='Right' width=100></e-column>
            </e-columns>
        </ejs-treegrid>
    </div>
</template>
<script setup>
import { TreeGridComponent as EjsTreegrid, ColumnDirective as EColumn, ColumnsDirective as EColumns } from "@syncfusion/ej2-vue-treegrid";
// Defines the data to be displayed in the TreeGrid
const dataSource = [
    {
        TaskID: 1, TaskName: 'Planning', StartDate: new Date('02/04/2025'), EndDate: new Date('02/07/2025'), Duration: 4,
        subtasks: [
            { TaskID: 2, TaskName: 'Plan timeline', StartDate: new Date('02/04/2025'), EndDate: new Date('02/07/2025'), Duration: 4, },
            { TaskID: 3, TaskName: 'Plan budget', StartDate: new Date('02/04/2025'), EndDate: new Date('02/07/2025'), Duration: 4, },
        ],
    },
    {
        TaskID: 4, TaskName: 'Design', StartDate: new Date('02/10/2025'), EndDate: new Date('02/14/2025'), Duration: 5,
        subtasks: [
            { TaskID: 5, TaskName: 'Software Specification', StartDate: new Date('02/10/2025'), EndDate: new Date('02/12/2025'), Duration: 3, },
            { TaskID: 6, TaskName: 'Design Documentation', StartDate: new Date('02/13/2025'), EndDate: new Date('02/14/2025'), Duration: 2, },
            { TaskID: 7, TaskName: 'Design complete', StartDate: new Date('02/14/2025'), EndDate: new Date('02/14/2025'), Duration: 1 },
        ],
    }
];

const data = dataSource;
</script>
<style>
@import "../node_modules/@syncfusion/ej2-material3-theme/styles/treegrid/index.css";
</style>
{% endraw %}
{% endhighlight %}
{% highlight html tabtitle="Options API ~/src/App.vue" %}
{% raw %}
<template>
    <div id="app">
        <!-- Assigns the dataset to the TreeGrid component -->
        <ejs-treegrid :dataSource="data" :treeColumnIndex='1' childMapping='subtasks'>
          <!-- Define the columns to be displayed -->
          <e-columns>
                <e-column field='TaskID' headerText='Task ID' textAlign='Right' width=150></e-column>
                <e-column field='TaskName' headerText='Task Name' width=170></e-column>
                <e-column field='StartDate' headerText='Start Date' textAlign='Right' format='yMd' width=130></e-column>
                <e-column field='EndDate' headerText='End Date' textAlign='Right' format='yMd' width=130></e-column>
                <e-column field='Duration' headerText='Duration' textAlign='Right' width=100></e-column>
            </e-columns>
        </ejs-treegrid>
    </div>
</template>
<script>
import { TreeGridComponent, ColumnDirective, ColumnsDirective } from "@syncfusion/ej2-vue-treegrid";
// Defines the data to be displayed in the TreeGrid
const dataSource = [
    {
        TaskID: 1, TaskName: 'Planning', StartDate: new Date('02/04/2025'), EndDate: new Date('02/07/2025'), Duration: 4,
        subtasks: [
            { TaskID: 2, TaskName: 'Plan timeline', StartDate: new Date('02/04/2025'), EndDate: new Date('02/07/2025'), Duration: 4, },
            { TaskID: 3, TaskName: 'Plan budget', StartDate: new Date('02/04/2025'), EndDate: new Date('02/07/2025'), Duration: 4, },
        ],
    },
    {
        TaskID: 4, TaskName: 'Design', StartDate: new Date('02/10/2025'), EndDate: new Date('02/14/2025'), Duration: 5,
        subtasks: [
            { TaskID: 5, TaskName: 'Software Specification', StartDate: new Date('02/10/2025'), EndDate: new Date('02/12/2025'), Duration: 3, },
            { TaskID: 6, TaskName: 'Design Documentation', StartDate: new Date('02/13/2025'), EndDate: new Date('02/14/2025'), Duration: 2, },
            { TaskID: 7, TaskName: 'Design complete', StartDate: new Date('02/14/2025'), EndDate: new Date('02/14/2025'), Duration: 1 },
        ],
    }
];

export default {
name: "App",
components: {
"ejs-treegrid":TreeGridComponent,
"e-columns":ColumnsDirective,
"e-column":ColumnDirective,
  },
  data() {
    return {
      data: dataSource
    };
  },
}
</script>
<style>
@import "../node_modules/@syncfusion/ej2-material3-theme/styles/treegrid/index.css";
</style>
{% endraw %}
{% endhighlight %}
{% endtabs %}
   
{% previewsample "page.domainurl/code-snippet/treegrid/getting-started/default-cs4" %}

## Run the application

```bash
npm run dev
```

or

```bash
yarn run dev
```

## Registering Syncfusion license

The Syncfusion® Vue Tree Grid requires a valid license key to be registered in the application. To prevent license validation warnings, refer to the [Syncfusion licensing](https://ej2.syncfusion.com/vue/documentation/licensing/overview) documentation.

## Troubleshooting

- **Tree Grid not rendering styles:** Ensure the theme CSS is imported in `src/App.vue` and that you removed any default Vue CLI starter styles that may override the Tree Grid styles.
- **Trial license warning banner:** Register a license key via `registerLicense()` from `@syncfusion/ej2-base`.

N> Looking for the full Vue Tree Grid component overview, features, pricing, and documentation? Visit the [Vue Tree Grid](https://www.syncfusion.com/vue-components/vue-tree-grid) page.

## See also

* [Grid Feature Modules](./module)
* [Getting Started with Vue UI Components using Composition API and TypeScript](../getting-started/vue-3-ts-composition.md)
* [Getting Started with Vue UI Components using Options API and TypeScript](../getting-started/vue-3-ts-options.md)
