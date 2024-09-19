---
layout: post
title: Show Recent color in Vue Color picker component | Syncfusion
description: Learn here all about Show Recent color in Syncfusion Vue Color picker component of Syncfusion Essential JS 2 and more.
control: Show Recent color 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Show Recent color in Vue Color picker component

The [`showRecentColors`](https://ej2.syncfusion.com/vue/documentation/api/color-picker/#showRecentColors) property enables the display of recently selected colors in the ColorPicker when in palette mode. This feature helps users quickly access their most frequently used colors.

>Note: The [`showRecentColors`](https://ej2.syncfusion.com/vue/documentation/api/color-picker/#showRecentColors) feature displays up to 10 recent colors as tiles and is available only in `palette` mode.

In the following sample, the [`showRecentColors`](https://ej2.syncfusion.com/vue/documentation/api/color-picker/#showRecentColors) property is enabled to display recent colors in the `palette` area.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/color-picker/default-cs21/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/color-picker/default-cs21/app.vue %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/color-picker/default-cs21" %}