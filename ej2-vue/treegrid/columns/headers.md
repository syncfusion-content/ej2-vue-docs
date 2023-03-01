---
layout: post
title: Headers in Vue Treegrid component | Syncfusion
description: Learn here all about Headers in Syncfusion Vue Treegrid component of Syncfusion Essential JS 2 and more.
control: Headers 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Headers in Vue Treegrid component

## Header text

By default, column header title is displayed from column [`field`](https://ej2.syncfusion.com/vue/documentation/api/treegrid/column#field) value. To override the default header title, you have to define the [`headerText`](https://ej2.syncfusion.com/vue/documentation/api/treegrid/column#headertext) value.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/treegrid/columns/default-cs21/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/treegrid/columns/default-cs21" %}

> * If both the [`field`](https://ej2.syncfusion.com/vue/documentation/api/treegrid/column#field) and [`headerText`](https://ej2.syncfusion.com/vue/documentation/api/treegrid/column#headertext)
are not defined in the column, the column renders with “empty” header text.

## Header template

You can customize the header element by using the [`headerTemplate`](https://ej2.syncfusion.com/vue/documentation/api/treegrid/column#headerTemplate) property.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/treegrid/columns/default-cs22/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/treegrid/columns/default-cs22" %}