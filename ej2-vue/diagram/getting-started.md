---
layout: post
title: Getting started with Vue Diagram component | Syncfusion®
description:  Checkout and learn about Getting started with Vue Diagram component of Syncfusion Essential® JS 2 and more details.
control: Getting started 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Getting Started with the Vue Diagram Component in Vue 2

This guide walks you through creating a Vue 2 application using [Vue-CLI](https://cli.vuejs.org/) and integrating the Syncfusion® Vue Diagram component

> **Ready to streamline your Syncfusion<sup style="font-size:70%">&reg;</sup> Vue development?** Discover the full potential of Syncfusion<sup style="font-size:70%">&reg;</sup> Vue components with Syncfusion<sup style="font-size:70%">&reg;</sup> AI Coding Assistant. Effortlessly integrate, configure, and enhance your projects with intelligent, context-aware code suggestions, streamlined setups, and real-time insights—all seamlessly integrated into your preferred AI-powered IDEs like VS Code, Cursor, Syncfusion<sup style="font-size:70%">&reg;</sup> CodeStudio and more. [Explore Syncfusion<sup style="font-size:70%">&reg;</sup> AI Coding Assistant](https://ej2.syncfusion.com/vue/documentation/ai-coding-assistant/overview)

## Prerequisites

[System requirements for Syncfusion® Vue UI components](https://ej2.syncfusion.com/vue/documentation/system-requirements)

## Dependencies

The following list of dependencies are required to use the `Diagram` component in your application.

```javascript
|-- @syncfusion/ej2-vue-diagrams
    |-- @syncfusion/ej2-base
    |-- @syncfusion/ej2-data
    |-- @syncfusion/ej2-navigations
    |-- @syncfusion/ej2-inputs
    |-- @syncfusion/ej2-popups
    |-- @syncfusion/ej2-buttons
    |-- @syncfusion/ej2-lists
    |-- @syncfusion/ej2-splitbuttons
    |-- @syncfusion/ej2-diagrams
    |-- @syncfusion/ej2-vue-base
```

## Setup Vue Environment
Use [Vue CLI](https://cli.vuejs.org/) to set up your Vue project. Install Vue CLI globally with the following command:

```bash
npm install -g @vue/cli
``` 
or

```bash
yarn global add @vue/cli
```

## Create a Vue 2 Application

Create a new project using the [vue create](https://cli.vuejs.org/#getting-started) command.

```bash
vue create my-diagram-app
```

When creating a new project, choose the option `Default ([Vue 2] babel, eslint)` from the menu.

![Vue 2 project](./images/vue2-terminal.png) 

once the `my-diagram-app` project is created, navigate to the project folder:

```bash
cd my-diagram-app
```

## Add Syncfusion® Vue Diagram packages

All Syncfusion® packages are published to the [npmjs.com](https://www.npmjs.com/search?q=ej2-vue) registry.

Install the `@syncfusion/ej2-vue-diagrams` package by running the following command:

```bash
npm install @syncfusion/ej2-vue-diagrams --save
```
or

```bash
yarn add @syncfusion/ej2-vue-diagrams
```

## Import Syncfusion® CSS styles

You can import themes for the Syncfusion® Vue component in multiple ways—CSS/SASS from npm packages, CDN, [CRG](https://crg.syncfusion.com/) and [Theme Studio](https://ej2.syncfusion.com/vue/documentation/appearance/theme-studio). Refer to [themes topic](https://ej2.syncfusion.com/vue/documentation/appearance/theme) to know more about built-in themes and different ways to refer to themes in a Vue project.

In this guide, the `Tailwind 3` theme is applied using CSS files available in the installed packages. Add the following imports in the `<style>` section of **src/App.vue**:

{% tabs %}
{% highlight html tabtitle="~/src/App.vue" %}

<style>
@import "../node_modules/@syncfusion/ej2-base/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-navigations/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-splitbuttons/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-popups/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-vue-diagrams/styles/tailwind3.css";
</style>

{% endhighlight %}
{% endtabs %}

 > Diagram components use other Syncfusion® components internally. So, CSS references for dependent components must be added to ensure all features render correctly.

## Add the Syncfusion® Vue Diagram component

Follow these steps to render the Diagram component in your Vue app.

### Import and register the component

In **src/App.vue**, import and register `DiagramComponent` in the `<script>` section:

{% tabs %}
{% highlight html tabtitle="~/src/App.vue" %}
<script>
import { DiagramComponent } from '@syncfusion/ej2-vue-diagrams';
export default {
    components: {
        'ejs-diagram': DiagramComponent
    }
}
</script>
{% endhighlight %}
{% endtabs %}

### Add the Diagram in the template

Define the Diagram component with [height](https://ej2.syncfusion.com/vue/documentation/api/diagram/index-default#height) and [width](https://ej2.syncfusion.com/vue/documentation/api/diagram/index-default#width). 

{% tabs %}
{% highlight html tabtitle="~/src/App.vue" %}

<template>
    <div id="app">
        <ejs-diagram id="diagram"  :width='width' :height='height' ></ejs-diagram>
    </div>
</template>

{% endhighlight %}
{% endtabs %}

### Provide values for height and width

Declare `width` and `height` in the `data()` section:

{% tabs %}
{% highlight html tabtitle="~/src/App.vue" %}
<script>
import { DiagramComponent } from '@syncfusion/ej2-vue-diagrams';
export default {
  name: "App",
  components: {
      "ejs-diagram": DiagramComponent

  },
  data() {
      return {
          width: "100%",
          height: "350px",
      }
  }
}
</script>
{% endhighlight %}
{% endtabs %}

### Run the project

Use either npm or yarn:

```bash
npm run serve
```

or

```bash
yarn run serve
```

N> Vue CLI projects automatically rebuild when you save changes—no need to rerun the command each time.

## Defining Basic Diagram

The below examples shows the basic diagram component which renders an empty diagram.


{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/diagram/getting-started/initialize-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/diagram/getting-started/initialize-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/diagram/getting-started/initialize-cs1" %}

## Module Injection

Diagram component are segregated into individual feature-wise modules. In order to use a particular feature, you need to inject the required module. Please find relevant feature service name and description as follows.

* `BpmnDiagrams` - Inject this provider to add built-in BPMN Shapes to diagrams.
* `ConnectorBridging` - Inject this provider to add bridges to connectors.
* `ConnectorEditing` - Inject this provider to edit the segments for connector.
* `ComplexHierarchicalTree` - Inject this provider to complex hierarchical tree like structure.
* `DataBinding` - Inject this provider to populate nodes from given data source.
* `DiagramContextMenu` - Inject this provider to manipulate context menu.
* `HierarchicalTree` - Inject this provider to use hierarchical tree like structure.
* `LayoutAnimation` - Inject this provider animation to layouts.
* `MindMap` - Inject this provider to use mind map.
* `PrintAndExport` - Inject this provider to print or export the objects.
* `RadialTree` - Inject this provider to use Radial tree like structure.
* `Snapping` - Inject this provider to Snap the objects.
* `SymmetricLayout` - Inject this provider to render layout in symmetrical method.
* `UndoRedo` - Inject this provider to revert and restore the changes.
* `Ej1Serialization` - Inject this provider to load ej1 diagram json in ej2 diagram.

Register the required array of modules under the key diagram in the provide section.

```javascript
<template>
  <div id="app">
      <ejs-diagram id="diagram" :width='width' :height='height'></ejs-diagram>
  </div>
</template>
<script>
import { DiagramComponent, HierarchicalTree, MindMap, RadialTree, ComplexHierarchicalTree, DataBinding, Snapping, PrintAndExport, BpmnDiagrams, SymmetricLayout, ConnectorBridging, UndoRedo, LayoutAnimation, DiagramContextMenu, ConnectorEditing,Ej1Serialization } from '@syncfusion/ej2-vue-diagrams';

export default {
  name: "App",
  components: {
      "ejs-diagram": DiagramComponent

  },
  data() {
      return {
          width: "100%",
          height: "350px"
      }
  },
  provide:{
        diagram: [BpmnDiagrams, ConnectorBridging, ConnectorEditing, ComplexHierarchicalTree, DataBinding,DiagramContextMenu, HierarchicalTree, LayoutAnimation, MindMap, PrintAndExport, RadialTree, Snapping, SymmetricLayout, UndoRedo,Ej1Serialization]
    },
}
</script>

```

## Basic Diagram elements

Diagrams are built using the following core elements:

* `Node`: Visualizes any graphical object using nodes, which can be arranged and manipulated on a diagram page.
* `Connector`: Represents the relationship between two nodes. Three types of connectors provided as follows:
  * Orthogonal
  * Bezier
  * Straight
* `Port`: Acts as connection points on nodes or connectors, allowing connections only at specific points.
* `Annotation`: Shows additional information by adding text or labels on nodes and connectors.

## Flow Diagram

### Create and Add Node

Create and add a `node` (JSON data) with specific position, size, label, and shape.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/diagram/getting-started/addnode-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/diagram/getting-started/addnode-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/diagram/getting-started/addnode-cs1" %}

### Apply shape and style to node

Syncfusion® diagram control provides support to render many built-in shapes in diagram.
Please refer to [`Shapes`](shapes) to know about built-in Shapes.

Customize the appearance of a node by changing its [`fill`](https://ej2.syncfusion.com/vue/documentation/api/diagram/shapestylemodel#fill) color, [`strokeColor`](https://ej2.syncfusion.com/vue/documentation/api/diagram/shapestylemodel#strokecolor), [`strokeWidth`](https://ej2.syncfusion.com/vue/documentation/api/diagram/shapestylemodel#strokewidth), [`borderColor`](https://ej2.syncfusion.com/vue/documentation/api/diagram/node#bordercolor), [`borderWidth`](https://ej2.syncfusion.com/vue/documentation/api/diagram/node#borderwidth), [`strokeDashArray`](https://ej2.syncfusion.com/vue/documentation/api/diagram/shapestylemodel#strokedasharray), [`opacity`](https://ej2.syncfusion.com/vue/documentation/api/diagram/shapestylemodel#opacity), and [`shadow`](https://ej2.syncfusion.com/vue/documentation/api/diagram/node#shadow) properties:

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/diagram/getting-started/apply-style/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/diagram/getting-started/apply-style/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/diagram/getting-started/apply-style" %}

### Add other flowchart nodes to the diagram

Add multiple nodes with different shapes to create a comprehensive diagram:

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/diagram/getting-started/connectnode-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/diagram/getting-started/connectnode-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/diagram/getting-started/connectnode-cs1" %}

### Connect flow chart nodes

Connect nodes by adding connectors using the [`connectors`](https://ej2.syncfusion.com/vue/documentation/api/diagram/connectormodel) property of the diagram. Reference the source and target endpoints using the [`sourceID`](https://ej2.syncfusion.com/vue/documentation/api/diagram/connectormodel#sourceid) and [`targetID`](https://ej2.syncfusion.com/vue/documentation/api/diagram/connectormodel#targetid) properties.

Combine the required nodes and connectors to form a complete flow diagram:


{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/diagram/getting-started/flowdiagram-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/diagram/getting-started/flowdiagram-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/diagram/getting-started/flowdiagram-cs1" %}


Set default values for all [`nodes`](https://ej2.syncfusion.com/vue/documentation/api/diagram/nodemodel) and [`connectors`](https://ej2.syncfusion.com/vue/documentation/api/diagram/connectormodel) using the [`getNodeDefaults`](https://ej2.syncfusion.com/vue/documentation/api/diagram/index-default#getnodedefaults) and [`getConnectorDefaults`](https://ej2.syncfusion.com/vue/documentation/api/diagram/index-default#getconnectordefaults) properties, respectively. For example, if all nodes have the same width and height, move such properties into `getNodeDefaults`.

## Automatic Organization Chart

The previous 'Flow Diagram' section explained how to create a diagram manually. This section demonstrates how to create and position diagrams automatically using data binding.

### Create Business object (Employee information)

Define Employee Information as JSON data. The following code example shows an employee array where `Name` serves as a unique identifier and `ReportingPerson` identifies the person to whom an employee reports in the organization:

```javascript

    let data = [
        {
            Name: "Elizabeth",
            Role: "Director"
        },
        {
            Name: "Christina",
            ReportingPerson: "Elizabeth",
            Role: "Manager"
        },
        {
            Name: "Yoshi",
            ReportingPerson: "Christina",
            Role: "Lead"
        },
        {
            Name: "Philip",
            ReportingPerson: "Christina",
            Role: "Lead"
        },
        {
            Name: "Yang",
            ReportingPerson: "Elizabeth",
            Role: "Manager"
        },
        {
            Name: "Roland",
            ReportingPerson: "Yang",
            Role: "Lead"
        },
        {
            Name: "Yvonne",
            ReportingPerson: "Yang",
            Role: "Lead"
        }
    ];

```

### Map data source

Configure the above "Employee Information" with the diagram so that nodes and connectors are automatically generated using the mapping properties.

The following code example demonstrates how to use [`dataSourceSettings`](https://ej2.syncfusion.com/vue/documentation/api/diagram/datasourcemodel) to map [`id`](https://ej2.syncfusion.com/vue/documentation/api/diagram/datasourcemodel#id) and [`parentId`](https://ej2.syncfusion.com/vue/documentation/api/diagram/datasourcemodel#parentid) with the corresponding property names of employee information:

```javascript
<template>
    <div id="app">
        <ejs-diagram id="diagram" :width='width' :height='height' :dataSourceSettings='dataSourceSettings'></ejs-diagram>
    </div>
</template>
<script>
import { DiagramComponent, HierarchicalTree, DataBinding } from '@syncfusion/ej2-vue-diagrams';
import { DataManager } from "@syncfusion/ej2-data";

export let localdata = [
    {
        Name: "Elizabeth",
        Role: "Director",

    },
    {
        Name: "Christina",
        ReportingPerson: "Elizabeth",
        Role: "Manager",

    },
    {
        Name: "Yoshi",
        ReportingPerson: "Christina",
        Role: "Lead",

    },
    {
        Name: "Philip",
        ReportingPerson: "Christina",
        Role: "Lead",

    },
    {
        Name: "Yang",
        ReportingPerson: "Elizabeth",
        Role: "Manager",

    },
    {
        Name: "Roland",
        ReportingPerson: "Yang",
        Role: "Lead",
    },
    {
        Name: "Yvonne",
        ReportingPerson: "Yang",
        Role: "Lead",

    }
];
export default {
    components: {
        'ejs-diagram': DiagramComponent
    },
    name: 'app',
    data() {
        return {
            width: "100%",
            height: "350px",
            dataSourceSettings: {
                id: 'Name', parentId: 'ReportingPerson',
                dataManager: new DataManager(localdata),
            }
        }
    },
    provide: { diagram: [DataBinding, HierarchicalTree] },
}
</script>

```

### Rendering layout with Datasource

To create an organizational chart, set the [`type`](https://ej2.syncfusion.com/vue/documentation/api/diagram/layouttype) of layout as `OrganizationalChart`.

The following code example shows how DataManager generates layouts based on the DataSourceSettings of the Diagram:

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/diagram/getting-started/orgchart-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/diagram/getting-started/orgchart-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/diagram/getting-started/orgchart-cs1" %}

### Customize employee appearance

The following code examples show how to define the default appearance of nodes and connectors. The [`setNodeTemplate`](https://ej2.syncfusion.com/vue/documentation/api/diagram/index-default#setnodetemplate) method updates each node based on employee data:

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/diagram/getting-started/orgchart-cs2/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/diagram/getting-started/orgchart-cs2/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/diagram/getting-started/orgchart-cs2" %}