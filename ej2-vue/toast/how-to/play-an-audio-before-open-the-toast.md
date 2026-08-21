---
layout: post
title: How to play an audio before open the toast in Vue Toaster | Syncfusion
description: Play an audio in the background before the Vue Toaster opens by adding audio playback code to the beforeOpen event handler.
control: Play an audio before open the toast 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# How to play an audio before open the toast in Vue Toaster

The following sample demonstrates how to play an audio in background while opening the toast by including audio play codes into the beforeOpen event function.

> To stop the audio after displaying the toast, use the [`open`](https://ej2.syncfusion.com/vue/documentation/api/toast#open) event in toast. For further customization, check the Toast Events [`APIs`](https://ej2.syncfusion.com/vue/documentation/api/toast#events).

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/toast/how-to/audio-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/toast/how-to/audio-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/toast/how-to/audio-cs1" %}