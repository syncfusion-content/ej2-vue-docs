---
layout: post
title: Disabled Items in Vue Dropdown List | Syncfusion
description: Disable individual Syncfusion Vue Dropdown List items by mapping the fields.disabled property so users cannot select them as values.
control: Disabled Items 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Disabled Items in Vue Dropdown List

The DropDownList provides options for individual items to be either in an enabled or disabled state for specific scenarios. The category of each list item can be mapped through the [disabled](https://ej2.syncfusion.com/vue/documentation/api/drop-down-list/index-default#fields) field in the data table. Once an item is disabled, it cannot be selected as a value for the component. To configure the disabled item columns, use the `fields.disabled` property.

In the following sample, the states are grouped according to their category using the `disabled` field.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/drop-down-list/disabled-items-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/drop-down-list/disabled-items-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/drop-down-list/disabled-items-cs1" %}

## Disable Item Method

The [disableItem](https://ej2.syncfusion.com/vue/documentation/api/drop-down-list/index-default#disableitem) method can be used to handle dynamic changes in the disable state of a specific item. Only one item can be disabled with this method. To disable multiple items, this method can be iterated with the items list or array. The disabled field state will be updated in the [dataSource](https://ej2.syncfusion.com/vue/documentation/api/drop-down-list/index-default#datasource) when the item is disabled using this method. If the selected item is disabled dynamically, the selection will be cleared.

| Parameter | Type | Description |
|------|------|------|
| itemHTMLLIElement |  <code>HTMLLIElement</code> |  It accepts the HTML Li element of the item to be removed.  |
| itemValue | <code>string</code> \| <code>number</code> \| <code>boolean</code> \| <code>object</code> | It accepts the string, number, boolean, and object type values of the item to be removed. |
| itemIndex | <code>number</code> | It accepts the index of the item to be removed. |

## Enabled

You can disable the overall component by setting the [enabled](https://ej2.syncfusion.com/vue/documentation/api/drop-down-list/index-default#enabled) property to false.

![Disabled DropDownList Component](../images/dropdownlist-disable.png)