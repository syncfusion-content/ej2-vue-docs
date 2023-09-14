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

This article provides a step-by-step guide for setting up a Vue 2 project using [Vue-CLI](https://cli.vuejs.org/) and integrating the Syncfusion Vue Ribbon component

## Prerequisites

[System requirements for Syncfusion Vue UI components](https://ej2.syncfusion.com/vue/documentation/system-requirements/)

## Dependencies

The following list of dependencies are required to use the Ribbon component in your application.

```js
|-- @syncfusion/ej2-vue-ribbon
    |-- @syncfusion/ej2-vue-base
    |-- @syncfusion/ej2-base
    |-- @syncfusion/ej2-data
    |-- @syncfusion/ej2-buttons
    |-- @syncfusion/ej2-popups
    |-- @syncfusion/ej2-splitbuttons
    |-- @syncfusion/ej2-inputs
    |-- @syncfusion/ej2-lists
    |-- @syncfusion/ej2-dropdowns    
    |-- @syncfusion/ej2-navigations        
    |-- @syncfusion/ej2-ribbon
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

![Vue 2 project](../appearance/images/vue2-terminal.png)

Once the `quickstart` project is set up with default settings, proceed to add Syncfusion components to the project.

## Add Syncfusion Vue packages

Syncfusion packages are available at [npmjs.com](https://www.npmjs.com/search?q=ej2-vue). To use Vue components, install the required npm package.

This article uses the [Vue Ribbon component](https://www.syncfusion.com/vue-components/vue-ribbon) as an example. Install the `@syncfusion/ej2-vue-ribbon` package by running the following command:

```bash
npm install @syncfusion/ej2-vue-ribbon --save
```
or

```bash
yarn add @syncfusion/ej2-vue-ribbon
```

## Import Syncfusion CSS styles

You can import themes for the Syncfusion Vue component in various ways, such as using CSS or SASS styles from npm packages, CDN, [CRG](https://ej2.syncfusion.com/javascript/documentation/common/custom-resource-generator/) and [Theme Studio](https://ej2.syncfusion.com/vue/documentation/appearance/theme-studio/). Refer to [themes topic](https://ej2.syncfusion.com/vue/documentation/appearance/theme/) to know more about built-in themes and different ways to refer to themes in a Vue project.

In this article, the `Material` theme is applied using CSS styles, which are available in installed packages. The necessary `Material` CSS styles for the Ribbon component and its dependents were imported into the `<style>` section of **src/App.vue** file.

{% tabs %}
{% highlight html tabtitle="~/src/App.vue" %}

<style>
@import "../node_modules/@syncfusion/ej2-base/styles/material.css";
@import "../node_modules/@syncfusion/ej2-buttons/styles/material.css";  
@import "../node_modules/@syncfusion/ej2-popups/styles/material.css";
@import "../node_modules/@syncfusion/ej2-splitbuttons/styles/material.css";
@import "../node_modules/@syncfusion/ej2-inputs/styles/material.css";
@import "../node_modules/@syncfusion/ej2-lists/styles/material.css";
@import "../node_modules/@syncfusion/ej2-dropdowns/styles/material.css";
@import "../node_modules/@syncfusion/ej2-navigations/styles/material.css";
@import "../node_modules/@syncfusion/ej2-vue-ribbon/styles/material.css";
</style>

{% endhighlight %}
{% endtabs %}

## Add Syncfusion Vue component

Follow the below steps to add the Vue Ribbon component using:

1\. First, import and register the Ribbon component in the `script` section of the **src/App.vue** file.

{% tabs %}
{% highlight html tabtitle="~/src/App.vue" %}

<script>
import { RibbonPlugin } from "@syncfusion/ej2-vue-ribbon";
export default {
    components: {
      'ejs-ribbon': RibbonComponent
    }
}
</script>

{% endhighlight %}
{% endtabs %}

2\. In the `template` section, define the Ribbon component.

{% tabs %}
{% highlight html tabtitle="~/src/App.vue" %}

<template>
  <ejs-ribbon id="ribbon"></ejs-ribbon>
</template>

{% endhighlight %}
{% endtabs %}

## Adding Ribbon Tab

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

## Adding Ribbon Group

To define a ribbon group under each tab, you can use the `e-ribbon-group` directive like below. The `orientation` property of ribbon group defines whether the collection of items will be rendered column-wise or row-wise.

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

## Adding Ribbon Items

You can use the `e-ribbon-collection` directive to define each ribbon collection that contains one or more items. To define each ribbon item, you can use the `e-ribbon-item` directive and the `type` property to specify the type of component to be rendered, like a button, a drop-down button, a combo box, and more.

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
                  <e-ribbon-item type="SplitButton" :splitButtonSettings="pasteSettigs"></e-ribbon-item>
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
        pasteSettigs:{ 
          iconCss: "e-icons e-paste", content: "Paste",
          items: [{ text: "Keep Source Format" }, { text: "Merge format" }, { text: "Keep text only" }]
        },
        cutButton:  { iconCss: "e-icons e-cut", content: "Cut" },
        copyButton:  { iconCss: "e-icons e-copy", content: "Copy" },
      }
    }
  };
</script>

{% endhighlight %}
{% endtabs %}

Here is the summarized code for the above steps in the **src/App.vue** file:

{% tabs %}
{% highlight html tabtitle="~/src/App.vue" %}
{% include code-snippet/ribbon/getting-started-cs1/app.vue %}
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
        
{% previewsample "page.domainurl/code-snippet/ribbon/getting-started-cs1" %}
