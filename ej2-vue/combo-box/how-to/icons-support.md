---
layout: post
title: How to show list items with icons in Vue ComboBox | Syncfusion
description: Render icons on each Syncfusion Vue ComboBox item by mapping the iconCss field to a CSS class on a span inside the list item.
control: Icons support 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# How to show list items with icons in Vue ComboBox

You can render **icons** to the list items by mapping the the [iconCss](https://ej2.syncfusion.com/vue/documentation/api/combo-box#fields)  &nbsp;fields. This `iconCss` field create a span in the list item with mapped class name to allow styling as per your need.

In the following sample, icon classes are mapped with `iconCss` field.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/combobox/icons-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/combobox/icons-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/combobox/icons-cs1" %}