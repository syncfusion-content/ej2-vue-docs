---
layout: post
title: Tab selection in Vue Tab component | Syncfusion
description: Learn here all about Tab selection in Syncfusion Vue Tab component of Syncfusion Essential JS 2 and more.
control: Tab selection 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Tab selection in Vue Tab component

We can able to find the tab selection whether it is selected by user interaction or programmatically way in the [`selecting`](https://ej2.syncfusion.com/vue/documentation/api/tab/#selecting) and [`selected`](https://ej2.syncfusion.com/vue/documentation/api/tab/#selected) event argument with the field of `isInteracted`. When the user changes the tab through click actions it will return true otherwise, it will return false. The following code example depicts to find the tab selecting the state in selecting and selected events.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/tab/orientation-tab-cs2/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/tab/orientation-tab-cs2/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/tab/orientation-tab-cs2" %}