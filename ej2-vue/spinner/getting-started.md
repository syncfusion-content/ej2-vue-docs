---
layout: post
title: Getting started with Vue Spinner component | Syncfusion
description:  Checkout and learn about Getting started with Vue Spinner component of Syncfusion Essential JS 2 and more details.
control: Getting started 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Getting Started

Initialize the Spinner using `createSpinner` method and show/hide the spinner using `showSpinner` and `hideSpinner` methods accordingly. Set the target to the spinner to render it based on specific target.

The following steps explains you on how to create and how to show/hide your Spinner.

* Import the `createSpinner` method from `ej2-popups` library into your vue file as shown in below.

```ts
import { createSpinner } from '@syncfusion/ej2-popups';
```

* Show and hide this spinner by using `showSpinner` and `hideSpinner` methods for loading in your page and import them in your vue file as shown in below.

```ts
import { showSpinner, hideSpinner } from '@syncfusion/ej2-popups';
```

## Prerequisites

[System requirements for Syncfusion Vue UI components](https://ej2.syncfusion.com/vue/documentation/system-requirements/)

## Create the Spinner globally

The Spinner can be render globally in a page using public exported functions of the `ej2-popups` package.

```ts
import { showSpinner, hideSpinner } from '@syncfusion/ej2-popups';
```

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/spinner/getting-started-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/spinner/getting-started-cs1" %}