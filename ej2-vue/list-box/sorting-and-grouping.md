---
layout: post
title: Sorting and Grouping in Vue ListBox | Syncfusion
description: Sort the Syncfusion Vue ListBox items in ascending or descending order and group related items by category using sortOrder and groupBy.
control: Sorting and grouping 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Sorting and Grouping in Vue ListBox

## Sorting

The ListBox supports sorting of available items in the alphabetical order that can be either ascending or descending. This can achieved using [`sortOrder`](https://ej2.syncfusion.com/vue/documentation/api/list-box/#sortorder) property. Sort order can be `None`, `Ascending` or `Descending`.

In the following example, the `SortOrder` is set as `Descending`.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/list-box/getting-started/getting-started-cs19/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/list-box/getting-started/getting-started-cs19/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/list-box/getting-started/getting-started-cs19" %}

## Grouping

To get start quickly about how to `group` the Vue ListBox items, you can check on this video:

{% youtube "https://www.youtube.com/watch?v=ZCXxwuXvGrA" %}

The ListBox supports to wrap the nested element into a group based on its category. The category of each list item can be mapped with [`groupBy`](https://ej2.syncfusion.com/vue/documentation/api/list-box/fieldSettingsModel/#groupby) field in the data table.

In the following example, vegetables are grouped based on its category.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/list-box/getting-started/getting-started-cs20/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/list-box/getting-started/getting-started-cs20/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/list-box/getting-started/getting-started-cs20" %}