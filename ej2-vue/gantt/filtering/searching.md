---
layout: post
title: Searching in Vue Gantt Chart Component | Syncfusion
description: Learn all about Searching in the Syncfusion Vue Gantt Chart component of Essential JS 2.
control: Searching
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Searching in Vue Gantt Chart Component

You can search records in the Gantt Chart component using the [search](https://ej2.syncfusion.com/vue/documentation/api/gantt#search) method with a search key as the parameter. The Gantt Chart also supports integrating a search text box into the toolbar by adding the search item through the [toolbar](https://ej2.syncfusion.com/vue/documentation/api/gantt#toolbar) property.

To enable search functionality, inject the [Filter](https://ej2.syncfusion.com/vue/documentation/api/gantt#filtermodule) module in the `provide` section.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/gantt/filtering-cs9/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/gantt/filtering-cs9/app.vue %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/gantt/filtering-cs9" %}

## Initial search

You can apply search criteria when the Gantt Chart loads using the [searchSettings](https://ej2.syncfusion.com/vue/documentation/api/gantt/searchSettings) property.  
Set values such as:

- [fields](https://ej2.syncfusion.com/vue/documentation/api/gantt/searchSettings#fields)  
- [operator](https://ej2.syncfusion.com/vue/documentation/api/gantt/searchSettings#operator)  
- [key](https://ej2.syncfusion.com/vue/documentation/api/gantt/searchSettings#key)  
- [ignoreCase](https://ej2.syncfusion.com/vue/documentation/api/gantt/searchSettings#ignorecase)

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/gantt/filtering-cs10/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/gantt/filtering-cs10/app.vue %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/gantt/filtering-cs10" %}

> By default, the Gantt Chart searches all bound column values.  
> To restrict searching, specify the [searchSettings.fields](https://ej2.syncfusion.com/vue/documentation/api/gantt/searchSettings#fields) property.

## Search operators

You can customize the search logic using the [searchSettings.operator](https://ej2.syncfusion.com/vue/documentation/api/gantt/searchSettings#operator) property.

Supported search operators:

Operator | Description
-------- | -----------
`startsWith` | Checks if a value begins with the specified value.
`endsWith` | Checks if a value ends with the specified value.
`contains` | Checks if a value contains the specified value.
`equal` | Checks if a value equals the specified value.
`notEqual` | Checks if a value does **not** equal the specified value.

> The default operator is `contains`.

## Search by external button

To trigger search from an external button, call the [search](https://ej2.syncfusion.com/vue/documentation/api/gantt#search) method manually.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/gantt/filtering-cs11/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/gantt/filtering-cs11/app.vue %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/gantt/filtering-cs11" %}

> Note: The [allowFiltering](https://ej2.syncfusion.com/vue/documentation/api/gantt#allowfiltering) property must be set to `true` for external searching.

## Search specific columns

You can limit the search to specific columns by defining their field names in the [searchSettings.fields](https://ej2.syncfusion.com/vue/documentation/api/gantt/searchSettings#fields) property.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/gantt/filtering-cs12/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/gantt/filtering-cs12/app.vue %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/gantt/filtering-cs12" %}

> In this example, only `TaskName` and `Duration` fields are searched.

## Clear search by external button

To clear search results programmatically, set the [searchSettings.key](https://ej2.syncfusion.com/vue/documentation/api/gantt/searchSettings#key) property to an empty string.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/gantt/filtering-cs13/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/gantt/filtering-cs13/app.vue %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/gantt/filtering-cs13" %}