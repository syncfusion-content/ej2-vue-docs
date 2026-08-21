---
layout: post
title: How to filter ListBox data using TextBox in Vue ListBox | Syncfusion
description: Filter Syncfusion Vue ListBox items by typing in a TextBox, listening to the input event, and calling the filter method to update items.
control: Filter ListBox
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# How to filter ListBox data using TextBox in Vue ListBox

This example demonstrates how to filter Syncfusion<sup style="font-size:70%">&reg;</sup> ListBox data based on input from a TextBox. Bind an input event listener to the TextBox to capture user input and filter the items in the ListBox. Within the event handler, use the [`filter`](https://ej2.syncfusion.com/vue/documentation/api/list-box/#filter) method to update the ListBox items, ensuring that only those matching the input text are included.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/list-box/getting-started/getting-started-cs22/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/list-box/getting-started/getting-started-cs22/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/list-box/getting-started/getting-started-cs22" %}