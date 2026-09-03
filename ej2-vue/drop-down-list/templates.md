---
layout: post
title: Templates in Vue Dropdown List | Syncfusion
description: Customize Syncfusion Vue Dropdown List items, group title, header, footer, and selected value display using the built-in template engine.
control: Templates 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Templates in Vue Dropdown List

The DropDownList has been provided with several options to customize each list item, group title, selected value, header, and footer elements. It uses the Essential<sup style="font-size:70%">&reg;</sup> JS 2 `Template engine` to compile and render the elements properly.

## Item template

The content of each list item within the DropDownList can be customized with the help of [itemTemplate](https://ej2.syncfusion.com/vue/documentation/api/drop-down-list/index-default#itemtemplate) property.

In the following sample, each list item is split into two columns to display the relevant data.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/drop-down-list/templates/item-template-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/drop-down-list/templates/item-template-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/drop-down-list/templates/item-template-cs1" %}

## Value template

The currently selected value that is displayed by default on the DropDownList input element can be customized using the [valueTemplate](https://ej2.syncfusion.com/vue/documentation/api/drop-down-list/index-default#valuetemplate) property.

In the following sample, the selected value is displayed as a combined text of both `FirstName` and `City` in the DropDownList input, which is separated by a hyphen.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/drop-down-list/templates/value-template-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/drop-down-list/templates/value-template-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/drop-down-list/templates/value-template-cs1" %}

## Group template

The group header title under which the appropriate sub-items are categorized can also be customized with the help of [groupTemplate](https://ej2.syncfusion.com/vue/documentation/api/drop-down-list/index-default#grouptemplate) property. This template is common for both the inline and floating group header templates.

In the following sample, employees are grouped according to their city.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/drop-down-list/templates/group-template-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/drop-down-list/templates/group-template-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/drop-down-list/templates/group-template-cs1" %}

## Header template

The header element is shown statically at the top of the popup list items within the DropDownList, and any custom element can be placed as a header element using the [headerTemplate](https://ej2.syncfusion.com/vue/documentation/api/drop-down-list/index-default#headertemplate) property.

In the following sample, the list items and their headers are designed and displayed as two columns similar to the multiple columns of a grid.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/drop-down-list/templates/header-template-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/drop-down-list/templates/header-template-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/drop-down-list/templates/header-template-cs1" %}

## Footer template

The DropDownList has options to show a footer element at the bottom of the list items in the popup list. Here, you can place any custom element as a footer element using the [footerTemplate](https://ej2.syncfusion.com/vue/documentation/api/drop-down-list/index-default#footertemplate) property.

In the following sample, the footer element displays the total number of list items present in the DropDownList.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/drop-down-list/templates/footer-template-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/drop-down-list/templates/footer-template-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/drop-down-list/templates/footer-template-cs1" %}

## No records template

The DropDownList is provided with support to custom design the popup list content when no data is found and no matches are found on search with the help of [noRecordsTemplate](https://ej2.syncfusion.com/vue/documentation/api/drop-down-list/index-default#norecordstemplate) property.

In the following sample, the popup list content displays the notification of no data available.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/drop-down-list/templates/no-template-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/drop-down-list/templates/no-template-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/drop-down-list/templates/no-template-cs1" %}

## Action failure template

There is also an option to custom design the popup list content when the data fetch request fails at the remote server. This can be achieved using the [actionFailureTemplate](https://ej2.syncfusion.com/vue/documentation/api/drop-down-list/index-default#actionfailuretemplate) property.

In the following sample, when the data fetch request fails, the DropDownList displays the notification.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/drop-down-list/templates/failure-template-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/drop-down-list/templates/failure-template-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/drop-down-list/templates/failure-template-cs1" %}

## See Also

* [How to achieve filtering](./filtering)
* [How to group the data using header](./grouping)
* [How to show the list items with icon](./how-to/icons-support)
* [How to render tooltip for the options](./how-to/tooltip)