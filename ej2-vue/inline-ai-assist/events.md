---
layout: post
title: Events in Vue Inline AI Assist component | Syncfusion
description: Checkout and learn about events with Vue Inline AI Assist component of Syncfusion Essential JS 2 and more.
platform: ej2-vue
control: Inline AI Assist
documentation: ug
domainurl: ##DomainURL##
---

# Events in Vue Inline AI Assist component

This section describes the Inline AI Assist events that will be triggered when appropriate actions are performed. The following events are available in the Inline AI Assist control.

## created

The Inline AI Assist control triggers the [created](../api/inline-ai-assist#created) event when the control rendering is completed.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/inline-ai-assist/events/created/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/inline-ai-assist/events/created/app.vue %}
{% endhighlight %}
{% endtabs %}

## promptRequest

The [promptRequest](../api/inline-ai-assist#promptrequest) event is triggered when the prompt request is made in the Inline AI Assist control.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/inline-ai-assist/events/prompt-request/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/inline-ai-assist/events/prompt-request/app.vue %}
{% endhighlight %}
{% endtabs %}

## open

The [open](../api/inline-ai-assist#open) event is triggered when the Inline AI Assist popup is opened.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/inline-ai-assist/events/open/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/inline-ai-assist/events/open/app.vue %}
{% endhighlight %}
{% endtabs %}

### close

The [close](../api/inline-ai-assist#close) event is triggered when the Inline AI Assist popup is closed.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/inline-ai-assist/events/close/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/inline-ai-assist/events/close/app.vue %}
{% endhighlight %}
{% endtabs %}
