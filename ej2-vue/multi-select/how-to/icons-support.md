---
layout: post
title: Show icons on list items in Vue MultiSelect Dropdown | Syncfusion
description: Render icons on each Syncfusion Vue MultiSelect Dropdown item by mapping the iconCss field to a CSS class on a span inside the list item.
control: Icons support 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# How to show icons on list items in Vue MultiSelect Dropdown

You can render **icons** on the list items by mapping the [iconCss](https://ej2.syncfusion.com/vue/documentation/api/multi-select#fields) field. This `iconCss` field creates a span in the list item with the mapped class name to allow styling as per your need.

In the following sample, icon classes are mapped to the `iconCss` field.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/multi-select/how-to-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/multi-select/how-to-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/multi-select/how-to-cs1" %}
