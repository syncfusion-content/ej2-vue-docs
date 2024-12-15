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

## Show or hide timestamp

You can use the `showTimeStamp` property to enable or disable timestamps for all messages which displays the exact date and time when they were sent. By default, the value is `true`.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/chat-ui/timestamp/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/chat-ui/timestamp/app.vue %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/code-snippet/chat-ui/timestamp" %}

## Setting time stamp format

You can use the `timeStampFormat` property to display time formats for all the messages which are displayed with the messages being sent. By default, the value is `dd/MM/yyyy hh:mm a`.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/chat-ui/timestampFormat/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/chat-ui/timestampFormat/app.vue %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/code-snippet/chat-ui/timestampFormat" %}
