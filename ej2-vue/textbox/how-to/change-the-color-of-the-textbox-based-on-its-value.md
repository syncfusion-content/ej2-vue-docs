---
layout: post
title: How to change color based on value in Vue TextBox | Syncfusion
description: Change the Syncfusion Vue TextBox color in real time by validating the value with a regular expression in the keyup event for numeric input.
control: Change the color of the textbox based on its value 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# How to change color based on value in Vue TextBox

You can change the color of the TextBox by validating its value using regular expression in the `keyup` event for predicting the numeric values as demonstrated in the following code sample.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/textbox/text-color-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/textbox/text-color-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/textbox/text-color-cs1" %}