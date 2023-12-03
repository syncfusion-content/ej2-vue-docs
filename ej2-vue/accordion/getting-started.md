---
layout: post
title: Getting started with Vue Accordion component | Syncfusion
description:  Checkout and learn about Getting started with Vue Accordion component of Syncfusion Essential JS 2 and more details.
control: Getting started 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Getting Started with the Vue Accordion Component in Vue 2

This article provides a step-by-step guide for setting up a Vue 2 project using [Vue-CLI](https://cli.vuejs.org/) and integrating the Syncfusion Vue Accordion component using the [Composition API](https://vuejs.org/guide/introduction.html#composition-api) / [Options API](https://vuejs.org/guide/introduction.html#options-api).

## Prerequisites

[System requirements for Syncfusion Vue UI components](https://ej2.syncfusion.com/vue/documentation/system-requirements)

## Dependencies

The following list of dependencies are required to use the Accordion component in your application.

```javascript
|-- @syncfusion/ej2-vue-navigations
  |-- @syncfusion/ej2-base
  |-- @syncfusion/ej2-vue-base
  |-- @syncfusion/ej2-navigations
    |-- @syncfusion/ej2-inputs
    |-- @syncfusion/ej2-buttons

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

## Adding syncfusion packages

All the available Essential JS 2 packages are published in [`npmjs.com`](https://www.npmjs.com/~syncfusionorg) registry. You can choose the component that you want to install. For this application, we are going to use Accordion component.

To install Accordion component, use the following command

```bash
npm install @syncfusion/ej2-vue-navigations --save
```
or

```bash
yarn add @syncfusion/ej2-vue-navigations
```

## Import Syncfusion CSS styles

Add Accordion component's styles as given below in `<style>` section of the `App.vue` file.

In this article, the `Material` theme is applied using CSS styles, which are available in installed packages. The necessary `Material` CSS styles for the Accordion component and its dependents were imported into the `<style>` section of **src/App.vue** file.

{% tabs %}
{% highlight html tabtitle="~/src/app.vue" %}

<style>
  @import "../node_modules/@syncfusion/ej2-base/styles/material.css";
  @import "../node_modules/@syncfusion/ej2-vue-navigations/styles/material.css";
</style>

{% endhighlight %}
{% endtabs %}

## Add Syncfusion Vue component

Follow the below steps to add the Vue Accordion component using `Composition API` or `Options API`:

1\. First, import and register the Accordion component in the `script` section of the **src/App.vue** file. If you are using the `Composition API`, you should add the `setup` attribute to the `script` tag to indicate that Vue will be using the `Composition API`.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}

<script setup>
import {
  AccordionComponent as EjsAccordion, AccordionItemsDirective as EAccordionitems, AccordionItemDirective as EAccordionitem
} from "@syncfusion/ej2-vue-navigations";
</script>

{% endhighlight %}
{% highlight html tabtile="Options API (~/src/App.vue)" %}

<script>
import { AccordionComponent, AccordionItemDirective, AccordionItemsDirective } from '@syncfusion/ej2-vue-navigations';

export default {
  name: 'app',
  components: {
    'ejs-accordion': AccordionComponent
  },
}
</script>

{% endhighlight %}
{% endtabs %}

2\. Add the EJ2 Vue Accordion using `<ejs-accordion>` to the `<template>` section of the `App.vue` file in src directory.

{% tabs %}
{% highlight html tabtitle="(~src/App.vue)" %}

<template>
    <div id="app">
    <ejs-accordion >
            <e-accordionitems>
        <e-accordionitem expanded='true' header='ASP.NET' content='Microsoft ASP.NET is a set of technologies in the Microsoft .NET Framework for building Web applications and XML Web services.'></e-accordionitem>
        <e-accordionitem header='ASP.NET MVC' content='The Model-View-Controller (MVC) architectural pattern separates an application into three main components: the model, the view, and the controller.'></e-accordionitem>
        <e-accordionitem header='JavaScript' content='JavaScript (JS) is an interpreted computer programming language.It was originally implemented as part of web browsers so that client-side scripts could interact with the user, control the browser, communicate asynchronously, and alter the document content that was displayed.'></e-accordionitem>
      </e-accordionitems>
    </ejs-accordion>
  </div>
</template>

{% endhighlight %}
{% endtabs %}

## Running the Application

Now run the `npm run dev` command in the console, it will build your application and open in the browser.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/accordion/getting-started-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/accordion/getting-started-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/accordion/getting-started-cs1" %}

## Initialize the Accordion using HTML elements

The Accordion component can be rendered based on the given HTML element using `<ejs-accordion>`. You need to follow the below structure of HTML elements to render the Accordion inside the `<ejs-accordion>` tag.

```
  <ejs-accordion>   --> Root Accordion Element
       <div>      --> Accordion Item Container
            <div>   --> Accordion Header Container
                <div> </div> --> Accordion Header
            </div>
            <div>  --> Accordion Panel Container
                <div> </div> --> Accordion Content
             </div>
        </div>
  </ejs-accordion>
```

{% tabs %}
{% highlight html tabtitle="Compoition API (~/src/App.vue)" %}
{% include code-snippet/accordion/accordion-container-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/accordion/accordion-container-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/accordion/accordion-container-cs1" %}

N> You can refer to our [Vue Accordion](https://www.syncfusion.com/vue-ui-components/vue-accordion) feature tour page for its groundbreaking feature representations. You can also explore our [Vue Accordion Component example](https://ej2.syncfusion.com/vue/demos/#/material/accordion/default.html) that shows how to render the Accordion in Vue.
