---
layout: post
title: How to reorder active tab in Vue Tabs | Syncfusion
description: Reorder the active Vue Tabs item to the first position or to a specific index using the reorderItem public method of the Tabs component.
control: Reorder active tab 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# How to reorder active tab in Vue Tabs

We can able to prevent the changing of the active tab item on resizing the browser when overflow mode is popup by using the [`reorderActiveTab`](https://ej2.syncfusion.com/vue/documentation/api/tab#reorderActiveTab) property. By default, the active Tab should be reordered when we click the tab items from the popup. If we set `false` to [`reorderActiveTab`](https://ej2.syncfusion.com/vue/documentation/api/tab#reorderActiveTab) property the active tab item from the popup will not be reordered and an active item is highlighted inside the popup. The following code example depicts to prevent the reorder active tab item inside the popup.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/tab/orientation-tab-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/tab/orientation-tab-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/tab/orientation-tab-cs1" %}