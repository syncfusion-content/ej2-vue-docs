---
layout: post
title: Events in Vue Chat UI Component | Syncfusion
description:  Checkout and learn about Events with Vue Chat UI Component of Syncfusion Essential JS 2 and more details.
platform: ej2-vue
control: Chat UI
documentation: ug
domainurl: ##DomainURL##
---

# Events in Vue Chat UI Component

This section describes the Chat UI events that will be triggered when appropriate actions are performed. The following events are available in the Chat UI component.

## Created

The Chat UI component triggers the [created](../api/chat-ui/chatUIModel/#created) event when the component rendering is completed.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/chat-ui/events/created/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/chat-ui/events/created/app.vue %}
{% endhighlight %}
{% endtabs %}

## Sending message

The [messageSend](../api/chat-ui/chatUIModel/#messagesend) event is triggered before sending a message in the Chat UI component.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/chat-ui/events/messageSend/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/chat-ui/events/messageSend/app.vue %}
{% endhighlight %}
{% endtabs %}

## User Typing

The [userTyping](../api/chat-ui/chatUIModel/#usertyping) event is triggered when the user is typing a message in the Chat UI component.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/chat-ui/events/userTyping/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/chat-ui/events/userTyping/app.vue %}
{% endhighlight %}
{% endtabs %}
