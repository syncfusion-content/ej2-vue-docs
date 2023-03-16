---
layout: post
title: Getting started with Vue Mention component | Syncfusion
description:  Checkout and learn about Getting started with Vue Mention component of Syncfusion Essential JS 2 and more details.
control: Getting started 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Getting Started

This section explains how to create a simple Mention, and configure its available functionalities in Vue using Vue quickstart seed repository.

## Prerequisites

[System requirements for Syncfusion Vue UI components](https://ej2.syncfusion.com/vue/documentation/system-requirements/)

## Dependencies

The following list of dependencies are required to use the Mention component in your application.

```js
|-- @syncfusion/ej2-vue-dropdowns
    |-- @syncfusion/ej2-vue-base
    |-- @syncfusion/ej2-dropdowns
        |-- @syncfusion/ej2-base
        |-- @syncfusion/ej2-data
        |-- @syncfusion/ej2-lists
        |-- @syncfusion/ej2-popups
            |-- @syncfusion/ej2-buttons
```

## Setup your development environment

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

All the available Essential JS 2 packages are published in [`npmjs.com`](https://www.npmjs.com/~syncfusionorg) registry. You can choose the component that you want to install. For this application, we are going to use Mention component.

To install Mention component, use the following command

```bash
npm install @syncfusion/ej2-vue-dropdowns --save
```

## Adding CSS Reference

Add Mention component's styles as given below in `<style>` section of the `App.vue` file.

```
<style>
  @import "../node_modules/@syncfusion/ej2-base/styles/bootstrap5.css";
  @import "../node_modules/@syncfusion/ej2-buttons/styles/bootstrap5.css";
  @import "../node_modules/@syncfusion/ej2-popups/styles/bootstrap5.css";
  @import "../node_modules/@syncfusion/ej2-list/styles/bootstrap5.css";
  @import "../node_modules/@syncfusion/ej2-vue-dropdowns/styles/bootstrap5.css";
</style>
```

## Registering Vue Component

For Registering Vue Component two ways are available. They are as follows.
* Vue.use()
* Vue.component()

### Using Vue.use()

Import the Component Plugin from the EJ2 Vue Package and register the same using Vue.use() with Component Plugin as its argument.

Refer the code snippet given below.

```ts
import { MentionPlugin } from '@syncfusion/ej2-vue-dropdowns';

Vue.use(MentionPlugin);
```

> By Registering Component Plugin in Vue, all child directives are also globally registered.

### Using Vue.component()

Import the Component and Component Plugin from EJ2 Vue Package, register the same using the Vue.component() with name of Component from ComponentPlugin and the EJ2 Vue Component as its arguments.

Refer the code snippet given below.

```ts
import { MentionComponent, MentionPlugin } from '@syncfusion/ej2-vue-dropdowns';

Vue.component(MentionPlugin.name, MentionComponent);
```

> By using Vue.component(), only the EJ2 Vue Component is registered. Child directives needs to be registered separately.

## Adding Mention component

Add the EJ2 Vue Mention using `<ejs-mention>` to the `<template>` section of the `App.vue` file in `src` directory. To use the Mention component properly, the [`target`](https://ej2.syncfusion.com/vue/documentation/api/mention/#target) property should be configured so that it renders the Mention component in the configured element.

```
<template>
  <div id="app">
    <label id="comment" >Comments</label>
    <div id="mentionElement" placeholder = "Type @ and tag user"></div>
    <ejs-mention id='defaultMention' :target='mentionTarget'></ejs-mention>
  </div>
</template>

<script>
import Vue from 'vue';
import { MentionPlugin } from "@syncfusion/ej2-vue-dropdowns";

Vue.use(MentionPlugin);

export default {
  name: 'app',
  data: function() {
      return {
        target: "#mentionElement",
      };
  }
}
</script>

<style>
  @import "../node_modules/@syncfusion/ej2-base/styles/bootstrap5.css";
  @import "../node_modules/@syncfusion/ej2-buttons/styles/bootstrap5.css";
  @import "../node_modules/@syncfusion/ej2-popups/styles/bootstrap5.css";
  @import "../node_modules/@syncfusion/ej2-list/styles/bootstrap5.css";
  @import "../node_modules/@syncfusion/ej2-vue-dropdowns/styles/bootstrap5.css";
  
    #app {
        color: #008cff;
        height: 40px;
        left: 15%;
        position: absolute;
        top: 10%;
        width: 30%;
    }

    #comment {
        font-size: 15px;
        font-weight: 600;
    }

    #mentionElement {
        min-height: 100px;
        border: 1px solid #D7D7D7;
        border-radius: 4px;
        padding: 8px;
        font-size: 14px;
        width: 600px;
    }

    div#mentionElement[placeholder]:empty:before {
        content: attr(placeholder);
        color: #555;
    }
</style>
```

## Binding data source

After initialization, populate the Mention with data using the [`dataSource`](https://ej2.syncfusion.com/vue/documentation/api/mention/#datasource) property. Here, an array of string values is passed to the Mention component.

```
<template>
  <div id="app">
    <label id="comment" >Comments</label>
    <div id="mentionElement" placeholder = "Type @ and tag user"></div>
    <ejs-mention id='defaultMention' :target='mentionTarget' :dataSource='userData'></ejs-mention>
  </div>
</template>
<script>
import Vue from 'vue';
import { MentionPlugin } from "@syncfusion/ej2-vue-dropdowns";

Vue.use(MentionPlugin);
export default {
  name: 'app',
  data: function() {
    return {
      target: "#mentionElement",
      userData: ['Selma Rose', 'Garth', 'Robert', 'William', 'Joseph']
    };
  }
}
</script>
<style>
  @import "../node_modules/@syncfusion/ej2-base/styles/bootstrap5.css";
  @import "../node_modules/@syncfusion/ej2-buttons/styles/bootstrap5.css";
  @import "../node_modules/@syncfusion/ej2-popups/styles/bootstrap5.css";
  @import "../node_modules/@syncfusion/ej2-list/styles/bootstrap5.css";
  @import "../node_modules/@syncfusion/ej2-vue-dropdowns/styles/bootstrap5.css";

  #app {
    color: #008cff;
    height: 40px;
    left: 15%;
    position: absolute;
    top: 10%;
    width: 30%;
  }

  #comment {
      font-size: 15px;
      font-weight: 600;
  }

  #mentionElement {
      min-height: 100px;
      border: 1px solid #D7D7D7;
      border-radius: 4px;
      padding: 8px;
      font-size: 14px;
      width: 600px;
  }

  div#mentionElement[placeholder]:empty:before {
      content: attr(placeholder);
      color: #555;
  }
</style>
```

## Running the Application

Now run the `npm run dev` command in the console, it will build your application and open in the browser.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/mention/getting-started-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/mention/getting-started-cs1" %}

## Display Mention character

By using the [showMentionChar](https://ej2.syncfusion.com/vue/documentation/api/mention/#showMentionChar) property, the text content can be displayed along with the mention character. You can customize the mention character by using the [mentionChar](https://ej2.syncfusion.com/vue/documentation/api/mention/#mentionChar) property in the Mention component.

> By default, the [mentionChar](https://ej2.syncfusion.com/vue/documentation/api/mention/#mentionChar) is `@` and the [showMentionChar](https://ej2.syncfusion.com/vue/documentation/api/mention/#showMentionChar) property is disabled.

The following example displays the text content along with the mention character configured as `#`.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/mention/getting-started-cs2/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/mention/getting-started-cs2" %}