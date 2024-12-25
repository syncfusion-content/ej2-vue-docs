---
layout: post
title: Check list in Vue Listview component | Syncfusion
description: Learn here all about Check list in Syncfusion Vue Listview component of Syncfusion Essential JS 2 and more.
control: Check list 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Check list in Vue Listview component

The ListView supports checkbox in default and group lists which is used to select multiple items. The checkbox can be enabled by the [`showCheckBox`](https://helpej2.syncfusion.com/vue/documentation/api/list-view/#showcheckbox) property.

The checkbox is useful in scenarios where we need to select multiple options. For example, in a shopping cart, we can select or unselect the desired items before checkout. It is useful for selecting multiple items that belong to the same category using the group list.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/listview/checklist-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/listview/checklist-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/listview/checklist-cs1" %}

## Checkbox Position

In ListView, the Checkbox can be positioned to either the `Left` or `Right` side of the list-item text. This can be achieved by [`checkBoxPosition`](https://helpej2.syncfusion.com/vue/documentation/api/list-view/#checkboxposition) property. By default, checkbox will be positioned to `Left` of list-item text.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/listview/checklist-cs2/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/listview/checklist-cs2/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/listview/checklist-cs2" %}