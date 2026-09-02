---
layout: post
title: Disabled Items in Vue AutoComplete | Syncfusion
description: Disable individual Syncfusion Vue AutoComplete items by mapping the fields.disabled property so users cannot select them as values.
control: Disabled Items 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Disabled Items in Vue AutoComplete

The AutoComplete provides options for individual items to be either in an enabled or disabled state for specific scenarios. The disabled state of each list item can be mapped through the [fields](https://ej2.syncfusion.com/vue/documentation/api/auto-complete#fields) property's `disabled` member in the data table. Once an item is disabled, it cannot be selected as a value for the component. To configure the disabled item columns, use the `fields.disabled` property.

In the following sample, items are marked as disabled using the `fields.disabled` property.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/auto-complete/getting-started-cs26/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/auto-complete/getting-started-cs26/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/auto-complete/getting-started-cs26" %}

## Disable item method

The [disableItem](https://ej2.syncfusion.com/vue/documentation/api/auto-complete/index-default#disableItem) method can be used to dynamically change the disabled state of a specific item. Only one item can be disabled in this method. To disable multiple items, this method can be iterated with the items list or array. The disabled field state will be updated in the [dataSource](https://ej2.syncfusion.com/vue/documentation/api/auto-complete/index-default#dataSource), when the item is disabled using this method. If the selected item is disabled dynamically, then the selection will be cleared.

| Parameter | Type | Description |
|------|------|------|
| itemHTMLLIElement |  <code>HTMLLIElement</code> |  It accepts the HTML Li element of the item to be removed.  |
| itemValue | <code>string</code> \| <code>number</code> \| <code>boolean</code> \| <code>object</code> | It accepts the string, number, boolean and object type value of the item to be removed. |
| itemIndex | <code>number</code> | It accepts the index of the item to be removed. |

## Enabled

If you want to disable the overall component, set the [enabled](https://ej2.syncfusion.com/vue/documentation/api/auto-complete/index-default#enabled) property to false. Setting the property to `false` disables the entire AutoComplete so it cannot be interacted with, and setting it back to `true` enables the component again.

![Disabled AutoComplete Component](../images/autocomplete-disable.png)