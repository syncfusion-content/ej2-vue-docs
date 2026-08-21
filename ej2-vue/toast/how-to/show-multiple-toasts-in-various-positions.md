---
layout: post
title: Show multiple toasts in various positions in Vue Toaster | Syncfusion
description: Display multiple Vue Toaster instances at different positions by initiating separate toasts for each desired location.
control: Show multiple toasts in various positions 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# How to show multiple toasts in various positions in Vue Toaster

By default, the positions of the new toasts are only updated after the visible toasts have been destroyed. If You need to display multiple toasts with different positions, initiate another toasts.

The following sample demonstrates adding multiple toasts in different positions.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/toast/how-to/position-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/toast/how-to/position-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/toast/how-to/position-cs1" %}