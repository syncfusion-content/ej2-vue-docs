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

## Start Listening

The [startListening()](../api/speech-to-text/#startlistening) method initiates speech recognition and begins converting speech to text. This is used to programmatically start the recognition process without user interaction on the microphone button.

## Stop Listening

The [stopListening()](../api/speech-to-text/#stoplistening) method terminates the speech recognition process. This can be used to programmatically stop the recognition when an action is completed.

The following example demonstrates how to use the `startListening` and `stopListening` methods in the SpeechToText component.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/speech-to-text/methods/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/speech-to-text/methods/app.vue %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/speech-to-text/methods/index" %}
