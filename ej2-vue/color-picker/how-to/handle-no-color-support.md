---
layout: post
title: Handle no color support in Vue Color picker component | Syncfusion
description: Learn here all about Handle no color support in Syncfusion Vue Color picker component of Syncfusion Essential JS 2 and more.
control: Handle no color support 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Handle no color support in Vue Color picker component

The ColorPicker component supports no color functionality. By clicking the no color tile from palette, the selected color becomes `empty` and considered as no color has been selected from color picker.

## Default no color

To achieve this, set [`noColor`](https://ej2.syncfusion.com/vue/documentation/api/color-picker/#nocolor) property as `true`.

In the following sample, the first tile of the color palette represents the no color tile. By clicking the no color tile you can achieve the above functionalities.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/color-picker/default-cs12/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/color-picker/default-cs12/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/color-picker/default-cs12" %}

>If the [`noColor`](https://ej2.syncfusion.com/vue/documentation/api/color-picker/#nocolor) property is enabled, make sure to disable the [`modeswitcher`](https://ej2.syncfusion.com/vue/documentation/api/color-picker/#modeswitcher) property.

## Custom no color

The following sample show the color palette with custom no color option.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/color-picker/default-cs13/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/color-picker/default-cs13/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/color-picker/default-cs13" %}