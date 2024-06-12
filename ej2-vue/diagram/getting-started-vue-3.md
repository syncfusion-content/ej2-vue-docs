---
layout: post
title: Vue 3 getting started with the Diagram component | Syncfusion
description: Check out and learn about Vue 3 getting started with the Vue Diagram component of Syncfusion Essential JS 2 and more details.
control: Vue 3 getting started
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Getting Started with the Vue Diagram Component in Vue 3

This article provides a step-by-step guide for setting up a [Vite](https://vitejs.dev/) project with a JavaScript environment and integrating the Syncfusion Vue Diagram component using the [Composition API](https://vuejs.org/guide/introduction.html#composition-api) / [Options API](https://vuejs.org/guide/introduction.html#options-api).

The `Composition API` is a new feature introduced in Vue.js 3 that provides an alternative way to organize and reuse component logic. It allows developers to write components as functions that use smaller, reusable functions called composition functions to manage their properties and behavior.

The `Options API` is the traditional way of writing Vue.js components, where the component logic is organized into a series of options that define the component's properties and behavior. These options include data, methods, computed properties, watchers, life cycle hooks, and more.

To create, edit, and view interactive diagrams using the Syncfusion Vue Diagram component, refer to the below video link.

{% youtube "youtube:https://www.youtube.com/watch?v=y11FMmfoqCg" %}

## Prerequisites

[System requirements for Syncfusion Vue UI components](https://ej2.syncfusion.com/vue/documentation/system-requirements/)

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

Now that `my-project` is ready to run with default settings, let's add Syncfusion components to the project.

## Add Syncfusion Vue packages

Syncfusion Vue component packages are available at [npmjs.com](https://www.npmjs.com/search?q=ej2-vue). To use Syncfusion Vue components in the project, install the corresponding npm package.

This article uses the [Vue Diagram component](https://www.syncfusion.com/vue-components/vue-diagram) as an example. To use the Vue Diagram component in the project, the `@syncfusion/ej2-vue-diagrams` package needs to be installed using the following command:

```bash
npm install @syncfusion/ej2-vue-diagrams --save
```

or

```bash
yarn add @syncfusion/ej2-vue-diagrams
```

## Import Syncfusion CSS styles

You can import themes for the Syncfusion Vue component in various ways, such as using CSS or SASS styles from npm packages, CDN, [CRG](https://ej2.syncfusion.com/javascript/documentation/common/custom-resource-generator/) and [Theme Studio](https://ej2.syncfusion.com/vue/documentation/appearance/theme-studio/). Refer to [themes topic](https://ej2.syncfusion.com/vue/documentation/appearance/theme/) to know more about built-in themes and different ways to refer to themes in a Vue project.

In this article, `Material` theme is applied using CSS styles, which are available in installed packages. The necessary `Material` CSS styles for the Diagram component and its dependents were imported into the `<style>` section of **src/App.vue** file.

{% tabs %}
{% highlight html tabtitle="~/src/App.vue" %}

<style>
    @import "../node_modules/@syncfusion/ej2-base/styles/material.css";
    @import "../node_modules/@syncfusion/ej2-navigations/styles/material.css";
    @import "../node_modules/@syncfusion/ej2-buttons/styles/material.css";
    @import "../node_modules/@syncfusion/ej2-inputs/styles/material.css";
    @import "../node_modules/@syncfusion/ej2-popups/styles/material.css";
    @import "../node_modules/@syncfusion/ej2-vue-diagrams/styles/material.css";
</style>

{% endhighlight %}
{% endtabs %}

> The order of importing CSS styles should be in line with its dependency graph.

## Add Syncfusion Vue component

Follow the below steps to add the Vue Diagram component using `Composition API` or `Options API`:

1.First, import and register the Diagram component and its child directives in the `script` section of the **src/App.vue** file. If you are using the `Composition API`, you should add the `setup` attribute to the `script` tag to indicate that Vue will be using the `Composition API`.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}

<script setup>
  import { DiagramComponent as EjsDiagram, NodesDirective as ENodes, NodeDirective as ENode, ConnectorsDirective as EConnectors, ConnectorDirective as EConnector,NodeAnnotationsDirective as ENodeAnnotations, NodeAnnotationDirective as ENodeAnnotation, ConnectorAnnotationsDirective as EConnectorAnnotations,ConnectorAnnotationDirective as EConnectorAnnotation} from '@syncfusion/ej2-vue-diagrams';
</script>

{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}

<script>
 import { DiagramComponent, NodesDirective, NodeDirective, ConnectorsDirective, ConnectorDirective,NodeAnnotationsDirective, NodeAnnotationDirective, ConnectorAnnotationsDirective,ConnectorAnnotationDirective } from '@syncfusion/ej2-vue-diagrams';
//Component registration
export default {
  name: "App",
  components: {
      "ejs-diagram": DiagramComponent,
      "e-nodes": NodesDirective,
      "e-node": NodeDirective,
      "e-connectors": ConnectorsDirective,
      "e-connector": ConnectorDirective,
      "e-node-annotations": NodeAnnotationsDirective,
      "e-node-annotation": NodeAnnotationDirective,
      "e-connector-annotations": ConnectorAnnotationsDirective,
      "e-connector-annotation": ConnectorAnnotationDirective
  }
}
</script>

{% endhighlight %}
{% endtabs %}
   
2.In the `template` section, define the Diagram component with the [dataSource](https://ej2.syncfusion.com/vue/documentation/api/diagram#datasourcesettings) property and column definitions.

{% tabs %}
{% highlight html tabtitle="~/src/App.vue" %}

<template>
    <ejs-diagram
        id="diagram"
        ref="diagramInstance"
        :width="width"
        :height="height"
        :layout="layout"
        :dataSourceSettings="dataSourceSettings"
        :getNodeDefaults="getNodeDefaults"
        :getConnectorDefaults="getConnectorDefaults"
        >
    </ejs-diagram>
</template>

{% endhighlight %}
{% endtabs %}

3.Declare the values for the `dataSource` property in the `script` section.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}

<script setup>
const localdata = [
    {
      Name: "Elizabeth",
      Role: "Editor",
    },
    {
      Name: "Christina",
      ReportingPerson: "Elizabeth",
      Role: "Managing Editor",
    },
    {
      Name: "Yoshi",
      ReportingPerson: "Christina",
      Role: "Assistant Editor",
    },
    {
      Name: "Philip",
      ReportingPerson: "Christina",
      Role: "Copy Editor",
    },
    {
      Name: "Yang",
      ReportingPerson: "Elizabeth",
      Role: "Bussiness Editor",
    },
    {
      Name: "Roland",
      ReportingPerson: "Yang",
      Role: "Assistant Editor",
    },
    {
      Name: "Yvonne",
      ReportingPerson: "Yang",
      Role: "Editorial Assistant",
    },
];
</script>

{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}

<script>
data() {
  return {
    localdata:[
      {
      Name: "Elizabeth",
      Role: "Editor",
    },
    {
      Name: "Christina",
      ReportingPerson: "Elizabeth",
      Role: "Managing Editor",
    },
    {
      Name: "Yoshi",
      ReportingPerson: "Christina",
      Role: "Assistant Editor",
    },
    {
      Name: "Philip",
      ReportingPerson: "Christina",
      Role: "Copy Editor",
    },
    {
      Name: "Yang",
      ReportingPerson: "Elizabeth",
      Role: "Bussiness Editor",
    },
    {
      Name: "Roland",
      ReportingPerson: "Yang",
      Role: "Assistant Editor",
    },
    {
      Name: "Yvonne",
      ReportingPerson: "Yang",
      Role: "Editorial Assistant",
    },
    ],
  };
}
</script>

{% endhighlight %}
{% endtabs %}

Here is the summarized code for the above steps in the **src/App.vue** file:

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}

<template>
  <ejs-diagram
        id="diagram"
        :width="width"
        :height="height"
        :layout="layout"
        :dataSourceSettings="dataSourceSettings"
        :getNodeDefaults="getNodeDefaults"
        :getConnectorDefaults="getConnectorDefaults"
        >
  </ejs-diagram>
</template>

<script setup>
import {DiagramComponent as EjsDiagram,DataBinding,HierarchicalTree,} from "@syncfusion/ej2-vue-diagrams";
import { provide } from "vue";
import { DataManager } from "@syncfusion/ej2-data";
const width="1300px";
const height = "800px";

const localdata = [
    {
      Name: "Elizabeth",
      Role: "Editor",
    },
    {
      Name: "Christina",
      ReportingPerson: "Elizabeth",
      Role: "Managing Editor",
    },
    {
      Name: "Yoshi",
      ReportingPerson: "Christina",
      Role: "Assistant Editor",
    },
    {
      Name: "Philip",
      ReportingPerson: "Christina",
      Role: "Copy Editor",
    },
    {
      Name: "Yang",
      ReportingPerson: "Elizabeth",
      Role: "Bussiness Editor",
    },
    {
      Name: "Roland",
      ReportingPerson: "Yang",
      Role: "Assistant Editor",
    },
    {
      Name: "Yvonne",
      ReportingPerson: "Yang",
      Role: "Editorial Assistant",
    },
  ];
 const getNodeDefaults= (node) => {
          node.height = 60;
          node.width = 150;
          return node;
        };

const getConnectorDefaults= (obj) => {
    obj.type = "Orthogonal";
          obj.style = {
            strokeColor: "#6BA5D7",
            fill: "#6BA5D7",
            strokeWidth: 2,
          };
          obj.targetDecorator = {
            style: {
              fill: "#6BA5D7",
              strokeColor: "#6BA5D7",
            },
          };
          return obj;
};
const layout={
          type: "OrganizationalChart",
        };
const dataSourceSettings= {
          id: "Name",
          parentId: "ReportingPerson",
          dataManager: new DataManager(localdata),
          doBinding: (nodeModel, localdata) => {
            nodeModel.annotations = [
              {
                content: localdata.Name,
                offset: { x: 0.5, y: 0.2 },
                style: { color: "white" },
              },
              {
                content: localdata.Role,
                offset: { x: 0.5, y: 0.7 },
                style: { color: "white" },
              },
            ];
            nodeModel.style = { fill: "#6BA5D7", strokeWidth: 0 };
          },
        };
const diagram = [DataBinding, HierarchicalTree];
provide('diagram', diagram);
</script>

<style>
    @import "../node_modules/@syncfusion/ej2-base/styles/material.css";
    @import "../node_modules/@syncfusion/ej2-navigations/styles/material.css";
    @import "../node_modules/@syncfusion/ej2-buttons/styles/material.css";
    @import "../node_modules/@syncfusion/ej2-inputs/styles/material.css";
    @import "../node_modules/@syncfusion/ej2-popups/styles/material.css";
    @import "../node_modules/@syncfusion/ej2-vue-diagrams/styles/material.css";
</style>

{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}

<template>
     <ejs-diagram
      id="diagram"
      :width="width"
      :height="height"
      :getNodeDefaults="getNodeDefaults"
      :getConnectorDefaults="getConnectorDefaults"
      :layout="layout"
      :dataSourceSettings="dataSourceSettings"
    >
    </ejs-diagram>
</template>

<script>
  import {DiagramComponent,DataBinding, HierarchicalTree,} from "@syncfusion/ej2-vue-diagrams";
  import { DataManager } from "@syncfusion/ej2-data";
  let localdata = [
    {
      Name: "Elizabeth",
      Role: "Editor",
    },
    {
      Name: "Christina",
      ReportingPerson: "Elizabeth",
      Role: "Managing Editor",
    },
    {
      Name: "Yoshi",
      ReportingPerson: "Christina",
      Role: "Assistant Editor",
    },
    {
      Name: "Philip",
      ReportingPerson: "Christina",
      Role: "Copy Editor",
    },
    {
      Name: "Yang",
      ReportingPerson: "Elizabeth",
      Role: "Bussiness Editor",
    },
    {
      Name: "Roland",
      ReportingPerson: "Yang",
      Role: "Assistant Editor",
    },
    {
      Name: "Yvonne",
      ReportingPerson: "Yang",
      Role: "Editorial Assistant",
    },
  ];
  // Component registration
  export default {
    name: "App",
    // Declaring component and its directives
    components: {
      'ejs-diagram': DiagramComponent,
    },
    // Bound properties declarations
    data() {
      return {
        width: "1300px",
        height: "800px",
        getNodeDefaults: (node) => {
          node.height = 60;
          node.width = 150;
          return node;
        },
        getConnectorDefaults: (obj) => {
          obj.type = "Orthogonal";
          obj.style = {
            strokeColor: "#6BA5D7",
            fill: "#6BA5D7",
            strokeWidth: 2,
          };
          obj.targetDecorator = {
            style: {
              fill: "#6BA5D7",
              strokeColor: "#6BA5D7",
            },
          };
          return obj;
        },
        layout: {
          type: "OrganizationalChart",
        },
        dataSourceSettings: {
          id: "Name",
          parentId: "ReportingPerson",
          dataManager: new DataManager(localdata),
          doBinding: (nodeModel, localdata) => {
            nodeModel.annotations = [
              {
                content: localdata.Name,
                offset: { x: 0.5, y: 0.2 },
                style: { color: "white" },
              },
              {
                content: localdata.Role,
                offset: { x: 0.5, y: 0.7 },
                style: { color: "white" },
              },
            ];
            nodeModel.style = { fill: "#6BA5D7", strokeWidth: 0 };
          },
        },
      };
    },
    provide: {
      diagram: [DataBinding, HierarchicalTree],
    },
  };
</script>

<style>
    @import "../node_modules/@syncfusion/ej2-base/styles/material.css";
    @import "../node_modules/@syncfusion/ej2-inputs/styles/material.css";
    @import "../node_modules/@syncfusion/ej2-vue-diagrams/styles/material.css";
    @import "../node_modules/@syncfusion/ej2-navigations/styles/material.css";
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

![vue-3-js-diagram](./images/vue3-diagram-layout.png)

> **Sample**: [vue-3-diagram-getting-started](https://github.com/SyncfusionExamples/EJ2-Vue3-gettingstarted).

For migrating from Vue 2 to Vue 3, refer to the [`migration`](https://ej2.syncfusion.com/vue/documentation/getting-started/vue3-tutorial/#migration-from-vue-2-to-vue-3) documentation.

## See also

* [Getting Started with Vue UI Components using Composition API and TypeScript](../getting-started/vue-3-ts-composition.md)
* [Getting Started with Vue UI Components using Options API and TypeScript](../getting-started/vue-3-ts-options.md)