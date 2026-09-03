---
layout: post
title: How to position dialog on center on scroll in Vue Dialog | Syncfusion
description: Keep the Vue Dialog centered on the page while scrolling by adding an e-fixed class to the dialog element and preventing page scroll reflow.
control: Position the dialog on center of the page on scrolling 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# How to position dialog on center on scroll in Vue Dialog

When the page or container is scrolled, the Dialog is also scrolled along with it. When a user expects to display the Dialog in the same position without scrolling, achieving this at the sample level, as shown below. Here, the `e-fixed` class is added to the Dialog element to prevent the scrolling.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/dialog/scroll-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/dialog/scroll-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/dialog/scroll-cs1" %}