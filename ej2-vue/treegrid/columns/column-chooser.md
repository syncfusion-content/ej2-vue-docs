---
layout: post
title: Column Chooser in Vue Treegrid component | Syncfusion
description: Learn here all about Column Chooser in Syncfusion Vue Treegrid component of Syncfusion Essential JS 2 and more.
control: Column Chooser 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Column Chooser in Vue Treegrid component

## Column Chooser Template in Syncfusion Vue TreeGrid component

The Column Chooser Template feature allows full customization of the column chooser’s header, content, and footer, making it easier to manage column visibility. To enable the column chooser, set [showColumnChooser](https://ej2.syncfusion.com/vue/documentation/api/treegrid/#showcolumnchooser) to **true** and add **ColumnChooser** to the [toolbar](https://ej2.syncfusion.com/vue/documentation/api/treegrid#toolbar) property.

To implement a custom column chooser template in the TreeGrid, use the following properties:

* **columnChooserSettings.headerTemplate** - Defines the header template of the column chooser.

* **columnChooserSettings.template**- Defines the content template.

* **columnChooserSettings.footerTemplate** - Defines the footer template.

* **columnChooserSettings.renderCustomColumnChooser** -  Allows you to override the default column chooser UI with a fully customized layout.

In this example, a Syncfusion TreeView component is rendered inside the column chooser. To use the TreeView component, install the Syncfusion TreeView package as described in the [documentation](https://ej2.syncfusion.com/vue/documentation/treeview/getting-started). The `columnChooserSettings.template` property is used to render the TreeView component with checkboxes.Checkbox selection is handled using the [nodeClicked](https://ej2.syncfusion.com/vue/documentation/api/treeview#nodeclicked) and [keyPress](https://ej2.syncfusion.com/vue/documentation/api/treeview#keypress) events, which organize columns into **Order Details**, **Shipping Details**, and **Delivery Status**.

The column chooser footer is customized using `columnChooserSettings.footerTemplate`, replacing the default buttons with customized **Apply** and **Close** buttons. The **Apply** button updates column visibility based on selection, while the **Close** button closes the column chooser via the `onClick` event. Additionally, the header is customized using `columnChooserSettings.headerTemplate` to include a title and an icon.


{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/treegrid/columns/default-cs24/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/treegrid/columns/default-cs24/app.vue %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/treegrid/columns/default-cs24" %}