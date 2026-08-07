---
layout: post
title: Vue TreeGrid Footer Aggregate | Syncfusion
description: Learn how to configure and display footer aggregate values in Vue TreeGrid, including API usage, templates, and formatting options.
control: Footer aggregate 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Footer Aggregate in Vue TreeGrid

Footer aggregate value is calculated for all the rows, and it is displayed in the footer cells. Use the [`footerTemplate`](https://ej2.syncfusion.com/vue/documentation/api/treegrid/aggregateColumnModel#footertemplate) property to render the aggregate value in footer cells.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/treegrid/aggregates/default-cs2/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/treegrid/aggregates/default-cs2/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/treegrid/aggregates/default-cs2" %}

> The aggregate values must be accessed inside the template using their corresponding [`type`](https://ej2.syncfusion.com/vue/documentation/api/treegrid/aggregateColumnModel#type) name.

## How to format aggregate value

You can format the aggregate value result by using the [`format`](https://ej2.syncfusion.com/vue/documentation/api/treegrid/aggregateColumnModel#type) property.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/treegrid/aggregates/default-cs3/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/treegrid/aggregates/default-cs3/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/treegrid/aggregates/default-cs3" %}