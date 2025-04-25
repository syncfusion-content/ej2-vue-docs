---
layout: post
title: Getting started with Vue Mention component | Syncfusion
description:  Checkout and learn about Getting started with Vue Mention component of Syncfusion Essential JS 2 and more details.
control: Getting started 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Getting Started with the Vue Mention Component in Vue 2

This article provides a step-by-step guide for setting up a Vue 2 project using [Vue-CLI](https://cli.vuejs.org/) and integrating the Syncfusion<sup style="font-size:70%">&reg;</sup> Vue Mention component using the [Composition API](https://vuejs.org/guide/introduction.html#composition-api) / [Options API](https://vuejs.org/guide/introduction.html#options-api).

To get start quickly with Mention component using Vue CLI, you can check on this video:

{% youtube "https://www.youtube.com/watch?v=bgZ6O0HcEBc" %}

## Prerequisites

[System requirements for Syncfusion<sup style="font-size:70%">&reg;</sup> Vue UI components](https://ej2.syncfusion.com/vue/documentation/system-requirements)

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

![Vue 2 project](./images/vue2-terminal.png)

Once the `quickstart` project is set up with default settings, proceed to add Syncfusion<sup style="font-size:70%">&reg;</sup> components to the project.

## Add Syncfusion<sup style="font-size:70%">&reg;</sup> Vue packages

Syncfusion<sup style="font-size:70%">&reg;</sup> packages are available at [npmjs.com](https://www.npmjs.com/search?q=ej2-vue). To use Vue components, install the required npm package.

This article uses the [Vue Mention component](https://www.syncfusion.com/vue-components/vue-mention) as an example. Install the `@syncfusion/ej2-vue-dropdowns` package by running the following command:

```bash
npm install @syncfusion/ej2-vue-dropdowns --save
```
or

```bash
yarn add @syncfusion/ej2-vue-dropdowns
```

## Import Syncfusion<sup style="font-size:70%">&reg;</sup> CSS styles

You can import themes for the Syncfusion<sup style="font-size:70%">&reg;</sup> Vue component in various ways, such as using CSS or SASS styles from npm packages, CDN, [CRG](https://ej2.syncfusion.com/javascript/documentation/common/custom-resource-generator) and [Theme Studio](https://ej2.syncfusion.com/vue/documentation/appearance/theme-studio). Refer to [themes topic](https://ej2.syncfusion.com/vue/documentation/appearance/theme) to know more about built-in themes and different ways to refer to themes in a Vue project.

In this article, the `Material` theme is applied using CSS styles, which are available in installed packages. The necessary `Material` CSS styles for the Mention component and its dependents were imported into the `<style>` section of **src/App.vue** file.

{% tabs %}
{% highlight html tabtitle="~/src/App.vue" %}

<style>
@import "../node_modules/@syncfusion/ej2-base/styles/bootstrap5.css";
@import "../node_modules/@syncfusion/ej2-buttons/styles/bootstrap5.css";
@import "../node_modules/@syncfusion/ej2-popups/styles/bootstrap5.css";
@import "../node_modules/@syncfusion/ej2-lists/styles/bootstrap5.css";
@import "../node_modules/@syncfusion/ej2-vue-dropdowns/styles/bootstrap5.css";
</style>

{% endhighlight %}
{% endtabs %}

## Add Syncfusion<sup style="font-size:70%">&reg;</sup> Vue component

Follow the below steps to add the Vue Mention component using `Composition API` or `Options API`:

1\. First, import and register the Mention component in the `script` section of the **src/App.vue** file. If you are using the `Composition API`, you should add the `setup` attribute to the `script` tag to indicate that Vue will be using the `Composition API`.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}

<script setup>
import { MentionComponent as EjsMention } from "@syncfusion/ej2-vue-dropdowns";
</script>

{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}

<script>
import { MentionComponent } from "@syncfusion/ej2-vue-dropdowns";
export default {
  components: {
    'ejs-mention': MentionComponent
  }
}
</script>

{% endhighlight %}
{% endtabs %}

## Adding Mention component

Add the EJ2 Vue Mention using `<ejs-mention>` to the `<template>` section of the `App.vue` file in `src` directory. To use the Mention component properly, the [`target`](https://ej2.syncfusion.com/vue/documentation/api/mention/#target) property should be configured so that it renders the Mention component in the configured element.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}

<template>
  <div id="app">
    <label id="comment" >Comments</label>
    <div id="mentionElement" placeholder = "Type @ and tag user"></div>
    <ejs-mention id='defaultMention' :target='mentionTarget'></ejs-mention>
  </div>
</template>

<script setup>
import { MentionComponent as EjsMention } from "@syncfusion/ej2-vue-dropdowns";
const mentionTarget = "#mentionElement";
</script>

<style>
  @import "../node_modules/@syncfusion/ej2-base/styles/bootstrap5.css";
  @import "../node_modules/@syncfusion/ej2-buttons/styles/bootstrap5.css";
  @import "../node_modules/@syncfusion/ej2-popups/styles/bootstrap5.css";
  @import "../node_modules/@syncfusion/ej2-lists/styles/bootstrap5.css";
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


{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}

<template>
  <div id="app">
    <label id="comment" >Comments</label>
    <div id="mentionElement" placeholder = "Type @ and tag user"></div>
    <ejs-mention id='defaultMention' :target='mentionTarget'></ejs-mention>
  </div>
</template>

<script>
import { MentionComponent } from "@syncfusion/ej2-vue-dropdowns";

export default {
  components: {
    'ejs-mention': MentionComponent
  },
  name: 'app',
  data: function() {
      return {
        mentionTarget: "#mentionElement",
      };
  }
}
</script>

<style>
  @import "../node_modules/@syncfusion/ej2-base/styles/bootstrap5.css";
  @import "../node_modules/@syncfusion/ej2-buttons/styles/bootstrap5.css";
  @import "../node_modules/@syncfusion/ej2-popups/styles/bootstrap5.css";
  @import "../node_modules/@syncfusion/ej2-lists/styles/bootstrap5.css";
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

{% endhighlight %}
{% endtabs %}


## Binding data source

After initialization, populate the Mention with data using the [`dataSource`](https://ej2.syncfusion.com/vue/documentation/api/mention/#datasource) property. Here, an array of string values is passed to the Mention component.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}

<template>
  <div id="app">
    <label id="comment" >Comments</label>
    <div id="mentionElement" placeholder = "Type @ and tag user"></div>
    <ejs-mention id='defaultMention' :target='mentionTarget' :dataSource='userData'></ejs-mention>
  </div>
</template>
<script setup>
import { MentionComponent as EjsMention } from "@syncfusion/ej2-vue-dropdowns";
const mentionTarget = "#mentionElement";
const userData = ['Selma Rose', 'Garth', 'Robert', 'William', 'Joseph'];
</script>
<style>
  @import "../node_modules/@syncfusion/ej2-base/styles/bootstrap5.css";
  @import "../node_modules/@syncfusion/ej2-buttons/styles/bootstrap5.css";
  @import "../node_modules/@syncfusion/ej2-popups/styles/bootstrap5.css";
  @import "../node_modules/@syncfusion/ej2-lists/styles/bootstrap5.css";
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

{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}

<template>
  <div id="app">
    <label id="comment" >Comments</label>
    <div id="mentionElement" placeholder = "Type @ and tag user"></div>
    <ejs-mention id='defaultMention' :target='mentionTarget' :dataSource='userData'></ejs-mention>
  </div>
</template>
<script>
import { MentionComponent } from "@syncfusion/ej2-vue-dropdowns";
export default {
  components: {
    'ejs-mention': MentionComponent
  },
  name: 'app',
  data: function() {
    return {
      mentionTarget: "#mentionElement",
      userData: ['Selma Rose', 'Garth', 'Robert', 'William', 'Joseph']
    };
  }
}
</script>
<style>
  @import "../node_modules/@syncfusion/ej2-base/styles/bootstrap5.css";
  @import "../node_modules/@syncfusion/ej2-buttons/styles/bootstrap5.css";
  @import "../node_modules/@syncfusion/ej2-popups/styles/bootstrap5.css";
  @import "../node_modules/@syncfusion/ej2-lists/styles/bootstrap5.css";
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

{% endhighlight %}
{% endtabs %}

Here is the summarized code for the above steps in the **src/App.vue** file:

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/mention/getting-started-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/mention/getting-started-cs1/app.vue %}
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
      
{% previewsample "page.domainurl/code-snippet/mention/getting-started-cs1" %}

## Display Mention character

By using the [showMentionChar](https://ej2.syncfusion.com/vue/documentation/api/mention/#showMentionChar) property, the text content can be displayed along with the mention character. You can customize the mention character by using the [mentionChar](https://ej2.syncfusion.com/vue/documentation/api/mention/#mentionChar) property in the Mention component.

> By default, the [mentionChar](https://ej2.syncfusion.com/vue/documentation/api/mention/#mentionChar) is `@` and the [showMentionChar](https://ej2.syncfusion.com/vue/documentation/api/mention/#showMentionChar) property is disabled.

The following example displays the text content along with the mention character configured as `#`.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/mention/getting-started-cs2/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/mention/getting-started-cs2/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/mention/getting-started-cs2" %}