---
layout: post
title: Steps Validation in Vue Stepper | Syncfusion
description: Set the isValid property on Vue Stepper steps to display success or error validation icons, indicating the validation state of each step in the component.
control: Stepper 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Steps Validation in Vue Stepper

The Stepper component allows you to set the validation state for each step, displaying either a success or error icon. You can define the success state of a step by setting the `isValid` property to `true`. If set to `false`, the step will display an error state. By default, the `isValid` property is `null`.

> Based on the `stepType`, the validation state icon will be displayed either as an indicator or as part of the step label/text.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/stepper/validation/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/stepper/validation/app.vue %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/stepper/validation" %}