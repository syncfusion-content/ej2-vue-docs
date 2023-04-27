---
layout: post
title: Getting started Vue 3 using Composition API with Vue Carousel component | Syncfusion
description: Checkout and learn about Getting started Vue 3 using Composition API with Vue Carousel component of Syncfusion Essential JS 2 and more details.
control: Getting started Vue 3 using Composition API
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Getting Started with Syncfusion Carousel Component in Vue 3 using Composition API

This article provides a step-by-step guide for setting up a [Vite](https://vitejs.dev/) project with a JavaScript environment and integrating the Syncfusion Vue Carousel component using the [Composition API](https://vuejs.org/guide/introduction.html#composition-api).

The `Composition API` is a new feature introduced in Vue.js 3 that provides an alternative way to organize and reuse component logic. It allows developers to write components as functions that use smaller, reusable functions called composition functions to manage their properties and behavior.

## Prerequisites

[System requirements for Syncfusion Vue UI components](../system-requirements)

## Set up the Vite project

A recommended approach for beginning with Vue is to scaffold a project using [Vite](https://vitejs.dev/). To create a new Vite project, use the below command.

```bash
npm create vite@latest
```

Using the above command will lead you to set up additional configurations for the project as below:

1.Define the project name: We can specify the name of the project directly. Let's specify the name of the project as `my-project` for this article.

```bash
? Project name: » my-project
```

2.Select `Vue` as the framework. It will creates a Vue 3 project.

```bash
? Select a framework: » - Use arrow-keys. Return to submit.
Vanilla
> Vue
  React
  Preact
  Lit
  Svelte
  Others
```

3.Choose `JavaScript` as framework variant to build this Vite project using JavaScript and Vue.

```bash
? Select a variant: » - Use arrow-keys. Return to submit.
> JavaScript
  TypeScript
  Customize with create-vue ↗
  Nuxt ↗
```

4.Upon completing the aforementioned steps to create the `my-project`, run the following command to install its dependencies:

```bash
cd my-project
npm install
```
Now that `my-project` is ready to run with default settings, let's add Syncfusion Carousel component to the project.

## Adding Syncfusion Vue Carousel package in the application

All the available Essential JS 2 packages are published in [`npmjs.com`](https://www.npmjs.com/~syncfusionorg) registry.

Install the `Carousel` component by using the below npm command.

```bash
npm install @syncfusion/ej2-vue-navigations --save
```

## Adding CSS reference for Syncfusion Vue Carousel component

Import the needed css styles for the Carousel component along with dependency styles in the `<style>` section of the `src/App.vue` file as follows.

```html
<style>
@import "../node_modules/@syncfusion/ej2-base/styles/material.css";
@import "../node_modules/@syncfusion/ej2-buttons/styles/material.css";
@import "../node_modules/@syncfusion/ej2-vue-navigations/styles/material.css";
</style>
```

## Adding Syncfusion Vue Carousel component in the application

Follow the below steps to add the Vue Carousel component using `Composition API`:

1.First, add the `setup` attribute to the `script` tag to indicate that Vue will be using the `Composition API`. And import the Carousel component in the `script` section of the **src/App.vue** file.

```html
<script setup>
import {
  CarouselComponent as EjsCarousel, CarouselItemsDirective as ECarouselItems, CarouselItemDirective as ECarouselItem
} from '@syncfusion/ej2-vue-navigations';
</script>
```
   
2.Add the component definition in template section.

```html
<template>
  <div class="control-container">
    <ejs-carousel>
      <e-carousel-items>
        <e-carousel-item
          template="<figure class='img-container'><img src='https://ej2.syncfusion.com/products/images/carousel/cardinal.png' alt='cardinal' style='height:100%;width:100%;' /><figcaption class='img-caption'>Cardinal</figcaption></figure"></e-carousel-item>
        <e-carousel-item
          template="<figure class='img-container'><img src='https://ej2.syncfusion.com/products/images/carousel/hunei.png' alt='kingfisher' style='height:100%;width:100%;' /><figcaption class='img-caption'>Kingfisher</figcaption></figure>"></e-carousel-item>
        <e-carousel-item
          template="<figure class='img-container'><img src='https://ej2.syncfusion.com/products/images/carousel/costa-rica.png' alt='keel-billed-toucan' style='height:100%;width:100%;' /><figcaption class='img-caption'>Keel-billed-toucan</figcaption></figure>"></e-carousel-item>
        <e-carousel-item
          template="<figure class='img-container'><img src='https://ej2.syncfusion.com/products/images/carousel/kaohsiung.png' alt='yellow-warbler' style='height:100%;width:100%;' /><figcaption class='img-caption'>Yellow-warbler</figcaption></figure>"></e-carousel-item>
        <e-carousel-item
          template="<figure class='img-container'><img src='https://ej2.syncfusion.com/products/images/carousel/bee-eater.png' alt='bee-eater' style='height:100%;width:100%;' /><figcaption class='img-caption'>Bee-eater</figcaption></figure>"></e-carousel-item>
      </e-carousel-items>
    </ejs-carousel>
  </div>
</template>
```

Here is the summarized code for the above steps in the **src/App.vue** file:

```html
<template>
  <div class="control-container">
    <ejs-carousel>
      <e-carousel-items>
        <e-carousel-item
          template="<figure class='img-container'><img src='https://ej2.syncfusion.com/products/images/carousel/cardinal.png' alt='cardinal' style='height:100%;width:100%;' /><figcaption class='img-caption'>Cardinal</figcaption></figure"></e-carousel-item>
        <e-carousel-item
          template="<figure class='img-container'><img src='https://ej2.syncfusion.com/products/images/carousel/hunei.png' alt='kingfisher' style='height:100%;width:100%;' /><figcaption class='img-caption'>Kingfisher</figcaption></figure>"></e-carousel-item>
        <e-carousel-item
          template="<figure class='img-container'><img src='https://ej2.syncfusion.com/products/images/carousel/costa-rica.png' alt='keel-billed-toucan' style='height:100%;width:100%;' /><figcaption class='img-caption'>Keel-billed-toucan</figcaption></figure>"></e-carousel-item>
        <e-carousel-item
          template="<figure class='img-container'><img src='https://ej2.syncfusion.com/products/images/carousel/kaohsiung.png' alt='yellow-warbler' style='height:100%;width:100%;' /><figcaption class='img-caption'>Yellow-warbler</figcaption></figure>"></e-carousel-item>
        <e-carousel-item
          template="<figure class='img-container'><img src='https://ej2.syncfusion.com/products/images/carousel/bee-eater.png' alt='bee-eater' style='height:100%;width:100%;' /><figcaption class='img-caption'>Bee-eater</figcaption></figure>"></e-carousel-item>
      </e-carousel-items>
    </ejs-carousel>
  </div>
</template>

<script setup>
import {
  CarouselComponent as EjsCarousel, CarouselItemsDirective as ECarouselItems, CarouselItemDirective as ECarouselItem
} from '@syncfusion/ej2-vue-navigations';
</script>

<style>
@import "../node_modules/@syncfusion/ej2-base/styles/material.css";
@import "../node_modules/@syncfusion/ej2-buttons/styles/material.css";
@import "../node_modules/@syncfusion/ej2-vue-navigations/styles/material.css";

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

## Run the project

To run the project, use the following command:

```bash
npm run dev
```

The output will appear as follows:

![vue3-js-composition](./images/vue3-composition-carousel.png)

Refer the sample [Vue 3 using Composition API Carousel getting started](https://github.com/SyncfusionExamples/vue3-schedule-getting-started)