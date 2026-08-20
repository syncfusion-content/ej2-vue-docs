---
layout: post
title: How to hide control buttons in Vue Color Picker | Syncfusion
description: Hide the Apply and Cancel buttons in the Syncfusion Vue Color Picker by setting showButtons to false for one-tap color apply.
control: Hide control buttons 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# How to hide control buttons in Vue Color Picker

ColorPicker can be rendered without control buttons (Apply/Cancel). In this case, while selecting a color, the
ColorPicker pop-up is closed and selected colors can be applied directly. To hide control buttons, set the [`showButtons`](https://ej2.syncfusion.com/vue/documentation/api/color-picker#showbuttons) property to `false`.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/color-picker/default-cs14/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/color-picker/default-cs14/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/color-picker/default-cs14" %}