---
layout: post
title: How to navigate tabs with keyboard in Vue Tabs | Syncfusion
description: Enable keyboard navigation in Vue Tabs so users can switch between tab items using arrow keys, Home, End, and Enter without a mouse.
control: Tab key navigation 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# How to navigate tabs with keyboard in Vue Tabs

The [tabIndex](https://ej2.syncfusion.com/vue/documentation/api/tab/tabItemModel#tabindex) property of a Tab item is used to enable tab key navigation for that particular item. When a positive value is assigned to the `tabIndex` property, it allows the user to switch focus to the next or previous tab item using the Tab or Shift+Tab keys. By default, the user can only switch between tab items using the arrow keys.

If the `tabIndex` value is set to `0` for all tab items, the tab switches based on the order of the elements on the page. This means that if the tab items are listed in a specific order on the page, the user can navigate through them using the Tab key in that same order.

To use the `tabIndex` property, assign a positive value to the property of each tab item for which you want to enable tab key navigation. For example:

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/tab/tab-container-cs2/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/tab/tab-container-cs2/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/tab/tab-container-cs2" %}

With this code, the user will be able to switch between the tab items using the Tab and Shift+Tab keys, in the order specified by the [tabIndex](https://ej2.syncfusion.com/vue/documentation/api/tab/tabItemModel#tabindex) values.

Note that the `tabIndex` property only affects the ability to navigate between tab items using the Tab key. The user can still use the arrow keys to switch between tab items, regardless of the value of the `tabIndex` property.