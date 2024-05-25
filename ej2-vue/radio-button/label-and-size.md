---
layout: post
title: Label and size in Vue Radio button component | Syncfusion
description: Learn here all about Label and size in Syncfusion Vue Radio button component of Syncfusion Essential JS 2 and more.
control: Label and size 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Label and size in Vue Radio button component

This section explains the different sizes and labels.

## Label

RadioButton caption can be defined by using the [`label`](https://ej2.syncfusion.com/vue/documentation/api/radio-button/#label) property. This reduces the manual addition of label for RadioButton. You can customize the label position before or after the RadioButton through the [`labelPosition`](https://ej2.syncfusion.com/vue/documentation/api/radio-button/#labelposition) property.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/radio-button/default-cs9/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue) %}
{% include code-snippet/radio-button/default-cs9/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/radio-button/default-cs9" %}

## Size

The different RadioButton sizes available are default and small. To reduce the size of default RadioButton to small, set the [`cssClass`](https://ej2.syncfusion.com/vue/documentation/api/radio-button/#cssclass) property to `e-small`.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/radio-button/default-cs10/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue) %}
{% include code-snippet/radio-button/default-cs10/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/radio-button/default-cs10" %}

## See Also

* [How to customize the RadioButton appearance](./how-to/customize-radiobutton-appearance)