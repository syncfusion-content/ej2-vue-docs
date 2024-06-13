---
layout: post
title: Input Types in Vue OTP Input component | Syncfusion
description:  Learn here all about Input Types in Syncfusion Vue OTP Input component of Syncfusion Essential JS 2 and more.
platform: ej2-vue
control: OTP Input
documentation: ug
domainurl: ##DomainURL##
---

# Input Types in Vue OTP Input component

## Types

This section explains the the various types of OTP (One-Time Password) input controls, explaining their default behaviors and appropriate use cases.

### Number type

You can set the [type](https://ej2.syncfusion.com/vue/documentation/api/otp-input#type) property to [number](https://ej2.syncfusion.com/vue/documentation/api/otp-input/otpInputType/) to use this input type as number. This is ideal for OTP input scenarios with numeric-only codes. By default `type` property is `number`.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/otp-input/inputTypes/number/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/otp-input/inputTypes/number/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/otp-input/inputTypes/number" %}

### Text type

You can set the [type](https://ej2.syncfusion.com/vue/documentation/api/otp-input#type) property to [text](https://ej2.syncfusion.com/vue/documentation/api/otp-input/otpInputType/) to use this input type as text. This is suitable when the OTP input need to include both letters and numbers.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/otp-input/inputTypes/text/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/otp-input/inputTypes/text/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/otp-input/inputTypes/text" %}


### Password type

You can set the [type](https://ej2.syncfusion.com/vue/documentation/api/otp-input#type) property to [password](https://ej2.syncfusion.com/vue/documentation/api/otp-input/otpInputType/) to use this input type as password in the OTP Input.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/otp-input/inputTypes/password/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/otp-input/inputTypes/password/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/otp-input/inputTypes/password" %}

## Value

You can specify the value of OTP Input by using the [value](https://ej2.syncfusion.com/vue/documentation/api/otp-input#value) property.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/otp-input/inputTypes/value/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/otp-input/inputTypes/value/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/otp-input/inputTypes/value" %}
