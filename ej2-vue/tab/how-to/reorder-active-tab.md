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

You can prevent the active tab item from changing on browser resize when the overflow mode is Popup by using the [reorderActiveTab](https://ej2.syncfusion.com/vue/documentation/api/tab#reorderActiveTab) property. By default, the active tab is reordered when you click a tab item from the popup. If you set the `reorderActiveTab` property to `false`, the active tab item from the popup is not reordered and the active item is highlighted inside the popup. The following code example shows how to prevent reordering of the active tab item inside the popup.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/tab/orientation-tab-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/tab/orientation-tab-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/tab/orientation-tab-cs1" %}