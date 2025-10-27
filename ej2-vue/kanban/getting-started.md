---
layout: post
title: Getting started with Vue Kanban component | Syncfusion
description:  Checkout and learn about Getting started with Vue Kanban component of Syncfusion Essential JS 2 and more details.
control: Getting started 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Getting Started with the Vue Kanban Component in Vue 2

This article provides a step-by-step guide for setting up a Vue 2 project using [Vue-CLI](https://cli.vuejs.org/) and integrating the Syncfusion<sup style="font-size:70%">&reg;</sup> Vue Kanban component

> **Ready to streamline your Syncfusion<sup style="font-size:70%">&reg;</sup> Vue development?** Discover the full potential of Syncfusion<sup style="font-size:70%">&reg;</sup> Vue components with Syncfusion<sup style="font-size:70%">&reg;</sup> AI Coding Assistant. Effortlessly integrate, configure, and enhance your projects with intelligent, context-aware code suggestions, streamlined setups, and real-time insights—all seamlessly integrated into your preferred AI-powered IDEs like VS Code, Cursor, Syncfusion<sup style="font-size:70%">&reg;</sup> CodeStudio and more. [Explore Syncfusion<sup style="font-size:70%">&reg;</sup> AI Coding Assistant](https://ej2.syncfusion.com/vue/documentation/ai-coding-assistants/overview)

To get start quickly with Vue Kanban, you can check on this video:

{% youtube "https://www.youtube.com/watch?v=4W5mUhEzYqY" %}

## Prerequisites

[System requirements for Syncfusion<sup style="font-size:70%">&reg;</sup> Vue UI components](https://ej2.syncfusion.com/vue/documentation/system-requirements/)

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

Once the `quickstart` project is set up with default settings, proceed to add Syncfusion<sup style="font-size:70%">&reg;</sup> components to the project.

## Add Syncfusion<sup style="font-size:70%">&reg;</sup> Vue packages

Syncfusion<sup style="font-size:70%">&reg;</sup> packages are available at [npmjs.com](https://www.npmjs.com/search?q=ej2-vue). To use Vue components, install the required npm package.

This article uses the [Vue Kanban component](https://www.syncfusion.com/vue-components/vue-kanban-board) as an example. Install the `@syncfusion/ej2-vue-kanban` package by running the following command:

```bash
npm install @syncfusion/ej2-vue-kanban --save
```
or

```bash
yarn add @syncfusion/ej2-vue-kanban
```

> The **--save** will instruct NPM to include the Kanban package inside of the `dependencies` section of the `package.json`.

## Import Syncfusion<sup style="font-size:70%">&reg;</sup> CSS styles

You can import themes for the Syncfusion<sup style="font-size:70%">&reg;</sup> Vue component in various ways, such as using CSS or SASS styles from npm packages, CDN, [CRG](https://ej2.syncfusion.com/javascript/documentation/common/custom-resource-generator/) and [Theme Studio](https://ej2.syncfusion.com/vue/documentation/appearance/theme-studio/). Refer to [themes topic](https://ej2.syncfusion.com/vue/documentation/appearance/theme/) to know more about built-in themes and different ways to refer to themes in a Vue project.

In this article, the `Material` theme is applied using CSS styles, which are available in installed packages. The necessary `Material` CSS styles for the Kanban component and its dependents were imported into the `<style>` section of **src/App.vue** file.

{% tabs %}
{% highlight html tabtitle="~/src/App.vue" %}

<style>
@import '../node_modules/@syncfusion/ej2-base/styles/material.css';
@import '../node_modules/@syncfusion/ej2-buttons/styles/material.css';
@import '../node_modules/@syncfusion/ej2-layouts/styles/material.css';
@import '../node_modules/@syncfusion/ej2-dropdowns/styles/material.css';
@import '../node_modules/@syncfusion/ej2-inputs/styles/material.css';
@import '../node_modules/@syncfusion/ej2-navigations/styles/material.css';
@import '../node_modules/@syncfusion/ej2-popups/styles/material.css';
@import '../node_modules/@syncfusion/ej2-vue-kanban/styles/material.css';
</style>

{% endhighlight %}
{% endtabs %}

## Add Syncfusion<sup style="font-size:70%">&reg;</sup> Vue component

Follow the below steps to add the Vue Kanban component using `Composition API` or `Options API`:

1\. First, import and register the Kanban component in the `script` section of the **src/App.vue** file.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% raw %}
<script setup>
  import { KanbanComponent as EjsKanban, ColumnDirective as EColumn, ColumnsDirective as EColumns } from '@syncfusion/ej2-vue-kanban';

</script>
{% endraw %}
{% endhighlight %}
{% highlight html tabtitle="Options API ~/src/App.vue" %}

<script>
  import { KanbanComponent, ColumnDirective, ColumnsDirective } from '@syncfusion/ej2-vue-kanban';
  export default {
name: "App",
    components: {
      'ejs-kanban': KanbanComponent,
      'e-column': ColumnDirective,
      'e-columns': ColumnsDirective
    }
   }
</script>

{% endhighlight %}
{% endtabs %}

2\. In the `template` section, define the Kanban component with [keyField](https://ej2.syncfusion.com/vue/documentation/api/kanban#keyfield) property. 

{% tabs %}
{% highlight html tabtitle="~/src/App.vue" %}

<template>
  <div id='app'>
      <ejs-kanban id="kanban" keyField="Status">
          <e-columns>
            <e-column headerText="To Do" keyField="Open"></e-column>
            <e-column headerText="In Progress" keyField="InProgress"></e-column>
            <e-column headerText="Testing" keyField="Testing"></e-column>
            <e-column headerText="Done" keyField="Close"></e-column>
          </e-columns>
      </ejs-kanban>
  </div>
</template>

{% endhighlight %}
{% endtabs %}

## Initialize the Kanban

Add the EJ2 Vue Kanban using `<ejs-kanban>` to the `<template>` section of the `App.vue` file in src directory.

{% tabs %}
{% highlight html tabtitle="~/src/App.vue" %}
{% include code-snippet/kanban/getting-started-empty-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="~/src/App.vue" %}
{% include code-snippet/kanban/getting-started-empty-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/kanban/getting-started-empty-cs1" %}

The output will display the kanban header.

## Populating cards

To populate the empty Kanban with cards, define the local JSON data or remote data using the `dataSource` property. To define `dataSource`, the mandatory fields in JSON object should be relevant to `keyField`. In the following example, you can see the cards defined with default fields such as ID, Summary, and Status.

{% tabs %}
{% highlight html tabtitle="~/src/App.vue" %}
{% include code-snippet/kanban/getting-started-key-field-cs2/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="~/src/App.vue" %}
{% include code-snippet/kanban/getting-started-key-field-cs2/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/kanban/getting-started-key-field-cs2" %}

## Enable swimlane

`Swimlane` can be enabled by mapping the fields `swimlaneSettings.keyField` to appropriate column name in dataSource. This enables the grouping of the cards based on the mapped column values.

{% tabs %}
{% highlight html tabtitle="~/src/App.vue" %}
{% include code-snippet/kanban/getting-started-swimlane-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="~/src/App.vue" %}
{% include code-snippet/kanban/getting-started-swimlane-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/kanban/getting-started-swimlane-cs1" %}