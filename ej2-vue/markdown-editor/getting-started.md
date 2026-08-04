---
layout: post
title: Getting started with Vue Markdown Editor component | Syncfusion
description:  Check out and learn about Getting started with Vue Markdown Editor component of Syncfusion Essential JS 2 and more details.
control: Getting started 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Getting Started with Vue Markdown Editor

The Syncfusion Vue Markdown Editor is a web-based editor that enables users to create, edit, and format Markdown content with features such as table support and structured content formatting. This article provides a step-by-step guide for setting up a [Vite](https://vitejs.dev/) project with a TypeScript environment and integrating the Syncfusion Vue Markdown Editor component using the [Composition API](https://vuejs.org/guide/introduction.html#composition-api).

To get started quickly with the Vue Markdown Editor, refer to this video tutorial:

{% youtube "https://www.youtube.com/watch?v=UfzKsdkxGpM" %}

## Prerequisites

This guide uses Vite as the bundler and development environment. Install Node.js `24.13.0` or higher before proceeding. For detailed information about Vite’s capabilities and configuration options, refer to the [Vite documentation](https://vitejs.dev/).

N> For information about supported Vue versions and Syncfusion package compatibility, refer to the [Version Compatibility](https://ej2.syncfusion.com/vue/documentation/upgrade/version-compatibility) documentation.

## Create a Vue Application

Run the following commands to set up a Vue application:

```bash
npm create vite@latest my-app -- --template vue-ts
```
This command will prompt you to install the required packages and start the application. Select the options as shown below.

![Markdown Editor Initial setup](../rich-text-editor/images/Initial-setup.png)

Since the Syncfusion packages are not installed at this stage, choose the `No` option when prompted. Then, navigate to the project directory and install the dependencies using the following commands:

```bash
cd my-app
npm install
```

## Add Syncfusion Markdown Editor package

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

* `Toolbar` - Inject this module to use the Toolbar feature.
* `Link` - Inject this module to use the link feature in Markdown Editor.
* `Image` - Inject this module to use the image feature in Markdown Editor.
* `MarkdownEditor` - Inject this module to use the Rich Text Editor as Markdown Editor.

These modules can be injected as `services` using Vue's `provide` function as demonstrated in the following example.

{% tabs %}
{% highlight html hl_lines="9" tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/markdown-editor/getting-started-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/markdown-editor/getting-started-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}

T> Additional feature modules are available [here](https://ej2.syncfusion.com/vue/documentation/rich-text-editor/module).

## Adding Markdown Editor component

Now, you can start adding the Vue Markdown Editor component in the application. For getting started, add the Markdown Editor component in **src/App.vue** file using the following sample.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/markdown-editor/getting-started-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/markdown-editor/getting-started-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
## Run the Application

To run the project, use the following command:

```bash
npm run dev
```

The Syncfusion<sup style="font-size:70%">&reg;</sup> Vue Markdown Editor is displayed in the browser as shown below.

![Syncfusion Vue Markdown Editor output](images/getting-started.png)

## See Also

* [How to change the editor type](rich-text-editor/editor-types/editor-modes)
* [How to render the iframe](rich-text-editor/editor-types/iframe)
* [How to render the toolbar in inline mode](rich-text-editor//editor-types/inline-mode)
* [Accessibility in Markdown Editor](accessibility)
* [Keyboard support in Markdown Editor](keyboard-support)
* [Globalization in Rich Text Editor](rich-text-editor/globalization)