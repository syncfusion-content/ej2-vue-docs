---
layout: post
title: Templates in Vue MultiColumn Combobox component | Syncfusion
description: Checkout and learn about templates with Vue MultiColumn Combobox component of Syncfusion Essential JS 2 and more.
platform: ej2-vue
control: MultiColumn ComboBox
documentation: ug
domainurl: ##DomainURL##
---

# Templates in Vue MultiColumn ComboBox component

The MultiColumn ComboBox provides several template options to customize each items, groups, header and footer elements.

## Item template

You can use the [itemTemplate](../api/multicolumn-combobox#itemtemplate) property to customize each list item within the MultiColumn ComboBox.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/multicolumn-combobox/templates/itemTemplate/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/multicolumn-combobox/templates/itemTemplate/app.vue %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/multicolumn-combobox/templates/itemTemplate" %}

## Header template

You can add a custom element as a header element by using the [headerTemplate](../api/multicolumn-combobox/column/#headertemplate) property.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/multicolumn-combobox/templates/headerTemplate/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/multicolumn-combobox/templates/headerTemplate/app.vue %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/multicolumn-combobox/templates/headerTemplate" %}

## Group template

You can use the [groupTemplate](../api/multicolumn-combobox#grouptemplate) property to customize the group header in the popup list.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/multicolumn-combobox/templates/groupTemplate/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/multicolumn-combobox/templates/groupTemplate/app.vue %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/multicolumn-combobox/templates/groupTemplate" %}

## Footer template

You can add a custom element as a footer element by using the [footerTemplate](../api/multicolumn-combobox#footertemplate) property.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/multicolumn-combobox/templates/footerTemplate/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/multicolumn-combobox/templates/footerTemplate/app.vue %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/multicolumn-combobox/templates/footerTemplate" %}

## No records template

You can customize the popup list for when no data is found or no matches are found by using the [noRecordsTemplate](../api/multicolumn-combobox#norecordstemplate) property.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/multicolumn-combobox/templates/noRecordsTemplate/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/multicolumn-combobox/templates/noRecordsTemplate/app.vue %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/multicolumn-combobox/templates/noRecordsTemplate" %}

## Action failure template

There is also an option to custom design the popup list content when the data fetch request fails at the remote server. This can be achieved using the [actionFailureTemplate](../api/multicolumn-combobox#actionfailuretemplate) property.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/multicolumn-combobox/templates/actionFailureTemplate/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/multicolumn-combobox/templates/actionFailureTemplate/app.vue %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/multicolumn-combobox/templates/actionFailureTemplate" %}
