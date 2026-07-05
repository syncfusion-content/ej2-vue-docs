---
layout: post
title: Getting Started with Vue Kanban Component | Syncfusion
description: Checkout and learn about Getting started with Vue Kanban component of Syncfusion Essential JS 2 and more details.
platform: ej2-vue
control: Getting started
documentation: ug
domainurl: ##DomainURL##
---

# Getting Started with the Vue Kanban Component

This article provides a step-by-step guide for setting up a [Vite](https://vitejs.dev/) project with a TypeScript environment and integrating the Syncfusion Vue Kanban component using the [Composition API](https://vuejs.org/guide/introduction.html#composition-api).

## Create the Vue application

Run the following commands to set up a Vue application with TypeScript:

```bash
npm create vite@7 my-vue-app -- --template vue-ts
cd my-vue-app
npm install
```

## Install Syncfusion Vue Kanban package

All available Essential JS 2 packages are published in the [npmjs.com](https://www.npmjs.com/~syncfusionorg) registry.

Install the Kanban component with the following command:

```bash
npm install @syncfusion/ej2-vue-kanban --save
```

## Adding CSS reference

Include the required styles in your Vue application. The following CSS files are available in the `../node_modules/@syncfusion` package folder. Add these imports to the `<style>` section of your **src/App.vue** file or in a global CSS file:

```css
<style>
@import '../node_modules/@syncfusion/ej2-base/styles/tailwind3.css';
@import '../node_modules/@syncfusion/ej2-buttons/styles/tailwind3.css';
@import '../node_modules/@syncfusion/ej2-dropdowns/styles/tailwind3.css';
@import '../node_modules/@syncfusion/ej2-inputs/styles/tailwind3.css';
@import '../node_modules/@syncfusion/ej2-layouts/styles/tailwind3.css';
@import '../node_modules/@syncfusion/ej2-navigations/styles/tailwind3.css';
@import '../node_modules/@syncfusion/ej2-popups/styles/tailwind3.css';
@import '../node_modules/@syncfusion/ej2-notifications/styles/tailwind3.css';
@import '../node_modules/@syncfusion/ej2-vue-kanban/styles/tailwind3.css';
</style>
```

## Import and Configure Kanban components

Import the required Kanban components from the `@syncfusion/ej2-vue-kanban` package in your **src/App.vue** file. Use the following code to import the necessary components:

```typescript
import {
  KanbanComponent as EjsKanban,
  ColumnsDirective as EColumns,
  ColumnDirective as EColumn,
} from "@syncfusion/ej2-vue-kanban";
```

## Adding Kanban component

Update the **src/App.vue** file to render the Kanban component. Add the Kanban component with columns and sample data to get started quickly.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/kanban/getting-started-key-field-cs2/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/kanban/getting-started-key-field-cs2/app.vue %}
{% endhighlight %}
{% endtabs %}

## Run the application

To run the Vue application, use the following command in the terminal from the project root directory:

```bash
npm run dev
```

This command builds the application and opens it in your default web browser.
Once the application is running, a Kanban board will be displayed with the configured columns.

In this example, the Kanban cards are populated using default fields such as ID, Summary, and Status.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/kanban/getting-started-key-field-cs2/app-composition.vue %}
{% endhighlight %}

{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/kanban/getting-started-key-field-cs2/app.vue %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/kanban/getting-started-key-field-cs2" %}