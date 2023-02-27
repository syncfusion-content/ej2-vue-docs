---
layout: post
title: Getting started with Vue Button group component | Syncfusion
description:  Checkout and learn about Getting started with Vue Button group component of Syncfusion Essential JS 2 and more details.
control: Getting started 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Getting Started

This section explains how to create a simple ButtonGroup, and configure its available functionalities in Vue using Vue quickstart seed repository.

## Prerequisites

[System requirements for Syncfusion Vue UI components](https://ej2.syncfusion.com/vue/documentation/system-requirements/)

## Dependencies

The list of dependencies required to use the Button component in your application is given below:

```js
|-- @syncfusion/ej2-splitbuttons
```

## Installation and configuration

* You can use [`Vue CLI`](https://github.com/vuejs/vue-cli) to setup your Vue applications. To install Vue CLI use the following command.

```bash
npm install -g @vue/cli
npm install -g @vue/cli-init
```

* To setup basic sample use the following Vue CLI commands.

```bash
vue init webpack-simple quickstart

cd quickstart

npm install

```

* Install Syncfusion `ButtonGroup` packages using below command.

```bash
npm install @syncfusion/ej2-splitbuttons --save
```

## Creating Vue Sample

Add a div element with class name as `e-btn-group` and add the button elements that needs to be group inside the `div` element in `App.vue` file.

To render button elements as EJ2 Vue Button, then add [`Button dependencies`](./../button/getting-started#dependencies) in `systemjs.config.js` file. Then import `ButtonPlugin` from `ej2-vue-buttons`.

```

<template>
  <div id='app'>
    <div class="e-btn-group">
        <ejs-button>HTML</ejs-button>
        <ejs-button>CSS</ejs-button>
        <ejs-button>Javascript</ejs-button>
    </div>
  </div>
</template>

```

## Adding CSS Reference

Add ButtonGroup component's styles as given below in `<style>` section of the `App.vue` file.

```

<style>
@import "../node_modules/@syncfusion/ej2-base/styles/material.css";
@import "../node_modules/@syncfusion/ej2-buttons/styles/material.css";
@import "../node_modules/@syncfusion/ej2-popups/styles/material.css";
@import "../node_modules/@syncfusion/ej2-splitbuttons/styles/material.css";
</style>

```

## Running the Application

Now run the `npm run dev` command in the console, it will build your application and open in the browser.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/button-group/getting-started-cs2/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/button-group/getting-started-cs2" %}

## Orientation

ButtonGroup can be arranged in vertical and horizontal orientation. By default, it is horizontally aligned.

### Vertical Orientation

ButtonGroup can be aligned vertically using the built-in CSS class `e-vertical` to the target element.

The following example illustrates how to achieve vertical orientation in ButtonGroup,

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/button-group/getting-started-cs3/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/button-group/getting-started-cs3" %}

> ButtonGroup with SplitButton component nesting won't works in vertical orientation.

## See Also

* [Initialize ButtonGroup using util function](./how-to/initialize-buttongroup-using-util-function)