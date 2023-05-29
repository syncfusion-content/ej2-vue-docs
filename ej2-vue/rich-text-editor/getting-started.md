---
layout: post
title: Getting started with Vue Rich text editor component | Syncfusion
description:  Checkout and learn about Getting started with Vue Rich text editor component of Syncfusion Essential JS 2 and more details.
control: Getting started 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Getting started

This section explains the steps to create a simple **RichTextEditor** and demonstrates the basic usage of the Rich Text Editor component in a Vue environment.

## Prerequisites

[System requirements for Syncfusion Vue UI components](https://ej2.syncfusion.com/vue/documentation/system-requirements/)

## Dependencies

The following list of dependencies are required to use the Rich Text Editor.

```js
|-- @syncfusion/ej2-vue-richtexteditor
    |-- @syncfusion/ej2
    |-- @syncfusion/ej2-base
    |-- @syncfusion/ej2-data
    |-- @syncfusion/ej2-buttons
    |-- @syncfusion/ej2-lists
    |-- @syncfusion/ej2-inputs
    |-- @syncfusion/ej2-popups
    |-- @syncfusion/ej2-splitbuttons
    |-- @syncfusion/ej2-navigations
    |-- @syncfusion/ej2-filemanager
    |-- @syncfusion/ej2-vue-base

```

## Installation and configuration

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

Install Syncfusion `RichTextEditor` packages using below command. Also need to install dependency packages as mentioned at top of this documentation.

```bash
npm install @syncfusion/ej2-vue-richtexteditor --save
```

## Registering Rich Text Editor component using `Vue.use()`

Import the Rich Text Editor Plugin from the Essential JS 2 Vue package and register the same using `Vue.use()` with Component Plugin as its argument.

Refer to the code snippet given below.

```ts
import Vue from 'vue';
import { RichTextEditorPlugin } from '@syncfusion/ej2-vue-richtexteditor';

Vue.use(RichTextEditorPlugin);

export default {}
```

> By registering component plugin in Vue, all child directives are also globally registered. We can also use `Vue.Component()` to register `RichTextEditor`. Refer [here](../base/getting-started/#registering-vue-component) to know more about component registration.

## Adding CSS Reference

Add Rich Text Editor component's styles as given below in `<style>` section of the `App.vue` file.

```
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

## Adding Rich Text Editor component

Initialize the EJ2 Vue Rich Text Editor by adding `<ejs-richtexteditor>` into the `<template>` section of the `App.vue` file.

```
<template>
    <ejs-richtexteditor ref="defaultRTE" :height="400">
        <p>The Rich Text Editor component is WYSIWYG ("what you see is what you get") editor that provides the best user experience to create and update the content.Users can format their content using standard toolbar commands.</p>
        <p><b>Key features:</b></p>
        <ul>
            <li><p>Provides IFRAME and DIV modes</p></li>
            <li><p>Capable of handling markdown editing.</p></li>
            <li><p>Contains a modular library to load the necessary functionality on demand.</p></li>
            <li><p>Provides a fully customizable toolbar.</p></li>
            <li><p>Provides HTML view to edit the source directly for developers.</p></li>
            <li><p>Supports third-party library integration.</p></li>
            <li><p>Allows preview of modified content before saving it.</p></li>
            <li><p>Handles images, hyperlinks, video, hyperlinks, uploads, etc.</p></li>
            <li><p>Contains undo/redo manager.</p></li>
            <li><p>Creates bulleted and numbered lists.</p></li>
        </ul>
    </ejs-richtexteditor>
</template>

<script>
    import Vue from "vue";
    import { RichTextEditorPlugin, Toolbar, Link, Image, Count, HtmlEditor, QuickToolbar } from "@syncfusion/ej2-vue-richtexteditor";

    Vue.use(RichTextEditorPlugin);

    export default {
        provide: {
            richtexteditor:[Toolbar, Link, Image, Count, HtmlEditor, QuickToolbar]
        }
    }
</script>

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

### Initialize from `<div>` element

Rich Text Editor can be initialized on div element.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/rich-text-editor/getting-started-cs5/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/rich-text-editor/getting-started-cs5" %}

### Initialize from `<IFRAME>` element

The Rich Text Editor’s content is placed in an iframe and isolated from the rest of the page.

Initialize the Rich Text Editor on div element and set the `enable` field of `iframeSettings` property as true.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/rich-text-editor/getting-started-cs6/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/rich-text-editor/getting-started-cs6" %}

## Module injection

To create Rich Text Editor with additional features, inject the required modules. The following modules are used to extend Rich Text Editor's basic functionality.

* `Toolbar` - Inject this module to use Toolbar feature.
* `Link` - Inject this module to use link feature in Rich Text Editor.
* `Image`- Inject this module to use image feature in Rich Text Editor.
* `Table`- Inject this module to use table feature in Rich Text Editor.
* `Count` - Inject this module to use character count in Rich Text Editor.
* `HtmlEditor` - Inject this module to use Rich Text Editor as html editor.
* `MarkdownEditor`-Inject this module to use Rich Text Editor as markdown editor.
* `QuickToolbar` - Inject this module to use quick toolbar feature for the target element.
* `Resize` - Inject this module to use resize feature in Rich Text Editor.
* `FileManager` - Inject this module to use file browser feature in Rich Text Editor.
* `PasteCleanup` - Inject this module to use paste cleanup feature in Rich Text Editor.

These modules should be injected into the Rich Text Editor through `provide` option.

## Configure the toolbar

Configure the toolbar with the tools using items field of the [`toolbarSettings`](https://ej2.syncfusion.com/vue/documentation/api/rich-text-editor/toolbarSettings/#toolbarsettings) property as your application requires.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/rich-text-editor/getting-started-cs7/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/rich-text-editor/getting-started-cs7" %}

> `|` and `-` can insert a vertical and horizontal separator lines in the toolbar.

## Insert images and links

The [`image`](https://ej2.syncfusion.com/vue/documentation/rich-text-editor/image) module inserts an image into Rich Text Editor’s content area, and the [`link`](https://ej2.syncfusion.com/vue/documentation/rich-text-editor/link) module links external resources such as website URLs, to selected text in the Rich Text Editor’s content, respectively.

The link inject module adds a link icon to the toolbar and the image inject module adds an image icon to the toolbar.

Specifies the items to be rendered in the quick toolbar based on the target element such image, link and text element. The quick toolbar opens to customize the element by clicking the target element.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/rich-text-editor/getting-started-cs8/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/rich-text-editor/getting-started-cs8" %}

## Retrieve the formatted content

To retrieve the editor contents, use [`value`](https://ej2.syncfusion.com/vue/documentation/api/rich-text-editor/#value) property of Rich Text Editor.

```ts
  var rteValue = this.$refs.rteObj.ej2Instances.value;
```

Or, you can use the public method, [`getHtml`](https://ej2.syncfusion.com/vue/documentation/api/rich-text-editor/#gethtml) to retrieve the Rich Text Editor content.

```ts
  var rteValue = this.$refs.rteObj.ej2Instances.getHtml();
```

To fetch the Rich Text Editor's text content, use [`getText`](https://ej2.syncfusion.com/vue/documentation/api/rich-text-editor/#gettext) method of Rich Text Editor.

```ts
  var rteValue = this.$refs.rteObj.ej2Instances.getText();
```

## Run the Application

Now run the `npm run dev` command in the console, it will build your application and open in the browser.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/rich-text-editor/getting-started-cs9/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/rich-text-editor/getting-started-cs9" %}

## Add content using valueTemplate property

Rich Text Editor content can be added using valueTemplate property as given below

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/rich-text-editor/getting-started-cs10/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/rich-text-editor/getting-started-cs10" %}

## See Also

* [How to change the editor type](./editor-modes/)
* [How to render the iframe](./iframe/)
* [How to render the toolbar in inline mode](./inline-mode/)

> You can refer to our [Vue Rich Text Editor](https://www.syncfusion.com/vue-ui-components/vue-wysiwyg-rich-text-editor) feature tour page for its groundbreaking feature representations. You can also explore our [Vue Rich Text Editor example](https://ej2.syncfusion.com/vue/demos/#/material/rich-text-editor/default.html) that shows how to render and configure the rich text editor tools.