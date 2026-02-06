---
layout: post
title: Getting started with Vue TreeView component | Syncfusion
description:  Checkout and learn about Getting started with Vue TreeView component of Syncfusion Essential JS 2 and more details.
control: Getting started 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Getting Started with the Vue TreeView Component in Vue 2

This article provides a step-by-step guide for setting up a Vue 2 project using [Vue-CLI](https://cli.vuejs.org) and integrating the Syncfusion<sup style="font-size:70%">&reg;</sup> Vue TreeView component using the [Composition API](https://vuejs.org/guide/introduction.html#composition-api) / [Options API](https://vuejs.org/guide/introduction.html#options-api).

## Prerequisites

[System requirements for Syncfusion<sup style="font-size:70%">&reg;</sup> Vue UI components](https://ej2.syncfusion.com/vue/documentation/system-requirements)

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

## Adding syncfusion<sup style="font-size:70%">&reg;</sup> packages

Syncfusion<sup style="font-size:70%">&reg;</sup> packages are available at [npmjs.com](https://www.npmjs.com/search?q=ej2-vue). To use Vue components, install the required npm package.

This article uses the [Vue TreeView component](https://www.syncfusion.com/vue-components/vue-treeview) as an example. Install the `@syncfusion/ej2-vue-navigations` package by running the following command:

```bash
npm install @syncfusion/ej2-vue-navigations --save
```
or

```bash
yarn add @syncfusion/ej2-vue-navigations
```

## Import Syncfusion<sup style="font-size:70%">&reg;</sup> CSS styles

You can import themes for the Syncfusion<sup style="font-size:70%">&reg;</sup> Vue component in various ways, such as using CSS or SASS styles from npm packages, CDN, [CRG](https://crg.syncfusion.com/) and [Theme Studio](https://ej2.syncfusion.com/vue/documentation/appearance/theme-studio). Refer to [themes topic](https://ej2.syncfusion.com/vue/documentation/appearance/theme) to know more about built-in themes and different ways to refer to themes in a Vue project.

In this article, the `Material` theme is applied using CSS styles, which are available in installed packages. The necessary `Material` CSS styles for the TreeView component and its dependents were imported into the `<style>` section of **src/App.vue** file.

{% tabs %}

{% highlight html tabtitle="~/src/app.vue" %}

  <style>
    @import "../node_modules/@syncfusion/ej2-base/styles/material3.css";
    @import "../node_modules/@syncfusion/ej2-vue-navigations/styles/material3.css";
    @import "../node_modules/@syncfusion/ej2-inputs/styles/material3.css";
    @import "../node_modules/@syncfusion/ej2-buttons/styles/material3.css";
  </style>

{% endhighlight %}

{% endtabs %}

## Add Syncfusion<sup style="font-size:70%">&reg;</sup> Vue component

Follow the below steps to add the Vue TreeView component using `Composition API` or `Options API`:

1\. First, import and register the TreeView component in the `script` section of the **src/App.vue** file. If you are using the `Composition API`, you should add the `setup` attribute to the `script` tag to indicate that Vue will be using the `Composition API`.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}

<script setup>
  import { TreeViewComponent as EjsTreeview } from "@syncfusion/ej2-vue-navigations";
</script>

{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}

<script>
  import { TreeViewComponent } from "@syncfusion/ej2-vue-navigations";

  export default {
    components: {
      'ejs-treeview': TreeViewComponent
    }
  }
</script>

{% endhighlight %}
{% endtabs %}

### Binding data source

TreeView can load data either from local data sources or remote data services. This can be done using the [`dataSource`](https://helpej2.syncfusion.com/vue/documentation/api/treeview/fieldsSettingsModel#datasource) property that is a member of the [fields](https://ej2.syncfusion.com/vue/documentation/api/treeview#fields) property. The dataSource property supports array of JavaScript objects and [`DataManager`](https://ej2.syncfusion.com/vue/documentation/data/vue-2-getting-started). Here, an array of JSON values is passed to the TreeView component.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}

<template>
  <div id="app">
    <div class="control_wrapper">
        <ejs-treeview id='treeview' :fields="fields"></ejs-treeview>
    </div>
  </div>
</template>
<script setup>
  import { TreeViewComponent } from "@syncfusion/ej2-vue-navigations";
  const data =  [
    {
        nodeId: '01', nodeText: 'Music',
        nodeChild: [
            { nodeId: '01-01', nodeText: 'Gouttes.mp3' }
        ]
    },
    {
        nodeId: '02', nodeText: 'Videos', expanded: true,
        nodeChild: [
            { nodeId: '02-01', nodeText: 'Naturals.mp4' },
            { nodeId: '02-02', nodeText: 'Wild.mpeg' },
        ]
    },
    {
        nodeId: '03', nodeText: 'Documents',
        nodeChild: [
            { nodeId: '03-01', nodeText: 'Environment Pollution.docx' },
            { nodeId: '03-02', nodeText: 'Global Water, Sanitation, & Hygiene.docx' },
            { nodeId: '03-03', nodeText: 'Global Warming.ppt' },
            { nodeId: '03-04', nodeText: 'Social Network.pdf' },
            { nodeId: '03-05', nodeText: 'Youth Empowerment.pdf' },
        ]
    },
  ];
  const fields = { dataSource: data, id: "nodeId", text: "nodeText", child: "nodeChild" };
</script>

{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}

  <template>
      <div class="control_wrapper">
        <ejs-treeview id='treeview' :fields='fields'></ejs-treeview>
      </div>
  </template>
<script>
  import { TreeViewComponent } from "@syncfusion/ej2-vue-navigations";
  var dataSource =  [
      {
          nodeId: '01', nodeText: 'Music',
          nodeChild: [
              { nodeId: '01-01', nodeText: 'Gouttes.mp3' }
          ]
      },
      {
          nodeId: '02', nodeText: 'Videos', expanded: true,
          nodeChild: [
              { nodeId: '02-01', nodeText: 'Naturals.mp4' },
              { nodeId: '02-02', nodeText: 'Wild.mpeg' },
          ]
      },
      {
          nodeId: '03', nodeText: 'Documents',
          nodeChild: [
              { nodeId: '03-01', nodeText: 'Environment Pollution.docx' },
              { nodeId: '03-02', nodeText: 'Global Water, Sanitation, & Hygiene.docx' },
              { nodeId: '03-03', nodeText: 'Global Warming.ppt' },
              { nodeId: '03-04', nodeText: 'Social Network.pdf' },
              { nodeId: '03-05', nodeText: 'Youth Empowerment.pdf' },
          ]
      },
  ];
  export default {
    data: function() {
      return {
      fields: { dataSource: data, id: 'nodeId', text: 'nodeText', child: 'nodeChild' },
      };
    }
  }
</script>

{% endhighlight %}
{% endtabs %}

Here is the summarized code for the above steps in the **src/App.vue** file:

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}

{% include code-snippet/treeview/getting-started-cs1/app-composition.vue %}

{% endhighlight %}
{% highlight html tabtitle="Options API (~src/App.vue)" %}

{% include code-snippet/treeview/getting-started-cs1/app.vue %}

{% endhighlight %}
{% endtabs %}

## Run the application

To run the application, use the following command:

```bash
npm run serve
```

or

```bash
yarn run serve
```
        
{% previewsample "page.domainurl/code-snippet/treeview/getting-started-cs1" %}

> You can also explore our [Vue TreeView example](https://ej2.syncfusion.com/vue/demos/#/material3/treeview/default.html) to knows how to present and manipulate data.