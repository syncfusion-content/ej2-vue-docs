---
layout: post
title: Speech-to-Text With Vue AI AssistView component | Syncfusion
description:  Checkout and learn about configuration of Speech-to-Text with Azure OpenAI in Vue AI AssistView component of Syncfusion Essential JS 2 and more details.
platform: ej2-vue
control: AI AssistView
documentation: ug
domainurl: ##DomainURL##
---

# Speech-to-Text in Vue AI AssistView

The Syncfusion Vue AI AssistView component integrates `Speech-to-Text` functionality through the browser's [Web Speech API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Speech_API). This enables the conversion of spoken words into text using the device's microphone, allowing users to interact with the AI AssistView through voice input.

## Prerequisites

Before integrating `Speech-to-Text`, ensure the following:

1. The Syncfusion AI AssistView component is properly set up in your Vue application.
    - [Vue Getting Started Guide](../getting-started)

2. The AI AssistView component is integrated with [Azure OpenAI](https://microsoft.github.io/PartnerResources/skilling/ai-ml-academy/resources/openai).
    - [Integration of Azure OpenAI With Vue AI AssistView component](../ai-integrations/openai-integration)

## Configure Speech-to-Text

To enable Speech-to-Text functionality in the Vue AI AssistView component, update the `App.vue` file to incorporate the Web Speech API.

The [SpeechToText](https://ej2.syncfusion.com/vue/documentation/speech-to-text/getting-started) component listens to audio input from the device’s microphone, transcribes spoken words into text, and updates the AI AssistView’s editable footer using the [footerTemplate](https://ej2.syncfusion.com/vue/documentation/api/ai-assistview/#footertemplate) property to display the transcribed text. The transcribed text is then sent as a prompt to the Azure OpenAI service via the AI AssistView component.

### Configuration Options

* **[`lang`](https://ej2.syncfusion.com/vue/documentation/api/speech-to-text/#lang)**: Specifies the language for speech recognition. For example:

    * `en-US` for American English
    * `fr-FR` for French

* **[`allowInterimResults`](https://ej2.syncfusion.com/vue/documentation/api/speech-to-text/#allowInterimResults)**: Set to `true` to receive real-time (interim) recognition results, or `false` to receive only final results.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/ai-assistview/speech/stt/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/ai-assistview/speech/stt/app.vue %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/code-snippet/ai-assistview/speech/stt" %}

## Error Handling

The `SpeechToText` component provides events to handle errors that may occur during speech recognition. For more information, refer to the [Error Handling](https://ej2.syncfusion.com/vue/documentation/speech-to-text/speech-recognition#error-handling) section in the documentation.

## Browser Compatibility

The `SpeechToText` component relies on the [Speech Recognition API](https://developer.mozilla.org/en-US/docs/Web/API/SpeechRecognition), which has limited browser support. Refer to the [Browser Compatibility](https://ej2.syncfusion.com/vue/documentation/speech-to-text/speech-recognition#browser-support) section for detailed information.

## See Also

* [Text-to-Speech](./text-to-speech.md)
