---
layout: post
title: Text-to-Speech With Vue AI AssistView component | Syncfusion
description:  Checkout and learn about configuration of Text-to-Speech with Azure OpenAI in Vue AI AssistView component of Syncfusion Essential JS 2 and more details.
platform: ej2-vue
control: AI AssistView
documentation: ug
domainurl: ##DomainURL##
---

# Text-to-Speech in Vue AI AssistView

The Syncfusion Vue AI AssistView component integrates `Text-to-Speech` (TTS) functionality using the browser's Web Speech API, specifically the [SpeechSynthesisUtterance](https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesisUtterance) interface. This allows AI-generated responses to be converted into spoken audio, enhancing accessibility and user interaction.

## Prerequisites

Before integrating `Text-to-Speech`, ensure the following:

1. The Syncfusion AI AssistView component is properly set up in your Vue application.
    - [Vue Getting Started Guide](../getting-started)

2. The AI AssistView component is integrated with [Azure OpenAI](https://microsoft.github.io/PartnerResources/skilling/ai-ml-academy/resources/openai).
    - [Integration of Azure OpenAI With Vue AI AssistView component](../ai-integrations/openai-integration)

## Configure Text-to-Speech

To enable Text-to-Speech functionality, modify the `App.vue` file to incorporate the Web Speech API. A custom `Read Aloud` button is added to the response toolbar using the [responseToolbarSettings](https://ej2.syncfusion.com/vue/documentation/api/ai-assistview/#responsetoolbarsettings) property. When clicked, the [itemClicked](https://ej2.syncfusion.com/vue/documentation/api/ai-assistview/responseToolbarSettingsModel/#itemclicked) event extracts plain text from the generated AI response and use the browser SpeechSynthesis API to read it aloud.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/ai-assistview/speech/tts/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/ai-assistview/speech/tts/app.vue %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/code-snippet/ai-assistview/speech/tts" %}

## See Also

* [Speech-to-Text](./speech-to-text.md)
