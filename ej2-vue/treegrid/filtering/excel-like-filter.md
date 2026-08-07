---
layout: post
title: Vue TreeGrid Excel-Like Filter | Syncfusion
description: Learn how to use Excel-like filtering in Vue TreeGrid, including filter menus, search, checkbox filtering, and custom filter options.
control: Excel like filter 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Excel-Like Filter in Vue TreeGrid

You can enable Excel like filter by defining. [`filterSettings.type`](https://ej2.syncfusion.com/vue/documentation/api/treegrid/filterSettingsModel/#type) as `Excel`.The excel menu contains an option such as Sorting, Clear filter, Sub menu for advanced filtering.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/treegrid/filtering/default-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/treegrid/filtering/default-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/treegrid/filtering/default-cs1" %}

## Change default excel filter operator

You can change the default excel-filter operator by changing the column operator as `contains` from `startsWith` in the [`actionBegin`](https://ej2.syncfusion.com/vue/documentation/api/treegrid#actionbegin) event.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/treegrid/filtering/default-cs2/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/treegrid/filtering/default-cs2/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/treegrid/filtering/default-cs2" %}