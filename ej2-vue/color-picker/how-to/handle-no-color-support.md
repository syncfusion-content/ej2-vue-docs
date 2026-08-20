---
layout: post
title: How to handle no color support in Vue Color Picker | Syncfusion
description: Add a no-color tile to the Syncfusion Vue Color Picker palette so users can clear the selected color by setting noColor to true.
control: Handle no color support 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# How to handle no color support in Vue Color Picker

The ColorPicker component supports no color functionality. By clicking the no color tile from palette, the selected color becomes `empty` and considered as no color has been selected from color picker.

## Default no color

To achieve this, set [`noColor`](https://ej2.syncfusion.com/vue/documentation/api/color-picker#nocolor) property as `true`.

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

>If the [`noColor`](https://ej2.syncfusion.com/vue/documentation/api/color-picker#nocolor) property is enabled, make sure to disable the [`modeSwitcher`](https://ej2.syncfusion.com/vue/documentation/api/color-picker#modeswitcher) property.

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