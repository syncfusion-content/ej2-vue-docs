---
layout: post
title: Use custom helper inside the loop with templates in Vue Grid component | Syncfusion
description: Learn here all about Place cancel icon in search bar in Syncfusion Vue Grid component of Syncfusion Essential JS 2 and more.
platform: ej2-vue
control: Use custom helper inside the loop with templates 
documentation: ug
domainurl: ##DomainURL##
---

# Use custom helper inside the loop with templates in Vue Grid component

The Syncfusion<sup style="font-size:70%">&reg;</sup> Vue Grid allows you to use custom helpers inside the loop with [template](https://ej2.syncfusion.com/vue/documentation/api/grid/column/#template) directive of a column. This feature enables you to create complex templates that can incorporate additional helper functions.

To achieve this, you can use the `v-for` directive inside the template column to iterate through the array and the `v-bind:class` directive to define dynamic function.

The **Customer Rating** column includes a custom template defined using `<template>`. Inside this template, `v-for` directive is used to iterates through the **item** array and generates `<span>` tag, displayed as stars using the CSS below:

```css
.e-grid .rating .star:before {
    content: '★';
}

.e-grid .rating .star {
    font-size: 132%;
    color: lightgrey;
}
```

The `v-bind:class` directive dynamically assigns classes based on the result of the **isRatingGreater** method, highlighting the star using the CSS below:

```css
.e-grid .rating .star.checked {
    color: #ffa600;
}
```

This is demonstrated in the following example.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/grid/how-to/custom-helper-loop-template/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/grid/how-to/custom-helper-loop-template/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/how-to/custom-helper-loop-template" %}