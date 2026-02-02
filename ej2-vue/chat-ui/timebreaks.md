---
layout: post
title: TimeBreaks in Vue Chat UI component | Syncfusion
description:  Checkout and learn about Timebreaks with Vue Chat UI component of Syncfusion Essential JS 2 and more details.
platform: ej2-vue
control: Chat UI
documentation: ug
domainurl: ##DomainURL##
---

# TimeBreaks in Vue Chat UI component

## Show or hide time break

The Syncfusion Vue Chat UI component allows you to display date-wise separators between messages using the [showTimeBreak](../api/chat-ui#showtimebreak) property. This feature enhances readability and improves message organization. By default, this property is `false`.

When enabled, the component automatically inserts a separator indicating a new date whenever the conversation crosses midnight.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/chat-ui/timebreak/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/chat-ui/timebreak/app.vue %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/code-snippet/chat-ui/timebreak" %}

## Time break template

> For advanced customization, you can define a custom appearance for the separator using a time break template. Refer to the [Templates](./templates#time-break-template) documentation for implementation details.
