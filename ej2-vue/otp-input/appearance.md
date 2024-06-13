---
layout: post
title: Appearance in Vue OTP Input component | Syncfusion
description:  Learn here all about Appearance in Syncfusion Vue OTP Input component of Syncfusion Essential JS 2 and more.
platform: ej2-vue
control: OTP Input
documentation: ug
domainurl: ##DomainURL##
---

# Appearance in Vue OTP Input component

You can also customize the appearance of OTP Input control.

## Setting input length

You can specify the length of OTP by using the [length](https://ej2.syncfusion.com/vue/documentation/api/otp-input#length) property. The default value is `4`.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/otp-input/appearance/length/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/otp-input/appearance/length/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/otp-input/appearance/length" %}

## Disable inputs

You can disable the OTP Input control by using the [disabled](https://ej2.syncfusion.com/vue/documentation/api/otp-input#disabled) property. By default the value is `false`.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/otp-input/appearance/disabled/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/otp-input/appearance/disabled/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/otp-input/appearance/disabled" %}

## CssClass

You can customize the appearance of the OTP Input control, such as by changing its colors, fonts, sizes or other visual aspects by using the [cssClass](https://ej2.syncfusion.com/vue/documentation/api/otp-input#cssclass) property.

The OTP input control supports the following predefined styles that can be defined using the `cssClass` property. You can customize by replacing the `cssClass` property with the below defined class names.

| cssClass | Description |
| -------- | -------- |
| `e-success` | Used to represent a positive action. |
| `e-warning` | Used to represent an action with caution. |
| `e-error` | Used to represent a negative action. |

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/otp-input/appearance/cssClass/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/otp-input/appearance/cssClass/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/otp-input/appearance/cssClass" %}