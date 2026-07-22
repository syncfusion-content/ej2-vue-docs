---
layout: post
title: Getting started vue3 with Vue Chat UI | Syncfusion
description:  Checkout and learn about Getting started vue3 with Vue Chat UI component of Syncfusion Essential JS 2 and more details.
control: Chat UI
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Getting Started with the Vue Chat UI Component in Vue 3

This article provides a step-by-step guide for setting up a [Vite](https://vitejs.dev/) project with a JavaScript environment and integrating the Syncfusion<sup style="font-size:70%">&reg;</sup> Vue Chat UI component using the [Composition API](https://vuejs.org/guide/introduction.html#composition-api) / [Options API](https://vuejs.org/guide/introduction.html#options-api).

The `Composition API` is a new feature introduced in Vue.js 3 that provides an alternative way to organize and reuse component logic. It allows developers to write components as functions that use smaller, reusable functions called composition functions to manage their properties and behavior.

The `Options API` is the traditional way of writing Vue.js components, where the component logic is organized into a series of options that define the component's properties and behavior. These options include data, methods, computed properties, watchers, lifecycle hooks, and more.

## Prerequisites

| Requirement | Version |
|-------------|---------|
| Vue | 3.x |
| Node.js | 16.0.0 or above |

### Vue supported versions

| Vue version | Minimum Syncfusion Vue Chat UI version |
| ------------- | ------------------------------------------- |
|[Vue v2.7](https://blog.vuejs.org/posts/vue-2-7-naruto) | 20.3.47 and above |
|[Vue v3.0](https://blog.vuejs.org/posts/vue-3-as-the-new-default) | 19.2.44 and above |

### Browser support

| Browser | Supported versions |
|---|---|
| Chrome | Latest |
| Firefox | Latest |
| Opera | Latest |
| Edge | 13+ |
| Internet Explorer (IE) | 11+ |
| Safari | 9+ |
| iOS Safari | 9+ |
| Android Browser / Chrome for Android | 4.4+ |
| Windows Mobile | IE 11+ |

## Setup for local development

Easily set up a Vue 3 application using [Vite](https://vitejs.dev/), which provides a faster development environment, smaller bundle sizes, and optimized builds compared to traditional tools. For detailed steps, refer to the Vite [installation instructions](https://vitejs.dev/guide).

To create a new Vue 3 application, run one of the following commands based on your preferred language:

**Vue with JavaScript**

```bash
npm create vite@latest my-app -- --template vue
```

**Vue with TypeScript**

```bash
npm create vite@latest my-app -- --template vue-ts
```

During the setup process, the CLI will prompt you for a few configuration options. Select the following:

- **Which linter to use?** → **Default ([Vue 3] babel, eslint)**
- **Install with npm and start now?** → **Yes**

Selecting **Yes** automatically installs the project dependencies and starts the development server.

After verifying that the application starts successfully, terminate the development server in the terminal and proceed to the next step.

Then, navigate to the project directory:

```bash
cd my-app
```

## Add Vue Chat UI packages

To install the Chat UI package, use the following command:

```bash
npm install @syncfusion/ej2-vue-interactive-chat --save
```

or

```bash
yarn add @syncfusion/ej2-vue-interactive-chat
```

> Before including Syncfusion styles, make sure to remove the default styles defined in **src/style.css**. This helps prevent unintended style overrides and ensures that Syncfusion components render correctly.

## Adding CSS reference

Themes for Syncfusion<sup style="font-size:70%">&reg;</sup> Vue components can be applied using CSS files provided through [npm theme packages](https://www.npmjs.com/package/@syncfusion/ej2-material3-theme). For available themes, refer to the [Themes](https://ej2.syncfusion.com/vue/documentation/appearance/theme) documentation.

Install the **Material 3** theme package using the following command:

{% tabs %}
{% highlight bash tabtitle="npm" %}

npm install @syncfusion/ej2-material3-theme --save

{% endhighlight %}
{% endtabs %}

Then add the following CSS reference to the **src/App.vue** file:

{% tabs %}
{% highlight html tabtitle="Composition API ~/src/App.vue" %}

<style>
    @import "../node_modules/@syncfusion/ej2-material3-theme/styles/chat-ui/index.css";
</style>

{% endhighlight %}
{% endtabs %}

## Adding Chat UI component

The Chat UI code should be added in the **src/App.vue** file.

The [user](../api/chat-ui#user) property assigns an identity to the current user, which is essential for distinguishing the user's messages from those of other participants.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/chat-ui/defaultMessage/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/chat-ui/defaultMessage/app.vue %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chat-ui/defaultMessage" %}

## Run the application

```bash
npm run dev
```

or

```bash
yarn run dev
```

## Registering your Syncfusion license

Generate a license key from the [Syncfusion License Dashboard](https://www.syncfusion.com/account/downloads) and register it before rendering your Vue 3 application:

{% tabs %}
{% highlight html tabtitle="main.js" %}

```javascript
import { registerLicense } from '@syncfusion/ej2-base';

registerLicense('YOUR_LICENSE_KEY');
```

{% endhighlight %}
{% endtabs %}

> **Note:** A valid Syncfusion license is required for production use. Without a valid license, a trial license warning message will be displayed.

## Troubleshooting

- **Chat UI not rendering styles:** Ensure the theme CSS is imported in `src/App.vue` and that any default Vite starter styles are not overriding the Chat UI styles.
- **Trial license warning banner:** Register a license key via `registerLicense()` from `@syncfusion/ej2-base`.

## See also

* [Getting Started with Vue UI Components using Composition API and TypeScript](../getting-started/vue-3-ts-composition.md)
* [Getting Started with Vue UI Components using Options API and TypeScript](../getting-started/vue-3-ts-options.md)
