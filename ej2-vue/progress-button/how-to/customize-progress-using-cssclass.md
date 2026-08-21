---
layout: post
title: Customize progress using cssClass in Vue Progress Button | Syncfusion
description: Use the cssClass property on the Vue Progress Button to show vertical progress, top progress, and reverse progress filler styles.
control: Customize progress using cssclass 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# How to customize progress using cssClass in Vue Progress Button

You can customize the background filler UI using the [`cssClass`](https://ej2.syncfusion.com/vue/documentation/api/progress-button/#cssClass) property.

* Adding `e-vertical` to `cssClass` shows vertical progress.
* Adding `e-progress-top` to `cssClass` shows progress at the top.

You can also show reverse progress by adding custom class to the [`cssClass`](https://ej2.syncfusion.com/vue/documentation/api/progress-button/#cssClass) property.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/progress-button/custom-progress-cs2/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/progress-button/custom-progress-cs2/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/progress-button/custom-progress-cs2" %}