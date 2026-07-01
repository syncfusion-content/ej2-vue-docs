---
layout: post
title: Text-to-Speech With Vue AI AssistView component | Syncfusion
description:  Checkout and learn about configuration of Text-to-Speech with Azure OpenAI in Vue AI AssistView component of Syncfusion Essential JS 2 and more details.
platform: ej2-vue
control: AI AssistView
documentation: ug
domainurl: ##DomainURL##
---

# Text to Speech in AI AssistView

The Syncfusion Vue AI AssistView component provides built-in `Text-to-Speech` (TTS) support using the browser's Web Speech API, specifically the [SpeechSynthesisUtterance](https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesisUtterance) interface. This allows AI-generated responses into spoken audio, enhancing accessibility and user interaction.

## Prerequisites

Before integrating `Text-to-Speech`, ensure the following:

1. The Syncfusion AI AssistView component is properly set up in your Vue application.
    - [Vue Getting Started Guide](../getting-started)

2. The AI AssistView component is integrated with [Azure OpenAI](https://azure.microsoft.com/en-us/products/ai-foundry/models/openai/).
    - [Integration of Azure OpenAI With Vue AI AssistView component](../ai-integrations/openai-integration)

## Configure text to speech

To enable the built-in Text-to-Speech functionality, add the `e-assist-audio` response toolbar item to the `items` collection of the [responseToolbarSettings](https://ej2.syncfusion.com/vue/documentation/api/ai-assistview#responsetoolbarsettings) property. When clicked, it fetches the plain text from the generated AI response and uses the browser's SpeechSynthesis API to read it aloud.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/ai-assistview/speech/tts/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/ai-assistview/speech/tts/app.vue %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/code-snippet/ai-assistview/speech/tts" %}

## Customizing speech settings

You can use the [textToSpeechSettings](https://ej2.syncfusion.com/vue/documentation/api/ai-assistview#texttospeechsettings) property to customize the speech synthesis behavior using the following available properties such as [language](https://ej2.syncfusion.com/vue/documentation/api/ai-assistview/textToSpeechSettingsModel#language), [speechPitch](https://ej2.syncfusion.com/vue/documentation/api/ai-assistview/textToSpeechSettingsModel#speechpitch), [speechRate](https://ej2.syncfusion.com/vue/documentation/api/ai-assistview/textToSpeechSettingsModel#speechrate), [volume](https://ej2.syncfusion.com/vue/documentation/api/ai-assistview/textToSpeechSettingsModel#volume) and [voice](https://ej2.syncfusion.com/vue/documentation/api/ai-assistview/textToSpeechSettingsModel#voice).

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/ai-assistview/speech/tts-settings/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/ai-assistview/speech/tts-settings/app.vue %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/ai-assistview/speech/tts-settings" %}

## See Also

* [Speech-to-Text](./speech-to-text.md)
