---
layout: post
title: Getting started vue 3 with Vue Toast component | Syncfusion
description:  Checkout and learn about Getting started vue 3 with Vue Toast component of Syncfusion Essential JS 2 and more details.
control: Getting started vue 3 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Getting Started with the Vue Toast Component in Vue 3

This article provides a step-by-step guide for setting up a [Vite](https://vitejs.dev/) project with a JavaScript environment and integrating the Syncfusion<sup style="font-size:70%">&reg;</sup> Vue Toast component using the [Composition API](https://vuejs.org/guide/introduction.html#composition-api) / [Options API](https://vuejs.org/guide/introduction.html#options-api).

The `Composition API` is a new feature introduced in Vue.js 3 that provides an alternative way to organize and reuse component logic. It allows developers to write components as functions that use smaller, reusable functions called composition functions to manage their properties and behavior.

The `Options API` is the traditional way of writing Vue.js components, where the component logic is organized into a series of options that define the component's properties and behavior. These options include data, methods, computed properties, watchers, lifecycle hooks, and more.

## Prerequisites

[System requirements for Syncfusion<sup style="font-size:70%">&reg;</sup> Vue UI components](https://ej2.syncfusion.com/vue/documentation/system-requirements/)

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

4.Upon completing the aforementioned steps to create the `my-project`, run the following command to install its dependencies:

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

This article uses the [Vue Toast component](https://www.syncfusion.com/vue-components/vue-toaster) as an example. To use the Vue Toast component in the project, the `@syncfusion/ej2-vue-notifications` package needs to be installed using the following command:

```bash
npm install @syncfusion/ej2-vue-notifications --save
```

or

```bash
yarn add @syncfusion/ej2-vue-notifications
```

## Import Syncfusion<sup style="font-size:70%">&reg;</sup> CSS styles

You can import themes for the Syncfusion<sup style="font-size:70%">&reg;</sup> Vue component in various ways, such as using CSS or SASS styles from npm packages, CDN, [CRG](https://ej2.syncfusion.com/javascript/documentation/common/custom-resource-generator/) and [Theme Studio](https://ej2.syncfusion.com/vue/documentation/appearance/theme-studio/). Refer to [themes topic](https://ej2.syncfusion.com/vue/documentation/appearance/theme/) to know more about built-in themes and different ways to refer to themes in a Vue project.

In this article, `Material` theme is applied using CSS styles, which are available in installed packages. The necessary `Material` CSS styles for the Toast component and its dependents were imported into the `<style>` section of **src/App.vue** file.

{% tabs %}
{% highlight html tabtitle="~/src/App.vue" %}

<style>
  @import "../node_modules/@syncfusion/ej2-base/styles/material.css";
  @import "../node_modules/@syncfusion/ej2-vue-notifications/styles/material.css";
</style>

{% endhighlight %}
{% endtabs %}

> The order of importing CSS styles should be in line with its dependency graph.

## Add Syncfusion<sup style="font-size:70%">&reg;</sup> Vue component

Follow the below steps to add the Vue Toast component using `Composition API` or `Options API`:

  1.First, import and register the Toast component in the `script` section of the **src/App.vue** file. If you are using the `Composition API`, you should add the `setup` attribute to the `script` tag to indicate that Vue will be using the `Composition API`.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}

<script setup>
  import { ToastComponent as EjsToast } from "@syncfusion/ej2-vue-notifications";
</script>

{% endhighlight %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% raw %}
<script setup>
import { ToastComponent } from "@syncfusion/ej2-vue-notifications";
//Component registeration
  export default {
    name: "App",
    components: {
      "ejs-toast": ToastComponent,
    }
  }
</script>
{% endraw %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}

<script>
import { ToastComponent } from "@syncfusion/ej2-vue-notifications";
//Component registeration
  export default {
name: "App",
components: {
"ejs-toast":":Toast":Component

},

    name: "App",
    components: {
      "ejs-toast": ToastComponent,
    }
  }
</script>

{% endhighlight %}
{% endtabs %}
   
2.In the `template` section, define the Toast component with the [dataSource](https://ej2.syncfusion.com/vue/documentation/api/toast/#datasource) property and column definitions.

{% tabs %}
{% highlight html tabtitle="~/src/App.vue" %}

<template>
  <div id="app">
    <ejs-toast ref='defaultRef' title='Matt sent you a friend request' timeOut=0 content='Hey, wanna dress up as wizards and ride our hoverboards?'></ejs-toast>
  </div>
</template>

{% endhighlight %}
{% endtabs %}

Here is the summarized code for the above steps in the **src/App.vue** file:

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}

<template>
  <div id="app">
    <ejs-toast
      id="toast_default"
      ref="defaultRef"
      title="Adaptive Tiles Meeting"
      timeOut="0"
      icon="e-meeting"
      content="Conference Room 01 / Building 135 10:00 AM-10:30 AM"
    ></ejs-toast>
  </div>
</template>
<script setup>
  import { ToastComponent as EjsToast } from "@syncfusion/ej2-vue-notifications";
  import { ref, onMounted } from 'vue';
    const defaultRef = ref(null);
    onMounted(() => {
       defaultRef.value.show();
    });
</script>
<style>
  @import "../node_modules/@syncfusion/ej2-base/styles/material.css";
  @import "../node_modules/@syncfusion/ej2-vue-notifications/styles/material.css";
  #toast_default .e-meeting::before {
    content: "\e705";
    font-size: 17px;
  }
  .bootstrap4 #toast_default .e-meeting::before {
    content: "\e763";
    font-size: 20px;
  }
</style>

{% endhighlight %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% raw %}
<template>
  <div id="app">
    <ejs-toast
      id="toast_default"
      ref="defaultRef"
      title="Adaptive Tiles Meeting"
      timeOut="0"
      icon="e-meeting"
      content="Conference Room 01 / Building 135 10:00 AM-10:30 AM"
    ></ejs-toast>
  </div>
</template>
<script setup>
  import { ToastComponent } from "@syncfusion/ej2-vue-notifications";
  export default {
      name: "App",
      components: {
        "ejs-toast": ToastComponent,
      },
      mounted: function () {
        this.$refs.defaultRef.show();
      },
      data: function () {
        return {};
      },
  };
</script>
<style>
  @import "../node_modules/@syncfusion/ej2-base/styles/material.css";
  @import "../node_modules/@syncfusion/ej2-vue-notifications/styles/material.css";
  #toast_default .e-meeting::before {
    content: "\e705";
    font-size: 17px;
  }
  .bootstrap4 #toast_default .e-meeting::before {
    content: "\e763";
    font-size: 20px;
  }
