---
layout: post
title: Getting started with Vue Data Grid component | Syncfusion
description:  Checkout and learn about Getting started with Vue Data Grid component of Syncfusion Essential JS 2 and more details.
control: Getting started 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Getting Started with the Vue Data Grid Component in Vue 2

This article provides a step-by-step guide for setting up a Vue 2 project using [Vue-CLI](https://cli.vuejs.org) and integrating the [Vue Data Grid](https://www.syncfusion.com/vue-components/vue-grid) component.

To get started quickly with Vue Data Grid, check this video:

{% youtube "https://www.youtube.com/watch?v=pU0ERPrY2go" %}

## Prerequisites

| Requirement | Version |
|-------------|---------|
| Vue | 2.6 or higher |
| Node.js | 16.0.0 or above |

### Vue supported versions

| Vue version | Minimum Syncfusion Vue Data Grid version |
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

Syncfusion® Vue Data Grid includes built-in support for common security practices such as Cross-Site Scripting (XSS) protection, Content Security Policy (CSP) compliance, Cross-Site Request Forgery (CSRF) prevention, and protection against injection attacks. These features help build secure and enterprise-ready applications.

## Setup the Vue 2 project

Easily set up a Vue 2 application using Vue CLI, which provides a reliable development environment, a streamlined project structure, and optimized builds compared to older setup tools. For detailed steps, refer to the Vue CLI [installation instructions](https://cli.vuejs.org/guide/installation.html).

> **Note:** To create a Vue 2 application using Vue CLI, refer to this [documentation](https://ej2.syncfusion.com/vue/documentation/getting-started/vue-2-vue-cli) for more details.

To create a new Vue 2 application, run the following commands based on your preferred package manager:


```bash
npm install -g @vue/cli
vue create quickstart
```

or

```bash
yarn global add @vue/cli
vue create quickstart
```

During the setup process, the CLI will prompt you for a few configuration options. Select the following:

- **Which linter to use?** → **Default ([Vue 2] babel, eslint)**
- **Install with npm and start now?** → **Yes**

Selecting **Yes** automatically installs the project dependencies and starts the development server.

After verifying that the application starts successfully, terminate the development server in the terminal and proceed to the next step.

Navigate to the project directory:

```bash
cd quickstart
```

## Adding Vue Grid packages

To install the Grids package, use the following command:

```bash
npm install @syncfusion/ej2-vue-grids --save
```
or

```bash
yarn add @syncfusion/ej2-vue-grids
```

## Adding CSS reference

Themes for Syncfusion<sup style="font-size:70%">&reg;</sup> Data Grid components can be applied using CSS files provided through [npm theme packages](https://www.npmjs.com/package/@syncfusion/ej2-material3-theme). For available themes, refer to the [Themes](https://ej2.syncfusion.com/vue/documentation/appearance/theme) documentation.
 
Install the **Material 3** theme package using the following command:

{% tabs %}
{% highlight bash tabtitle="npm" %}
 
npm install @syncfusion/ej2-material3-theme --save
 
{% endhighlight %}
{% endtabs %}
 
Then add the following CSS reference to the **src/App.vue** file:

{% tabs %}
{% highlight html tabtitle="Options API ~/src/App.vue" %}

<style>
    @import "../node_modules/@syncfusion/ej2-material3-theme/styles/grid/index.css";
</style>

{% endhighlight %}
{% endtabs %}

## Adding Data Grid component

The Data Grid code should be added in the **src/App.vue** file.

{% tabs %}
{% highlight html tabtitle="Options API ~/src/App.vue" %}
{% include code-snippet/grid/getting-started/default-cs6/app.vue %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/grid/getting-started/default-cs6" %}

## Registering Your Syncfusion License

Generate a license key from the [Syncfusion License Dashboard](https://www.syncfusion.com/account/downloads) and register it before rendering your Vue 2 application:

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
npm run serve
```

or

```bash
yarn run serve
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

- **Grid not rendering styles:** Ensure the theme CSS is imported in `src/App.vue` and that you removed any default Vue CLI starter styles that may override the Grid styles.
- **Trial license warning banner:** Register a license key via `registerLicense()` from `@syncfusion/ej2-base`.
- **Port 8080 already in use:** Stop the conflicting process or run the Vue CLI dev server on a different port with `npm run serve -- --port 3000`.

## See also

* [Data Grid Feature Modules](./module)
* [Getting Started with the Vue Data Grid Component in Vue 3](https://ej2.syncfusion.com/vue/documentation/grid/vue-3-getting-started)
* [Testing the Vue Data Grid](https://www.syncfusion.com/forums/140772/testing-the-vue-grid)
* [Switching themes programmatically in Vue Data Grid](https://www.syncfusion.com/forums/145386/switching-themes-programmatically-in-vue-grid)