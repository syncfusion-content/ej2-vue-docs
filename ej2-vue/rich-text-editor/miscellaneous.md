---
layout: post
title: Miscellaneous in Vue Rich text editor component | Syncfusion
description: Learn here all about Miscellaneous in Syncfusion Vue Rich text editor component of Syncfusion Essential JS 2 and more.
control: Miscellaneous 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Miscellaneous in Vue Rich text editor component

## Placeholder

Specifies the placeholder for the Rich Text Editor’s content used when the Rich Text Editor body is empty through the [placeholder](https://ej2.syncfusion.com/vue/documentation/api/rich-text-editor/#placeholder) property.

Through the `e-rte-placeholder` class to define our custom font family, font color, and styles to the placeholder text.

``` css
  .e-richtexteditor .e-rte-placeholder {
    font-family: monospace;
  }
```

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/rich-text-editor/getting-started-cs24/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/rich-text-editor/getting-started-cs24" %}

## Character count

The Rich Text Editor automatically counts the number of characters in the content are while typing using the [showCharCount](https://ej2.syncfusion.com/vue/documentation/api/rich-text-editor/#showcharcount) property. The characters count displayed at the bottom of the editor. You can limit the number of characters in your content using the [maxLength](https://ej2.syncfusion.com/vue/documentation/api/rich-text-editor/#maxlength) property. By default, the editor sets the characters limit value is infinity.

The character count color will be modified based on the characters in the Rich Text Editor.

| **Status** | **Description** |
| --- | --- |
| Normal | Till 70% of given maxLength value, character count color is black. |
| Warning | Once the number of character count in the Rich Text Editor reached 70% of given maxLength value, the character count color will be orange, indicating that, the count value going to reach the maximum count. |
| Error | Once the number of character count in the Rich Text Editor reached 90% of given maxLength value, the character count color will be red, indicating that, the count value reached the maximum count. |

> To create Rich Text Editor with character count feature, inject the Count module to the Rich Text Editor using the `RichTextEditor.Inject(Count)` method.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/rich-text-editor/getting-started-cs25/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/rich-text-editor/getting-started-cs25" %}

## Code view

Rich Text Editor includes the ability for users to directly edit HTML code via `Source View` in the text area. If you made any modification in Source view directly, the changes will be reflected in the Rich Text Editor's content. So, the users will have more flexibility over the content they have created.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/rich-text-editor/code-mirror-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/rich-text-editor/code-mirror-cs1" %}

## Undo/Redo manager

Undo and redo tools allow you to edit the text by disregard/cancel the recently made changes and restore it to previous state. It is a useful tool to restore the performed action which got changed by mistake. By default, upto 30 actions can be undo/redo in the editor.

To undo and redo operations, do one of the following:
* Press the undo/redo button on the toolbar.
* Press the **Ctrl + Z/Ctrl + Y** combination on the keyboard.

Customize the undo/redo step count using the [undoRedoSteps](https://ej2.syncfusion.com/vue/documentation/api/rich-text-editor/#undoredosteps) property. By default, undo/redo actions take 300ms time interval for store the action to the undoRedoManager. The time interval can be customized by using the [undoRedoTimer](https://ej2.syncfusion.com/vue/documentation/api/rich-text-editor/#undoredotimer).

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/rich-text-editor/getting-started-cs26/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/rich-text-editor/getting-started-cs26" %}

## Prevention of cross-site scripting (XSS)

The Rich Text Editor allows the users to edit the content with security by preventing cross-site scripting (XSS). By default, provided built-in support to remove the elements from editor content, which cause XSS attack. The editor removes the elements based on the attributes if it is possible to execute script.

In the following sample, removed `script` tag and `onmouseover` attribute from content of the Rich Text Editor.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/rich-text-editor/getting-started-cs27/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/rich-text-editor/getting-started-cs27" %}

> It is only applicable to editorMode as HTML.

### Custom cross-site scripting

You can also filter the elements and attributes additionally, which cause the XSS attack through [`beforeSanitizeHtml`](https://ej2.syncfusion.com/vue/documentation/api/rich-text-editor/#beforesanitizehtml) event. Return the value from the event argument `helper` function to apply in the editor. To prevent the built-in support and make own cross-site scripting rules, set `cancel` argument to true.

The following sample demonstrates how to filter `script` tag from value.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/rich-text-editor/getting-started-cs28/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/rich-text-editor/getting-started-cs28" %}

## Resizable support

This feature allows the editor to be resized dynamically. The users can enable or disable this feature using the `enableResize` property in the Rich Text Editor. If `enableResize` is set to true, the Rich Text Editor component creates grip at the bottom right corner, which allows resizing the component in the diagonal direction. The following sample demonstrates the resizable feature.

### Enabling the resizable support

To render the Rich Text Editor in the resizable mode, set the `enableResize` property to true. The above feature is built as module and hence the `Resize` module needs to be included in your application.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/rich-text-editor/toolbar-cs12/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/rich-text-editor/toolbar-cs12" %}

### Specifying the Minimum and Maximum width and height for Resize

To have a restricted resizable area for the Rich Text Editor, you need to specify the min-width, max-width, min-height, and max-height CSS properties for the control's wrapper element. By default, the control is capable of resizing upto the current viewport. The `e-richtexteditor` CSS class will be available in the component's wrapper and can be used for applying the above mentioned styles.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/rich-text-editor/toolbar-cs13/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/rich-text-editor/toolbar-cs13" %}

## Number and Bullet Format Lists

This feature allows the user to change the appearance of the Numbered and Bulleted lists. Users can also apply different numbering or bullet formats lists such as lowercase greek, upper Alpha, square and circles. You can also customize the style type of the lists to be populated in the dropdown from the toolbar by using the `numberFormatList` and `bulletFormatList` properties in the Rich Text Editor.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/rich-text-editor/getting-started-cs29/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/rich-text-editor/getting-started-cs29" %}
