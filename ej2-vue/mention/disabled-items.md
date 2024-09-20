---
layout: post
title: Disabled Items in Vue Mention component | Syncfusion
description: Learn here all about Disabled Items in Syncfusion Vue Mention component of Syncfusion Essential JS 2 and more.
control: Disabled Items 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Disabled Items in Vue Mention component

The Mention provides options for individual items to be either in an enabled or disabled state for specific scenarios. The category of each list item can be mapped through the [disabled](https://ej2.syncfusion.com/vue/documentation/api/mention/#fields) field in the data table. Once an item is disabled, it cannot be selected as a value for the component. To configure the disabled item columns, use the `fields.disabled` property.

In the following sample, State are grouped according on its category using `disabled` field.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/mention/disabled-items-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/mention/disabled-items-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/mention/disabled-items-cs1" %}

## Disable Item Method

The [disableItem](https://ej2.syncfusion.com/vue/documentation/api/mention/#disableItem) method can be used to handle dynamic changing in disable state of a specific item. Only one item can be disabled in this method. To disable multiple items, this method can be iterated with the items list or array. The disabled field state will to be updated in the [dataSource](https://ej2.syncfusion.com/vue/documentation/api/mention/#datasource), when the item is disabled using this method.

| Parameter | Type | Description |
|------|------|------|
| itemHTMLLIElement |  <code>HTMLLIElement</code> |  It accepts the HTML Li element of the item to be removed.  |
| itemValue | <code>string</code> \| <code>number</code> \| <code>boolean</code> \| <code>object</code> | It accepts the string, number, boolean and object type value of the item to be removed. |
| itemIndex | <code>number</code> | It accepts the index of the item to be removed. |
