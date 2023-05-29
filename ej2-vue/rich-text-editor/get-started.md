---
layout: post
title: Get started in Vue Rich text editor component | Syncfusion
description: Learn here all about Get started in Syncfusion Vue Rich text editor component of Syncfusion Essential JS 2 and more.
control: Get started 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Get started in Vue Rich text editor component

This section explains how to use the Syncfusion Vue Rich Text Editor component in Vue 3 application.

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
cd quickstart

```

Initiating a new project prompts us to choose the type of project to be used for the current application. Select the option `Default (Vue 3 Preview)` from the menu.

![Reference](./images/vue3-terminal.png)

## Adding Syncfusion Rich Text Editor package in the application

All the available Essential JS 2 packages are published in [`npmjs.com`](https://www.npmjs.com/~syncfusionorg) registry.

Install the `Rich Text Editor` component by using the below npm command.

```bash
npm install @syncfusion/ej2-vue-richtexteditor --save
```

## Adding CSS reference for Syncfusion Vue Rich Text Editor component

Import the needed CSS styles for the Rich Text Editor component along with dependency styles in the `<script>` section of the `src/App.vue` file as follows.

```js
<style>
@import "../node_modules/@syncfusion/ej2-base/styles/material.css";
@import "../node_modules/@syncfusion/ej2-inputs/styles/material.css";
@import "../node_modules/@syncfusion/ej2-lists/styles/material.css";
@import "../node_modules/@syncfusion/ej2-popups/styles/material.css";
@import "../node_modules/@syncfusion/ej2-buttons/styles/material.css";
@import "../node_modules/@syncfusion/ej2-navigations/styles/material.css";
@import "../node_modules/@syncfusion/ej2-splitbuttons/styles/material.css";
@import "../node_modules/@syncfusion/ej2-vue-richtexteditor/styles/material.css";
</style>
```

## Adding Syncfusion Vue 3 Rich Text Editor component in the application

You have completed all the necessary configurations needed for rendering the Syncfusion Vue 3 component. Now, you are going to add the Rich Text Editor component using the following steps.

* Import the Rich Text Editor component in the `<script>` section of the `src/App.vue` file.

     ```
     <script>
        import { RichTextEditorComponent, Toolbar, Link, Image, HtmlEditor, Table } from "@syncfusion/ej2-vue-richtexteditor";
      </script>
     ```

* Register the Rich Text Editor component.

```javascript
        import { RichTextEditorComponent, Toolbar, Link, Image, HtmlEditor, Table } from "@syncfusion/ej2-vue-richtexteditor";
        //Component registration
        export default {
            name: "App",
            components: {
                "ejs-richtexteditor": RichTextEditorComponent,
            }
        }
```

* Add the component definition in template section.

```

    <template>
    <div>
        <div class="control-section">
        <div class="sample-container">
            <div class="default-section">
            <div id="defaultRTE">
                <ejs-richtexteditor id="default" ref="rteInstance">
                <p>The Rich Text Editor component is a WYSIWYG ("what you see is what you get") editor that provides the best user experience to create and update the content. Users can format their content using standard toolbar commands.</p>
                </ejs-richtexteditor>
            </div>
            </div>
        </div>
        </div>
    </div>
    </template>
```

* Summarizing the above steps, update the `src/App.vue` file with the following code.

```

<template>
    <div>
        <div class="control-section">
        <div class="sample-container">
            <div class="default-section">
            <div id="defaultRTE">
                <ejs-richtexteditor id="default" ref="rteInstance">
                <p>The Rich Text Editor component is a WYSIWYG ("what you see is what you get") editor that provides the best user experience to create and update the content. Users can format their content using standard toolbar commands.</p>
                </ejs-richtexteditor>
            </div>
            </div>
        </div>
        </div>
    </div>
</template>
<script>
import { RichTextEditorComponent, Toolbar, Link, Image, HtmlEditor, Table } from "@syncfusion/ej2-vue-richtexteditor";

export default {
  name: "App",
  components: {
    "ejs-richtexteditor": RichTextEditorComponent,
  },

  data: function () {
    return {};
  },
  methods: {},
  provide: {
    richtexteditor: [Toolbar, Link, Image, HtmlEditor, Table],
  },
};
</script>

```

## Running the application

Run the application using the following command.

```bash

npm run serve

```

Web server will be initiated. Open the quick start app in the browser at port `localhost:8080`.

![Rich Text Editor in Vue 3](./images/rte-output.png)

## Add content using valueTemplate property in Vue 3

Rich Text Editor content can be added using valueTemplate property as given below

```

<template>
  <div>
    <div class="control-section">
      <div class="sample-container">
        <div class="default-section">
          <div id="defaultRTE">
            <ejs-richtexteditor
              id="default"
              ref="rteInstance"
              :valueTemplate="vueTemplate">
            </ejs-richtexteditor>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import {
  RichTextEditorComponent,
  Toolbar,
  Link,
  Image,
  HtmlEditor,
  Table,
} from "@syncfusion/ej2-vue-richtexteditor";

export default {
  name: "App",
  components: {
    "ejs-richtexteditor": RichTextEditorComponent,
  },

  data: function () {
    return {
      vueTemplate:
        '<p>The Rich Text Editor component is a WYSIWYG ("what you see is what you get") editor that provides the best user experience to create and update the content. Users can format their content using standard toolbar commands.</p>',
    };
  },
  methods: {},
  provide: {
    richtexteditor: [Toolbar, Link, Image, HtmlEditor, Table],
  },
};
</script>

```
