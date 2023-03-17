---
layout: post
title: Getting started with Vue Treeview component | Syncfusion
description:  Checkout and learn about Getting started with Vue Treeview component of Syncfusion Essential JS 2 and more details.
control: Getting started 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Get Started with Vue CLI

The following section explains the required steps to build the [Vue TreeView](https://www.syncfusion.com/vue-ui-components/vue-tree-view) component with its basic usage in step by step procedure.

## Prerequisites

[System requirements for Syncfusion Vue UI components](https://ej2.syncfusion.com/vue/documentation/system-requirements/)

## Installation and configuration

You can use [`Vue CLI`](https://github.com/vuejs/vue-cli) to setup your vue applications.

To install Vue CLI use the following command.

```bash
npm install -g @vue/cli
```

Start a new project using below Vue CLI command.

```bash
npm install -g @vue/cli-init

vue init webpack-simple quickstart

cd quickstart
npm install

```

## Adding syncfusion packages

All the available Essential JS 2 packages are published in [`npmjs.com`](https://www.npmjs.com/~syncfusionorg) public registry.

You can choose the component that you want to install.

To install TreeView component, use the following command

```bash
npm install @syncfusion/ej2-vue-navigations --save
```

## Registering Vue Component

For Registering Vue Component two ways are available. They are as follows.
* Vue.use()
* Vue.component()

### Using Vue.use()

Import the TreeView Component Plugin from the EJ2 Vue Package and register the same using Vue.use() with TreeView Component Plugin as its argument.

Refer the code snippet given below.

```ts
import { TreeViewPlugin } from "@syncfusion/ej2-vue-navigations";

Vue.use(TreeViewPlugin);
```

Note : By Registering Component Plugin in Vue, all child directives are also globally registered.

### Using Vue.component()

Import the TreeView Component and TreeView Component Plugin from EJ2 Vue Package, register the same using the Vue.component() with name of TreeView Component from TreeView Component Plugin and the EJ2 Vue Component as its arguments.

Refer the code snippet given below.

```ts
import { TreeViewComponent, TreeViewPlugin } from '@syncfusion/ej2-vue-navigations';

Vue.component(TreeViewPlugin.name, TreeViewComponent);
```

Note: By using Vue.component(), only the EJ2 Vue Component is registered. Child directives needs to be registered separately.

## Adding TreeView component

Add the EJ2 Vue TreeView using `<ejs-treeview>` to the `<template>` section of the `App.vue` file in src directory, the content attribute of the TreeView component is provided as name in data option in the `<script>` section.

```
<template>
    <div class="control_wrapper">
        <ejs-treeview id='treeview'></ejs-treeview>
    </div>
</template>
<script>
import Vue from 'vue';
import { TreeViewPlugin } from "@syncfusion/ej2-vue-navigations";
Vue.use(TreeViewPlugin);

export default Vue.extend({
  data: function() {
    return {

    };
  }
});

</script>
```

## Adding CSS Reference

Add TreeView and its dependency component's styles as given below in `<style>` section of the `App.vue` file.

```
<style>
@import "../node_modules/@syncfusion/ej2-base/styles/material.css";
@import "../node_modules/@syncfusion/ej2-vue-navigations/styles/material.css";
@import "../node_modules/@syncfusion/ej2-inputs/styles/material.css";
@import "../node_modules/@syncfusion/ej2-buttons/styles/material.css";
</style>
```

>Note: If you want to refer the combined component styles, please make use of our [`CRG`](https://ej2crg.azurewebsites.net/) (Custom Resource Generator) in your application.

## Binding data source

TreeView can load data either from local data sources or remote data services. This can be done using the `dataSource` property that is a member of the [fields](https://ej2.syncfusion.com/vue/documentation/api/treeview#fields) property. The dataSource property supports array of JavaScript objects and `DataManager`. Here, an array of JSON values is passed to the TreeView component.

```
<template>
    <div class="control_wrapper">
       <ejs-treeview id='treeview' :fields='fields'></ejs-treeview>
    </div>
</template>
<script>
import Vue from 'vue';
import { TreeViewPlugin } from "@syncfusion/ej2-vue-navigations";
Vue.use(TreeViewPlugin);

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
export default Vue.extend({
  data: function() {
    return {
    fields: { dataSource: data, id: 'nodeId', text: 'nodeText', child: 'nodeChild' },
    };
  }
});
</script>
```

## Run the application

After completing the configuration required to render a basic TreeView, run the following command to display the output in your default browser.

```
npm run dev
```

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/treeview/getting-started-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/treeview/getting-started-cs1" %}

> You can also explore our [Vue TreeView example](https://ej2.syncfusion.com/vue/demos/#/material/treeview/default.html) to knows how to present and manipulate data.