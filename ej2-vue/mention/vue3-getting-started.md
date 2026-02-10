---
layout: post
title: Getting started vue3 with Vue Mention component | Syncfusion
description:  Checkout and learn about Getting started vue3 with Vue Mention component of Syncfusion Essential JS 2 and more details.
control: Getting started vue3 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Getting Started with the Vue Mention Component in Vue 3

This article provides a step-by-step guide for setting up a [Vite](https://vitejs.dev/) project with a JavaScript environment and integrating the Syncfusion<sup style="font-size:70%">&reg;</sup> Vue Mention component using the [Composition API](https://vuejs.org/guide/introduction.html#composition-api) / [Options API](https://vuejs.org/guide/introduction.html#options-api).

The `Composition API` is a new feature introduced in Vue.js 3 that provides an alternative way to organize and reuse component logic. It allows developers to write components as functions that use smaller, reusable functions called composition functions to manage their properties and behavior.

The `Options API` is the traditional way of writing Vue.js components, where the component logic is organized into a series of options that define the component's properties and behavior. These options include data, methods, computed properties, watchers, lifecycle hooks, and more.

## Prerequisites

[System requirements for Syncfusion<sup style="font-size:70%">&reg;</sup> Vue UI components](https://ej2.syncfusion.com/vue/documentation/system-requirements)

## Set up the Vite project

A recommended approach for beginning with Vue is to scaffold a project using [Vite](https://vitejs.dev/). To create a new Vite project, use one of the commands that are specific to either NPM or Yarn.

```bash
npm create vite@latest
```

or

```bash
yarn create vite
```

Using one of the above commands will lead you to set up additional configurations for the project as below:

1.Define the project name: We can specify the name of the project directly. Let's specify the name of the project as `my-project` for this article.

```bash
? Project name: » my-project
```

2.Select `Vue` as the framework. It will create a Vue 3 project.

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

3.Choose `JavaScript` as the framework variant to build this Vite project using JavaScript and Vue.

```bash
? Select a variant: » - Use arrow-keys. Return to submit.
> JavaScript
  TypeScript
  Customize with create-vue ↗
  Nuxt ↗
```

4.Roll-down is Vite's new experimental faster bundler (rust-based, replacing roll-up). Choose `No` uses the stable, proven roll-up-based Vite (recommended for most users)

```bash
Use rolldown-vite (Experimental)? No
```

5.Install dependencies and start the dev server.

```bash
Install with npm and start now?: Yes
```

Since you selected `Yes`, the development server should start automatically. If you selected `No`, please follow these steps to set up and start the project manually:

```bash
cd my-project
npm install
```

or

```bash
cd my-project
yarn install
```

Now that `my-project` is ready to run with default settings, let's add Syncfusion<sup style="font-size:70%">&reg;</sup> components to the project.

## Add Syncfusion<sup style="font-size:70%">&reg;</sup> Vue packages

Syncfusion<sup style="font-size:70%">&reg;</sup> Vue component packages are available at [npmjs.com](https://www.npmjs.com/search?q=ej2-vue). To use Syncfusion<sup style="font-size:70%">&reg;</sup> Vue components in the project, install the corresponding npm package.

This article uses the [Vue Mention component](https://www.syncfusion.com/vue-components/vue-mention) as an example. To use the Vue Mention component in the project, the `@syncfusion/ej2-vue-dropdowns` package needs to be installed using the following command:

```bash
npm install @syncfusion/ej2-vue-dropdowns --save
```

or

```bash
yarn add @syncfusion/ej2-vue-dropdowns
```

## Import Syncfusion<sup style="font-size:70%">&reg;</sup> CSS styles

Syncfusion<sup style="font-size:70%">&reg;</sup> components require CSS stylesheets to display correctly. You can import themes in various ways, such as using CSS or SASS styles from npm packages, CDN, CRG, and [Theme Studio](https://ej2.syncfusion.com/vue/documentation/appearance/theme-studio). Refer to [themes topic](https://ej2.syncfusion.com/vue/documentation/appearance/theme) to learn more about built-in themes and different ways to reference themes in a Vue project.

In this article, `Material3` theme is applied using CSS styles, which are available in installed packages. The necessary `Material3` CSS styles for the Mention component and its dependents were imported into the `<style>` section of **src/App.vue** file.

{% tabs %}
{% highlight html tabtitle="~/src/App.vue" %}

<style>
  @import "../node_modules/@syncfusion/ej2-base/styles/bootstrap5.css";
  @import "../node_modules/@syncfusion/ej2-vue-buttons/styles/bootstrap5.css";
  @import "../node_modules/@syncfusion/ej2-vue-popups/styles/bootstrap5.css";
  @import "../node_modules/@syncfusion/ej2-vue-list/styles/bootstrap5.css";
  @import "../node_modules/@syncfusion/ej2-vue-dropdowns/styles/bootstrap5.css";
</style>

{% endhighlight %}
{% endtabs %}

> The order of CSS imports matters. Import base styles first, then component-specific styles. Missing CSS imports can result in misaligned layouts, buttons without styling, or missing visual elements in popups and dialogs.

## Add Syncfusion<sup style="font-size:70%">&reg;</sup> Vue component

Follow the below steps to add the Vue Mention component using `Composition API` or `Options API`:

  1.First, import and register the Mention component in the `script` section of the **src/App.vue** file. If you are using the `Composition API`, you should add the `setup` attribute to the `script` tag to indicate that Vue will be using the `Composition API`.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}

<script setup>
  import { MentionComponent as EjsMention } from "@syncfusion/ej2-vue-dropdowns";
</script>

{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}

<script>
import { MentionComponent } from "@syncfusion/ej2-vue-dropdowns";
//Component registration
export default {
    name: "App",
    components: {
      'ejs-mention' : MentionComponent,
    }
}
</script>

{% endhighlight %}
{% endtabs %}
   
2.In the `template` section, define the Mention component with the [dataSource](https://ej2.syncfusion.com/vue/documentation/api/mention#datasource) property and column definitions.

{% tabs %}
{% highlight html tabtitle="~/src/App.vue" %}

<template>
    <div class="control_wrapper">
        <label style="font-size: 15px; font-weight: 600;">Comments</label>
        <div id="mentionElement" style="min-height: 100px; border: 1px solid #D7D7D7; border-radius: 4px; padding: 8px; font-size: 14px; width: 600px;"></div>
        <ejs-mention id='defaultMention' :target='mentionTarget' :dataSource='userData'></ejs-mention>
    </div>
</template>

{% endhighlight %}
{% endtabs %}

Here is the summarized code for the above steps in the **src/App.vue** file:

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}

<template>
    <div class="control_wrapper">
        <label id="comment" >Comments</label>
        <div id="mentionElement" placeholder = "Type # and tag user"></div>
        <ejs-mention id='defaultMention' :target='data[0].mentionTarget' :dataSource='data[0].userData'></ejs-mention>
    </div>
</template>
<script setup>
    import { MentionComponent as EjsMention } from "@syncfusion/ej2-vue-dropdowns";
    
    const data = [{ target: "#mentionElement",
                userData: ['Selma Rose', 'Garth', 'Robert', 'William', 'Joseph'] }]
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
    <div class="control_wrapper">
        <label id="comment" >Comments</label>
        <div id="mentionElement" placeholder = "Type # and tag user"></div>
        <ejs-mention id='defaultMention' :target='mentionTarget' :dataSource='userData'></ejs-mention>
    </div>
</template>
<script>
    import { MentionComponent } from "@syncfusion/ej2-vue-dropdowns";
    //Component registration
    export default {
        name: 'App',
        components: {
            "ejs-mention": MentionComponent
        },
        data () {
            return {
                target: "#mentionElement",
                userData: ['Selma Rose', 'Garth', 'Robert', 'William', 'Joseph']
            }
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

## Run the project

To run the project, use the following command:

```bash
npm run dev
```

or

```bash
yarn run dev
```

## Display Mention character

By using the [showMentionChar](https://ej2.syncfusion.com/vue/documentation/api/mention/index-default#showMentionChar) property, the text content can be displayed along with the mention character. You can customize the mention character by using the [mentionChar](https://ej2.syncfusion.com/vue/documentation/api/mention/index-default#mentionChar) property in the Mention component.

> By default, the [mentionChar](https://ej2.syncfusion.com/vue/documentation/api/mention/index-default#mentionChar) is `@` and the [showMentionChar](https://ej2.syncfusion.com/vue/documentation/api/mention/index-default#showMentionChar) property is disabled.

The following example code displays the text content along with the mention character configured as `#`.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}

<template>
    <div id="app">
        <label id="comment" >Comments</label>
        <div id="mentionElement" placeholder = "Type # and tag user"></div>
        <ejs-mention id='defaultMention' showMentionChar='true' mentionChar='#' :target='data[0].mentionTarget' :dataSource='data[0].userData'></ejs-mention>
  </div>
</template>
<script setup>
    import { MentionComponent as EjsMention } from "@syncfusion/ej2-vue-dropdowns";
    
    const data = [{ mentionTarget: "#mentionElement",
                  userData: ['Selma Rose', 'Garth', 'Robert', 'William', 'Joseph']}]
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
    }
</style>

{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}

<template>
    <div id="app">
        <label id="comment" >Comments</label>
        <div id="mentionElement" placeholder = "Type # and tag user"></div>
        <ejs-mention id='defaultMention' showMentionChar='true' mentionChar='#' :target='mentionTarget' :dataSource='userData'></ejs-mention>
  </div>
</template>
<script>
    import { MentionComponent } from "@syncfusion/ej2-vue-dropdowns";
    //Component registration
    export default {
        name: 'App',
        components: {
            "ejs-mention": MentionComponent
        },
        data () {
            return {
                mentionTarget: "#mentionElement",
                userData: ['Selma Rose', 'Garth', 'Robert', 'William', 'Joseph']
            }
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
    }
</style>

{% endhighlight %}
{% endtabs %}

