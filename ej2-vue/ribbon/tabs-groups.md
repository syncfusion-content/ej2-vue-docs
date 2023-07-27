---
layout: post
title: Tabs and Groups in Vue Ribbon component | Syncfusion
description: Check out and learn about Tabs & Groups in Syncfusion Vue Ribbon Component of Syncfusion Essential JS 2 and more.
control: Ribbon
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Tabs and Groups in Ribbon component

The Ribbon component consists of a series of tabs that are organized into groups to enable quick access to specific commands or tools. Each tab contains a set of groups, and each group contains collections of items that are logically related to each other.

## Adding Tabs

You can use the [tabs](https://ej2.syncfusion.com/vue/documentation/api/ribbon/#tabs) property to add tabs to the Ribbon component and define the content of the tab header by using the [header](https://ej2.syncfusion.com/vue/documentation/api/ribbon/ribbonTabModel/#header) property.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/ribbon/tabs/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/ribbon/tabs" %}

## Adding Groups

You can use the [groups](https://ej2.syncfusion.com/vue/documentation/api/ribbon/ribbonTabModel/#groups) property to add groups for each tab in the Ribbon and define the name of the group header by using the [header](https://ej2.syncfusion.com/vue/documentation/api/ribbon/ribbonGroupModel/#header) property.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/ribbon/groups/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/ribbon/groups" %}

## Adding Items

You can add collections of items to each group by using the [collections](https://ej2.syncfusion.com/vue/documentation/api/ribbon/ribbonGroupModel/#collections) and [items](https://ej2.syncfusion.com/vue/documentation/api/ribbon/ribbonCollectionModel/#items) properties.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/ribbon/items/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/ribbon/items" %}

> Check out our [`items`](./items) page on adding the built-in and custom items.