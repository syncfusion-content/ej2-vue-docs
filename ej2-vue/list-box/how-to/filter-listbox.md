---
layout: post
title:  Filter ListBox Data Using TextBox Component | Syncfusion
description: Learn here all about Filter ListBox Data Using TextBox Component of Syncfusion Essential JS 2 and more.
control: Filter ListBox
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# How to Filter ListBox Data Using TextBox Component

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