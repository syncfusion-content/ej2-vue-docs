---
layout: post
title: Events in Vue SpeechToText Component | Syncfusion
description: Learn here all about events in Syncfusion Essential Vue SpeechToText component, its elements, and more.
platform: ej2-vue
control: SpeechToText
documentation: ug
domainurl: ##DomainURL##
---

# Events in ##Platform_Name## SpeechToText Component

This section describes the events that are triggered when performing actions with the SpeechToText component. The following events are available:
 
|Name|Args|Description|
|---|---|---|
|created|-|Triggers when the SpeechToText component's rendering is fully completed.|
|onStart|StartListeningEventArgs|Triggers when speech recognition begins.|
|onStop|StopListeningEventArgs|Triggers when speech recognition stops.|
|onError|ErrorEventArgs|Triggers when an error occurs during speech recognition or listening. For a list of possible errors, refer to the [Error handling](./speech-recognition#error-handling) section.|
|transcriptChanged|TranscriptChangedEventArgs|Triggers when a transcription change occurs during speech recognition.|

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
