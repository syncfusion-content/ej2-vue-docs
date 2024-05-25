---
layout: post
title: Filter menu in Vue Gantt component | Syncfusion
description: Learn here all about Filter menu in Syncfusion Vue Gantt component of Syncfusion Essential JS 2 and more.
control: Filter menu 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Filter menu in Vue Gantt component

The Gantt Component provides the menu filtering support for each column. You can enable the filter menu by setting the [`allowFiltering`](https://ej2.syncfusion.com/vue/documentation/api/gantt/#allowfiltering) to `true`. The filter menu UI will be rendered based on its column type, which allows you to filter data. You can filter the records with different operators.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/gantt/filtering-cs2/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/gantt/filtering-cs2/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/gantt/filtering-cs2" %}

>[`allowFiltering`](https://ej2.syncfusion.com/vue/documentation/api/gantt/#allowfiltering) must be set as `true` to enable filter menu.
>Setting [`columns.allowFiltering`](https://ej2.syncfusion.com/vue/documentation/api/gantt/column/#allowfiltering) as `false` will prevent filter menu rendering for a particular column.