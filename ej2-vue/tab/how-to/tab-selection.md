---
layout: post
title: How to select tab in Vue Tabs | Syncfusion
description: Programmatically select a Vue Tabs item by index using the selectedItem or select public method to set the active tab on page load or user action.
control: Tab selection 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# How to select tab in Vue Tabs

You can determine whether a tab is selected by user interaction or programmatically using the `isInteracted` field of the [selecting](https://ej2.syncfusion.com/vue/documentation/api/tab#selecting) and [selected](https://ej2.syncfusion.com/vue/documentation/api/tab#selected) event arguments. When the user changes the tab through click actions, the field returns `true`; otherwise, it returns `false`. The following code example shows how to find the tab selection state in the `selecting` and `selected` events.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/tab/orientation-tab-cs2/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/tab/orientation-tab-cs2/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/tab/orientation-tab-cs2" %}