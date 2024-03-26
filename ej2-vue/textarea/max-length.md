---
layout: post
title: Maximum Length in Vue TextArea component | Syncfusion
description: Limiting the maximum number of characters in the Vue TextArea component of Syncfusion Essential JS 2 and more details.
control: Maximum Length
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Maximum Length in Vue TextArea Component

You can enforce a maximum length limit for the text input in the TextArea using the [maxLength](https://ej2.syncfusion.com/vue/documentation/api/textarea/#maxLength) property. This property allows to define the maximum number of characters that users can input into the TextArea.


* By setting the `maxLength` property, you can control the length of text input, preventing users from exceeding a specified character limit.

{% tabs %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/textarea/max-length-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/textarea/max-length-cs1" %}

When the user reaches the specified limit, the TextArea prevents further input, ensuring compliance with the defined character limit. This feature helps maintain data integrity and provides users with clear feedback on the allowed input length.
