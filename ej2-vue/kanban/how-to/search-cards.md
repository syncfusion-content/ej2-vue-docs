---
layout: post
title: Search cards in Vue Kanban component | Syncfusion
description: Learn here all about Search cards in Syncfusion Vue Kanban component of Syncfusion Essential JS 2 and more.
control: Search cards 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Search cards in Vue Kanban component

You can search the cards in Kanban by using the `query` property.

In the following sample, the searching operation starts as soon as you start typing characters in the external text box. It will search the cards based on the `Id` and `Summary` using the `search` query with `contains` operator.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/kanban/card-header-cs5/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/kanban/card-header-cs5" %}