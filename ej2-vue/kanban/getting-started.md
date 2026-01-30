---
layout: post
title: Getting started with Vue Kanban component | Syncfusion
description:  Checkout and learn about Getting started with Vue Kanban component of Syncfusion Essential JS 2 and more details.
control: Getting started 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Getting Started with the Vue Kanban Component

This article provides a step-by-step guide for setting up a [Vite](https://vitejs.dev/) project with a TypeScript environment and integrating the Syncfusion Vue Kanban component using the [Composition API](https://vuejs.org/guide/introduction.html#composition-api).

## Create the Vue application

Run the following commands to set up a Vue application:

```bash
npm create vite@7 my-app
```
To set-up a Vue application , run the following command.

```bash
npm create vite@7 my-vue-app -- --template vue-ts
cd my-app
npm run dev
```

## Adding CSS reference

The following CSS files are available in ../node_modules/@syncfusion package folder. This can be referenced in the `<style>` section of **src/App.vue** file using the following code.

```css
@import '../node_modules/@syncfusion/ej2-base/styles/tailwind3.css';
@import '../node_modules/@syncfusion/ej2-buttons/styles/tailwind3.css';
@import '../node_modules/@syncfusion/ej2-splitbuttons/styles/tailwind3.css';
@import '../node_modules/@syncfusion/ej2-inputs/styles/tailwind3.css';
@import '../node_modules/@syncfusion/ej2-lists/styles/tailwind3.css';
@import '../node_modules/@syncfusion/ej2-navigations/styles/tailwind3.css';
@import '../node_modules/@syncfusion/ej2-popups/styles/tailwind3.css';
@import '../node_modules/@syncfusion/ej2-kanban/styles/tailwind3.css';
```

## Adding Kanban component

Now, you can start adding Vue kanban component in the application. For getting started, add the kanban component in src/App.vue file using below sample.

{% tabs %}
{% highlight html tabtitle="~/src/App.vue" %}

<template>
  <ejs-kanban>
    <e-columns>
      <e-column headerText="To Do" keyField="Open"></e-column>
      <e-column headerText="In Progress" keyField="InProgress"></e-column>
      <e-column headerText="Testing" keyField="Testing"></e-column>
      <e-column headerText="Done" keyField="Close"></e-column>
    </e-columns>
  </ejs-kanban>
</template>

{% endhighlight %}
{% endtabs %}

## Run the application

Use the following command to run the application in the browser.

```bash
npm run dev
```

Output will be displayed as follows

{% tabs %}
{% highlight html tabtitle="~/src/App.vue" %}
{% include code-snippet/kanban/getting-started-empty-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="~/src/App.vue" %}
{% include code-snippet/kanban/getting-started-empty-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/kanban/getting-started-empty-cs1" %}

The output will display the kanban header.

## Populating cards

To populate the empty Kanban with cards, define the local JSON data or remote data using the `dataSource` property. To define `dataSource`, the mandatory fields in JSON object should be relevant to `keyField`. In the following example, you can see the cards defined with default fields such as ID, Summary, and Status.

{% tabs %}
{% highlight html tabtitle="~/src/App.vue" %}
{% include code-snippet/kanban/getting-started-key-field-cs2/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="~/src/App.vue" %}
{% include code-snippet/kanban/getting-started-key-field-cs2/app.vue %}
{% endhighlight %}
{% highlight js tabtitle="~/src/datasource.js" %}
{% include code-snippet/kanban/getting-started-key-field-cs2/datasource.js %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/kanban/getting-started-key-field-cs2" %}

## Enable swimlane

`Swimlane` can be enabled by mapping the fields `swimlaneSettings.keyField` to appropriate column name in dataSource. This enables the grouping of the cards based on the mapped column values.

{% tabs %}
{% highlight html tabtitle="~/src/App.vue" %}
{% include code-snippet/kanban/getting-started-swimlane-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="~/src/App.vue" %}
{% include code-snippet/kanban/getting-started-swimlane-cs1/app.vue %}
{% endhighlight %}
{% highlight js tabtitle="~/src/datasource.js" %}
{% include code-snippet/kanban/getting-started-swimlane-cs1/datasource.js %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/kanban/getting-started-swimlane-cs1" %}