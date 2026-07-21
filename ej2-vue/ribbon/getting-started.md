---
layout: post
title: Getting started with Vue Ribbon component | Syncfusion
description:  Checkout and learn about Getting started with Syncfusion Vue Ribbon component of Syncfusion Essential JS 2 and more.
control: Ribbon
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Getting Started with the Vue Ribbon Component in Vue 2

This article provides a step-by-step guide for setting up a Vue 2 project using [Vue-CLI](https://cli.vuejs.org/) and integrating the Syncfusion<sup style="font-size:70%">&reg;</sup> Vue Ribbon component.

## Prerequisites

| Requirement | Version |
|-------------|---------|
| Vue | 2.6 or higher |
| Node.js | 16.0.0 or above |

### Vue supported versions

| Vue version | Minimum Syncfusion Vue Ribbon version |
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

## Setup the Vue 2 project

Easily set up a Vue 2 application using Vue CLI, which provides a reliable development environment, a streamlined project structure, and optimized builds compared to older setup tools. For detailed steps, refer to the Vue CLI [installation instructions](https://cli.vuejs.org/guide/installation.html).

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

## Adding Vue Ribbon packages

To install the Ribbon package, use the following command:

```bash
npm install @syncfusion/ej2-vue-ribbon --save
```

or

```bash
yarn add @syncfusion/ej2-vue-ribbon
```

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
{% highlight html tabtitle="Options API ~/src/App.vue" %}

<style>
    @import "../node_modules/@syncfusion/ej2-material3-theme/styles/ribbon/index.css";
</style>

{% endhighlight %}
{% endtabs %}

## Adding Ribbon component

The Ribbon code should be added in the **src/App.vue** file.

{% tabs %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/ribbon/getting-started-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/ribbon/getting-started-cs1" %}

## Run the application

```bash
npm run serve
```

or

```bash
yarn run serve
```

## Registering your Syncfusion license

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

## Adding Ribbon tab

In Ribbon, the options are arranged in tabs for easy access. You can use the `e-ribbon-tab` directive to define the ribbon tab like below.

{% tabs %}
{% highlight html tabtitle="~/src/App.vue" %}

<template>
  <ejs-ribbon id="ribbon">
    <e-ribbon-tabs>
      <e-ribbon-tab header="Home"></e-ribbon-tab>
    </e-ribbon-tabs>
  </ejs-ribbon>
</template>

<script>
  import { RibbonComponent, RibbonTabDirective, RibbonTabsDirective } from "@syncfusion/ej2-vue-ribbon";
  export default {
    components: {
      'ejs-ribbon': RibbonComponent,
      'e-ribbon-tab': RibbonTabDirective,
      'e-ribbon-tabs': RibbonTabsDirective
    }
  };
</script>

{% endhighlight %}
{% endtabs %}

## Adding Ribbon group

To define a ribbon group under each tab, you can use the `<e-ribbon-group>` selector like below. The `orientation` property of ribbon group defines whether the collection of items will be rendered column-wise or row-wise.

{% tabs %}
{% highlight html tabtitle="~/src/App.vue" %}

<template>
  <ejs-ribbon id="ribbon">
    <e-ribbon-tabs>
      <e-ribbon-tab header="Home">
        <e-ribbon-groups>
          <e-ribbon-group header="Clipboard" orientation="Row"></e-ribbon-group>
        </e-ribbon-groups>
      </e-ribbon-tab>
    </e-ribbon-tabs>
  </ejs-ribbon>
</template>

<script>
import { RibbonComponent, RibbonTabDirective, RibbonTabsDirective, RibbonGroupDirective, RibbonGroupsDirective } from "@syncfusion/ej2-vue-ribbon";
export default {
  components: {
    'ejs-ribbon': RibbonComponent,
    'e-ribbon-tab': RibbonTabDirective,
    'e-ribbon-tabs': RibbonTabsDirective,
    'e-ribbon-groups': RibbonGroupsDirective,
    'e-ribbon-group': RibbonGroupDirective
  }
};
</script>

{% endhighlight %}
{% endtabs %}

## Adding Ribbon items

You can use the `e-ribbon-collection` selector to define each ribbon collection that contains one or more items. To define each ribbon item, you can use the `e-ribbon-item` selector and the `type` property to specify the type of component to be rendered, like a button, a drop-down button, a combo box, and more.

{% tabs %}
{% highlight html tabtitle="~/src/App.vue" %}

<template>
  <ejs-ribbon id="ribbon">
    <e-ribbon-tabs>
      <e-ribbon-tab header="Home">
        <e-ribbon-groups>
          <e-ribbon-group header="Clipboard" orientation="Column">
            <e-ribbon-collections>
              <e-ribbon-collection id="paste-collection">
                <e-ribbon-items>
                  <e-ribbon-item type="SplitButton" :splitButtonSettings="pasteSettings"></e-ribbon-item>
                </e-ribbon-items>
              </e-ribbon-collection>
              <e-ribbon-collection id="cutcopy-collection">
                <e-ribbon-items>
                  <e-ribbon-item type="Button" :buttonSettings="cutButton"></e-ribbon-item>
                  <e-ribbon-item type="Button" :buttonSettings="copyButton"></e-ribbon-item>
                </e-ribbon-items>
              </e-ribbon-collection>
            </e-ribbon-collections>
          </e-ribbon-group>
        </e-ribbon-groups>
      </e-ribbon-tab>
    </e-ribbon-tabs>
  </ejs-ribbon>
</template>

<script>
  import { RibbonComponent, RibbonTabDirective, RibbonTabsDirective, RibbonGroupDirective, RibbonGroupsDirective, RibbonCollectionDirective, RibbonCollectionsDirective, RibbonItemDirective, RibbonItemsDirective } from "@syncfusion/ej2-vue-ribbon";

  export default {
    components: {
      'ejs-ribbon': RibbonComponent,
      'e-ribbon-tab': RibbonTabDirective,
      'e-ribbon-tabs': RibbonTabsDirective,
      'e-ribbon-group': RibbonGroupDirective,
      'e-ribbon-groups': RibbonGroupsDirective,
      'e-ribbon-collection': RibbonCollectionDirective,
      'e-ribbon-collections': RibbonCollectionsDirective,
      'e-ribbon-item': RibbonItemDirective,
      'e-ribbon-items': RibbonItemsDirective
    },
    data: function () {
      return {
        pasteSettings:{ 
          iconCss: "e-icons e-paste", content: "Paste",
          items: [{ text: "Keep Source Format" }, { text: "Merge format" }, { text: "Keep text only" }]
        },
        cutButton:  { iconCss: "e-icons e-cut", content: "Cut" },
        copyButton:  { iconCss: "e-icons e-copy", content: "Copy" }
      }
    }
  };
</script>

{% endhighlight %}
{% endtabs %}

## Troubleshooting

- **Ribbon not rendering styles:** Ensure the theme CSS is imported in `src/App.vue` and that any default Vue CLI starter styles are not overriding the Ribbon styles.
- **Trial license warning banner:** Register a license key via `registerLicense()` from `@syncfusion/ej2-base`.
