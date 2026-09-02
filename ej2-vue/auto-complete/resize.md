---
layout: post
title: Resizing in Vue AutoComplete | Syncfusion
description: Enable the AllowResize property on the Syncfusion Vue AutoComplete popup so users can dynamically resize it, with size persisted across sessions.
control: Resizing 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Resizing in Vue AutoComplete

You can dynamically adjust the size of the popup in the AutoComplete component by using the [allowResize](https://ej2.syncfusion.com/vue/documentation/api/auto-complete/index-default#allowresize) property. When enabled, users can resize the popup, improving visibility and control. The resized dimensions are retained for a consistent user experience.

The following sample illustrates the implementation of the Popup Resize feature.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/auto-complete/getting-started-cs27/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/auto-complete/getting-started-cs27/app.vue %}
{% endhighlight %}
{% endtabs %}

![Resizing in AutoComplete Component](../images/autocomplete-resize.gif)
