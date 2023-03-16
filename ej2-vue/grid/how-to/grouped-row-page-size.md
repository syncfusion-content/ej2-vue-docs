---
layout: post
title: Grouped row page size in Vue Grid component | Syncfusion
description: Learn here all about Grouped row page size in Syncfusion Vue Grid component of Syncfusion Essential JS 2 and more.
control: Grouped row page size 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Grouped row page size in Vue Grid component

By default, we have displayed the no of records based on the `pageSize`. If you want to show grouped column rows based on the `pageSize` then we suggest you to use the below way.

In the below sample, we have overridden the default `generateQuery` to display the grouped rows instead of grid rows based on the `pageSize`.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/grid/filter/default-cs14/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/filter/default-cs14" %}