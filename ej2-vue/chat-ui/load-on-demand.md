---
layout: post
title: Load On-Demand in Vue Chat UI | Syncfusion®
description: Load chat messages on demand in the Vue Chat UI by enabling the loadOnDemand property to fetch older messages when the user scrolls to the top.
platform: ej2-vue
control: Chat UI
documentation: ug
domainurl: ##DomainURL##
---

# Load On-Demand in Vue Chat UI

You can use the [loadOnDemand](../api/chat-ui/chatUIModel/#loadondemand) property to load messages dynamically when the scroll reaches the top of the message list improving performance and reducing load times, particularly in long conversations. This ensures a smooth user experience by only fetching messages as needed rather than loading the entire conversation at once.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/chat-ui/loadOnDemand/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/chat-ui/loadOnDemand/app.vue %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/code-snippet/chat-ui/loadOnDemand" %}
