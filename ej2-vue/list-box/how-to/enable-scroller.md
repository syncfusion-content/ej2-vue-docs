---
layout: post
title: How to enable scroller in Vue ListBox | Syncfusion
description: Enable scrolling in the Syncfusion Vue ListBox by restricting the height via the height property so the list scrolls inside the bounds.
control: Enable scroller 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# How to enable scroller in Vue ListBox

The ListBox supports scrolling and it can be achieved by restricting the height of the list box using [`height`](https://ej2.syncfusion.com/vue/documentation/api/list-box/#height) property.

In the following sample, `height` of the list box is restricted to `290px`.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/list-box/getting-started/getting-started-cs12/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/list-box/getting-started/getting-started-cs12/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/list-box/getting-started/getting-started-cs12" %}