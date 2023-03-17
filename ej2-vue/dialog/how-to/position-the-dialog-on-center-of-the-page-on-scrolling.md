---
layout: post
title: Position the dialog on center of the page on scrolling in Vue Dialog component | Syncfusion
description: Learn here all about Position the dialog on center of the page on scrolling in Syncfusion Vue Dialog component of Syncfusion Essential JS 2 and more.
control: Position the dialog on center of the page on scrolling 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Position the dialog on center of the page on scrolling in Vue Dialog component

By default, when scroll the page/container Dialog also scrolled along with the page/container. When a user expects to display the Dialog in the same position without scrolling achieving this in sample level as like below. Here added `e-fixed` class to Dialog element and prevent the scrolling.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/dialog/scroll-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/dialog/scroll-cs1" %}