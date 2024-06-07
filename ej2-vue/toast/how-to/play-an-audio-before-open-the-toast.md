---
layout: post
title: Play an audio before open the toast in Vue Toast component | Syncfusion
description: Learn here all about Play an audio before open the toast in Syncfusion Vue Toast component of Syncfusion Essential JS 2 and more.
control: Play an audio before open the toast 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Play an audio before open the toast in Vue Toast component

The following sample demonstrates how to play an audio in background while opening the toast by including audio play codes into the beforeOpen event function.

> To stop the audio after displaying the toast, use the [`open`](https://ej2.syncfusion.com/vue/documentation/api/toast/#open) event in toast. For further customization, check the Toast Events [`APIs`](https://ej2.syncfusion.com/vue/documentation/api/toast/#events).

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/toast/how-to/audio-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/toast/how-to/audio-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/toast/how-to/audio-cs1" %}