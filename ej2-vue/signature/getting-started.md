---
layout: post
title: Getting started with Vue Signature component | Syncfusion
description:  Checkout and learn about Getting started with Vue Signature component of Syncfusion Essential JS 2 and more details.
control: Getting started 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Getting Started

This section explains how to create a default Signature and to configure the Signature component.

To get start quickly with Vue Signature, you can check on this video:

{% youtube "https://www.youtube.com/watch?v=F6m9h5mKOcQ" %}

## Prerequisites

[System requirements for Syncfusion Vue UI components](https://ej2.syncfusion.com/vue/documentation/system-requirements/)

## Dependencies

The list of dependencies required to use the Signature component in your application is given below:

```javascript
|-- @syncfusion/ej2-vue-inputs
    |-- @syncfusion/ej2-vue-base
    |-- @syncfusion/ej2-base
    |-- @syncfusion/ej2-inputs
```

## Installation and configuration

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

Install Syncfusion `Signature` packages using below command.

```bash
npm install @syncfusion/ej2-vue-inputs --save
```

## Registering Signature component using `Vue.use()`

Import the Signature Plugin from the Essential JS 2 Vue package and register the same using `Vue.use()` with Component Plugin as its argument.

Refer to the code snippet given below.

```javascript
import Vue from 'vue';
import { SignaturePlugin } from '@syncfusion/ej2-vue-inputs';

Vue.use(SignaturePlugin);

export default {}
```

> By registering component plugin in Vue, all child directives are also globally registered. We can also use `Vue.Component()` to register `Signature`. Refer [here](https://ej2.syncfusion.com/vue/documentation/base/getting-started/#registering-vue-component) to know more about component registration.

## Initialize Signature

Add the EJ2 Vue Signature using `<ejs-signature>` to the `<template>` section of the `App.vue` file in `src` directory.

```
<template>
<ejs-signature></ejs-signature>
</template>

<script>
import Vue from 'vue';
import { SignaturePlugin } from '@syncfusion/ej2-vue-inputs';
Vue.use(SignaturePlugin);

export default {}
</script>
```

## Run the application

Now run the `npm run dev` command in the console, it will build your application and open in the browser.

The following example shows a default Signature.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/signature/default-cs7/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/signature/default-cs7" %}
