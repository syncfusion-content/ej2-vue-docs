---
layout: post
title: Templates in Vue Drop down tree component | Syncfusion
description: Learn here all about Templates in Syncfusion Vue Drop down tree component of Syncfusion Essential JS 2 and more.
control: Templates 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Templates in Vue Drop down tree component

The Dropdown Tree provides support to customize each list item, header, and footer elements. It uses the Essential JS 2 Template engine to compile and render the elements properly.

## Item template

The content of each list item within the Dropdown Tree can be customized with the help of [itemTemplate](https://ej2.syncfusion.com/vue/documentation/api/drop-down-tree#itemtemplate) property.

In the following sample, the Dropdown Tree list items are customized with employee information such as **name** and **job** using the **itemTemplate** property.

The template expression should be provided inside the {% raw %}`{{...}}`{% endraw %} interpolation syntax.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/drop-down-tree/templates/item-template-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/drop-down-tree/templates/item-template-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/drop-down-tree/templates/item-template-cs1" %}

## Value template

The currently selected value that is displayed by default on the Dropdown Tree input element can be customized using the [valueTemplate](https://ej2.syncfusion.com/vue/documentation/api/drop-down-tree#valuetemplate) property.

In the following sample, the selected value is displayed as a combined text of both `Name` and `Job` in the Dropdown Tree input, which is separated by a hyphen.

The template expression should be provided inside the {% raw %}`{{...}}`{% endraw %} interpolation syntax.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/drop-down-tree/templates/value-template-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/drop-down-tree/templates/value-template-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/drop-down-tree/templates/value-template-cs1" %}

## Header template

The header element is shown statically at the top of the popup list items within the Dropdown Tree. A custom element can be placed as a header element using the [headerTemplate](https://ej2.syncfusion.com/vue/documentation/api/drop-down-tree/#headertemplate) property.

In the following sample, the header is customized with the custom element.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/drop-down-tree/templates/header-template-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/drop-down-tree/templates/header-template-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/drop-down-tree/templates/header-template-cs1" %}

## Footer template

The Dropdown Tree has options to show a footer element at the bottom of the list items in the popup list. Here, you can place any custom element as a footer element using the [footerTemplate](https://ej2.syncfusion.com/vue/documentation/api/drop-down-tree/#footertemplate) property.

In the following sample, the footer element displays the total number of employees present in the Dropdown Tree.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/drop-down-tree/templates/footer-template-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/drop-down-tree/templates/footer-template-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/drop-down-tree/templates/footer-template-cs1" %}

## No records template

The Dropdown Tree is supports to display custom design in the popup list content using the [noRecordsTemplate](https://ej2.syncfusion.com/vue/documentation/api/drop-down-tree/#norecordstemplate) property when no matches found on search.

In the following sample, popup list content displays the notification of no data available.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/drop-down-tree/templates/noRecords-template-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/drop-down-tree/templates/noRecords-template-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/drop-down-tree/templates/noRecords-template-cs1" %}

## Action failure template

The Dropdown Tree provides an option to custom design the popup list content using [actionFailureTemplate](https://ej2.syncfusion.com/vue/documentation/api/drop-down-tree/#actionfailuretemplate) property, when the data fetch request fails at the remote server.

In the following sample, when the data fetch request fails, the Dropdown Tree displays the notification.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/drop-down-tree/templates/actionFailure-template-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/drop-down-tree/templates/actionFailure-template-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/drop-down-tree/templates/actionFailure-template-cs1" %}

## Custom template to show selected items in input

In Dropdown Tree, while selecting more than one items via checkbox or multi selection support, all the selected items will be displayed in the input. Instead of displaying all the selected item text, the custom template can be displayed by setting the the [mode](https://ej2.syncfusion.com/vue/documentation/api/drop-down-tree/#mode) property as ***Custom*** and [customTemplate](https://ej2.syncfusion.com/vue/documentation/api/drop-down-tree/#customTemplate) property.

When the **mode** property is set as **Custom**, the Dropdown Tree displays the default template value **(${value.length} item(s) selected)** like **1 item(s) selected or 2 item(s) selected**. The default template can be customized by setting **customTemplate**  property.

In the following sample, the Dropdown Tree is rendered with default value of the **customTemplate** property like “**1 item(s) selected or 2 item(s) selected**”.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/drop-down-tree/templates/custom-template-mode-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/drop-down-tree/templates/custom-template-mode-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/drop-down-tree/templates/custom-template-mode-cs1" %}

In the following sample, the Dropdown Tree is rendered with custom value of the **customTemplate** property like **Selected items count: 2**.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/drop-down-tree/templates/custom-template-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/drop-down-tree/templates/custom-template-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/drop-down-tree/templates/custom-template-cs1" %}