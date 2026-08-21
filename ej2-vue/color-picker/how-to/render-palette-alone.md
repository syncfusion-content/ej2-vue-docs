---
layout: post
title: How to render palette alone in Vue Color Picker | Syncfusion
description: Render only the palette in the Syncfusion Vue Color Picker by setting mode to Palette and disabling the mode switcher.
control: Render palette alone 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# How to render palette alone in Vue Color Picker

To render the `Palette` alone in ColorPicker, specify the [`mode`](https://ej2.syncfusion.com/vue/documentation/api/color-picker#mode) property as `Palette`, and set the [`modeSwitcher`](https://ej2.syncfusion.com/vue/documentation/api/color-picker#modeswitcher) property to `false`.

In the following sample, the [`showButtons`](https://ej2.syncfusion.com/vue/documentation/api/color-picker#showbuttons) property is disabled to hide the control buttons and it renders only the `Palette` area.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/color-picker/default-cs15/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/color-picker/default-cs15/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/color-picker/default-cs15" %}

>> To render `Picker` alone specify the [`mode`](https://ej2.syncfusion.com/vue/documentation/api/color-picker#mode) property as 'Picker'.