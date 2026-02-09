---
layout: post
title: Getting started with Vue Markdown Editor component | Syncfusion
description:  Checkout and learn about Getting started with Vue Markdown Editor component of Syncfusion Essential JS 2 and more details.
control: Getting started 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Getting Started with the Vue Markdown Editor Component in Vue

This article provides a step-by-step guide for setting up a [Vite](https://vitejs.dev/) project with a TypeScript environment and integrating the Syncfusion Vue Rich Text Editor component using the [Composition API](https://vuejs.org/guide/introduction.html#composition-api).

## Prerequisites

[System requirements for Syncfusion Vue UI components](https://ej2.syncfusion.com/vue/documentation/system-requirements)

## Create a Vue Application

Run the following commands to set up a Vue application:

```bash
npm create vite@7 my-app
```
To set-up a Vue application , run the following command.

```bash
npm create vite@7 my-vue-app -- --template vue-ts
cd my-app
npm run dev
```

## Add Syncfusion Markdown Editor packages

Syncfusion packages are available at [npmjs.com](https://www.npmjs.com/search?q=ej2-vue). To use Vue components, install the required npm package.

```bash
npm install @syncfusion/ej2-vue-richtexteditor
```

## Adding CSS reference

The following CSS files are available in ../node_modules/@syncfusion package folder. This can be referenced in the `<style>` section of **src/App.vue** file using the following code.

```css
@import '../node_modules/@syncfusion/ej2-base/styles/tailwind3.css';
@import '../node_modules/@syncfusion/ej2-buttons/styles/tailwind3.css';
@import '../node_modules/@syncfusion/ej2-splitbuttons/styles/tailwind3.css';
@import '../node_modules/@syncfusion/ej2-inputs/styles/tailwind3.css';
@import '../node_modules/@syncfusion/ej2-lists/styles/tailwind3.css';
@import '../node_modules/@syncfusion/ej2-navigations/styles/tailwind3.css';
@import '../node_modules/@syncfusion/ej2-popups/styles/tailwind3.css';
@import '../node_modules/@syncfusion/ej2-richtexteditor/styles/tailwind3.css';
```

## Module injection

To create Markdown Editor with additional features, inject the required modules. The following modules are used to extend Markdown Editor's basic functionality.

* `Toolbar` - Inject this module to use Toolbar feature.
* `Link` - Inject this module to use link feature in Markdown Editor.
* `Image`- Inject this module to use image feature in Markdown Editor.
* `MarkdownEditor` - Inject this module to use Rich Text Editor as markdown editor.

These modules should be injected into the Markdown Editor through `provide` option.

## Adding Markdown Editor component

Markdown Editor can be initialized on div element.

{% tabs %}
{% highlight html tabtitle="~/src/App.vue" %}
{% include code-snippet/markdown-editor/getting-started-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="~/src/App.vue" %}
{% include code-snippet/markdown-editor/getting-started-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/markdown-editor/getting-started-cs1" %}

## Configure the toolbar

Configure the toolbar with the tools using `items` field of the [toolbarSettings](https://ej2.syncfusion.com/vue/documentation/api/rich-text-editor/toolbarSettings#toolbarsettings) property as your application requires.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}

<template>
    <ejs-richtexteditor
      ref="editor"
      editorMode="Markdown"
      :value="rteValue"
      :toolbarSettings="toolbarSettings"
    ></ejs-richtexteditor>
</template>

<script setup>
import { provide } from "vue";
import { RichTextEditorComponent as EjsRichtexteditor, Toolbar, Link, Table, Image, MarkdownEditor } from '@syncfusion/ej2-vue-richtexteditor';

const toolbarSettings = { items: [ 'Bold', 'Italic', 'StrikeThrough', 'InlineCode', 'SuperScript', 'SubScript', '|', 'Formats', 'Blockquote', '|', 'OrderedList', 'UnorderedList', 'CreateLink', 'Image', 'CreateTable', '|', 'Undo', 'Redo'] };

const rteValue=`In Rich Text Editor, you click the toolbar buttons to format the words and the changes are visible immediately. Markdown is not like that. When you format the word in Markdown format, you need to add Markdown syntax to the word to indicate which words and phrases should look different from each other. Rich Text Editor supports markdown editing when the editorMode set as **markdown** and using both *keyboard interaction* and *toolbar action*, you can apply the formatting to text. You can add our own custom formation syntax for the Markdown formation. The third-party library <b>Marked</b> is used in this sample to convert markdown into HTML content.`;
provide('richtexteditor', [Toolbar, Link, Image, Table, MarkdownEditor]);
</script>

<style>
@import "../node_modules/@syncfusion/ej2-base/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-inputs/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-lists/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-popups/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-buttons/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-navigations/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-splitbuttons/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-richtexteditor/styles/tailwind3.css";
</style>

{% endhighlight %}
{% endtabs %}


> `|` and `-` can insert a vertical and horizontal separator lines in the toolbar.

## Run the project

To run the project, use the following command:

```bash
npm run dev
```
Output will be displayed as follows

{% tabs %}
{% highlight html tabtitle="~/src/App.vue" %}
{% include code-snippet/markdown-editor/getting-started-cs2/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="~/src/App.vue" %}
{% include code-snippet/markdown-editor/getting-started-cs2/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/markdown-editor/getting-started-cs2" %}

## See Also

* [How to change the editor type](./editor-modes)
* [How to render the iframe](./iframe)
* [How to render the toolbar in inline mode](./inline-mode)
* [Accessibility in Rich text editor](https://ej2.syncfusion.com/vue/documentation/rich-text-editor/accessibility)
* [Keyboard support in Rich text editor](https://ej2.syncfusion.com/vue/documentation/rich-text-editor/keyboard-support)
* [Globalization in Rich text editor](https://ej2.syncfusion.com/vue/documentation/rich-text-editor/globalization)