---
layout: post
title: Getting started with Vue Markdown Editor component | Syncfusion
description:  Checkout and learn about Getting started with Vue Markdown Editor component of Syncfusion Essential JS 2 and more details.
control: Getting started 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Getting Started with the Vue Markdown Editor Component in Vue 2

This article provides a step-by-step guide for setting up a Vue 2 project using [Vue-CLI](https://cli.vuejs.org/) and integrating the Syncfusion Vue Markdown Editor component

## Prerequisites

[System requirements for Syncfusion Vue UI components](https://ej2.syncfusion.com/vue/documentation/system-requirements)

## Dependencies

The following list of dependencies are required to use the Markdown Editor.

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

![Vue 2 project](./images/vue2-terminal.png)

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

In this article, the `Material` theme is applied using CSS styles, which are available in installed packages. The necessary `Material` CSS styles for the Markdown Editor component and its dependents were imported into the `<style>` section of **src/App.vue** file.

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
@import "../node_modules/@syncfusion/ej2-filemanager/styles/material.css";
@import "../node_modules/@syncfusion/ej2-vue-richtexteditor/styles/material.css";
</style>

{% endhighlight %}
{% endtabs %}

## Module injection

To create Markdown Editor with additional features, inject the required modules. The following modules are used to extend Markdown Editor's basic functionality.

* `Toolbar` - Inject this module to use Toolbar feature.
* `Link` - Inject this module to use link feature in Markdown Editor.
* `Image`- Inject this module to use image feature in Markdown Editor.
* `MarkdownEditor` - Inject this module to use Rich Text Editor as markdown editor.

These modules should be injected into the Markdown Editor through `provide` option.

> Additional feature modules are available [here](./module.md)

## Add Syncfusion Vue component

Follow the below steps to add the Vue Markdown editor component using:

1\. First, import and register the Rich text editor component in the `script` section of the **src/App.vue** file.

{% tabs %}
{% highlight html tabtitle="~/src/App.vue" %}

<script>
import { RichTextEditorComponent, Toolbar, Link, Image, MarkdownEditor } from '@syncfusion/ej2-vue-richtexteditor';

export default {
    components: {
        'ejs-richtexteditor': RichTextEditorComponent
    }
}
</script>

{% endhighlight %}
{% endtabs %}

2\. In the `template` section, define the Markdown Editor component with the [height](https://ej2.syncfusion.com/vue/documentation/api/rich-text-editor#height) property.

{% tabs %}
{% highlight html tabtitle="~/src/App.vue" %}

<template>
    <ejs-richtexteditor ref="markdown-editor" :height="400" editorMode="Markdown" :value="rteValue"> 
    </ejs-richtexteditor>
</template>

<script>
import { RichTextEditorComponent, Toolbar, Link, Image, MarkdownEditor } from "@syncfusion/ej2-vue-richtexteditor";

export default {
    name: "App",
    components: {
    "ejs-richtexteditor":RichTextEditorComponent
    },
    data: function() {
        return {
            rteValue: `In Rich Text Editor, you click the toolbar buttons to format the words and the changes are visible immediately. Markdown is not like that. When you format the word in Markdown format, you need to add Markdown syntax to the word to indicate which words and phrases should look different from each other. Rich Text Editor supports markdown editing when the editorMode set as **markdown** and using both *keyboard interaction* and *toolbar action*, you can apply the formatting to text. You can add our own custom formation syntax for the Markdown formation, [sample link](https://ej2.syncfusion.com/home/). The third-party library <b>Marked</b> is used in this sample to convert markdown into HTML content.`,
        };
    },
    provide:{
        richtexteditor:[Toolbar, Link, Image, MarkdownEditor]
    }
}
</script>

{% endhighlight %}
{% endtabs %}

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

Configure the toolbar with the tools using `items` field of the [toolbarSettings](https://ej2.syncfusion.com/vue/documentation/api/rich-text-editor/toolbarSettings/#toolbarsettings) property as your application requires.

{% tabs %}
{% highlight html tabtitle="~/src/App.vue" %}
{% include code-snippet/markdown-editor/getting-started-cs2/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="~/src/App.vue" %}
{% include code-snippet/markdown-editor/getting-started-cs2/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/markdown-editor/getting-started-cs2" %}

> `|` and `-` can insert a vertical and horizontal separator lines in the toolbar.

## Run the project

To run the project, use the following command:

```bash
npm run serve
```

or

```bash
yarn run serve
```

## See Also

* [How to change the editor type](./editor-modes)
* [How to render the iframe](./iframe)
* [How to render the toolbar in inline mode](./inline-mode)
* [Accessibility in Rich text editor](https://ej2.syncfusion.com/vue/documentation/rich-text-editor/accessibility)
* [Keyboard support in Rich text editor](https://ej2.syncfusion.com/vue/documentation/rich-text-editor/keyboard-support)
* [Globalization in Rich text editor](https://ej2.syncfusion.com/vue/documentation/rich-text-editor/globalization)

> You can refer to our [Vue Rich Text Editor](https://www.syncfusion.com/vue-ui-components/vue-wysiwyg-rich-text-editor) feature tour page for its groundbreaking feature representations. You can also explore our [Vue Markdown Editor example](https://ej2.syncfusion.com/vue/demos/#/bootstrap5/mark-down-editor/overview.html) that shows how to render and configure the rich text editor tools.