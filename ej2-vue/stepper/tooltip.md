---
layout: post
title: Tooltip in Vue Stepper component | Syncfusion
description: Checkout and learn about Tooltip with Vue Stepper component of Syncfusion Essential JS 2 and more.
control: Stepper 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Tooltip in Vue Stepper component

The Stepper component supports tooltip to show additional information in the steps by setting the [showTooltip](https://ej2.syncfusion.com/vue/documentation/api/stepper/stepperModel/#showtooltip) property to `true`. 

The tooltip appears when the user hovers over the step, providing the information such as the label or text. By default, the `showTooltip` property is `false`.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/stepper/tooltip/app.vue %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/stepper/tooltip" %}

## Tooltip template

You can use the [tooltipTemplate](https://ej2.syncfusion.com/vue/documentation/api/stepper/stepperModel/#tooltiptemplate) property to specify a custom template for the tooltips, providing detailed information about the steps.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/stepper/tooltipTemplate/app.vue %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/stepper/tooltipTemplate" %}
