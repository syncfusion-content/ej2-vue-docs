---
layout: post
title: Getting started with Vue Barcode component | Syncfusion
description:  Checkout and learn about Getting started with Vue Barcode component of Syncfusion Essential JS 2 and more details.
control: Getting started 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Getting Started with the Vue Barcode Component in Vue 2

This article provides a step-by-step guide for setting up a Vue 2 project using [Vue-CLI](https://cli.vuejs.org/) and integrating the Syncfusion Vue Barcode component using the [Composition API](https://vuejs.org/guide/introduction.html#composition-api) / [Options API](https://vuejs.org/guide/introduction.html#options-api).

## Prerequisites

[System requirements for Syncfusion Vue UI components](https://ej2.syncfusion.com/vue/documentation/system-requirements)

## Dependencies

The following list of dependencies are required to use the `Barcode Generator` component in your application.

```javascript
|-- @syncfusion/ej2-vue-barcode-generator
    |-- @syncfusion/ej2-base
    |-- @syncfusion/ej2-data
    |-- @syncfusion/ej2-navigations
    |-- @syncfusion/ej2-inputs
    |-- @syncfusion/ej2-popups
    |-- @syncfusion/ej2-buttons
    |-- @syncfusion/ej2-lists
    |-- @syncfusion/ej2-splitbuttons
    |-- @syncfusion/ej2-barcode-generator
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

## Adding Syncfusion Vue packages

Syncfusion packages are available at [npmjs.com](https://www.npmjs.com/search?q=ej2-vue). To use Vue components, install the required npm package.

This article uses the [Vue Barcode component](https://www.syncfusion.com/vue-components/vue-barcode) as an example. Install the `@syncfusion/ej2-vue-barcode-generator` package by running the following command:

```bash
npm install @syncfusion/ej2-vue-barcode-generator –save
```
or

```bash
yarn add @syncfusion/ej2-vue-barcode-generator
```

## Add Syncfusion Vue component

Follow the below steps to add the Vue Barcode component using `Composition API` or `Options API`:

1\. First, import and register the Barcode component in the `script` section of the **src/App.vue** file. If you are using the `Composition API`, you should add the `setup` attribute to the `script` tag to indicate that Vue will be using the `Composition API`.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}

<script setup>
    import { QRCodeGeneratorComponent as EjsQrcodegenerator } from '@syncfusion/ej2-vue-barcode-generator';
</script>

{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}

<script>
import { QRCodeGeneratorComponent } from '@syncfusion/ej2-vue-barcode-generator';
export default {
    components: {
        'ejs-qrcodegenerator': QRCodeGeneratorComponent
    }
}
</script>

{% endhighlight %}
{% endtabs %}

2\. In the `template` section, define the Barcode component with [width](https://ej2.syncfusion.com/vue/documentation/api/barcode/barcodeModel/#width), [height](https://ej2.syncfusion.com/vue/documentation/api/barcode/barcodeModel/#height), [value](https://ej2.syncfusion.com/vue/documentation/api/barcode/barcodeModel/#value), [mode](https://ej2.syncfusion.com/vue/documentation/api/barcode/barcodeModel/#mode) property.

{% tabs %}
{% highlight html tabtitle="~/src/App.vue" %}

<template>
    <div id="app" class="barcodeStyle">
        <ejs-qrcodegenerator
              id="barcode"
              ref="barcodeControl"
              :width="width"
              :height="height"
              :value="value"
              :mode="mode"
            ></ejs-qrcodegenerator>


    </div>
</template>

{% endhighlight %}
{% endtabs %}

3\. Declare the value for `width`, `height`, `value`, `mode` property in the `script` section

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}

<script setup>
const width = "200px";
const height = "150px";
const type = "Codabar";
const value = "123456789";
const mode = "SVG";
</script>

{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}

<script>
data () {
        return {
            width: "200px",
            height: "150px",
            type: "Codabar",
            value: "123456789",
            mode: "SVG",
        }
    }
</script>

{% endhighlight %}
{% endtabs %}

Here is the summarized code for the above steps in the **src/App.vue** file:

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/barcode/getting-started/initialize-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/barcode/getting-started/initialize-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/barcode/getting-started/initialize-cs1" %}

## Adding QR Generator control

You can add the QR code in our barcode generator component.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/barcode/getting-started/qrcode-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/barcode/getting-started/qrcode-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/barcode/getting-started/qrcode-cs1" %}

## Adding Datamatrix Generator control

You can add the datamatrix code in our barcode generator component.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue" %}
{% include code-snippet/barcode/getting-started/datamatrix-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue" %}
{% include code-snippet/barcode/getting-started/datamatrix-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/barcode/getting-started/datamatrix-cs1" %}