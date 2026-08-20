---
layout: post
title: How to trace events in Vue Progress Button | Syncfusion
description: Handle the fail, begin, progress, and end events of the Vue Progress Button to perform custom operations during its action lifecycle.
control: Trace events of progress button 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# How to trace events in Vue Progress Button

The ProgressButton component triggers events based on its actions. The events can be used as extension points to perform custom operations.

The events available in ProgressButton are [`fail`](https://ej2.syncfusion.com/vue/documentation/api/progress-button/#fail), [`begin`](https://ej2.syncfusion.com/vue/documentation/api/progress-button/#begin), [`progress`](https://ej2.syncfusion.com/vue/documentation/api/progress-button/#progress), and [`end`](https://ej2.syncfusion.com/vue/documentation/api/progress-button/#end).

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/progress-button/default-cs5/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/progress-button/default-cs5/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/progress-button/default-cs5" %}