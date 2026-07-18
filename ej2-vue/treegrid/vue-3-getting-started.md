---
layout: post
title: Vue 3 getting started with the Tree Grid component | Syncfusion
description: Check out and learn about Vue 3 getting started with the Vue Tree Grid component of Syncfusion Essential JS 2 and more details.
control: Vue 3 getting started
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Getting Started with the Vue Tree Grid Component in Vue 3

This article provides a step-by-step guide for setting up a [Vite](https://vitejs.dev/) project with a JavaScript environment and integrating the Syncfusion<sup style="font-size:70%">&reg;</sup> Vue Tree Grid component using the [Composition API](https://vuejs.org/guide/introduction.html#composition-api) / [Options API](https://vuejs.org/guide/introduction.html#options-api).

The `Composition API`, introduced in Vue.js 3, provides an alternative way to organize and reuse component logic.

The `Options API` is the traditional approach to writing Vue.js components, organizing component logic into a series of options that define the component's properties and behavior. These options include data, methods, computed properties, watchers, life cycle hooks, and more.

## Prerequisites

| Requirement | Version |
|-------------|---------|
| Vue | 2.6 or higher |
| Node.js | 16.0.0 or above |

### Vue supported versions

| Vue version | Minimum Syncfusion Vue Tree Grid version |
| ------------- | ------------------------------------------- |
|[Vue v2.7](https://blog.vuejs.org/posts/vue-2-7-naruto) | 20.3.47 and above |
|[Vue v3.0](https://blog.vuejs.org/posts/vue-3-as-the-new-default) | 19.2.44 and above |

### Browser Support

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

### Security

Syncfusion® Vue Tree Grid includes built-in support for common security practices such as Cross-Site Scripting (XSS) protection, Content Security Policy (CSP) compliance, Cross-Site Request Forgery (CSRF) prevention, and protection against injection attacks. These features help build secure and enterprise-ready applications.

## Setup for local development

Easily set up a Vue 3 application using [Vite](https://vitejs.dev), which provides a faster development environment, smaller bundle sizes, and optimized builds compared to traditional tools. For detailed steps, refer to the Vite [installation instructions](https://vitejs.dev/guide). Vite sets up your environment using JavaScript and optimizes your application for production.

> **Note:** To create a Vue application using `create-vue`, refer to this [documentation](https://ej2.syncfusion.com/vue/documentation/getting-started/) for more details.

To create a new Vue 3 application, run one of the following commands based on your preferred language:

***Vue with JavaScript***

```bash
npm create vite@latest my-app -- --template vue
```

***Vue with TypeScript***

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

## Add Vue Tree Grid packages

To install the Tree Grid component, use the following command:

```bash
npm install @syncfusion/ej2-vue-treegrid --save
```

or

```bash
yarn add @syncfusion/ej2-vue-treegrid
```

> Before including Syncfusion styles, make sure to remove the default styles defined in **style.css**. This helps prevent unintended style overrides and ensures that Syncfusion components render correctly.


## Adding CSS reference

Themes for Syncfusion<sup style="font-size:70%">&reg;</sup> Tree Grid components can be applied using CSS files provided through [npm theme packages](https://www.npmjs.com/package/@syncfusion/ej2-material3-theme). For available themes, refer to the [Themes](https://ej2.syncfusion.com/vue/documentation/appearance/theme) documentation.
 
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
    @import "../node_modules/@syncfusion/ej2-material3-theme/styles/treegrid/index.css";
</style>

{% endhighlight %}
{% endtabs %}

## Adding Tree Grid component

The tree grid code should be added in the **src/App.vue** file.

{% tabs %}
{% highlight html tabtitle="Composition API ~/src/App.vue" %}
{% include code-snippet/treegrid/getting-started/default-cs4/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API ~/src/App.vue" %}
{% include code-snippet/treegrid/getting-started/default-cs4/app.vue %}
{% endhighlight %}
{% endtabs %}
   
{% previewsample "page.domainurl/code-snippet/treegrid/getting-started/default-cs4" %}

## Registering Your Syncfusion License

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

## Run the application

```bash
npm run dev
```

or

```bash
yarn run dev
```

## Production build

To create an optimized production build:

```bash
npm run build
```

Preview the production build locally by serving the generated `dist` folder with a static server:

```bash
npx serve dist
```

## Troubleshooting

- **Tree Grid not rendering styles:** Ensure the theme CSS is imported in `src/App.vue` and that you removed any default Vue CLI starter styles that may override the Tree Grid styles.
- **Trial license warning banner:** Register a license key via `registerLicense()` from `@syncfusion/ej2-base`.
- **Port 8080 already in use:** Stop the conflicting process or run the Vue CLI dev server on a different port with `npm run serve -- --port 3000`.

## See also

* [Grid Feature Modules](./module)
* [Getting Started with Vue UI Components using Composition API and TypeScript](../getting-started/vue-3-ts-composition.md)
* [Getting Started with Vue UI Components using Options API and TypeScript](../getting-started/vue-3-ts-options.md)
