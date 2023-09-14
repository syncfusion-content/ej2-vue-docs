---
layout: post
title: Toolbar in Vue Rich text editor component | Syncfusion
description: Learn here all about Toolbar in Syncfusion Vue Rich text editor component of Syncfusion Essential JS 2 and more.
control: Toolbar 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Toolbar in Vue Rich text editor component

The Rich Text Editor toolbar contains a collection of tools such as bold, italic, and text alignment buttons that are used to format the content. However, in most integrations, you can customize the toolbar configurations easily to suit your needs.

To create Rich Text Editor with Markdown editing feature, inject the [`Toolbar`](https://ej2.syncfusion.com/vue/documentation/api/rich-text-editor/#toolbarsettings) module to the Rich Text Editor using the `RichTextEditor.Inject(Toolbar)` method.

The Rich Text Editor allows you to configure different types of toolbar using [`toolbarSettings.type`](https://ej2.syncfusion.com/vue/documentation/api/rich-text-editor/toolbarType/#toolbartype) property. The types of toolbar are:

1. Expand
2. MultiRow

## Expand Toolbar

The default mode of [`toolbarSettings.type`](https://ej2.syncfusion.com/vue/documentation/api/rich-text-editor/toolbarType/#toolbartype) is Expand, it will hide the overflowing items in the next row. By clicking the expand arrow, view the overflowing toolbar items.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/rich-text-editor/toolbar-cs16/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/rich-text-editor/toolbar-cs16" %}

## Multi-row Toolbar

Set the type as MultiRow in [toolbarSettings](https://ej2.syncfusion.com/vue/documentation/api/rich-text-editor/toolbarSettings/#toolbarsettings) to hide the overflowing items in the next row. All toolbar items are visible.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/rich-text-editor/toolbar-cs17/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/rich-text-editor/toolbar-cs17" %}

## Floating Toolbar

By default, toolbar is float at the top of the Rich Text Editor on scrolling. It can be customized by specifying the offset of the floating toolbar from documents top position using  [`floatingToolbarOffset`](https://ej2.syncfusion.com/vue/documentation/api/rich-text-editor/#floatingtoolbaroffset).

Enable or disable the floating toolbar using [`enableFloating`](https://ej2.syncfusion.com/vue/documentation/api/rich-text-editor/toolbarSettings/#enablefloating) of the[`toolbarSettings`](https://ej2.syncfusion.com/vue/documentation/api/rich-text-editor/toolbarSettings/#toolbarsettings) property.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/rich-text-editor/toolbar-cs18/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/rich-text-editor/toolbar-cs18" %}

## Toolbar items

The following table lists the tools available in the toolbar.

| **Name** | **Summary** | **Initialization** |
| --- | --- | --- |
| Undo | Allows to undo the actions. | toolbarSettings: { <br /> items: ['Undo'] <br /> } |
| Redo | Allows to redo the actions. | toolbarSettings: { <br /> items: ['Redo'] <br /> } |
| Alignment | Align the content with left, center, and right margin. | toolbarSettings: { <br /> items: ['Alignments'] <br /> } |
| OrderedList | Create a new list item (numbered). | toolbarSettings: { <br /> items: ['OrderedList'] <br /> } |
| UnorderedList | Create a new list item (bulleted). | toolbarSettings: { <br /> items: ['UnorderedList'] <br /> } |
| Indent |Allows to increase the indent level of the content. | toolbarSettings: { <br /> items: ['Indent'] <br /> } |
| Outdent | Allows to decrease the indent level of the content. | toolbarSettings: { <br /> items: ['Outdent'] <br /> } |
| Hyperlink | Creates a hyperlink to a text or image to a specific location in the content. | toolbarSettings: { <br /> items: ['CreateLink'] <br /> } |
| Images | Inserts an image from an online source or local computer. | toolbarSettings: { <br /> items: ['Image'] <br /> } |
| LowerCase | Change the case of selected text to lower in the content. | toolbarSettings: { <br /> items: ['LowerCase'] <br /> } |
| UpperCase | Change the case of selected text to upper in the content. | toolbarSettings: { <br /> items: ['UpperCase'] <br /> } |
| SubScript | Makes the selected text as subscript (lower). | toolbarSettings: { <br /> items: ['SubScript'] <br /> } |
| SuperScript | Makes the selected text as superscript (higher). | toolbarSettings: { <br /> items: ['SuperScript'] <br /> } |
| Print  | Allows to print the editor content. | toolbarSettings: { <br /> items: ['Print'] <br /> } |
| FontName | Defines the fonts that appear under the Font Family DropDownList from the Rich Text Editor's toolbar. | toolbarSettings: { <br /> items: ['FontName'] <br /> } |
| FontSize | Defines the font sizes that appear under the Font Size DropDownList from the Rich Text Editor's toolbar. | toolbarSettings: { <br /> items: ['FontSize'] <br /> } |
| FontColor | Specifies an array of colors can be used in the colors pop-up for font color. | toolbarSettings: { <br /> items: ['FontColor'] <br /> } |
| BackgroundColor | Specifies an array of colors can be used in the colors pop-up for background color. | toolbarSettings: { <br /> items: ['BackgroundColor'] <br /> } |
| Format | An object with the options that will appear in the paragraph format drop-down from the toolbar. | toolbarSettings: { <br /> items: ['Formats'] <br /> } |
| StrikeThrough | Apply double line strike through formatting for the selected text. | toolbarSettings: { <br /> items: ['StrikeThrough'] <br /> } |
| ClearFormat | The clear format tool is used to remove all formatting styles (such as bold, italic, underline, color, superscript, subscript, and more) from currently selected text. As a result, all the formatting text will be cleared and return to its default formatting styles. | toolbarSettings: { <br /> items: ['ClearFormat'] <br /> } |
| FullScreen | Stretches the editor to the maximum width and height of the browser window. | toolbarSettings: { <br /> items: ['FullScreen'] <br /> } |
| SourceCode | The RichTextBox includes the ability for users to directly edit the HTML code via Source View. If you made any modification in source view directly, synchronize with design view. | toolbarSettings: { <br /> items: ['SourceCode'] <br /> } |
| NumberFormatList | Allows to create list items with various list style types(numbered)|toolbarSettings: { <br /> items: ['NumberFormatList'] <br /> } |
| BulletFormatList | Allows to create list items with various list style types(bulleted)|toolbarSettings: { <br /> items: ['BulletFormatList'] <br /> } |

By default, tools will be arranged in following order.

> items: ['Bold', 'Italic', 'Underline', '|', 'Formats', 'Alignments', 'OrderedList', 'UnorderedList', '|', 'CreateLink', 'Image', '|', 'SourceCode', 'Undo', 'Redo']

The tools order can be customized as our application requirement. If you are not specifying any tools order, the editor will create the toolbar with default items.

## Custom tool

The Rich Text Editor allows you to configure your own commands to its toolbar using the [`toolbarSettings`](https://ej2.syncfusion.com/vue/documentation/api/rich-text-editor/toolbarSettings/#toolbarsettings) property. The command can be plain text, icon, or HTML template. The order and the group can also be defined where the command should be included. Bind the action to the command by getting its instance.

This sample shows how to add your own commands to the toolbar of the Rich Text Editor. The **Ω** command is added to insert special characters in the editor. By clicking the **Ω** command, it will show the special characters list, and then choose the character to be inserted in the editor.

The following code snippet illustrates custom tool with tooltip text which will be included in [`items`](https://ej2.syncfusion.com/vue/documentation/api/rich-text-editor/toolbarSettings/#items) field of the [`toolbarSettings`](https://ej2.syncfusion.com/vue/documentation/api/rich-text-editor/toolbarSettings/#toolbarsettings) property.

In the following sample, once Rich Text Editor control is created, the concern event will be [`created`](https://ej2.syncfusion.com/vue/documentation/api/rich-text-editor/#created) the Dialog component can be rendered and target as Rich Text Editor content.

```javascript
{
    tooltipText: 'Insert Symbol',
    undo: true,
    click: this.onClick.bind(this),
    template: '<button class="e-tbar-btn e-btn" tabindex="-1" id="custom_tbar" style="width:100%"><div class="e-tbar-btn-text" style="font-weight: 500;"> &#937;</div></button>'
}

```

Click the **Ω** command to show the special characters list, and then choose the character to be inserted in the editor.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/rich-text-editor/toolbar-cs19/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/rich-text-editor/toolbar-cs19" %}

## Quick inline toolbar

Quick commands are opened as context-menu on clicking the corresponding element. The commands must be passed as string collection to image, text, link and table attributes of the [`quickToolbarSettings`](https://ej2.syncfusion.com/vue/documentation/api/rich-text-editor/quickToolbarSettings/#quicktoolbarsettings) property.

| Target Element | Default Quick Toolbar items |
|----------------|---------|
|image | 'Replace', 'Align', 'Caption', 'Remove', 'InsertLink', 'Display', 'AltText','Dimension'.|
| link | 'Open', 'Edit', 'UnLink'.|
| text | null <br> (Any toolbar [items](https://ej2.syncfusion.com/vue/documentation/rich-text-editor/toolbar#toolbar-items) in the Rich Text Editor can be configured here).|
| table | 'TableHeader', 'TableRows', 'TableColumns', 'BackgroundColor', 'TableRemove', 'Alignments', 'TableCellVerticalAlign', 'Styles'.|

Custom tool can be added to the corresponding quick toolbar, using [`quickToolbarSettings`](https://ej2.syncfusion.com/vue/documentation/api/rich-text-editor/quickToolbarSettings/#quicktoolbarsettings) property.

The following sample demonstrates the option to insert the image to the Rich Text Editor content as well as option to rotate the image through the quick toolbar. The image rotation functionalities have been achieved through the [`toolbarClick`](https://ej2.syncfusion.com/vue/documentation/api/rich-text-editor/#toolbarclick) event.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/rich-text-editor/toolbar-cs20/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/rich-text-editor/toolbar-cs20" %}

> Rich Text Editor features are segregated into individual feature-wise modules. To use quick toolbar, inject the quick toolbar module using the `RichTextEditor.Inject(image, link)`.

## See Also

* [How to render the toolbar in inline mode](./inline-mode/)
* [How to customize the toolbar items shortcut key](./how-to/customize-shortcut-keys)