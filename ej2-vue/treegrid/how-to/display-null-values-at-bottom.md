---
layout: post
title: Display null values at bottom in Vue Treegrid component | Syncfusion
description: Learn here all about Display null values at bottom in Syncfusion Vue Treegrid component of Syncfusion Essential JS 2 and more.
control: Display null values at bottom 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Display null values at bottom in Vue Treegrid component

By default the null values are displayed at bottom of the Tree Grid row while perform sorting in ascending order. As well as this values are displayed at top of the Tree Grid row while perform sorting with descending order. But you can customize this default order to display the null values at always bottom row of the Tree Grid by using [`column.sortComparer`](https://ej2.syncfusion.com/vue/documentation/api/treegrid/column/#sortcomparer) method.

In the below demo we have displayed the null date values at bottom of the Grid row while sorting the **StartDate** column in both ways.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/treegrid/how-to/default-cs11/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/treegrid/how-to/default-cs11" %}
