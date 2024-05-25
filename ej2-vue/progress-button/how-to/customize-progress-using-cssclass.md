---
layout: post
title: Customize progress using cssclass in Vue Progress button component | Syncfusion
description: Learn here all about Customize progress using cssclass in Syncfusion Vue Progress button component of Syncfusion Essential JS 2 and more.
control: Customize progress using cssclass 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Customize progress using cssclass in Vue Progress button component

You can customize the background filler UI using the [`cssClass`](https://ej2.syncfusion.com/vue/documentation/api/progress-button/#cssClass) property.

* Adding `e-vertical` to `cssClass` shows vertical progress.
* Adding `e-progress-top` to `cssClass` shows progress at the top.

You can also show reverse progress by adding custom class to the [`cssClass`](https://ej2.syncfusion.com/vue/documentation/api/progress-button/#cssClass) property.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/progress-button/custom-progress-cs2/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue) %}
{% include code-snippet/progress-button/custom-progress-cs2/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/progress-button/custom-progress-cs2" %}