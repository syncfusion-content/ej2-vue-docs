---
layout: post
title: Getting started vue 3 with Vue Treeview component | Syncfusion
description:  Checkout and learn about Getting started vue 3 with Vue Treeview component of Syncfusion Essential JS 2 and more details.
control: Getting started vue 3 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Getting Started with Syncfusion TreeView Component in Vue 3

This section explains how to use TreeView component in Vue 3 application.

## Prerequisites

[System requirements for Syncfusion Vue UI components](https://ej2.syncfusion.com/vue/documentation/system-requirements/)

## Creating Vue application using Vue CLI

The easiest way to create a Vue application is to use the [`Vue CLI`](https://github.com/vuejs/vue-cli). Vue CLI versions above [`4.5.0`](https://v3.vuejs.org/guide/migration/introduction.html#vue-cli) are mandatory for creating applications using Vue 3. Use the following command to uninstall older versions of the Vue CLI.

```bash
npm uninstall vue-cli -g
```

Use the following commands to install the latest version of Vue CLI.

```bash
npm install -g @vue/cli
npm install -g @vue/cli-init
```

Create a new project using the command below.

```bash
vue create quickstart

```

Initiating a new project prompts us to choose the type of project to be used for the current application. Select the option `Default (Vue 3)` from the menu.

![Reference](./images/vue3-terminal.png)

## Adding Syncfusion TreeView package in the application

 Syncfusion Vue packages are maintained in the [`npmjs.com`](https://www.npmjs.com/~syncfusionorg) registry. The TreeView component will be used in this example. To install it use the following command.

```bash
npm install @syncfusion/ej2-vue-navigations --save
```

## Adding CSS reference for Syncfusion Vue TreeView component

Import the needed CSS styles for the TreeView component along with dependency styles in the `<style>` section of the `src/App.vue` file as follows.

```
<style>
  @import "../node_modules/@syncfusion/ej2-base/styles/material.css";
  @import "../node_modules/@syncfusion/ej2-inputs/styles/material.css";
  @import "../node_modules/@syncfusion/ej2-buttons/styles/material.css";
  @import "../node_modules/@syncfusion/ej2-vue-navigations/styles/material.css";
</style>
```

>Note: TreeView component use other Syncfusion components too, the dependent component's CSS references need to be added for using all the TreeView functionalities.

## Adding Syncfusion Vue TreeView component in the application

You have completed all the necessary configurations needed for rendering the Syncfusion Vue component. Now, you are going to add the TreeView component using following steps.

  1.Import the TreeView component in the `<script>` section of the `src/App.vue` file.

     ```
      <script>
      import { TreeViewComponent } from '@syncfusion/ej2-vue-navigations';
      </script>

     ```
  2.Register the TreeView component in `src/App.vue` file which are used in this example.

     ```js
      import { TreeViewComponent } from '@syncfusion/ej2-vue-navigations';
        //Component registeration
      export default {
          name: "App",
          components: {
            'ejs-treeview' : TreeViewComponent
          }
      }
     ```
     In the above code snippet, you have registered TreeView component.
  3.Add the component definition in template section.

     ```
      <template>
          <ejs-treeview id='treeview' :fields='fields'></ejs-treeview>
      </template>
     ```

     Above is the TreeView component definition, with `fields` property binding definition.
  4.Declare the bound properties in the `script` section. Declare the collection `data` which is bound for the `fields` property.

     ```js
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
      export default {
        name: 'App',
        components: {
          'ejs-treeview' : TreeViewComponent
        },
        data() {
          return {
            fields: { dataSource: data, id: 'nodeId', text: 'nodeText', child: 'nodeChild' },
          };
        },
      };
     ```

  5.Summarizing the above steps, update the `src/App.vue` file with following code.

     ```
      <template>
        <ejs-treeview id='treeview' :fields='fields'></ejs-treeview>
      </template>
      <script>
      import { TreeViewComponent } from '@syncfusion/ej2-vue-navigations';

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
      export default {
        name: 'App',
        components: {
          'ejs-treeview' : TreeViewComponent
        },
        data() {
          return {
            fields: { dataSource: data, id: 'nodeId', text: 'nodeText', child: 'nodeChild' },
          };
        },
      };
      </script>
      <style>
        @import "../node_modules/@syncfusion/ej2-base/styles/material.css";
        @import "../node_modules/@syncfusion/ej2-vue-navigations/styles/material.css";
        @import "../node_modules/@syncfusion/ej2-inputs/styles/material.css";
        @import "../node_modules/@syncfusion/ej2-buttons/styles/material.css";
      </style>
     ```

## Running the application

Run the application using the following command.

```bash
npm run serve
```

Web server will be initiated, Open the quick start app in the browser at port [`localhost:8080`](http://localhost:8080/).

![Output](./images/treeview.PNG)

## CheckBox

The TreeView component allows you to check more than one node in TreeView without affecting the UI's appearance by enabling the [showCheckBox](https://ej2.syncfusion.com/vue/documentation/api/treeview#showcheckbox) property. When this property is enabled, checkbox appears before each TreeView node text.

* If one of the child nodes is not in a checked state, then the parent node will be in an intermediate state.

* If all the child nodes are in checked state, then the parent node's state will also be checked.

* If a parent node is checked, then all the child nodes' state will also be checked.

In the following example, the `showCheckBox` property is enabled.

    ```
    <template>
      <ejs-treeview id='treeview' :fields='fields' :showCheckBox='true'></ejs-treeview>
    </template>
    <script>
    import { TreeViewComponent } from '@syncfusion/ej2-vue-navigations';

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
    export default {
      name: 'App',
      components: {
        'ejs-treeview' : TreeViewComponent
      },
      data() {
        return {
          fields: { dataSource: data, id: 'nodeId', text: 'nodeText', child: 'nodeChild' },
        };
      },
    };
    </script>
    <style>
      @import "../node_modules/@syncfusion/ej2-base/styles/material.css";
      @import "../node_modules/@syncfusion/ej2-vue-navigations/styles/material.css";
      @import "../node_modules/@syncfusion/ej2-inputs/styles/material.css";
      @import "../node_modules/@syncfusion/ej2-buttons/styles/material.css";
    </style>
    ```

You can get the following output while using above code blocks in TreeView component.

![Output](./images/treeview-checkbox.PNG)
