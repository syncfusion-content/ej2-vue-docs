---
layout: post
title: Methods in Vue SpeechToText Component | Syncfusion
description: Learn here all about methods in Syncfusion Essential Vue SpeechToText component, its elements, and more.
platform: ej2-vue
control: SpeechToText
documentation: ug
domainurl: ##DomainURL##
---

# Methods in Vue SpeechToText component

## Startlistening

You can use the [startListening](../api/speech-to-text/#startListening) public method to initiate the speech recognition and begins the conversion of the speech to text.

## Stoplistening

You can use the [stopListening](../api/speech-to-text/#stopListening) public method to stop capturing your speech and ends the speech recognition.

Below sample demonstrates the SpeechToText control configured with above methods.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/speech-to-text/methods/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/speech-to-text/methods/app.vue %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/speech-to-text/methods/index" %}
