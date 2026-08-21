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

By default, when scroll the page/container Dialog also scrolled along with the page/container. When a user expects to display the Dialog in the same position without scrolling achieving this in sample level as like below. Here added `e-fixed` class to Dialog element and prevent the scrolling.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/dialog/scroll-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/dialog/scroll-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/dialog/scroll-cs1" %}