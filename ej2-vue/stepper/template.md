---
layout: post
title: Template in Vue Stepper component | Syncfusion
description: Checkout and learn about Template with Vue Stepper component of Syncfusion Essential JS 2 and more.
control: Stepper 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Template in Vue Stepper component

The Stepper component allows you to customize the default appearance and content of each step, creating a personalized experience for the user. You can use the [template](https://ej2.syncfusion.com/vue/documentation/api/stepper/stepperModel/#template) propety to set the template content for the steps.

The step model and current step index are passed as `step` and `currentStep` properties in the template context for customization.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/stepper/template/app.vue %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/stepper/template" %}