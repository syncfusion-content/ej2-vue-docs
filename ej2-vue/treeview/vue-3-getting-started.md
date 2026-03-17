---
layout: post
title: Vue 3 getting started with the TreeView component | Syncfusion
description: Check out and learn about Vue 3 getting started with the Vue TreeView component of Syncfusion Essential JS 2 and more details.
control: Vue 3 getting started
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Getting Started with the Vue TreeView Component in Vue 3

This article provides a step-by-step guide for setting up a [Vite](https://vitejs.dev/) project with a JavaScript environment and integrating the Syncfusion<sup style="font-size:70%">&reg;</sup> Vue TreeView component using the [Composition API](https://vuejs.org/guide/introduction.html#composition-api) / [Options API](https://vuejs.org/guide/introduction.html#options-api).

The `Composition API` is a new feature introduced in Vue.js 3 that provides an alternative way to organize and reuse component logic. It allows developers to write components as functions that use smaller, reusable functions called composition functions to manage their properties and behavior.

The `Options API` is the traditional way of writing Vue.js components, where the component logic is organized into a series of options that define the component's properties and behavior. These options include data, methods, computed properties, watchers, lifecycle hooks, and more.

## Prerequisites

[System requirements for Syncfusion<sup style="font-size:70%">&reg;</sup> Vue UI components](https://ej2.syncfusion.com/vue/documentation/system-requirements/)

## Set up the Vite project

A recommended approach for beginning with Vue is to scaffold a project using [Vite](https://vitejs.dev/). To create a new Vite project, use one of the commands that are specific to either NPM or Yarn.

```bash
npm create vite@latest
```

or

```bash
yarn create vite
```

Using one of the above commands will lead you to set up additional configurations for the project as below:

1.Define the project name: We can specify the name of the project directly. Let's specify the name of the project as `my-project` for this article.

```bash
? Project name: » my-project
```

2.Select `Vue` as the framework. It will create a Vue 3 project.

```bash
? Select a framework: » - Use arrow-keys. Return to submit.
Vanilla
> Vue
  React
  Preact
  Lit
  Svelte
  Others
```

3.Choose `JavaScript` as the framework variant to build this Vite project using JavaScript and Vue.

```bash
? Select a variant: » - Use arrow-keys. Return to submit.
> JavaScript
  TypeScript
  Customize with create-vue ↗
  Nuxt ↗
```

4.Upon completing the aforementioned steps to create the `my-project`, run the following command to install its dependencies:

```bash
cd my-project
npm install
```

or

```bash
cd my-project
yarn install
```

Now that `my-project` is ready to run with default settings, let's add Syncfusion<sup style="font-size:70%">&reg;</sup> components to the project.

## Add Syncfusion<sup style="font-size:70%">&reg;</sup> Vue packages

Syncfusion<sup style="font-size:70%">&reg;</sup> Vue component packages are available at [npmjs.com](https://www.npmjs.com/search?q=ej2-vue). To use Syncfusion<sup style="font-size:70%">&reg;</sup> Vue components in the project, install the corresponding npm package.

This article uses the [Vue TreeView component](https://www.syncfusion.com/vue-components/vue-treeview) as an example. To use the Vue TreeView component in the project, the `@syncfusion/ej2-vue-navigations` package needs to be installed using the following command:

```bash
npm install @syncfusion/ej2-vue-navigations --save
```

or

```bash
yarn add @syncfusion/ej2-vue-navigations
```

## Import Syncfusion<sup style="font-size:70%">&reg;</sup> CSS styles

You can import themes for the Syncfusion<sup style="font-size:70%">&reg;</sup> Vue component in various ways, such as using CSS or SASS styles from npm packages, CDN, [CRG](https://ej2.syncfusion.com/javascript/documentation/common/custom-resource-generator/) and [Theme Studio](https://ej2.syncfusion.com/vue/documentation/appearance/theme-studio/). Refer to [themes topic](https://ej2.syncfusion.com/vue/documentation/appearance/theme/) to know more about built-in themes and different ways to refer to themes in a Vue project.

In this article, `Material` theme is applied using CSS styles, which are available in installed packages. The necessary `Material` CSS styles for the TreeView component and its dependents were imported into the `<style>` section of **src/App.vue** file.

{% tabs %}
{% highlight html tabtitle="~/src/App.vue" %}

<style>
  @import "../node_modules/@syncfusion/ej2-base/styles/material.css";
  @import "../node_modules/@syncfusion/ej2-inputs/styles/material.css";
  @import "../node_modules/@syncfusion/ej2-buttons/styles/material.css";
  @import "../node_modules/@syncfusion/ej2-vue-navigations/styles/material.css";
</style>

{% endhighlight %}
{% endtabs %}

>Note: TreeView component use other Syncfusion<sup style="font-size:70%">&reg;</sup> components too, the dependent component's CSS references need to be added for using all the TreeView functionalities.

## Add Syncfusion<sup style="font-size:70%">&reg;</sup> Vue component

Follow the below steps to add the Vue TreeView component using `Composition API` or `Options API`:

1.First, import and register the TreeView component in the `script` section of the **src/App.vue** file. If you are using the `Composition API`, you should add the `setup` attribute to the `script` tag to indicate that Vue will be using the `Composition API`.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}

<script setup>
  import { TreeViewComponent as EjsTreeview } from "@syncfusion/ej2-vue-navigations";
</script>

{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}

<script>
import { TreeViewComponent  } from "@syncfusion/ej2-vue-navigations";
//Component registration
export default {
  name: "App",
  components: {
      "ejs-treeview": TreeViewComponent 
    }
}
</script>

{% endhighlight %}
{% endtabs %}
   
2.Add the component definition in template section.

{% tabs %}
{% highlight html tabtitle="~/src/App.vue" %}

<template>
  <ejs-treeview id='treeview' :fields='fields'></ejs-treeview>
</template>

{% endhighlight %}
{% endtabs %}

3.Declare the values for the [`dataSource`](https://helpej2.syncfusion.com/vue/documentation/api/treeview/fieldsSettingsModel/#datasource) property in the `script` section.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}

<script setup>
const fields = { dataSource: data, id: "nodeId", text: "nodeText", child: "nodeChild" };

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
</script>

{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}

<script>
var data =  [
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
data() {
  return {
    fields: { dataSource: data, id: 'nodeId', text: 'nodeText', child: 'nodeChild' },
  };
}
</script>

{% endhighlight %}
{% endtabs %}

Here is the summarized code for the above steps in the **src/App.vue** file:

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}

<template>
  <ejs-treeview id='treeview' :fields='fields'></ejs-treeview>
</template>

<script setup>
  import { TreeViewComponent as EjsTreeview } from "@syncfusion/ej2-vue-navigations";

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

<style>
  @import "../node_modules/@syncfusion/ej2-base/styles/material.css";
  @import "../node_modules/@syncfusion/ej2-vue-navigations/styles/material.css";
  @import "../node_modules/@syncfusion/ej2-inputs/styles/material.css";
  @import "../node_modules/@syncfusion/ej2-buttons/styles/material.css";
</style>

{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}

<template>
  <ejs-treeview id='treeview' :fields='fields'></ejs-treeview>
</template>

<script>
  import { TreeViewComponent  } from "@syncfusion/ej2-vue-navigations";

  var data =  [
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
  // Component registration
  export default {
    name: "App",
    // Declaring component and its directives
    components: {
      "ejs-treeview": TreeViewComponent 
    },
    // Bound properties declarations
    data() {
      return {
        fields: { dataSource: data, id: 'nodeId', text: 'nodeText', child: 'nodeChild' },
      };
    }
  };
</script>

<style>
  @import "../node_modules/@syncfusion/ej2-base/styles/material.css";
  @import "../node_modules/@syncfusion/ej2-vue-navigations/styles/material.css";
  @import "../node_modules/@syncfusion/ej2-inputs/styles/material.css";
  @import "../node_modules/@syncfusion/ej2-buttons/styles/material.css";
</style>

{% endhighlight %}
{% endtabs %}

## Run the project

To run the project, use the following command:

```bash
npm run dev
```

or

```bash
yarn run dev
```

The output will appear as follows:

![vue-3-js-treeview](./images/treeview.PNG)

## CheckBox

The TreeView component allows you to check more than one node in TreeView without affecting the UI's appearance by enabling the [showCheckBox](https://ej2.syncfusion.com/vue/documentation/api/treeview#showcheckbox) property. When this property is enabled, checkbox appears before each TreeView node text.

* If one of the child nodes is not in a checked state, then the parent node will be in an intermediate state.

* If all the child nodes are in checked state, then the parent node's state will also be checked.

* If a parent node is checked, then all the child nodes' state will also be checked.

In the following example, the `showCheckBox` property is enabled.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}

<template>
  <ejs-treeview id='treeview' :fields='fields' :showCheckBox='true'></ejs-treeview>
</template>

<script setup>
import { TreeViewComponent as EjsTreeview } from "@syncfusion/ej2-vue-navigations";

const fields = { dataSource: data, id: "nodeId", text: "nodeText", child: "nodeChild" };

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
</script>

<style>
@import "../node_modules/@syncfusion/ej2-base/styles/material.css";
@import "../node_modules/@syncfusion/ej2-vue-navigations/styles/material.css";
@import "../node_modules/@syncfusion/ej2-inputs/styles/material.css";
@import "../node_modules/@syncfusion/ej2-buttons/styles/material.css";
</style>

{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}

<template>
  <ejs-treeview id='treeview' :fields='fields' :showCheckBox='true'></ejs-treeview>
</template>

<script>
  import { TreeViewComponent  } from "@syncfusion/ej2-vue-navigations";

  var data =  [
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
  // Component registration
  export default {
    name: "App",
    // Declaring component and its directives
    components: {
      "ejs-treeview": TreeViewComponent 
    },
    // Bound properties declarations
    data() {
      return {
        fields: { dataSource: data, id: 'nodeId', text: 'nodeText', child: 'nodeChild' },
      };
    }
  };
</script>

<style>
  @import "../node_modules/@syncfusion/ej2-base/styles/material.css";
  @import "../node_modules/@syncfusion/ej2-vue-navigations/styles/material.css";
  @import "../node_modules/@syncfusion/ej2-inputs/styles/material.css";
  @import "../node_modules/@syncfusion/ej2-buttons/styles/material.css";
</style>

{% endhighlight %}
{% endtabs %}

![vue-3-js-treeview](./images/treeview-checkbox.PNG)

For migrating from Vue 2 to Vue 3, refer to the [`migration`](https://ej2.syncfusion.com/vue/documentation/getting-started/vue3-tutorial/#migration-from-vue-2-to-vue-3) documentation.

## See also

* [Getting Started with Vue UI Components using Composition API and TypeScript](https://ej2.syncfusion.com/vue/documentation/getting-started/vue-3-ts-composition)
* [Getting Started with Vue UI Components using Options API and TypeScript](https://ej2.syncfusion.com/vue/documentation/getting-started/vue-3-ts-options)
