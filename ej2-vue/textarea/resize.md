---
layout: post
title: Resize in Vue TextArea component | Syncfusion
description: Checkout and learn about Resize in Vue Textarea control of Syncfusion Essential JS 2 and more details.
control: Resize
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Resize in Vue TextArea control

The TextArea allows users to input and edit large amounts of text. Resizing this control effectively can enhance the user experience and accommodate varying content needs. This resizing behavior can be enabled and configured using the [resizeMode](https://ej2.syncfusion.com/vue/documentation/api/textarea/#resizeMode) API, which offers several options for resizing the TextArea:

| Type  | Description |
| -- | -- |
| Vertical  | Allows users to adjust the height of the TextArea vertically. It is suitable when users want to resize the TextArea only along the vertical axis, accommodating varying amounts of text input. |
| Horizontal | Users can adjust the width of the TextArea horizontally. This option is helpful for accommodating longer lines of text without altering the height of the control. |
| Both | Allows users to adjust both the height and width of the TextArea, offering maximum flexibility in resizing. It is ideal for situations where users need precise control over the dimensions of the TextArea. |
| None | Disables the resizing in the TextArea. This option is ideal for situations where maintaining a consistent layout is critical, and resizing by users is unnecessary. |

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/textarea/resize-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/textarea/resize-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/textarea/resize-cs1" %}

## Width of Vue TextArea control

You can easily customize the width of the TextArea using the [width](https://ej2.syncfusion.com/vue/documentation/api/textarea/#width) property. This property allows precise adjustment of the TextArea's width according to the specific layout requirements of the application.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/textarea/resize-cs2/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/textarea/resize-cs2/app.vue %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/textarea/resize-cs2" %}
