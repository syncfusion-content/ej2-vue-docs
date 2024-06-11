---
layout: post
title: Customize tab content height in Vue Tab component | Syncfusion
description: Learn here all about Customize tab content height in Syncfusion Vue Tab component of Syncfusion Essential JS 2 and more.
control: Customize tab content height 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Customize tab content height in Vue Tab component

You can change the Tab content height by using the [`heightAdjustMode`](https://ej2.syncfusion.com/vue/documentation/api/tab#heightadjustmode) property. By default, the Tab content [`heightAdjustMode`](https://ej2.syncfusion.com/vue/documentation/api/tab#heightadjustmode) property is set to `Content` value.

* **None**: Each tab content height is set based on the Tab height. This value is used only the tab component having the [`height`](https://ej2.syncfusion.com/vue/documentation/api/tab#height) property.
* **Auto**: Each tab content height will take the maximum height of all other tabs content.
* **Content**: Each tab content height is set based on their own content.
* **Fill**: Each tab content height is set based on the full height of Tabs parent element.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/tab/how-to/height-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/tab/how-to/height-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/tab/how-to/height-cs1" %}