---
layout: post
title: Footer in Vue Chat UI component | Syncfusion
description:  Checkout and learn about Footer with Vue Chat UI component of Syncfusion Essential JS 2 and more details.
platform: ej2-vue
control: Chat UI
documentation: ug
domainurl: ##DomainURL##
---

# Footer in Vue Chat UI component

The footer of the Syncfusion Vue Chat UI component is the area at the bottom that typically contains the message input field and the send button. It is enabled by default to provide a standard chat interface where users can type and send messages.

## Show or hide footer

You can control the visibility of the footer using the [showFooter](../api/chat-ui/chatUIModel#showfooter) property. By default, this property is set to `true`.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/chat-ui/footer/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/chat-ui/footer/app.vue %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chat-ui/footer" %}

## Footer template

For advanced customization beyond simply showing or hiding the footer, refer to the [Footer Template](./templates#footer-template) documentation to learn how to define your own custom footer content and layout.
