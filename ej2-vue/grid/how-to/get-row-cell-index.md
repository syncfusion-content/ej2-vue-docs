---
layout: post
title: Get row cell index in Vue Grid component | Syncfusion
description: Learn here all about Get row cell index in Syncfusion Vue Grid component of Syncfusion Essential JS 2 and more.
control: Get row cell index 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Get row cell index in Vue Grid component

You can get the specific row and cell index of the grid by using `rowSelected` event of the grid. Here, we can get the row and cell index by using `aria-rowindex`(get row Index from `tr` element) and `aria-colindex`(column index from `td` element) attribute.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/grid/group/default-cs11/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/grid/group/default-cs11/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/group/default-cs11" %}