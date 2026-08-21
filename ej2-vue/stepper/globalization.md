---
layout: post
title: Globalization in Vue Stepper | Syncfusion
description: Localize Vue Stepper text content using the locale property and enable right-to-left layout with the enableRtl property for global application support.
control: Stepper 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Globalization in Vue Stepper

## Localization

The Localization library allows you to localize the default text content of the Stepper. You can change the static text content used for the `optional` property to other cultures (Arabic, Deutsch, French, etc.) by defining the `locale` value and its translation object.

Locale key | en-US (default) |
|-----|-----|
| optional | Optional |

In this example, the `French` culture is set to Stepper and the default text is updated with the content defined by the locale key.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/stepper/localization/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/stepper/localization/app.vue %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/stepper/localization" %}

## RTL

RTL provides an option to switch the text direction and layout of the Stepper component from right to left by setting the [enableRtl](https://ej2.syncfusion.com/vue/documentation/api/stepper/stepperModel/#enablertl) property to `true`.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/stepper/rtl/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/stepper/rtl/app.vue %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/stepper/rtl" %}