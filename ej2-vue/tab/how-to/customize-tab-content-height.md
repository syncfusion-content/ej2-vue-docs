---
layout: post
title: How to customize tab content height in Vue Tabs | Syncfusion
description: Adjust Vue Tabs content panel height using the heightAdjustMode property or custom CSS to control how content area height scales with tab content.
control: Customize tab content height 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# How to customize tab content height in Vue Tabs

You can change the Tab content height by using the [heightAdjustMode](https://ej2.syncfusion.com/vue/documentation/api/tab#heightadjustmode) property. By default, the Tab content [heightAdjustMode](https://ej2.syncfusion.com/vue/documentation/api/tab#heightadjustmode) property is set to `Content`.

* **None**: The tab content height is set based on the Tab height. This value is used only when the Tab component has the [height](https://ej2.syncfusion.com/vue/documentation/api/tab#height) property.
* **Auto**: The tab content height takes the maximum height of all the other tabs' content.
* **Content**: The tab content height is set based on the tab's own content.
* **Fill**: The tab content height is set based on the full height of the Tab's parent element.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/tab/how-to/height-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/tab/how-to/height-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/tab/how-to/height-cs1" %}