---
layout: post
title: Timestamp in Vue Chat UI component | Syncfusion
description:  Checkout and learn about Timestamp with Vue Chat UI component of Syncfusion Essential JS 2 and more details.
platform: ej2-vue
control: Chat UI
documentation: ug
domainurl: ##DomainURL##
---

# Timestamp in Vue Chat UI component

## Show or Hide Timestamps

The [showTimeStamp](../api/chat-ui#showtimestamp) property is used to enable or disable timestamps for all messages. Timestamps display the exact date and time that a message was sent. By default, this property is set to `true`.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/chat-ui/timestamp/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/chat-ui/timestamp/app.vue %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/code-snippet/chat-ui/timestamp" %}

## Setting the Timestamp Format

The [timeStampFormat](../api/chat-ui#timestampformat) property defines the display format for timestamps that appear with each message. The default format is `dd/MM/yyyy hh:mm a`. The format string conforms to the standard date and time formatting rules.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/chat-ui/timestampFormat/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/chat-ui/timestampFormat/app.vue %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/code-snippet/chat-ui/timestampFormat" %}
