---
layout: post
title: Getting started with Vue Diagram component | Syncfusion
description:  Checkout and learn about Getting started with Vue Diagram component of Syncfusion Essential JS 2 and more details.
control: Getting started 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Getting started

This section explains the steps required to create a simple diagram and demonstrates the basic usage of the diagram control.

## Prerequisites

[System requirements for Syncfusion Vue UI components](https://ej2.syncfusion.com/vue/documentation/system-requirements/)

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

## Get Started with Vue CLI

You can use [`Vue CLI`](https://github.com/vuejs/vue-cli) to setup your vue applications.
To install Vue CLI use the following command.

```bash
npm install -g @vue/cli
npm install -g @vue/cli-init
```

Start a new project using below Vue CLI command.

```bash
vue init webpack-simple quickstart

cd quickstart
npm install

```

## Adding Syncfusion packages

All the available Essential JS 2 packages are published in [`Node Package Manager`](https://www.npmjs.com/~syncfusionorg) registry. You can choose the component that you want to install. For this application, we are going to use Diagram component.

To install Diagram component, use the following command

```bash
npm install @syncfusion/ej2-vue-diagrams –save
```

## Registering Vue Component

For Registering Vue Component two ways are available. They are as follows.
* Vue.use()
* Vue.component()

### Using Vue.use()

Import the Component Plugin from the EJ2 Vue Package and register the same using Vue.use() with Component Plugin as its argument.

Refer the code snippet given below.

```ts
import { DiagramPlugin } from '@syncfusion/ej2-vue-diagrams';

Vue.use(DiagramPlugin);
```

Note : By Registering Component Plugin in Vue, all child directives are also globally registered.

### Using Vue.component()

Import the Component and Component Plugin from EJ2 Vue Package, register the same using the Vue.component() with name of Component from ComponentPlugin and the EJ2 Vue Component as its arguments.

Refer the code snippet given below.

```ts
import { DiagramComponent, DiagramPlugin } from '@syncfusion/ej2-vue-calendars';

Vue.component(DiagramPlugin.name, DiagramComponent);
```

> By using Vue.component(), only the EJ2 Vue Component is registered. Child directives needs to be registered separately.

## Creating Vue Sample

Add the EJ2 Vue Diagram using `<ejs-diagrams>` to the `<template>` section of the `App.vue` file in src directory, the content attribute of the Diagram component is provided as name in data option in the `<script>` section.

```
<template>
    <div id="app">
        <ejs-diagram id="diagram"  :width='width' :height='height' ></ejs-diagram>
    </div>
</template>
<script>
    import Vue from 'vue';
    import { DiagramPlugin } from '@syncfusion/ej2-vue-diagrams';
    Vue.use(DiagramPlugin);
    export default {
        name: 'app'
        data () {
            return {
                width: "100%",
                height: "350px"
            }
        }
    }
</script>
```

## Adding CSS Reference

Add Diagram component's styles as given below in `<style>` section of the `App.vue` file.

```
<style>
    @import "../node_modules/@syncfusion/ej2-vue-diagrams/styles/material.css";
</style>
```

## Running the Application

Now run the `npm run dev` command in the console, it will build your application and open in the browser.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/diagram/getting-started/initialize-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/diagram/getting-started/initialize-cs1" %}

## Module Injection

Diagram component are segregated into individual feature-wise modules. In order to use a particular feature, you need to inject its feature service in the AppModule. Please find relevant feature service name and description as follows.

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

These modules should be imported and injected into the Diagram component using `Diagram.Inject` method as follows.

```
<template>
    <div id="app">
        <ejs-diagram id="diagram"  :width='width' :height='height' ></ejs-diagram>
    </div>
</template>
<script>
import Vue from 'vue';
import { DiagramPlugin, HierarchicalTree, MindMap, RadialTree, ComplexHierarchicalTree, DataBinding, Snapping, PrintAndExport, BpmnDiagrams, SymmetricLayout, ConnectorBridging, UndoRedo, LayoutAnimation, DiagramContextMenu, ConnectorEditing } from '@syncfusion/ej2-vue-diagrams';
Vue.use(DiagramPlugin);
export default {
    name: 'app'
    data () {
            return {
                width: "100%",
                height: "350px"
            }
    },
    provide:{
        diagram: [BpmnDiagrams, ConnectorBridging, ConnectorEditing, ComplexHierarchicalTree, DataBinding,DiagramContextMenu, HierarchicalTree, LayoutAnimation, MindMap, PrintAndExport, RadialTree, Snapping, SymmetricLayout, UndoRedo]
    },
}
</script>
```

## Flow Diagram

### Create and Add Node

Create and add a `node` (JSON data) with specific position, size, label, and shape.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/diagram/getting-started/addnode-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/diagram/getting-started/addnode-cs1" %}

### Connect Nodes

Add two node to the diagram as shown in the previous example. Connect these nodes by adding a connector using the `connector` property and refer the source and target end by using the `sourceNode` and `targetNode` properties.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/diagram/getting-started/connectnode-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/diagram/getting-started/connectnode-cs1" %}

Default values for all `nodes` and `connectors` can be set using the `getNodeDefaults` and `getConnectorDefaults` properties, respectively. For example, if all nodes have the same width and height, such properties can be moved into `getNodeDefaults`.

### Complete Flow Diagram

Similarly, the required nodes and connectors can be added to form a complete flow diagram.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/diagram/getting-started/flowdiagram-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/diagram/getting-started/flowdiagram-cs1" %}

## Automatic Organization Chart

In the 'Flow Diagram' section, how to create a diagram manually was discussed. This section explains how to create and position the diagram automatically.

### Business object (Employee information)

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

```
<template>
    <div id="app">
        <ejs-diagram id="diagram" :width='width' :height='height' :dataSourceSettings='dataSourceSettings' ></ejs-diagram>
    </div>
</template>
<script>
    import Vue from 'vue';
    import { DiagramPlugin, HierarchicalTree, DataBinding } from '@syncfusion/ej2-vue-diagrams';
    import { DataManager } from "@syncfusion/ej2-data";
    Vue.use(DiagramPlugin);

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
        name: 'app',
        data () {
            return {
                width: "100%",
                height: "350px",
                dataSourceSettings: {
                    id: 'Name', parentId: 'ReportingPerson',
                    dataManager: new DataManager(localdata),
                    doBinding: (nodeModel, localdata, diagram) => {
                        nodeModel.shape = {
                            type: "Text",
                            content: (localdata).Role,
                        }
                    }
                }
            }
        }
    }
</script>
```

### Visualize employee

The following code examples indicate how to define the default appearance of nodes and connectors. The `setNodeTemplate` is used to update each node based on employee data.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/diagram/getting-started/orgchart-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/diagram/getting-started/orgchart-cs1" %}

> You can refer to our [Vue Diagram](https://www.syncfusion.com/vue-ui-components/vue-diagram) feature tour page for its groundbreaking feature representations. You can also explore our [Vue Diagram example](https://ej2.syncfusion.com/vue/demos/#/material/diagram/default-functionality.html) that shows how to render the Diagram in Vue.