---
layout: post
title: How to set maxHeight to the dialog in Vue Dialog | Syncfusion
description: Set the Vue Dialog maxHeight in the beforeOpen event to override the default target-based calculation and control the dialog's vertical size limit.
control: Setting max height to the dialog 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# How to set maxHeight to the dialog in Vue Dialog

By default, the maxHeight for the Dialog is calculated based on the target. If the target is not specified externally, the Dialog considers the body as the target and will calculate the maxHeight based on the body. The maxHeight can be set for the Dialog in the [beforeOpen](https://ej2.syncfusion.com/vue/documentation/api/dialog#beforeOpen) event.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/dialog/max-height-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/dialog/max-height-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/dialog/max-height-cs1" %}