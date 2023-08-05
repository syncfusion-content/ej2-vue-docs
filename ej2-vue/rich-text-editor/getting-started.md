---
layout: post
title: Getting started with Vue Rich text editor component | Syncfusion
description:  Checkout and learn about Getting started with Vue Rich text editor component of Syncfusion Essential JS 2 and more details.
control: Getting started 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Getting Started with the Vue Rich text editor Component in Vue 2

This article provides a step-by-step guide for setting up a Vue 2 project using [Vue-CLI](https://cli.vuejs.org/) and integrating the Syncfusion Vue Rich text editor component

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

Once the `quickstart` project is set up with default settings, proceed to add Syncfusion components to the project.

## Add Syncfusion Vue packages

Syncfusion packages are available at [npmjs.com](https://www.npmjs.com/search?q=ej2-vue). To use Vue components, install the required npm package.

This article uses the [Vue Rich text editor component](https://www.syncfusion.com/vue-components/vue-wysiwyg-rich-text-editor) as an example. Install the `@syncfusion/ej2-vue-richtexteditor` package by running the following command:

```bash
npm install @syncfusion/ej2-vue-richtexteditor --save
```
or

```bash
yarn add @syncfusion/ej2-vue-richtexteditor
```

## Import Syncfusion CSS styles

You can import themes for the Syncfusion Vue component in various ways, such as using CSS or SASS styles from npm packages, CDN, [CRG](https://ej2.syncfusion.com/javascript/documentation/common/custom-resource-generator/) and [Theme Studio](https://ej2.syncfusion.com/vue/documentation/appearance/theme-studio/). Refer to [themes topic](https://ej2.syncfusion.com/vue/documentation/appearance/theme/) to know more about built-in themes and different ways to refer to themes in a Vue project.

In this article, the `Material` theme is applied using CSS styles, which are available in installed packages. The necessary `Material` CSS styles for the Rich text editor component and its dependents were imported into the `<style>` section of **src/App.vue** file.

{% tabs %}
{% highlight html tabtitle="~/src/App.vue" %}

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

{% endhighlight %}
{% endtabs %}

## Add Syncfusion Vue component

Follow the below steps to add the Vue Rich text editor component using:

1\. First, import and register the Rich text editor component in the `script` section of the **src/App.vue** file.

{% tabs %}
{% highlight html tabtitle="~/src/App.vue" %}

<script>
import { RichTextEditorComponent, Toolbar, Link, Image, Count, HtmlEditor, QuickToolbar } from '@syncfusion/ej2-vue-richtexteditor';

export default {
    components: {
        'ejs-richtexteditor': RichTextEditorComponent
    }
}
</script>

{% endhighlight %}
{% endtabs %}

2\. In the `template` section, define the Rich text editor component with the [height](https://ej2.syncfusion.com/vue/documentation/api/rich-text-editor#height) property.

{% tabs %}
{% highlight html tabtitle="~/src/App.vue" %}

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

{% endhighlight %}
{% endtabs %}


### Initialize from `<div>` element

Rich Text Editor can be initialized on div element.

{% tabs %}
{% highlight html tabtitle="~/src/App.vue" %}
{% include code-snippet/rich-text-editor/getting-started-cs5/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/rich-text-editor/getting-started-cs5" %}

### Initialize from `<IFRAME>` element

The Rich Text Editor’s content is placed in an iframe and isolated from the rest of the page.

Initialize the Rich Text Editor on div element and set the `enable` field of `iframeSettings` property as true.

{% tabs %}
{% highlight html tabtitle="~/src/App.vue" %}
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
{% highlight html tabtitle="~/src/App.vue" %}
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
{% highlight html tabtitle="~/src/App.vue" %}
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

## Run the project

To run the project, use the following command:

```bash
npm run serve
```

or

```bash
yarn run serve
```

{% tabs %}
{% highlight html tabtitle="~/src/App.vue" %}
{% include code-snippet/rich-text-editor/getting-started-cs9/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/rich-text-editor/getting-started-cs9" %}

## Add content using valueTemplate property

Rich Text Editor content can be added using valueTemplate property as given below

{% tabs %}
{% highlight html tabtitle="~/src/App.vue" %}
{% include code-snippet/rich-text-editor/getting-started-cs10/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/rich-text-editor/getting-started-cs10" %}

## See Also

* [How to change the editor type](./editor-modes/)
* [How to render the iframe](./iframe/)
* [How to render the toolbar in inline mode](./inline-mode/)

> You can refer to our [Vue Rich Text Editor](https://www.syncfusion.com/vue-ui-components/vue-wysiwyg-rich-text-editor) feature tour page for its groundbreaking feature representations. You can also explore our [Vue Rich Text Editor example](https://ej2.syncfusion.com/vue/demos/#/material/rich-text-editor/default.html) that shows how to render and configure the rich text editor tools.