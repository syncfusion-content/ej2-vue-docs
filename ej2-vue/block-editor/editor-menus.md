---
layout: post
title: Editor Menus in Vue Block Editor Component | Syncfusion
description: Checkout and learn about Editor Menus with Syncfusion Essential Vue Block Editor component, its elements, and more details.
platform: ej2-vue
control: Block Editor 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Editor Menus in Vue Block Editor component

The Block Editor component provides several interactive menus to enhance content creation and editing. These menus offer quick access to various commands and formatting options.

## Slash command menu

The Slash Command menu allows users to quickly insert or transform blocks by typing `/` followed by a command. This provides an efficient, keyboard-driven way to interact with the editor.

### Built-in items

The Slash Command menu comes with a set of pre-defined commands for all block types:

-   **Headings(Level 1 to 4)**: to insert respective heading blocks.
-   **Lists(Bullet, Numbered, Checklist)**: for different list types.
-   **Paragraph**: for standard text blocks.
-   **Image**: for media insertion.
-   **Table**: Inserts a table block.
-   **Toggle**: for collapsible content.
-   **Callout**: for highlighting important information.
-   **Utility(Divider, Quote, Code)**: for other utility blocks.

### Customize Slash command menu

You can use the [commandMenuSettings](../api/blockeditor#commandmenusettings) property to modify the Slash Command menu. This allows you to add custom commands, remove default items, or change the behavior of existing commands to fit your application's requirements.

### Events

The following events are available in the Slash Command menu.

|Name|Args|Description|
|---|---|---|
|[filtering](../api/blockeditor/commandMenuSettingsModel#filtering)|CommandFilteringEventArgs|Triggers when the user types to filter the command menu items.|
|[itemSelect](../api/blockeditor/commandMenuSettingsModel#itemselect)|CommandItemSelectEventArgs|Triggers when the user clicks on a command menu item.|

Below example demonstrates how to configure the events in the Slash Command menu.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/block-editor/editor-menus/slash-command/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/block-editor/editor-menus/slash-command/app.vue %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/code-snippet/block-editor/editor-menus/slash-command" %}

## Context menu

The Context menu appears when a user right-clicks within a specific block. It provides context-aware actions relevant to the clicked block or content.

### Built-in items

The Context menu offers different built-in options:

-  **Undo/Redo**: Undo and redo actions.
-  **Cut/Copy/Paste**: Standard clipboard actions.
-  **Indent**: Increase or decrease the indent level of the selected block.
-  **Link**: Add or edit a hyperlink.

### Customize Context menu

You can use the [contextMenuSettings](../api/blockeditor#contextmenusettings) property to customize the Context menu. This allows you to add specific actions or modify existing items based on your application needs.

Below example demonstrates how to customize the Context menu.

### Events

The following events are available in the Context menu.

|Name|Args|Description|
|---|---|---|
|[opening](../api/blockeditor/contextMenuSettingsModel#opening)|ContextMenuOpeningEventArgs|Triggers before the context menu opens.|
|[closing](../api/blockeditor/contextMenuSettingsModel#closing)|ContextMenuClosingEventArgs|Triggers before the context menu closes.|
|[itemSelect](../api/blockeditor/contextMenuSettingsModel#itemselect)|ContextMenuItemSelectEventArgs|Triggers when a context menu item is clicked.|

Below example demonstrates how to configure the events in the Context menu.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/block-editor/editor-menus/context-menu/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/block-editor/editor-menus/context-menu/app.vue %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/code-snippet/block-editor/editor-menus/context-menu" %}

## Block action menu

The Block Action menu typically appears next to a block when you hover over it and click on the drag handle icon, offering quick actions specific to that block.

### Built-in items

The Block Action menu provides convenient actions for managing individual blocks:

-   **Duplicate**: Create a copy of the current block.
-   **Delete**: Remove the block from the editor.
-   **Move Up**: Move the block one level up in the hierarchy.
-   **Move Down**: Move the block one level down in the hierarchy.

### Customize Block action menu

You can use the [blockActionMenuSettings](../api/blockeditor#blockactionmenusettings) property to customize the Block action menu. This enables you to add block-specific commands that are relevant to your application, allowing for a highly tailored user experience.

Below example demonstrates how to customize the Block action menu.

#### Show or hide tooltip

By default, a tooltip is displayed when the user hovers over an action item. You can show or hide the tooltip using the [enableTooltip](../api/blockeditor/blockActionMenuSettingsModel#enabletooltip) property in the block action menu settings.

### Events

The following events are available in the Block action menu.

|Name|Args|Description|
|---|---|---|
|[opening](../api/blockeditor/blockActionMenuSettingsModel#opening)|BlockActionMenuOpeningEventArgs|Triggers when the block action menu is opened.|
|[closing](../api/blockeditor/blockActionMenuSettingsModel#closing)|BlockActionMenuClosingEventArgs|Triggers when the block action menu is closed.|
|[itemSelect](../api/blockeditor/blockActionMenuSettingsModel#itemselect)|BlockActionItemSelectEventArgs|Triggers when a block action menu item is clicked.|

Below example demonstrates how to configure the events in the Blockaction menu.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/block-editor/editor-menus/block-action/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/block-editor/editor-menus/block-action/app.vue %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/code-snippet/block-editor/editor-menus/block-action" %}

## Inline Toolbar

The Inline Toolbar appears when a text is selected in the editor, providing quick access to common text formatting actions that apply to inline content.

### Built-in items

The Inline Toolbar includes below built-in formatting options:

-   **Text Styles**: Bold, Italic, Underline, Strikethrough.
-   **Superscript/Subscript**: For mathematical or scientific notations.
-   **Case Conversion**: Uppercase, Lowercase.
-   **Text Color**: Change text color.
-   **Background Color**: Change background color.

### Customize Inline Toolbar

You can use the [inlineToolbarSettings](../api/blockeditor#inlinetoolbarsettings) property to customize the Inline Toolbar by adding or removing formatting options based on your application's needs.

### Events

The following events are available in the Inline Toolbar.

|Name|Args|Description|
|---|---|---|
|[itemClick](../api/blockeditor/inlineToolbarSettingsModel#itemclick)|ToolbarItemClickEventArgs|Triggers when the user clicks on an inline toolbar item.|

Below example demonstrates how to configure the events in the Inline Toolbar.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/block-editor/editor-menus/inline-toolbar/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/block-editor/editor-menus/inline-toolbar/app.vue %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/code-snippet/block-editor/editor-menus/inline-toolbar" %}