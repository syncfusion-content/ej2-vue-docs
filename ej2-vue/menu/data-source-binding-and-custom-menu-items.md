---
layout: post
title: Data source binding and custom menu items in Vue Menu component | Syncfusion
description: Learn here all about Data source binding and custom menu items in Syncfusion Vue Menu component of Syncfusion Essential JS 2 and more.
control: Data source binding and custom menu items 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Data source binding and custom menu items in Vue Menu component

## Data binding

The Menu supports data source bindings such as array of JavaScript objects that can be structured as either `hierarchical` or `self-referential` data.

### Hierarchical data

The Menu can be populated with hierarchical data source by assigning it to the [`items`](https://ej2.syncfusion.com/vue/documentation/api/menu/menuItemModel#items) property, and the fields with corresponding keys can be mapped to the [`fields`](https://ej2.syncfusion.com/vue/documentation/api/menu/fieldSettingsModel) property.

#### JSON data

The Menu can generate its menu items through an array of complex data source by mapping fields from the [`fields`](https://ej2.syncfusion.com/vue/documentation/api/menu/fieldSettingsModel) property.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/menu/getting-started-cs2/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/menu/getting-started-cs2" %}

#### Data Service

In application level, remote data binding can be achieved using [`DataManager`](https://ej2.syncfusion.com/documentation/data).

To create Menu, assign `items` property with resultant data from [`callback`](https://ej2.syncfusion.com/documentation/api/data/deferred/#then) function.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/menu/getting-started-cs3/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/menu/getting-started-cs3" %}

### Self-referential data

Menu can be populated from self-referential data structure that contains array of JSON objects with `parentId` mapping.

In the following example, the **id**, **pId**, and **text** columns from self-referential data have been mapped to the **itemId**, **parentId**, and **text** fields, respectively.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/menu/getting-started-cs4/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/menu/getting-started-cs4" %}

## Custom menu items

The Menu can be customized using Essential JS2 [Template engine](https://ej2.syncfusion.com/documentation/common/template-engine.html) to render the elements.

To customize menu items in your application, set your customized template string to the [`template`](https://ej2.syncfusion.com/vue/documentation/api/menu#template) property. In the following example, the menu has been rendered with customized menu items.

Install Syncfusion `Layouts` and `Navigations` packages using below command.

```bash
npm install @syncfusion/ej2-vue-layouts --save
npm install @syncfusion/ej2-vue-navigations --save
```

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/menu/getting-started-cs5/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/menu/getting-started-cs5" %}

## See Also

* [Render menu with items](./getting-started#getting-started)