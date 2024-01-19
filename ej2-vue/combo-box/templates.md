---
layout: post
title: Templates in Vue Combo box component | Syncfusion
description: Learn here all about Templates in Syncfusion Vue Combo box component of Syncfusion Essential JS 2 and more.
control: Templates 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Templates in Vue Combo box component

The ComboBox has been provided with several options to customize each list items, group title, header, and footer elements.

To customize vue ComboBox items Using templates, you can check on this video:

{% youtube "https://www.youtube.com/watch?v=aeFDX7a70Tw" %}

## Item template

The content of each list item within the ComboBox can be customized with the help of [itemTemplate](https://ej2.syncfusion.com/vue/documentation/api/combo-box/#itemtemplate) property.

In the following sample, each list item is split into two columns to display relevant data's.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/combobox/templates/item-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/combobox/templates/item-cs1" %}

## Group template

The group header title under which appropriate sub-items are categorized can also be customize with the help of [groupTemplate](https://ej2.syncfusion.com/vue/documentation/api/combo-box/#grouptemplate) property. This template is common for both inline and floating group header template.

In the following sample, employees are grouped according to their city.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/combobox/templates/group-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/combobox/templates/group-cs1" %}

## Header template

The header element is shown statically at the top of the popup list items within the ComboBox, and any custom element can be placed as a header element using the [headerTemplate](https://ej2.syncfusion.com/vue/documentation/api/combo-box/#headertemplate) property.

In the following sample, the list items and its headers are designed and displayed as two columns similar to multiple columns of the grid.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/combobox/templates/header-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/combobox/templates/header-cs1" %}

## Footer template

The ComboBox has options to show a footer element at the bottom of the list items in the popup list. Here, you can place any custom element as a footer element using the [footerTemplate](https://ej2.syncfusion.com/vue/documentation/api/combo-box/#footertemplate) property.

In the following sample, footer element displays the total number of list items present in the ComboBox.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/combobox/templates/footer-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/combobox/templates/footer-cs1" %}

## No records template

The ComboBox is provided with support to custom design the popup list content when no data is found and no matches found on search with the help of [noRecordsTemplate](https://ej2.syncfusion.com/vue/documentation/api/combo-box/#norecordstemplate) property.

In the following sample, popup list content displays the notification of no data available.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/combobox/templates/empty-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/combobox/templates/empty-cs1" %}

## Action failure template

There is also an option to custom design the popup list content when the data fetch request fails at the remote server. This can be achieved using the [actionFailureTemplate](https://ej2.syncfusion.com/vue/documentation/api/combo-box/#actionfailuretemplate) property.

In the following sample, when the data fetch request fails, the ComboBox displays the notification.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/combobox/templates/action-failure-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/combobox/templates/action-failure-cs1" %}

## See Also

* [How to achieve filtering](./filtering)
* [How to group the data using header](./grouping)
* [How to show the list items with icon](./how-to/icons-support)