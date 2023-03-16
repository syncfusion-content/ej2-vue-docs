---
layout: post
title: Getting started with Vue Carousel component | Syncfusion
description:  Checkout and learn about Getting started with Vue Carousel component of Syncfusion Essential JS 2 and more details.
control: Getting started 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Getting Started

This section explains how to create a simple [Vue Carousel](https://www.syncfusion.com/vue-ui-components/vue-carousel), and configure its available functionalities in Vue using Vue quickstart seed repository.

## Prerequisites

[System requirements for Syncfusion Vue UI components](https://ej2.syncfusion.com/vue/documentation/system-requirements/)

## Dependencies

The following list of dependencies are required to use the Carousel component in your application.

```js
|-- @syncfusion/ej2-vue-navigations
    |-- @syncfusion/ej2-vue-base
    |-- @syncfusion/ej2-navigations
        |-- @syncfusion/ej2-base
        |-- @syncfusion/ej2-buttons
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

Install Syncfusion `Carousel` packages using below command.

```bash
npm install @syncfusion/ej2-vue-navigations --save
```

## Registering Carousel component using `Vue.use()`

Import the Carousel Plugin from the Essential JS 2 Vue package and register the same using `Vue.use()` with Component Plugin as its argument.

Refer to the code snippet given below.

```javascript
import Vue from "vue";
import { CarouselPlugin } from "@syncfusion/ej2-vue-navigations";

Vue.use(CarouselPlugin);

export default {};
```

> By registering component plugin in Vue, all child directives are also globally registered.
> We can also use `Vue.Component()` to register `Carousel`.
> Refer [here](https://ej2.syncfusion.com/vue/documentation/base/getting-started/#registering-vue-component) to know more about component registration.

## Initialize Carousel

Add the EJ2 Vue Carousel using `<ejs-carousel>` to the `<template>` section of the `App.vue` file in `src` directory.

```
<template>
  <div class="control-container">
    <ejs-carousel>
      <e-carousel-items>
        <e-carousel-item template="<figure class='img-container'><img src='https://ej2.syncfusion.com/products/images/carousel/cardinal.png' alt='cardinal' style='height:100%;width:100%;' /><figcaption class='img-caption'>Cardinal</figcaption></figure"></e-carousel-item>
        <e-carousel-item template="<figure class='img-container'><img src='https://ej2.syncfusion.com/products/images/carousel/hunei.png' alt='kingfisher' style='height:100%;width:100%;' /><figcaption class='img-caption'>Kingfisher</figcaption></figure>"></e-carousel-item>
        <e-carousel-item template="<figure class='img-container'><img src='https://ej2.syncfusion.com/products/images/carousel/costa-rica.png' alt='keel-billed-toucan' style='height:100%;width:100%;' /><figcaption class='img-caption'>Keel-billed-toucan</figcaption></figure>"></e-carousel-item>
        <e-carousel-item template="<figure class='img-container'><img src='https://ej2.syncfusion.com/products/images/carousel/kaohsiung.png' alt='yellow-warbler' style='height:100%;width:100%;' /><figcaption class='img-caption'>Yellow-warbler</figcaption></figure>"></e-carousel-item>
        <e-carousel-item template="<figure class='img-container'><img src='https://ej2.syncfusion.com/products/images/carousel/bee-eater.png' alt='bee-eater' style='height:100%;width:100%;' /><figcaption class='img-caption'>Bee-eater</figcaption></figure>"></e-carousel-item>
      </e-carousel-items>
    </ejs-carousel>
  </div>
</template>

<script>
  import Vue from "vue";
  import { CarouselPlugin } from "@syncfusion/ej2-vue-navigations";

  Vue.use(CarouselPlugin);

  export default {
    data: function () {
      return {};
    },
  };
</script>

<style>
  @import "../node_modules/@syncfusion/ej2-base/styles/material.css";
  @import "../node_modules/@syncfusion/ej2-buttons/styles/material.css";
  @import "../node_modules/@syncfusion/ej2-navigations/styles/material.css";

  .control-container {
    height: 360px;
    margin: 0 auto;
    width: 600px;
  }

  .img-container {
    height: 100%;
    margin: 0;
  }

  .img-caption {
    color: #fff;
    font-size: 1rem;
    position: absolute;
    bottom: 3rem;
    width: 100%;
    text-align: center;
  }
</style>
```

## Run the application

Now run the `npm run dev` command in the console, it will build your application and open in the browser.

The following example shows a basic Carousel component.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/carousel/getting-started-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/carousel/getting-started-cs1" %}

N>You can also explore our [Vue Carousel example](https://ej2.syncfusion.com/vue/demos/#/material/carousel/default.html) that shows you how to render the Carousel in Vue.
