---
layout: post
title: Excel like filter in Vue Treegrid component | Syncfusion
description: Learn here all about Excel like filter in Syncfusion Vue Treegrid component of Syncfusion Essential JS 2 and more.
control: Excel like filter 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Excel like filter in Vue Treegrid component

You can enable Excel like filter by defining. [`filterSettings.type`](https://ej2.syncfusion.com/vue/documentation/api/treegrid/filterSettingsModel/#type) as `Excel`.The excel menu contains an option such as Sorting, Clear filter, Sub menu for advanced filtering.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/treegrid/filtering/default-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/treegrid/filtering/default-cs1" %}

## Change default excel filter operator

You can change the default excel-filter operator by changing the column operator as `contains` from `startsWith` in the [`actionBegin`](https://ej2.syncfusion.com/vue/documentation/api/treegrid/#actionbegin) event.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/treegrid/filtering/default-cs2/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/treegrid/filtering/default-cs2" %}