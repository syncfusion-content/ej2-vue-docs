---
layout: post
title: Get row cell index in Vue Treegrid component | Syncfusion
description: Learn here all about Get row cell index in Syncfusion Vue Treegrid component of Syncfusion Essential JS 2 and more.
control: Get row cell index 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Get row cell index in Vue Treegrid component

You can get the specific row and cell index of the Tree Grid by using [`rowSelected`](https://ej2.syncfusion.com/vue/documentation/api/treegrid/#rowselected) event of the treegrid. Here, we can get the row and cell index by using *aria-rowindex* (get row Index from *tr* element) and *aria-colindex* (column index from *td* element) attribute.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/treegrid/how-to/default-cs15/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/treegrid/how-to/default-cs15" %}
