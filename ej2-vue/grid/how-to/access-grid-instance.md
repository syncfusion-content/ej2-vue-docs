---
layout: post
title: Vue Grid Access Grid Instance | Syncfusion
description: Learn how to access the Vue Data Grid instance programmatically to customize filtering, sorting, and other grid operations using Grid APIs.
control: Access grid instance 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Access Grid Instance in Vue Data Grid

The [Vue Data Grid](https://www.syncfusion.com/vue-components/vue-grid) component allows you to programmatically access the grid instance, enabling you to manipulate its properties and methods. This capability is particularly useful for customizing functionalities such as filtering, sorting, and more, directly from the grid instance.

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