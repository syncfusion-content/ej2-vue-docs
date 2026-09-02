---
layout: post
title: How to display with custom position in Vue Dialog | Syncfusion
description: Position the Vue Dialog at custom X and Y coordinates inside the target container using the position property for precise placement on the page.
control: Display a dialog with custom position 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# How to display with custom position in Vue Dialog

By default, the dialog is displayed in the center of the target container. The dialog position can be set using the [position](https://ej2.syncfusion.com/vue/documentation/api/dialog#position) property by providing custom X and Y coordinates.

The dialog can be positioned inside the target based on the given X and Y values.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/dialog/dlg-position-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/dialog/dlg-position-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/dialog/dlg-position-cs1" %}