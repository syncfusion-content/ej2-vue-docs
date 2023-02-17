---
layout: post
title: Getting started with Vue Circular gauge component | Syncfusion
description:  Checkout and learn about Getting started with Vue Circular gauge component of Syncfusion Essential JS 2 and more details.
control: Getting started 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Getting Started

This section explains you the steps required to create a simple circular gauge and demonstrate the basic usage of the circular gauge control.

## Prerequisites

[System requirements for Syncfusion Vue UI components](https://ej2.syncfusion.com/vue/documentation/system-requirements/)

## Dependencies

Below is the list of minimum dependencies required to use the circular gauge.

```javascript
|-- @syncfusion/ej2-vue-circulargauge
    |-- @syncfusion/ej2-base
    |-- @syncfusion/ej2-buttons
    |-- @syncfusion/ej2-popups
       |-- @syncfusion/ej2-splitbuttons
       |-- @syncfusion/ej2-vue-base
    |-- @syncfusion/ej2-svg-base
    |-- @syncfusion/ej2-circulargauge
```

## Get Started with Vue CLI

You can use [`Vue CLI`](https://github.com/vuejs/vue-cli) to setup your vue applications.
To install Vue CLI use the following command.

```bash
npm install -g @vue/cli
npm install -g @vue/cli-init
```

Start a new project using below Vue CLI command.

```bash
vue init webpack-simple quickstart

cd quickstart
npm install

```

## Adding Syncfusion packages

All the available Essential JS 2 packages are published in [`npmjs.com`](https://www.npmjs.com/~syncfusionorg) registry.
You can choose the component that you want to install. For this application, we are going to use Circulargauge component.

To install Circulargauge component, use the following command

```bash
npm install @syncfusion/ej2-vue-circulargauge –save
```

## Registering Vue Component

For Registering Vue Component two ways are available. They are as follows.
* Vue.use()
* Vue.component()

### Using Vue.use()

Import the Component Plugin from the EJ2 Vue Package and register the same using Vue.use() with Component Plugin as its argument.

Refer the code snippet given below.

```ts
import { CircularGaugePlugin } from '@syncfusion/ej2-vue-circulargauge';

Vue.use(CircularGaugePlugin);
```

> By Registering Component Plugin in Vue, all child directives are also globally registered.

### Using Vue.component()

Import the Component and Component Plugin from EJ2 Vue Package,
register the same using the Vue.component() with name of Component from ComponentPlugin
and the EJ2 Vue Component as its arguments.

Refer the code snippet given below.

```ts
import { CircularGaugeComponent, CircularGaugePlugin } from '@syncfusion/ej2-vue-circulargauge';

Vue.component(CircularGaugePlugin.name, CircularGaugeComponent);
```

Note: By using Vue.component(), only the EJ2 Vue Component is registered. Child directives needs to be registered separately.

## Run the application

Now use the `npm run dev` command to run the application in the browser.

```
npm run dev
```

The below example shows a basic circular gauge component.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/circular-gauge/getting-started-cs64/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/circular-gauge/getting-started-cs64" %}

## Set Pointer Value

You can change the pointer value in the above sample using [`value`](https://ej2.syncfusion.com/vue/documentation/api/circular-gauge/pointer/#value-number) property in [`pointers`](https://ej2.syncfusion.com/vue/documentation/api/circular-gauge/tooltipSettings/).

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/circular-gauge/getting-started-cs65/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/circular-gauge/getting-started-cs65" %}
