---
layout: post
title: Events in Vue SpeechToText Component | Syncfusion
description: Learn here all about events in Syncfusion Essential Vue SpeechToText component, its elements, and more.
platform: ej2-vue
control: SpeechToText
documentation: ug
domainurl: ##DomainURL##
---

# Events in Vue SpeechToText component

This section describes the SpeechToText events that will be triggered when appropriate actions are performed. The following events are available in the SpeechToText component.

|Name|Args|Description|
|---|---|---|
|created|-|Triggers when the SpeechToText component's rendering is fully completed|
|onStart|StartListeningEventArgs|Triggers when the speech recognition begins|
|onStop|StopListeningEventArgs|Triggers when the speech recognition stops|
|onError|ErrorEventArgs|Triggers when an error occurs during speech recognition or while listening. For list of possible errors, refer to the [Error handling](./speech-recognition#error-handling) section|
|transcriptChanged|TranscriptChangedEventArgs|Triggers when an transcription change occurs during the speech recognition|

The following example demonstrates how to configure the SpeechToText events.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/speech-to-text/events/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/speech-to-text/events/app.vue %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/speech-to-text/events/index" %}
