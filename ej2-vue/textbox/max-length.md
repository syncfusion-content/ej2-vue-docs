---
layout: post
title: Maximum Length in Vue TextBox component | Syncfusion
description: Limiting the maximum number of characters in the Vue TextBox component of Syncfusion Essential JS 2 and more details.
control: Maximum Length
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Maximum Length in Vue TextBox Component

You can enforce a maximum length limit for the text input in the TextBox using the `maxLength` property. This property allows you to define the maximum number of characters that users can input into the TextBox.

* By setting the `maxLength` property, you can control the length of text input, preventing users from exceeding a specified character limit.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/textbox/max-length-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/textbox/max-length-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/textbox/max-length-cs1" %}

When the user reaches the specified limit, the TextBox prevents further input, ensuring compliance with the defined character limit. This feature helps maintain data integrity and provides users with clear feedback on the allowed input length.