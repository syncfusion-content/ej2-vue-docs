---
layout: post
title: Globalization in Vue Numerictextbox component | Syncfusion
description: Learn here all about Globalization in Syncfusion Vue Numerictextbox component of Syncfusion Essential JS 2 and more.
control: Globalization 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Globalization in Vue Numerictextbox component

## Localization

[`Localization`](../common/localization/) library allows users to localize the default text contents of the NumericTextBox to different cultures using the [`locale`](https://ej2.syncfusion.com/vue/documentation/api/numerictextbox#locale) property. In NumericTextBox, spin buttons title for the tooltip will be localized based on the culture.

| Locale key | en-US (default)  |
|------|------|
| incrementTitle |  Increment value |
| decrementTitle |  Decrement value |

### Loading translations

To load translation object in your application use `load` function of `L10n` class.

The below example demonstrates the NumericTextBox in `German` culture with the spin buttons tooltip.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/numeric-textbox/locale-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/numeric-textbox/locale-cs1" %}

## Internationalization

Internationalization library provides support for formatting and parsing the number by using the official [Unicode CLDR](http://cldr.unicode.org/) JSON data and also provides the `loadCldr` method to load the culture specific CLDR JSON data. The NumericTextBox comes with built-in
internationalization support to adapt based on culture. For more information about internationalization, refer to this [link](../common/internationalization/).

By default, all the Essential JS 2  component are specific to English culture ('en-US'). If you want to go with the different culture other than `English`, follow the below steps.

* Install the `CLDR-Data` package by using the below command (it installs the CLDR JSON data). For more information about CLDR-Data, refer to this [link](http://cldr.unicode.org/index/cldr-spec/json).

```
npm install cldr-data --save
```

Once the package installed, you can find the culture specific JSON data under the location `/node_modules/cldr-data`.

* Now import the installed CLDR JSON data into the `app.vue` file.

To import JSON data we need to install the JSON plugin loader. Here we have used the SystemJS JSON plugin loader.

```
npm install systemjs-plugin-json --save-dev
```

* Once installed, configure the `system.config.js` configuration settings as like below to map the `systemjs-plugin-json` loader.

* Now import the required culture from the installed location to `app.vue` file as like the below code snippets.

* Set the culture by using the [`locale`](https://ej2.syncfusion.com/vue/documentation/api/numerictextbox#locale) property.

The below example demonstrates the NumericTextBox in `German` culture with the `EUR` currency format.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/numeric-textbox/internationalization-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/numeric-textbox/internationalization-cs1" %}

## Right to Left(RTL)

`Localization` library allows users to localize the default text contents of the NumericTextBox to different cultures using the [`locale`](https://ej2.syncfusion.com/vue/documentation/api/numerictextbox#locale) property. In NumericTextBox, spin buttons title for the tooltip will be localized based on the culture.
RTL provides an option to switch the text direction and layout of the NumericTextBox component from right to left. It improves the user experiences and accessibility for users who use right-to-left languages (Arabic, Farsi, Urdu, etc.). To enable RTL NumericTextBox, set the [`enableRtl`](https://ej2.syncfusion.com/vue/documentation/api/numerictextbox#enablertl) to true.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/numeric-textbox/rtl-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/numeric-textbox/rtl-cs1" %}
