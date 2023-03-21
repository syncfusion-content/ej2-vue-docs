---
layout: post
title: Templates in Vue Auto complete component | Syncfusion
description: Learn here all about Templates in Syncfusion Vue Auto complete component of Syncfusion Essential JS 2 and more.
control: Templates 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Templates in Vue Auto complete component

The AutoComplete has been provided with several options to customize each list items, group title, header and footer elements. It uses the Essential JS 2 Template engine to compile and render the elements properly.

## Item template

The content of each list item within the AutoComplete can be customized with the help of [`itemTemplate`](https://ej2.syncfusion.com/vue/documentation/api/auto-complete/#itemtemplate) property.

In the following sample, each list item is split into two columns to display relevant data's.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/auto-complete/getting-started-cs20/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/auto-complete/getting-started-cs20" %}

## Group template

The group header title under which appropriate sub-items are categorized can also be customize with the help of [`groupTemplate`](https://ej2.syncfusion.com/vue/documentation/api/auto-complete/#grouptemplate) property. This template is common for both inline and floating group header template.

In the following sample, employees are grouped according to their city.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/auto-complete/getting-started-cs21/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/auto-complete/getting-started-cs21" %}

## Header template

The header element is shown statically at the top of the suggestion list items within the AutoComplete, and any custom element can be placed as a header element using [`headerTemplate`](https://ej2.syncfusion.com/vue/documentation/api/auto-complete/#headertemplate) property.

In the following sample, the list items and its headers are designed and displayed as two columns similar to multiple columns of the grid.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/auto-complete/getting-started-cs22/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/auto-complete/getting-started-cs22" %}

## Footer template

The AutoComplete has options to show a footer element at the bottom of the list items in the suggestion list. Here, you can place any custom element as a footer element using [`footerTemplate`](https://ej2.syncfusion.com/vue/documentation/api/auto-complete/#footertemplate) property.

In the following sample, footer element displays the total number of list items present in the AutoComplete.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/auto-complete/getting-started-cs23/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/auto-complete/getting-started-cs23" %}

## No records template

The AutoComplete is provided with support to custom design the popup list content when no data is found and no matches found on search with the help of [`noRecordsTemplate`](https://ej2.syncfusion.com/vue/documentation/api/auto-complete/#norecordstemplate) property.

In the following sample, popup list content displays the notification of no data available.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/auto-complete/getting-started-cs24/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/auto-complete/getting-started-cs24" %}

## Action failure template

There is also an option to custom design the popup list content when the data fetch request fails at the remote server. This can be achieved using the actionFailureTemplate property.

In the following sample, when the data fetch request fails, the AutoComplete displays the notification.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/auto-complete/getting-started-cs25/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/auto-complete/getting-started-cs25" %}

## See Also

* [How to achieve filtering](./filtering/)
* [How to group the data using header](./grouping#grouping)
* [How to show the list items with icon](./how-to/icon-support/)