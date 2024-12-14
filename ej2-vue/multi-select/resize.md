---
layout: post
title: Resizing in Vue MultiSelect component | Syncfusion
description: Learn here all about Popup Resizing in Syncfusion Vue MultiSelect component of Syncfusion Essential JS 2 and more.
control: Resizing
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Resizing in Vue MultiSelect component

You can dynamically adjust the size of the popup in the ComboBox component by using the [AllowResize](https://ej2.syncfusion.com/vue/documentation/api/multi-select/#allowresize)  property. When enabled, users can resize the popup, improving visibility and control, with the resized dimensions being retained across sessions for a consistent user experience.

The following sample illustrates the implementation of the Popup Resize feature.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/multi-select/resize-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/multi-select/resize-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        


![Disabled MultiSelect Component](../images/multiselect-resize.gif)