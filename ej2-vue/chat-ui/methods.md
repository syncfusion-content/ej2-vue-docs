---
layout: post
title: Methods in Vue Chat UI component | Syncfusion
description:  Checkout and learn about Methods with Vue Chat UI component of Syncfusion Essential JS 2 and more details.
platform: ej2-vue
control: Chat UI
documentation: ug
domainurl: ##DomainURL##
---

# Methods in Vue Chat UI component

## Add message

The [addMessage](../api/chat-ui#addmessage) method programmatically adds a new message to the chat. You can provide the new message as either a `string` or a `MessageModel` object.

The following sample demonstrates how to add a new message using both a `string` and a `MessageModel` object.

Here is an example of how to use the [addMessage](../api/chat-ui#addmessage) method:

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/chat-ui/methods/addMessageModel/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/chat-ui/methods/addMessageModel/app.vue %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/code-snippet/chat-ui/methods/addMessageModel" %}

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/chat-ui/methods/addMessageString/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/chat-ui/methods/addMessageString/app.vue %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/code-snippet/chat-ui/methods/addMessageString" %}

## Update message

The [updateMessage](../api/chat-ui#updatemessage) method modifies an existing message in the Chat UI, which is useful for editing or correcting previously sent messages.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/chat-ui/methods/editMessage/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/chat-ui/methods/editMessage/app.vue %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/code-snippet/chat-ui/methods/editMessage" %}

## Scroll to the bottom

The [scrollToBottom](../api/chat-ui#scrolltobottom) method scrolls the chat view to the most recent message, ensuring that the latest content is visible to the user.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/chat-ui/methods/autoScrollToBottom/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/chat-ui/methods/autoScrollToBottom/app.vue %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/code-snippet/chat-ui/methods/autoScrollToBottom" %}
