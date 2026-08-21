---
layout: post
title: Tooltip in Vue Stepper | Syncfusion
description: Show tooltips on Vue Stepper steps with the showTooltip property and customize tooltip content using the tooltipTemplate property for additional step details on hover.
control: Stepper 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Tooltip in Vue Stepper

The Stepper component supports tooltip to show additional information in the steps by setting the [showTooltip](https://ej2.syncfusion.com/vue/documentation/api/stepper/stepperModel/#showtooltip) property to `true`. 

The tooltip appears when the user hovers over the step, providing the information such as the label or text. By default, the `showTooltip` property is `false`.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/stepper/tooltip/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/stepper/tooltip/app.vue %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/stepper/tooltip" %}

## Tooltip template

You can use the [tooltipTemplate](https://ej2.syncfusion.com/vue/documentation/api/stepper/stepperModel/#tooltiptemplate) property to specify a custom template for the tooltips, providing detailed information about the steps.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/stepper/tooltipTemplate/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/stepper/tooltipTemplate/app.vue %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/stepper/tooltipTemplate" %}