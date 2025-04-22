---
layout: post
title: Custom Toolbar in Vue Rich text editor component | Syncfusion
description: Learn here all about Custom Toolbar in Syncfusion Vue Rich text editor component of Syncfusion Essential JS 2 and more.
control: Custom Toolbar
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Custom Toolbar Items in Vue Rich Text Editor Component

The Rich Text Editor allows you to configure your own commands to its toolbar using the [`toolbarSettings`](https://ej2.syncfusion.com/vue/documentation/api/rich-text-editor/toolbarSettings/#toolbarsettings) property. The command can be plain text, icon, or HTML template. The order and the group can also be defined where the command should be included. Bind the action to the command by getting its instance.

This sample shows how to add your own commands to the toolbar of the Rich Text Editor. The “Ω” command is added to insert special characters in the editor. By clicking the “Ω” command, it will show the special characters list, and then choose the character to be inserted in the editor.

The following code snippet illustrates custom tool with tooltip text which will be included in [items](https://ej2.syncfusion.com/vue/documentation/api/rich-text-editor/toolbarSettings/#items) field of the [toolbarSettings](https://ej2.syncfusion.com/vue/documentation/api/rich-text-editor/toolbarSettings/#toolbarsettings) property.

```javascript
{
    tooltipText: 'Insert Symbol',
    undo: true,
    click: this.onClick.bind(this),
    template: '<button class="e-tbar-btn e-btn" tabindex="-1" id="custom_tbar" style="width:100%"><div class="e-tbar-btn-text" style="font-weight: 500;"> &#937;</div></button>'
}

```

The Rich Text Editor provides options to customize tool functionalities. Use the [`undo`](https://ej2.syncfusion.com/vue/documentation/api/rich-text-editor/toolbarStatusEventArgs/) property to enable or disable the undo function for specific tools. Additionally, the [click](https://helpej2.syncfusion.com/vue/documentation/api/rich-text-editor/toolbarClickEventArgs/) property lets you configure and bind the onclick event of a tool to a specific method.

This sample demonstrates how to add a custom "Ω" icon to the toolbar. Clicking on this icon opens a dialog where you can insert special characters into the editor. It also shows how to enable undo and redo functionalities.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/rich-text-editor/toolbar-cs19/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/rich-text-editor/toolbar-cs19/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/rich-text-editor/toolbar-cs19" %}

> When rendering any component for the custom toolbar, like a dropdown, the focus may be lost, causing it to render outside the Rich Text Editor and triggering a blur event. This can interfere with proper functionalities like cursor focus. To prevent this issue, it is recommended to assign the e-rte-elements class to the component rendered in the custom toolbar.

## Enabling and disabling toolbar items

You can use the [enableToolbarItem](https://ej2.syncfusion.com/vue/documentation/api/rich-text-editor/#enabletoolbaritem) and [disableToolbarItem](https://ej2.syncfusion.com/vue/documentation/api/rich-text-editor/#disabletoolbaritem) methods to control the state of toolbar items. This methods takes a single item or an array of [items](#available-toolbar-items) as parameter.

>You can add the command name `Custom` to disable the custom toolbar items on source code view and other quicktoolbar operations.