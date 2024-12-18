---
layout: post
title: Load on-demand in Vue Chat UI component | Syncfusion
description:  Checkout and learn about Load on-demand with Vue Chat UI component of Syncfusion Essential JS 2 and more details.
platform: ej2-vue
control: Chat UI
documentation: ug
domainurl: ##DomainURL##
---

# Load on-demand in Vue Chat UI component

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
