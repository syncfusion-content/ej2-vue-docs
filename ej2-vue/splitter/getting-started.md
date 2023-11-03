---
layout: post
title: Getting started with Vue Splitter component | Syncfusion
description:  Checkout and learn about Getting started with Vue Splitter component of Syncfusion Essential JS 2 and more details.
control: Getting started 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Getting Started with the Vue Splitter Component in Vue 2

This article provides a step-by-step guide for setting up a Vue 2 project using [Vue-CLI](https://cli.vuejs.org/) and integrating the Syncfusion Vue Splitter component.

## Prerequisites

[System requirements for Syncfusion Vue UI components](https://ej2.syncfusion.com/vue/documentation/system-requirements)

## Dependencies

The following list of dependencies required to use the Splitter component in your application:

```js
|-- @syncfusion/ej2-layouts
    |-- @syncfusion/ej2-base
|-- @syncfusion/ej2-vue-layouts
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

This article uses the [Vue Splitter component](https://www.syncfusion.com/vue-components/vue-splitter) as an example. Install the `@syncfusion/ej2-vue-layouts` package by running the following command:

```bash
npm install @syncfusion/ej2-vue-layouts --save
```
or

```bash
yarn add @syncfusion/ej2-vue-layouts
```

## Import Syncfusion CSS styles

You can import themes for the Syncfusion Vue component in various ways, such as using CSS or SASS styles from npm packages, CDN and [Theme Studio](https://ej2.syncfusion.com/vue/documentation/appearance/theme-studio). Refer to [themes topic](https://ej2.syncfusion.com/vue/documentation/appearance/theme) to know more about built-in themes and different ways to refer to themes in a Vue project.

In this article, the `Material` theme is applied using CSS styles, which are available in installed packages. The necessary `Material` CSS styles for the Splitter component and its dependents were imported into the `<style>` section of **src/App.vue** file.

{% tabs %}
{% highlight html tabtitle="~/src/App.vue" %}

<style>
@import '../node_modules/@syncfusion/ej2-base/styles/material.css';
@import '../node_modules/@syncfusion/ej2-vue-layouts/styles/material.css';
</style>

{% endhighlight %}
{% endtabs %}

## Add Syncfusion Vue component

Follow the below steps to add the Vue Splitter component using:

1\. First, import and register the Splitter component in the `script` section of the **src/App.vue** file.

{% tabs %}
{% highlight html tabtitle="~/src/App.vue" %}

<script>
import { SplitterComponent, PanesDirective, PaneDirective } from '@syncfusion/ej2-vue-layouts';

export default {
  components: {
    'ejs-splitter': SplitterComponent,
    'e-pane': PaneDirective,
    'e-panes': PanesDirective
  }
}
</script>

{% endhighlight %}
{% endtabs %}

2\. In the `template` section, define the Splitter component with the [height](https://ej2.syncfusion.com/vue/documentation/api/splitter/#height) property.

{% tabs %}
{% highlight html tabtitle="~/src/App.vue" %}

<template>
<div id="app" class="col-lg-12 control-section default-splitter">
    <ejs-splitter id='default-splitter' height='250px'>
        <e-panes>
            <e-pane></e-pane>
            <e-pane></e-pane>
        </e-panes>
    </ejs-splitter>
</div>
</template>

{% endhighlight %}
{% endtabs %}

## Load content to the pane

You can load the pane contents in either HTML element or string types using [content](https://ej2.syncfusion.com/vue/documentation/api/splitter/#content) property.

For detailed information, refer to the [Pane Content](./pane-content) section

{% tabs %}
{% highlight html tabtitle="~/src/App.vue" %}

<template>
<div id="app" class="col-lg-12 control-section default-splitter">
    <ejs-splitter id='default-splitter' height='250px'>
        <e-panes>
            <e-pane content='Left Pane'></e-pane>
            <e-pane content='Middle Pane'></e-pane>
            <e-pane content='Right Pane'></e-pane>
        </e-panes>
    </ejs-splitter>
</div>
</template>
<script>
import { SplitterComponent, PanesDirective, PaneDirective } from '@syncfusion/ej2-vue-layouts';
export default {
  components: {
    'ejs-splitter': SplitterComponent,
    'e-pane': PaneDirective,
    'e-panes': PanesDirective
  },
  name: 'app',
    data () {
    return { }
  }
}
</script>

{% endhighlight %}
{% endtabs %}

Here is the summarized code for the above steps in the **src/App.vue** file:

{% tabs %}
{% highlight html tabtitle="~/src/App.vue" %}
{% include code-snippet/splitter/getting-started-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}

## Run the project

To run the project, use the following command:

```bash
npm run serve
```

or

```bash
yarn run serve
```
        
{% previewsample "page.domainurl/code-snippet/splitter/getting-started-cs1" %}

## See Also

* [Resizable split panes](./resizing)
* [Collapsible panes](./expand-collapse)
* [Construct different layouts using Splitter](./different-layouts)