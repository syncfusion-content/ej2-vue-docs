---
layout: post
title: Filter menu in Vue Treegrid component | Syncfusion
description: Learn here all about Filter menu in Syncfusion Vue Treegrid component of Syncfusion Essential JS 2 and more.
control: Filter menu 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Filter menu in Vue Treegrid component

You can enable filter menu by setting the [`filterSettings.type`](https://ej2.syncfusion.com/vue/documentation/api/treegrid/filterSettingsModel/#type) as `Menu`. The filter menu UI will be rendered based on its column type, which allows you to filter data.

You can filter the records with different operators.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/treegrid/filtering/default-cs4/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/treegrid/filtering/default-cs4" %}

> * [`allowFiltering`](https://ej2.syncfusion.com/vue/documentation/api/treegrid/#allowfiltering) must be set as true to enable filter menu.
> * Setting [`columns.allowFiltering`](https://ej2.syncfusion.com/vue/documentation/api/treegrid/column/#allowfiltering) as false will prevent filter menu rendering for a particular column.

## Enable different filter dialog for a column

You can use both `Menu` and `Excel` filter in a same TreeGrid. To do so, set the
[`column.filter.type`](https://ej2.syncfusion.com/vue/documentation/api/treegrid/column/#filter) as `Menu` or `Excel`.

In the following sample menu filter is enabled by default and Excel filter is enabled for the Task Name column using the
[`column.filter.type`](https://ej2.syncfusion.com/vue/documentation/api/treegrid/column/#filter).

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/treegrid/filtering/default-cs5/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/treegrid/filtering/default-cs5" %}