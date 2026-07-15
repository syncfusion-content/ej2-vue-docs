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

The Syncfusion Vue Markdown Editor is a web-based editor that enables users to create, edit, and format Markdown content with features such as table support and structured content formatting. This article provides a step-by-step guide for setting up a [Vite](https://vitejs.dev/) project with a TypeScript environment and integrating the Syncfusion Vue Markdown Editor component using the [Composition API](https://vuejs.org/guide/introduction.html#composition-api).

To get started quickly with the Vue Markdown Editor, refer to this video tutorial:

{% youtube "https://www.youtube.com/watch?v=UfzKsdkxGpM" %}

## Prerequisites

This guide uses Vite as the bundler and development environment. Install Node.js `24.13.0` or higher before proceeding. For detailed information about Vite’s capabilities and configuration options, refer to the [Vite documentation](https://vitejs.dev/).

## Create a Vue Application

Run the following commands to set up a Vue application:

```bash
npm create vite@latest my-app -- --template vue-ts
```
This command will prompt you to install the required packages and start the application. Select the options as shown below.

![Markdown Editor Initial setup](../rich-text-editor/images/Initial-setup.png)

As Syncfusion packages are not installed yet, currently, the `No` option will be selected. Then, navigate to the project directory and install the dependencies using the following commands:

```
cd my-app
npm install
```

## Add Syncfusion Markdown Editor packages

Syncfusion packages are available at [npmjs.com](https://www.npmjs.com/search?q=ej2-vue). To use Vue components, install the required npm package.

```bash
npm install @syncfusion/ej2-vue-richtexteditor
```

## Adding CSS reference

Syncfusion provides multiple themes for the Rich Text Editor component. For a complete list of available themes, refer to the [themes packages](https://ej2.syncfusion.com/vue/documentation/appearance/theme#theme-packages). 

To apply the [Tailwind 3](https://www.npmjs.com/package/@syncfusion/ej2-tailwind3-theme) theme, install the corresponding theme package by using the following command:

```bash
npm install @syncfusion/ej2-tailwind3-theme
```

The installed theme package includes an `index.css` file that automatically imports all the required dependency styles. Import the following stylesheet into `<style>` section of `src/App.vue`.

```css
@import '../node_modules/@syncfusion/ej2-tailwind3-theme/styles/rich-text-editor/index.css';
```

I> To apply the application-specific styles correctly remove all the default styles from **src/style.css**.

## Module injection

The following modules provide the basic features of the Markdown Editor.

* `Toolbar` - Inject this module to use Toolbar feature.
* `Link` - Inject this module to use link feature in Markdown Editor.
* `Image`- Inject this module to use image feature in Markdown Editor.
* `MarkdownEditor` - Inject this module to use Rich Text Editor as markdown editor.

I> Additional feature modules are available [here](https://ej2.syncfusion.com/vue/documentation/rich-text-editor/module).

## Adding Markdown Editor component

Now, you can start adding Vue Markdown Editor component in the application. For getting started, add the Markdown Editor component in **src/App.vue** file using following sample.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/markdown-editor/getting-started-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/markdown-editor/getting-started-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
## Run the project

To run the project, use the following command:

```bash
npm run dev
```

## See Also

* [How to change the editor type](./editor-modes)
* [How to render the iframe](./iframe)
* [How to render the toolbar in inline mode](./inline-mode)
* [Accessibility in Rich text editor](https://ej2.syncfusion.com/vue/documentation/rich-text-editor/accessibility)
* [Keyboard support in Rich text editor](https://ej2.syncfusion.com/vue/documentation/rich-text-editor/keyboard-support)
* [Globalization in Rich text editor](https://ej2.syncfusion.com/vue/documentation/rich-text-editor/globalization)