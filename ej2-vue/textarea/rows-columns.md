---
layout: post
title: Rows and Columns Count in Vue TextArea | Syncfusion
description: Set Syncfusion Vue TextArea size with the rows and cols properties to control visible line count and width in characters.
control: Rows and Columns Count
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Rows and Columns Count in Vue TextArea

Two Essential<sup style="font-size:70%">&reg;</sup> attributes, `rows` and `columns`, play a pivotal role in customizing the TextArea's appearance and layout. The `rows`attribute determines the initial visible number of lines within the TextArea, controlling its vertical size. Conversely, the `columns` attribute specifies the visible width of the TextArea in characters per line, determining its initial width.


* You can customize the TextArea component by setting the number of rows using the [rows](https://ej2.syncfusion.com/vue/documentation/api/textarea/#rows) property and the number of columns using the [cols](https://ej2.syncfusion.com/vue/documentation/api/textarea/#cols) property. These properties allow precise control over the dimensions of the TextArea, ensuring it fits seamlessly within the layout of the application.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/textarea/row-column-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/textarea/row-column-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/textarea/row-column-cs1" %}