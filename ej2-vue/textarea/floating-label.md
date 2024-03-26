---
layout: post
title: Floating Label in Vue TextArea component | Syncfusion
description: Checkout and learn about Floating Label in Vue TextArea component of Syncfusion Essential JS 2 and more.
control: Floating Label 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Floating Label in Vue TextArea Component

The floating label functionality in the TextArea component allows the placeholder text to float above the TextArea while the user interacts with it, providing a more intuitive user experience. This feature can be achieved using the [floatLabelType](https://ej2.syncfusion.com/vue/documentation/api/textarea/#floatLabelType) API, which offers various options for defining the floating behavior:

| Type  | Description |
| -- | -- |
| Auto  | The label floats above the TextArea when it receives focus or input, returning to its initial position when the TextArea loses focus and contains no value. |
| Always | The label always remains floating above the TextArea, regardless of user interaction. |
| Never | The label never floats; it remains in its default position within the TextArea. |

{% tabs %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/textarea/float-label-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/textarea/float-label-cs1" %}

## Placeholder with localization

Localization library allows to localize the placeholder text of the TextArea to different cultures using the `locale` property.

{% tabs %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/textarea/localization-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/textarea/localization-cs1" %}

To load translation object in an application use `load` function of `L10n` class.
In the below sample, `German` culture is loaded to the TextArea placeholder text.

{% tabs %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/textarea/localization-cs2/app.vue %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/textarea/localization-cs2" %}
