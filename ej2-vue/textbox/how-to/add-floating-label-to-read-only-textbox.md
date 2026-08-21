---
layout: post
title: How to add floating label to read-only in Vue TextBox | Syncfusion
description: Float a label above a read-only Syncfusion Vue TextBox by toggling the e-label-top and e-label-bottom classes on the label element.
control: Add floating label to read only textbox 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# How to add floating label to read-only in Vue TextBox

You can achieve floating label for read-only textboxes by adding/removing `e-label-top` and `e-label-bottom` classes to the label element

In this sample, click the update value button to fill the read-only textbox with value and float a label.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/textbox/read-only-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/textbox/read-only-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/textbox/read-only-cs1" %}