---
layout: post
title: Getting started with Vue Barcode component | Syncfusion
description:  Checkout and learn about Getting started with Vue Barcode component of Syncfusion Essential JS 2 and more details.
control: Getting started 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Getting started

This section explains the steps required to create a simple barcode and demonstrates the basic usage of the barcode generator control.

## Prerequisites

[System requirements for Syncfusion Vue UI components](https://ej2.syncfusion.com/vue/documentation/system-requirements/)

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

## Get Started with Vue CLI

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

## Adding Syncfusion packages

All the available Essential JS 2 packages are published in [`npmjs.com`](https://www.npmjs.com/~syncfusionorg) registry. You can choose the component that you want to install. For this application, we are going to use Barcode Generator component.

To install Barcode Generator component, use the following command

```bash
npm install @syncfusion/ej2-vue-barcode-generator –save
```

## Registering Vue Component

For Registering Vue Component two ways are available. They are as follows.
* Vue.use()
* Vue.component()

### Using Vue.use()

Import the Component Plugin from the EJ2 Vue Package and register the same using Vue.use() with Component Plugin as its argument.

Refer the code snippet given below.

```ts
import { BarcodeGeneratorPlugin } from '@syncfusion/ej2-vue-barcode-generator';

Vue.use(BarcodeGeneratorPlugin);
```

Note : By Registering Component Plugin in Vue, all child directives are also globally registered.

## Adding Barcode Generator control

You can add the QR code in our barcode generator component.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/barcode/getting-started/initialize-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/barcode/getting-started/initialize-cs1" %}

## Adding QR Generator control

You can add the QR code in our barcode generator component.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/barcode/getting-started/qrcode-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/barcode/getting-started/qrcode-cs1" %}

## Adding Datamatrix Generator control

You can add the datamatrix code in our barcode generator component.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/barcode/getting-started/datamatrix-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/barcode/getting-started/datamatrix-cs1" %}