---
layout: post
title: Access grid instance in Vue Grid component | Syncfusion
description: Learn here all about Access grid instance in Syncfusion Vue Grid component of Syncfusion Essential JS 2 and more.
control: Access grid instance 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Access grid instance in Vue Grid component

The Syncfusion<sup style="font-size:70%">&reg;</sup> Vue Grid component allows you to programmatically access the grid instance, enabling you to manipulate its properties and methods. This capability is particularly useful for customizing functionalities such as filtering, sorting, and more, directly from the grid instance.

The following example demonstrates how to access the grid instance and change the default filter operator for string-type columns from "startsWith" to "contains":

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/grid/how-to/dropdown-cs3/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/grid/how-to/dropdown-cs3/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/how-to/dropdown-cs3" %}