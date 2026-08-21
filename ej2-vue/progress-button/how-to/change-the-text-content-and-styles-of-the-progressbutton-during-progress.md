---
layout: post
title: Change text and styles during progress in Vue Progress Button | Syncfusion
description: Update the Vue Progress Button content and cssClass at the begin and end events to change text and styles during progress.
control: Change the text content and styles of the progressbutton during progress 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# How to change text and styles during progress in Vue Progress Button

You can change the text content and styles of the ProgressButton during progress by changing the text content and the [`cssClass`](https://ej2.syncfusion.com/vue/documentation/api/progress-button/#cssClass) property at the [`begin`](https://ej2.syncfusion.com/vue/documentation/api/progress-button/#begin) and [`end`](https://ej2.syncfusion.com/vue/documentation/api/progress-button/#end) events.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/progress-button/custom-progress-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/progress-button/custom-progress-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/progress-button/custom-progress-cs1" %}