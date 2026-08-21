---
layout: post
title: How to prevent nullable input in Vue Numeric Textbox | Syncfusion
description: Prevent null values in the Syncfusion Vue Numeric Textbox so the input always keeps a valid default number on first load.
control: Prevent nullable input in numerictextbox 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# How to prevent nullable input in Vue Numeric Textbox

By default, the value of the NumericTextBox sets to null. In some applications, the value of the NumericTextBox should not be null at any instance. In such cases, following sample can be used to prevent nullable input in NumericTextBox.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/numeric-textbox/how-to/null-cs2/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/numeric-textbox/how-to/null-cs2/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/numeric-textbox/how-to/null-cs2" %}