---
layout: post
title: How to maintain trailing zeros in Vue Numeric Textbox | Syncfusion
description: Keep trailing zeros visible in the Syncfusion Vue Numeric Textbox on focus instead of letting them disappear.
control: Maintain trailing zeros in numerictextbox 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# How to maintain trailing zeros in Vue Numeric Textbox

By default, trailing zeros disappear when the NumericTextBox gets focus. However, you can use the following sample to maintain the trailing zeros while focusing the NumericTextBox.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/numeric-textbox/how-to/null-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/numeric-textbox/how-to/null-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/numeric-textbox/how-to/null-cs1" %}