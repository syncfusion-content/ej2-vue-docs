---
layout: post
title: Checkbox in Vue Drop down tree component | Syncfusion
description: Learn here all about Checkbox in Syncfusion Vue Drop down tree component of Syncfusion Essential JS 2 and more.
control: Checkbox 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Checkbox in Vue Drop down tree component

The Dropdown Tree component allows you to check more than one item from the tree without affecting the UI's appearance by enabling the [`showCheckBox`](https://ej2.syncfusion.com/vue/documentation/api/drop-down-tree/#showcheckbox) property. When this property is enabled, checkbox appears before each item text in the popup.

In the following example, the [`showCheckBox`](https://ej2.syncfusion.com/vue/documentation/api/drop-down-tree/#showcheckbox) property is enabled.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/drop-down-tree/checkboxes-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/drop-down-tree/checkboxes-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/drop-down-tree/checkboxes-cs1" %}

## Auto Check

By default, the checkbox state of the parent and child items in the Dropdown Tree will not be dependent over each other. If you need dependent checked state, then enable the [`autoCheck`](https://ej2.syncfusion.com/vue/documentation/api/drop-down-tree/treeSettingsModel/#autocheck) property which is a member of [`treeSettings`](https://ej2.syncfusion.com/vue/documentation/api/drop-down-tree/#treesettings) property.

* If one or more child items are not in the checked state, then the parent item will be in the intermediate state.

* If all the child items are checked, then the parent item will also be in the checked state.

* If a parent item is checked, then all the child items will also be changed to the checked state.

In the following example, the `autoCheck` property is enabled.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/drop-down-tree/auto-check-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/drop-down-tree/auto-check-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/drop-down-tree/auto-check-cs1" %}

## Select All

The Dropdown Tree component has in-built support to select all the tree items using Select All options in the header.

When the [`showSelectAll`](https://ej2.syncfusion.com/vue/documentation/api/drop-down-tree/#showselectall) property is set to true, a checkbox will be displayed in the popup header that allows you to select or deselect all the tree items in the popup.

By default, `Select All` and `unSelect All` text values will be showcased along with the checkbox in the popup header to indicate the action to be performed on checking or unchecking the checkbox. You can customize these name attributes by using [`selectAllText`](https://ej2.syncfusion.com/vue/documentation/api/drop-down-tree/#selectalltext) and [`unSelectAllText`](https://ej2.syncfusion.com/vue/documentation/api/drop-down-tree/#unselectalltext) properties respectively.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/drop-down-tree/select-all-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/drop-down-tree/select-all-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/drop-down-tree/select-all-cs1" %}