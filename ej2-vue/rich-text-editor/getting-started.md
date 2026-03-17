---
layout: post
title: Getting started in Vue Rich text editor component | Syncfusion
description: Learn here all about Getting started in Syncfusion Vue Rich text editor component of Syncfusion Essential JS 2 and more.
control: Get started 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Getting Started with Vue Rich Text Editor

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

## Adding Syncfusion Rich Text Editor package

All available Essential JS 2 packages are published in the [npmjs.com](https://www.npmjs.com/search?q=ej2-vue) registry. Install the Vue Rich Text Editor component with the following command:


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

> The order of importing CSS styles should be in line with its dependency graph.

## Module Injection

To create a Rich Text Editor with enhanced functionality, inject the required modules. The following modules extend the basic capabilities of the Rich Text Editor:

* **HtmlEditor** - Inject this module to use Rich Text Editor as html editor.
* **Image** - Inject this module to use image feature in Rich Text Editor.
* **Link** - Inject this module to use link feature in Rich Text Editor.
* **QuickToolbar** - Inject this module to use quick toolbar feature for the target element.
* **Toolbar** - Inject this module to use Toolbar feature.

These modules should be injected into the providers section of root NgModule or component class.

## Adding Rich Text Editor component

Now, you can start adding Vue Rich Text Editor component in the application. For getting started, add the Rich Text Editor component in src/App.vue file using following sample.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/rich-text-editor/toolbar-cs21/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/rich-text-editor/toolbar-cs21/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/rich-text-editor/toolbar-cs21" %}

## Configure the toolbar

Customize the toolbar using the [toolbarSettings](https://ej2.syncfusion.com/vue/documentation/api/rich-text-editor/index-default#toolbarsettings) property to define specific tools. The following example demonstrates basic toolbar configuration:

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}

  <template>
    <div>
        <ejs-richtexteditor ref="rte_instance" :toolbarSettings="toolbarSettings">
        </ejs-richtexteditor>
    </div>
  </template>
  
  <script>
  import { RichTextEditorComponent,Toolbar,Link,Image,HtmlEditor } from "@syncfusion/ej2-vue-richtexteditor";
  export default {
    name: "NormalView",
    components: {
        "ejs-richtexteditor": RichTextEditorComponent
    },
    data: function() {
      return {
        toolbarSettings: {
          items: ['Bold', 'Italic', 'Underline', 'StrikeThrough','|',
                'FontName', 'FontSize', 'FontColor', 'BackgroundColor',
                'LowerCase', 'UpperCase', '|',
                'Formats', 'Alignments', 'OrderedList', 'UnorderedList',
                'Outdent', 'Indent', '|',
                'CreateLink', 'Image', '|', 'ClearFormat', 'Print',
                'SourceCode', 'FullScreen', '|', 'Undo', 'Redo']
        },
     }
    },
    provide: {
        richtexteditor: [Toolbar, Link, Image, HtmlEditor]
    },
  };
  </script>
  <style>
    @import "../node_modules/@syncfusion/ej2-base/styles/tailwind3.css";
    @import "../node_modules/@syncfusion/ej2-inputs/styles/tailwind3.css";
    @import "../node_modules/@syncfusion/ej2-lists/styles/tailwind3.css";
    @import "../node_modules/@syncfusion/ej2-popups/styles/tailwind3.css";
    @import "../node_modules/@syncfusion/ej2-buttons/styles/tailwind3.css";
    @import "../node_modules/@syncfusion/ej2-navigations/styles/tailwind3.css";
    @import "../node_modules/@syncfusion/ej2-splitbuttons/styles/tailwind3.css";
    @import "../node_modules/@syncfusion/ej2-vue-richtexteditor/styles/tailwind3.css"; 
  </style>

{% endhighlight %}
{% endtabs %}

## Run the application

Use the following command to run the application in the browser.

```bash
npm run dev
```

Output will be displayed as follows

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/rich-text-editor/toolbar-cs22/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/rich-text-editor/toolbar-cs22/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/rich-text-editor/toolbar-cs22" %}

## See also

* [Accessibility in Rich text editor](https://ej2.syncfusion.com/vue/documentation/rich-text-editor/accessibility)
* [Keyboard support in Rich text editor](https://ej2.syncfusion.com/vue/documentation/rich-text-editor/keyboard-support)
* [Globalization in Rich text editor](https://ej2.syncfusion.com/vue/documentation/rich-text-editor/globalization)

For migrating from Vue 2 to Vue 3, refer to the [`migration`](https://ej2.syncfusion.com/vue/documentation/getting-started/vue-3-vue-cli#migration-from-vue-2-to-vue-3) documentation.