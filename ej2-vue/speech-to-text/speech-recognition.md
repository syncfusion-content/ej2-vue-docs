---
layout: post
title: Speech recognition in Vue SpeechToText Component | Syncfusion
description: Learn here all about speech recognition in Syncfusion Essential Vue SpeechToText component, its elements, and more.
platform: ej2-vue
control: SpeechToText
documentation: ug
domainurl: ##DomainURL##
---

# Speech recognition in ##Platform_Name## SpeechToText component

## Retrieving Transcripts

The [transcript](../api/speech-to-text/#transcript) property allows you to retrieve the transcribed text generated from the spoken input.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/speech-to-text/speechRecognition/transcript/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/speech-to-text/speechRecognition/transcript/app.vue %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/speech-to-text/speechRecognition/transcript/index" %}

## Setting Language

The [lang](../api/speech-to-text/#lang) property specifies the language for speech recognition, ensuring the engine correctly interprets spoken words for a given locale (e.g., `en-US` for American English or `fr-FR` for French).

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/speech-to-text/speechRecognition/language/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/speech-to-text/speechRecognition/language/app.vue %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/speech-to-text/speechRecognition/language/index" %}

## Allowing Interim Results

The [allowInterimResults](../api/speech-to-text/#allowInterimResults) property controls whether interim (real-time) or final speech recognition results are provided. When `true`, results are displayed as the user speaks; otherwise, only the final transcript is shown. This property is `true` by default.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/speech-to-text/speechRecognition/interimResults/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/speech-to-text/speechRecognition/interimResults/app.vue %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/speech-to-text/speechRecognition/interimResults/index" %}

## Managing Listening State

The [listeningState](../api/speech-to-text/#listeningState) property manages and indicates the component's current status. It can be `Inactive` (idle), `Listening` (actively capturing audio), or `Stopped` (recognition complete). The default state is `Inactive`.

### Inactive

The component is in an idle state with no active speech recognition.

### Listening

The component is actively listening, capturing, and transcribing speech, indicated by a stop icon and blinking animation.

### Stopped

Denotes that speech recognition has ended, and no further speech is being processed.

The following sample demonstrates the usage of the [listeningState](../api/speech-to-text/#listeningState) property.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/speech-to-text/speechRecognition/listeningState/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/speech-to-text/speechRecognition/listeningState/app.vue %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/speech-to-text/speechRecognition/listeningState/index" %}

## Show or Hide Tooltip

The [showTooltip](../api/speech-to-text/#showTooltip) property determines whether to display a tooltip when hovering over the SpeechToText button. It is enabled by default.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/speech-to-text/speechRecognition/showTooltip/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/speech-to-text/speechRecognition/showTooltip/app.vue %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/speech-to-text/speechRecognition/showTooltip/index" %}

## Setting Disabled

The [disabled](../api/speech-to-text/#disabled) property, when set to `true`, disables the SpeechToText component and prevents user interaction. By default, it is `false`.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/speech-to-text/speechRecognition/disabled/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/speech-to-text/speechRecognition/disabled/app.vue %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/speech-to-text/speechRecognition/disabled/index" %}

## Setting HTML Attributes

You can use the [htmlAttributes](../api/speech-to-text/#htmlAttributes) property to assign custom attributes to the SpeechToText component for the button element.

## Error Handling

The SpeechToText component handles various errors that may occur during speech recognition. The following table lists the possible errors and their causes:

| Error                | Cause                                                                                        |
|----------------------|----------------------------------------------------------------------------------------------|
| `no-speech`            | The microphone did not detect any speech input.                                              |
| `aborted`              | The speech recognition process was intentionally terminated.                                 |
| `audio-capture`        | The system was unable to detect a microphone device.                                         |
| `not-allowed`          | Access to the microphone was denied by the user or browser settings.                         |
| `service-not-allowed`  | The current context does not permit the use of the speech recognition service.               |
| `network`              | A network issue is preventing the speech recognition service from functioning.               |
| `unsupported-browser`  | The browser being used does not support the SpeechRecognition API.                           |
| `default`              | An unidentified error occurred during the speech recognition process.                        |

## Browser Support

The SpeechToText component relies on the [Speech Recognition API](https://developer.mozilla.org/en-US/docs/Web/API/SpeechRecognition) for processing speech input. Ensure that the browser supports this API before implementation.

|    Browser    |    Supported versions    |
|--------------|---------------|
|    Chrome     |    25+    |
|    Edge     |    79+    |
|    Firefox     |    Not Supported    |
|    Safari     |    12+    |
|    Opera     |    30+    |
