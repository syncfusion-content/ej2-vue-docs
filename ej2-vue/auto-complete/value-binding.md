---
layout: post
title: Value Binding in Vue AutoComplete | Syncfusion
description: Bind primitive strings, numbers, booleans, and complex objects to the Syncfusion Vue AutoComplete value field for efficient selection.
control: Value binding 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Value Binding in Vue AutoComplete

Value binding in the AutoComplete control allows you to associate data values with each list item. This facilitates managing and retrieving selected values efficiently. The AutoComplete component provides flexibility in binding both primitive data types and complex objects.

## Primitive data types

The AutoComplete control provides flexible binding capabilities for primitive data types like strings and numbers. You can effortlessly bind local primitive data arrays, fetch and bind data from remote sources, and even custom data binding to suit specific requirements. Bind primitive data to the [value](https://ej2.syncfusion.com/vue/documentation/api/auto-complete/index-default#value) property of the AutoComplete.

Primitive data types include:

* String
* Number
* Boolean
* Null

The following sample shows an example of preselecting values for a primitive data type

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/auto-complete/primitive/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/auto-complete/primitive/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/auto-complete/primitive" %}

## Object data types

In the AutoComplete control, object binding allows you to bind to a dataset of objects. When [`allowObjectBinding`](https://ej2.syncfusion.com/vue/documentation/api/auto-complete/index-default#allowobjectbinding) is enabled, the value of the control will be an object of the same type as the selected item in the [value](https://ej2.syncfusion.com/vue/documentation/api/auto-complete/index-default#value) property. This feature seamlessly binds arrays of objects, whether sourced locally, retrieved from remote endpoints, or customized to suit specific application needs.

The following sample shows an example of preselecting values for an object data type

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/auto-complete/object/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/auto-complete/object/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/auto-complete/object" %}