</style>
{% endraw %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}

<template>
  <div id="app">
    <ejs-toast
      id="toast_default"
      ref="defaultRef"
      title="Adaptive Tiles Meeting"
      timeOut="0"
      icon="e-meeting"
      content="Conference Room 01 / Building 135 10:00 AM-10:30 AM"
    ></ejs-toast>
  </div>
</template>
<script>
  import { ToastComponent } from "@syncfusion/ej2-vue-notifications";
  export default {
name: "App",
components: {
"ejs-toast
":Toast
Component,
"ejs-toast":ToastComponent,
"ejs-toast":":Toast":Component

},

      name: "App",
      components: {
        "ejs-toast": ToastComponent,
      },
      mounted: function () {
        this.$refs.defaultRef.show();
      },
      data: function () {
        return {};
      },
  };
</script>
<style>
  @import "../node_modules/@syncfusion/ej2-base/styles/material.css";
  @import "../node_modules/@syncfusion/ej2-vue-notifications/styles/material.css";
  #toast_default .e-meeting::before {
    content: "\e705";
    font-size: 17px;
  }
  .bootstrap4 #toast_default .e-meeting::before {
    content: "\e763";
    font-size: 20px;
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

Web server will be initiated, Open the quick start app in the browser at port [`localhost:8080`](http://localhost:8080/).

The output will appear as follows:

![Output](./images/toast.png)