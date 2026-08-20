---
layout: post
title: Display numeric keypad when focus on mobile | Syncfusion
description: Show the numeric keypad on mobile devices for the Syncfusion Vue MaskedTextBox by setting the type property to tel.
control: Display numeric keypad when focus on mobile devices 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# How to display numeric keypad when focus on mobile devices

By default, on focusing the MaskedTextBox, alphanumeric keypad will be displayed on mobile devices. Sometimes only numeric keypad for number
values is needed, and this can be achieved by setting "type" property to `tel`. Refer to the following example to enable numeric keypad in MaskedTextBox.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/masked-textbox/how-to/numeric-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/masked-textbox/how-to/numeric-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/masked-textbox/how-to/numeric-cs1" %}