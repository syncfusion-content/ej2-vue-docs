---
layout: post
title: Mode and value in Vue Color picker component | Syncfusion
description: Learn here all about Mode and value in Syncfusion Vue Color picker component of Syncfusion Essential JS 2 and more.
control: Mode and value 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Mode and value in Vue Color picker component

## Rendering palette at initial load

By default, the `Picker` area will be rendered at initial load. To render the Palette area while opening the ColorPicker pop-up, and specify the [`mode`](https://ej2.syncfusion.com/vue/documentation/api/color-picker/#mode) property as `Palette`.

In the following sample, it will render the `Palette` at initial load.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/color-picker/default-cs18/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/color-picker/default-cs18/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/color-picker/default-cs18" %}

## Color value

The [`value`](https://ej2.syncfusion.com/vue/documentation/api/color-picker/#value) property can be used to specify the color value to the ColorPicker. It supports either `three` or `six` digit hex codes. To include `opacity`, set the color value as `four` or `eight` digit hex code.

In the following sample, the color value sets as `four` digit hex code, the last digit represents the `opacity` value.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/color-picker/default-cs19/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/color-picker/default-cs19/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/color-picker/default-cs19" %}

>> The [`value`](https://ej2.syncfusion.com/vue/documentation/api/color-picker/#value) property supports hex code with or without `#` prefix.

## See Also

* [How to render palette alone](./how-to/render-palette-alone)
* [Custom palette](./how-to/customize-colorpicker#custom-palette)
* [No color support in palette](./how-to/handle-no-color-support)