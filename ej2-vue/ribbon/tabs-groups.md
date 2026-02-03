---
layout: post
title: Tabs and Groups in Vue Ribbon component | Syncfusion
description: Check out and learn about Tabs & Groups in Syncfusion Vue Ribbon Component of Syncfusion Essential JS 2 and more.
control: Ribbon
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Tabs and Groups

The Ribbon component's structure is a hierarchy of tabs, groups, and items that provides organized access to commands. Each tab contains one or more groups, and each group holds collections of related items.

## Adding Tabs

You can use the [tabs](https://ej2.syncfusion.com/vue/documentation/api/ribbon/#tabs) property to add tabs to the Ribbon component and define the content of the tab header by using the [header](https://ej2.syncfusion.com/vue/documentation/api/ribbon/ribbonTabModel/#header) property.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/ribbon/tabs/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/ribbon/tabs/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/ribbon/tabs" %}

## Adding Groups

You can use the [groups](https://ej2.syncfusion.com/vue/documentation/api/ribbon/ribbonTabModel/#groups) property to add groups for each tab in the Ribbon and define the name of the group header by using the [header](https://ej2.syncfusion.com/vue/documentation/api/ribbon/ribbonGroupModel/#header) property.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/ribbon/groups/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/ribbon/groups/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/ribbon/groups" %}

## Adding Items

You can add collections of items to each group by using the [collections](https://ej2.syncfusion.com/vue/documentation/api/ribbon/ribbonGroupModel/#collections) and [items](https://ej2.syncfusion.com/vue/documentation/api/ribbon/ribbonCollectionModel/#items) properties.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/ribbon/items/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/ribbon/items/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/ribbon/items" %}

> For more information on configuring built-in items and creating custom items, refer to the [Ribbon Items](./items) documentation.