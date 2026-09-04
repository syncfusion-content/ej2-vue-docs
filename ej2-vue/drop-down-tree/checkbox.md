---
layout: post
title: Checkbox in Vue Dropdown Tree | Syncfusion
description: Enable checkboxes and auto-check parent-child selection in the Syncfusion Vue Dropdown Tree using showCheckBox and treeSettings.autoCheck.
control: Checkbox 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Checkbox in Vue Dropdown Tree

The Dropdown Tree component allows you to check more than one item from the tree without affecting the appearance of the UI by enabling the [showCheckBox](https://ej2.syncfusion.com/vue/documentation/api/drop-down-tree/index-default#showcheckbox) property. When this property is enabled, a checkbox appears before each item text in the popup.

In the following example, the [showCheckBox](https://ej2.syncfusion.com/vue/documentation/api/drop-down-tree/index-default#showcheckbox) property is enabled.

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

By default, the checkbox state of the parent and child items in the Dropdown Tree will not be dependent on each other. If you need a dependent checked state, enable the [autoCheck](https://ej2.syncfusion.com/vue/documentation/api/drop-down-tree/treeSettingsModel/#autocheck) property, which is a member of the [treeSettings](https://ej2.syncfusion.com/vue/documentation/api/drop-down-tree/index-default#treesettings) property.

* If one or more child items are not in the checked state, then the parent item will be in the indeterminate state.

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

The Dropdown Tree component has built-in support to select all the tree items using the Select All option in the header.

When the [showSelectAll](https://ej2.syncfusion.com/vue/documentation/api/drop-down-tree/index-default#showselectall) property is set to true, a checkbox will be displayed in the popup header that allows you to select or deselect all the tree items in the popup.

By default, `Select All` and `unSelect All` text values will be showcased along with the checkbox in the popup header to indicate the action to be performed on checking or unchecking the checkbox. You can customize these name attributes by using [selectAllText](https://ej2.syncfusion.com/vue/documentation/api/drop-down-tree/index-default#selectalltext) and [unSelectAllText](https://ej2.syncfusion.com/vue/documentation/api/drop-down-tree/index-default#unselectalltext) properties respectively.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/drop-down-tree/select-all-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/drop-down-tree/select-all-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/drop-down-tree/select-all-cs1" %}