---
layout: post
title: Colorpicker in dropdownbutton in Vue Color picker component | Syncfusion
description: Learn here all about Colorpicker in dropdownbutton in Syncfusion Vue Color picker component of Syncfusion Essential JS 2 and more.
control: Colorpicker in dropdownbutton 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Colorpicker in dropdownbutton in Vue Color picker component

This section explains about how to render the ColorPicker in DropDownButton. The [`target`](https://ej2.syncfusion.com/vue/documentation/api/drop-down-button/#target) property of the DropDownButton helps to achieve this scenario. To know about the usage of `target` property refer to [`Popup templating`](./../../drop-down-button/popup-items/#popup-templating) section.

In the below sample, the color picker is rendered as inline type by setting [`inline`](https://ej2.syncfusion.com/vue/documentation/api/color-picker/#inline) property as `true` and the rendered color picker wrapper is passed as a `target` to the DropDownButton to achieve the above scenario.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/color-picker/default-cs4/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/color-picker/default-cs4" %}