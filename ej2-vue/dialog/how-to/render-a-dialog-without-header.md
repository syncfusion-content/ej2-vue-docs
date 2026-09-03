---
layout: post
title: How to render without header in Vue Dialog | Syncfusion
description: Render the Vue Dialog without a header by setting the header property to an empty string or null, which is also the default behavior of the control.
control: Render a dialog without header 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# How to render without header in Vue Dialog

The Dialog can be rendered without a header by setting the [header](https://ej2.syncfusion.com/vue/documentation/api/dialog#header) property value to an empty string or null, or by leaving it unset entirely. When omitted, the Dialog defaults to rendering without a header.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/dialog/dlg-header-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/dialog/dlg-header-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/dialog/dlg-header-cs1" %}