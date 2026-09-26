---
layout: post
title: Templates in Vue MultiSelect Dropdown | Syncfusion
description: Customize the Vue MultiSelect Dropdown list items, group headers, selected value, header, footer, and summary tag using template engine support.
control: Templates 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Templates in Vue MultiSelect Dropdown

The MultiSelect has been provided with several options to customize each list item, group title, selected value, header, and footer elements.

To customize MultiSelect dropdown items using templates, you can check this video:

{% youtube "https://www.youtube.com/watch?v=biPKSEpTgwM" %}

## Item template

The content of each list item within the MultiSelect can be customized with the help of [itemTemplate](https://ej2.syncfusion.com/vue/documentation/api/multi-select/index-default#itemtemplate) property.

In the following sample, each list item is split into two columns to display relevant data.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/multi-select/template/item-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/multi-select/template/item-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/multi-select/template/item-cs1" %}

## Value template

The currently selected value that is displayed by default on the MultiSelect input element can be customized using the [valueTemplate](https://ej2.syncfusion.com/vue/documentation/api/multi-select/index-default#valuetemplate) property.

In the following sample, the selected value is displayed as a combined text of both `FirstName` and `City` in the MultiSelect input, which is separated by a hyphen.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/multi-select/template/value-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/multi-select/template/value-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/multi-select/template/value-cs1" %}

## Group template

The group header title under which appropriate sub-items are categorized can also be customized with the help of the [groupTemplate](https://ej2.syncfusion.com/vue/documentation/api/multi-select/index-default#grouptemplate) property. This template is common for both inline and floating group header templates.

In the following sample, employees are grouped according to their city.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/multi-select/template/group-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/multi-select/template/group-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/multi-select/template/group-cs1" %}

## Header template

The header element is shown statically at the top of the popup list items within the MultiSelect, and any custom element can be placed as a header element using the [headerTemplate](https://ej2.syncfusion.com/vue/documentation/api/multi-select/index-default#headertemplate) property.

In the following sample, the list items and their headers are designed and displayed as two columns similar to the multiple columns of a grid.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/multi-select/template/header-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/multi-select/template/header-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/multi-select/template/header-cs1" %}

## Footer template

The MultiSelect has options to show a footer element at the bottom of the list items in the popup list. Here, you can place any custom element as a footer element using the [footerTemplate](https://ej2.syncfusion.com/vue/documentation/api/multi-select/index-default#footertemplate) property.

In the following sample, the footer element displays the total number of list items present in the MultiSelect.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/multi-select/template/footer-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/multi-select/template/footer-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/multi-select/template/footer-cs1" %}

## No records template

The MultiSelect is provided with support to custom design the popup list content when no data is found and no matches are found on search with the help of the [noRecordsTemplate](https://ej2.syncfusion.com/vue/documentation/api/multi-select/index-default#norecordstemplate) property.

In the following sample, the popup list content displays a notification that no data is available.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/multi-select/template/no-records-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/multi-select/template/no-records-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/multi-select/template/no-records-cs1" %}

## Action failure template

There is also an option to custom design the popup list content when the data fetch request fails at the remote server. This can be achieved using the [actionFailureTemplate](https://ej2.syncfusion.com/vue/documentation/api/multi-select/index-default#actionfailuretemplate) property.

In the following sample, when the data fetch request fails, the MultiSelect displays the notification.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/multi-select/template/action-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/multi-select/template/action-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/multi-select/template/action-cs1" %}

## Summary Tag Template

The Summary Tag Template feature displays selected items as a formatted summary text in the input field instead of listing all selections individually. This is especially useful in CheckBox mode when working with large datasets and using the SelectAll option, as it significantly improves performance.

The [summaryTagCount](../api/multi-select#summarytagcount) property sets a threshold—when the number of selected items exceeds this threshold, the [summaryTagTemplate](../api/multi-select#summarytagtemplate) displays a custom formatted text instead of individual items.

### Template Placeholder Properties

The following properties are available for use in the summary template placeholders:

| Placeholder | Description |
|-------------|-------------|
| `${selectedCount}` | Total count of currently selected items |
| `${totalCount}` | Total number of items in the data source |

In the following sample, the Summary Tag Template displays the count of selected items when the threshold is exceeded.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/multi-select/template/summary-tag-template-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/multi-select/template/summary-tag-template-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/multi-select/template/summary-tag-template-cs1" %}

> **Limitation:** The Summary Tag Template feature only works in CheckBox mode because it has a built-in SelectAll option for bulk selection, which triggers the need for performance optimization. Other modes (Default, Box, Delimiter) don't support SelectAll and use different display formats, making template-based formatting unnecessary.

> **Note:** When you set a threshold value and preselected items exceed it, the summary template displays formatted text instead of individual items. If `summaryTagTemplate` and `summaryTagCount` are not provided, the Summary Tag Template feature is automatically enabled when records or preselected items exceed 1000, displaying a default summary format for better performance.

## See Also

* [How to bind the data](./data-binding)
* [How to group the data using header](./grouping)
* [How to customize the options in MultiSelect](./chip-customization)