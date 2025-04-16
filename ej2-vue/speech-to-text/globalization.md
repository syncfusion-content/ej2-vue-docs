---
layout: post
title: Globalization in Vue SpeechToText component | Syncfusion
description:  Learn here all about Globalization in Syncfusion Vue SpeechToText component of Syncfusion Essential JS 2 and more.
platform: ej2-vue
control: SpeechToText
documentation: ug
domainurl: ##DomainURL##
---

# Globalization in Vue SpeechToText component

## Localization

The SpeechToText can be localized to any culture by defining the text in the corresponding culture. The default locale of the SpeechToText is `en-US` (English). The following table represents the default text of the SpeechToText in `en-US` culture.

|KEY|Text|
|----|----|
|abortedError|Speech recognition was aborted.|
|audioCaptureError|No microphone detected. Ensure your microphone is connected.|
|defaultError|An unknown error occurred.|
|networkError|Network error occurred. Check your internet connection.|
|noSpeechError|No speech detected. Please speak into the microphone.|
|notAllowedError|Microphone access denied. Allow microphone permissions.|
|serviceNotAllowedError|Speech recognition service is not allowed in this context.|
|unsupportedBrowserError|The browser does not support the SpeechRecognition API.|
|startAriaLabel|Press to start speaking and transcribe your words|
|stopAriaLabel|Press to stop speaking and end transcription|
|startTooltipText|Start listening|
|stopTooltipText|Stop listening|

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/speech-to-text/globalization/localization/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/speech-to-text/globalization/localization/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/speech-to-text/globalization/localization/index" %}

## RTL

RTL provides an option to switch the text direction and layout of the SpeechToText component from right to left by setting the [enableRtl](../api/speech-to-text#enableRtl) property to true.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/speech-to-text/globalization/rtl/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/speech-to-text/globalization/rtl/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/speech-to-text/globalization/rtl/index" %}
