---
layout: post
title: Linear Flow in Vue Stepper | Syncfusion
description: Restrict Vue Stepper navigation to sequential order by setting the linear property to true, ensuring users progress through each step one at a time.
control: Stepper
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Linear Flow in Vue Stepper

The Stepper component enables users to progress sequentially through each step, ensuring navigation from one step to the next in a linear way by setting the [linear](https://ej2.syncfusion.com/vue/documentation/api/stepper/stepperModel/#linear) property to `true`. The default value is `false` allowing navigation between any steps and vice versa.

The example demonstrates the functionality of both linear and non-linear flow in the Stepper.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/stepper/linear/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/stepper/linear/app.vue %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/stepper/linear" %}