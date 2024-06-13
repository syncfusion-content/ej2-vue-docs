---
layout: post
title: Getting started with Vue Diagram component | Syncfusion
description:  Checkout and learn about Getting started with Vue Diagram component of Syncfusion Essential JS 2 and more details.
control: Getting started 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Getting Started with the Vue Diagram Component in Vue 2

This article provides a step-by-step guide for setting up a Vue 2 project using [Vue-CLI](https://cli.vuejs.org/) and integrating the Syncfusion Vue Diagram component

## Prerequisites

[System requirements for Syncfusion Vue UI components](https://ej2.syncfusion.com/vue/documentation/system-requirements)

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

## Setting up the Vue 2 project

To generate a Vue 2 project using Vue-CLI, use the [vue create](https://cli.vuejs.org/#getting-started) command. Follow these steps to install Vue CLI and create a new project:

```bash
npm install -g @vue/cli
vue create my-diagram-app
cd my-diagram-app
npm run serve
```

or

```bash
yarn global add @vue/cli
vue create my-diagram-app
cd my-diagram-app
yarn run serve
```

When creating a new project, choose the option `Default ([Vue 2] babel, eslint)` from the menu.

![Vue 2 project](./images/vue2-terminal.png)

Once the `my-diagram-app` project is set up with default settings, proceed to add Syncfusion components to the project.

## Add Syncfusion Vue packages

Syncfusion packages are available at [npmjs.com](https://www.npmjs.com/search?q=ej2-vue). To use Vue components, install the required npm package.

This article uses the [Vue Diagram component](https://www.syncfusion.com/vue-components/vue-diagram) as an example. Install the `@syncfusion/ej2-vue-diagrams` package by running the following command:

```bash
npm install @syncfusion/ej2-vue-diagrams --save
```
or

```bash
yarn add @syncfusion/ej2-vue-diagrams
```

## Import Syncfusion CSS styles

You can import themes for the Syncfusion Vue component in various ways, such as using CSS or SASS styles from npm packages, CDN, [CRG](https://crg.syncfusion.com/) and [Theme Studio](https://ej2.syncfusion.com/vue/documentation/appearance/theme-studio). Refer to [themes topic](https://ej2.syncfusion.com/vue/documentation/appearance/theme) to know more about built-in themes and different ways to refer to themes in a Vue project.

In this article, the `Material` theme is applied using CSS styles, which are available in installed packages. The necessary `Material` CSS styles for the Diagram component and its dependents were imported into the `<style>` section of **src/App.vue** file.

{% tabs %}
{% highlight html tabtitle="~/src/App.vue" %}

<style>
@import "../node_modules/@syncfusion/ej2-vue-diagrams/styles/material.css";
@import "../node_modules/@syncfusion/ej2-base/styles/material.css";
@import "../node_modules/@syncfusion/ej2-popups/styles/material.css";
@import "../node_modules/@syncfusion/ej2-splitbuttons/styles/material.css";
@import "../node_modules/@syncfusion/ej2-navigations/styles/material.css";
</style>

{% endhighlight %}
{% endtabs %}

 > Diagram components use other Syncfusion components as well, so CSS references for the dependent component must be added in order to use all diagram functionalities. Use this same order to display the Syncfusion Diagram component’s predefined appearance.


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

## Add Syncfusion Vue component

Follow the below steps to add the Vue Diagram component:

1\. First, import and register the Diagram component in the `script` section of the **src/App.vue** file.

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

2\. In the `template` section, define the Diagram component with [height](https://ej2.syncfusion.com/vue/documentation/api/diagram#height) and [width](https://ej2.syncfusion.com/vue/documentation/api/diagram#width) property. 

{% tabs %}
{% highlight html tabtitle="~/src/App.vue" %}

<template>
    <div id="app">
        <ejs-diagram id="diagram"  :width='width' :height='height' ></ejs-diagram>
    </div>
</template>

{% endhighlight %}
{% endtabs %}

3\. Declare the value for the `height` and `width` properties in the `script` section.

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

To run the project, use the following command:

```bash
npm run serve
```

or

```bash
yarn run serve
```
## Basic Diagram elements

* `Node`: Visualizes any graphical object using nodes, which can also be arranged and manipulated on a diagram page.
* `Connector`: Represents the relationship between two nodes. Three types of connectors provided as follows:

```

1) Orthogonal
2) Bezier
3) Straight

```
* `Port`: Acts as the connection points of node or connector and allows you to create connections with only specific points.
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

Syncfusion diagram control provides support to render many built-in shapes in diagram.
Please refer to [`Shapes`](shapes) to know about built-in Shapes.

The appearance of a node can be customized by changing its [`fill`](../api/diagram/shapeStyleModel#fill-string) color, [`strokeColor`](../api/diagram/shapeStyleModel#strokecolor-string), [`strokeWidth`](../api/diagram/shapeStyleModel#strokewidth-number), [`borderColor`](../api/diagram/node#borderColor-string), [`borderWidth`](../api/diagram/node#borderWidth-number), [`strokeDashArray`](../api/diagram/shapeStyleModel#strokeDashArray-number),  [`opacity`](../api/diagram/shapeStyleModel#opacity-number), and [`shadow`](../api/diagram/shapeStyleModel#shadow-number).

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

You can add multiple nodes with different shapes into diagram.

```javascript
<template>
  <div id="app">
      <ejs-diagram id="diagram" :width='width' :height='height' :nodes='nodes'
          :getNodeDefaults='getNodeDefaults'></ejs-diagram>
  </div>
</template>
<script>
import { DiagramComponent } from '@syncfusion/ej2-vue-diagrams';

const nodes = [
        {
            id: "node1",
            offsetY: 50,
            shape: { type: "Flow", shape: "Terminator" },
            annotations: [
                {
                    content: "Start"
                }
            ]
        },
        {
            id: "node2",
            offsetY: 140,
            shape: { type: "Flow", shape: "Process" },
            annotations: [
                {
                    content: "var i = 0;"
                }
            ]
        },
        {
            id: "node3",
            offsetY: 230,
            shape: { type: "Flow", shape: "Decision" },
            annotations: [
                {
                    content: "i < 10?"
                }
            ]
        },
    ];

export default {
  name: "App",
  components: {
      "ejs-diagram": DiagramComponent

  },
  data() {
      return {
          width: "100%",
          height: "600px",
          nodes: nodes,
          getNodeDefaults: (node) => {
            node.height = 50;
            node.width = 140;
            node.style = { fill: "skyblue", strokeColor: "skyblue" };
            node.offsetX = 300;
            return node;
          },
      }
  }
}
</script>
<style>
@import "../node_modules/@syncfusion/ej2-vue-diagrams/styles/material.css";
</style>


```

### Connect flow chart nodes

Connect these nodes by adding a connector using the [`connectors`](../api/diagram/connectorModel/) property of diagram and refer the source and target end by using the [`sourceID`](../api/diagram/connectorModel/#sourceid) and [`targetID`](../api/diagram/connectorModel/#targetid) properties.
The required nodes and connectors can be added to form a complete flow diagram.


{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/diagram/getting-started/flowdiagram-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/diagram/getting-started/flowdiagram-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/diagram/getting-started/flowdiagram-cs1" %}


Default values for all [`nodes`](../api/diagram/nodemodel/) and [`connectors`](../api/diagram/connectorModel/) can be set using the [`getNodeDefaults`](../api/diagram/#getnodedefaults) and [`getConnectorDefaults`](../api/diagram/#getconnectordefaults) properties, respectively. For example, if all nodes have the same width and height, such properties can be moved into `getNodeDefaults`.

## Automatic Organization Chart

In the 'Flow Diagram' section, how to create a diagram manually was discussed. This section explains how to create and position the diagram automatically.

### Create Business object (Employee information)

Define Employee Information as JSON data. The following code example shows an employee array whose, `Name` is used as an unique identifier and `ReportingPerson` is used to identify the person to whom an employee report to, in the organization.

```ts

    public data: Object[] = [
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

You can configure the above "Employee Information" with diagram, so that the nodes and connectors are automatically generated using the mapping properties. The following code example show how `dataSourceSettings` is used to map ID and parent with property name identifiers for employee information.

```javascript
<template>
  <div id="app">
      <ejs-diagram id="diagram" :width='width' :height='height' :dataSourceSettings='dataSourceSettings' ></ejs-diagram>
  </div>
</template>
<script>
 import { DiagramComponent, HierarchicalTree, DataBinding } from '@syncfusion/ej2-vue-diagrams';
 import { DataManager } from "@syncfusion/ej2-data";
  export let localdata = [
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
  export default {
      components: {
          'ejs-diagram': DiagramComponent
      },
      name: 'app',
      data () {
          return {
              width: "100%",
              height: "350px",
              dataSourceSettings: {
                  id: 'Name', parentId: 'ReportingPerson',
                  dataManager: new DataManager(localdata),
                  doBinding: (nodeModel, localdata) => {
                      nodeModel.shape = {
                          type: "Text",
                          content: (localdata).Role,
                      }
                  }
              }
          }
      },
      provide: {diagram: [DataBinding, HierarchicalTree]},
  }
</script>


```

### Rendering layout with Datasource

To create an organizational chart, the [`type`](../api/diagram/layout) of layout should be set as an `OrganizationalChart`. The following code example shows how DataManager is used to generate Layout based on the DataSourceSettings of the Diagram.


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

The following code examples indicate how to define the default appearance of nodes and connectors. The [`setNodeTemplate`](../api/diagram/#setnodetemplate) is used to update each node based on employee data.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/diagram/getting-started/orgchart-cs2/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/diagram/getting-started/orgchart-cs2/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/diagram/getting-started/orgchart-cs2" %}

> You can refer to our [Vue Diagram](https://www.syncfusion.com/vue-components/vue-diagram) feature tour page for its groundbreaking feature representations. You can also explore our [Vue Diagram example](https://ej2.syncfusion.com/vue/demos/#/material/diagram/default-functionality.html) that shows how to render the Diagram in Vue.