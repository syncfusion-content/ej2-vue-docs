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

## Adding message

You can use the `addMessage` public method to add the messages in the Chat UI. You can add it either as a string or MessageModel collection. It programmatically adds a new message to the chat.

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

## Edit messages

You can use the `updateMessage` public method to update the messages in the ChatUI to modify an existing message within the chat, useful for editing or correcting sent messages.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/chat-ui/methods/editMessage/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/chat-ui/methods/editMessage/app.vue %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/code-snippet/chat-ui/methods/editMessage" %}

## Scroll to bottom

You can use the `scrollToBottom` public method to scroll the chat view to the latest message, ensuring users see the new content updated.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/chat-ui/methods/autoScrollToBottom/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/chat-ui/methods/autoScrollToBottom/app.vue %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/code-snippet/chat-ui/methods/autoScrollToBottom" %}
