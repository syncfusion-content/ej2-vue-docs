---
layout: post
title: Quick Toolbars in Vue Rich Text Editor component | Syncfusion
description: Learn here all about Quick Toolbars in Syncfusion Vue Rich Text Editor component of Syncfusion Essential JS 2 and more.
control: Quick Toolbars
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Quick Toolbars in Vue Rich Text Editor Component

The Rich Text Editor has quick toolbars that act as context-menus, appearing when you click on elements like images, links, audio, video, and tables. By default, specific quick toolbar items are displayed when clicking on the corresponding element. You can customize these items using the [`quickToolbarSettings`](https://ej2.syncfusion.com/vue/documentation/api/rich-text-editor/#quickToolbarSettings) property.

> To use quick toolbar feature, configure `QuickToolbar` in the providers section.

## Customizing the image quick toolbar

You can customize the quick toolbar options for images using the `image` property within the [quickToolbarSettings](https://ej2.syncfusion.com/vue/documentation/api/rich-text-editor/quickToolbarSettings/). The Rich Text Editor provides essential tools such as 'Replace', 'Align', 'Caption', 'Remove', 'InsertLink', 'Display', 'AltText', and 'Dimension' allowing seamless image management and editing directly within the content.

By configuring these options in the [quickToolbarSettings](https://ej2.syncfusion.com/vue/documentation/api/rich-text-editor/quickToolbarSettings/) property, you can enhance the editor’s functionality, ensuring a user-friendly experience for efficiently handling image elements.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/rich-text-editor/customize-image-cs2/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/rich-text-editor/customize-image-cs2/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/rich-text-editor/customize-image-cs2" %}

## Link quick toolbar

The link quick toolbar appears when you click on a link in the editor. You can customize its items using the `link` property in the  [quickToolbarSettings](https://ej2.syncfusion.com/vue/documentation/api/rich-text-editor/quickToolbarSettingsModel/#link).

The Rich Text Editor provides essential tools in the link quick toolbar, including "Open", "Edit Link", "Remove Link", and "Custom Tool".

The following example demonstrates how to customize the link quick toolbar using the [quickToolbarSettings](https://ej2.syncfusion.com/vue/documentation/api/rich-text-editor/quickToolbarSettingsModel/#link) property.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/rich-text-editor/markdown-cs6/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/rich-text-editor/markdown-cs6/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/rich-text-editor/markdown-cs6" %}

## Table quick toolbar

The table quick toolbar opens when you click anywhere within a table. Customize its items using the `table` property in the [`quickToolbarSettings`](https://ej2.syncfusion.com/vue/documentation/api/rich-text-editor/quickToolbarSettingsModel/#table).

The quick toolbar appears when clicking on a table, providing easy access to table-related commands. You can customize the quick toolbar by adding or removing tools using the [`quickToolbarSettings`](https://ej2.syncfusion.com/vue/documentation/api/rich-text-editor/#quickToolbarSettings) property.

The following sample demonstrates the customiztion of table quick toolbar.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/rich-text-editor/table-quick-tool-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/rich-text-editor/table-quick-tool-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/rich-text-editor/table-quick-tool-cs1" %}

## Audio quick toolbar

Customize the quick toolbar items for audio elements using the `audio` property in the [quickToolbarSettings](https://ej2.syncfusion.com/vue/documentation/api/rich-text-editor/quickToolbarSettingsModel/#audio).The Rich Text Editor provides essential tools such as "AudioReplace", "Remove", and "AudioLayoutOption", allowing seamless management and editing of audio content.

By configuring these options in the [quickToolbarSettings](https://ej2.syncfusion.com/vue/documentation/api/rich-text-editor/quickToolbarSettingsModel/#audio) property, you can enhance the editor’s capabilities, ensuring a user-friendly experience for handling audio elements efficiently.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/rich-text-editor/audio-quick-tool-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/rich-text-editor/audio-quick-tool-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/rich-text-editor/audio-quick-tool-cs1" %}

## Video quick toolbar

The video quick toolbar appears when you click on a video element. You can customize its tools using the `video` property in the [quickToolbarSettings](https://ej2.syncfusion.com/vue/documentation/api/rich-text-editor/quickToolbarSettingsModel/#video).

The Rich Text Editor allows you to tailor the video quick toolbar with essential tools such as "VideoReplace", "VideoAlign", "VideoRemove", "VideoLayoutOption", and "VideoDimension", enabling seamless management of embedded videos.

By configuring these options in the [quickToolbarSettings](https://ej2.syncfusion.com/vue/documentation/api/rich-text-editor/quickToolbarSettingsModel/#video) property, you enhance the editor’s capabilities, ensuring a user-friendly experience for editing and customizing video elements effortlessly.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/rich-text-editor/video-quick-tool-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/rich-text-editor/video-quick-tool-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/rich-text-editor/video-quick-tool-cs1" %}

## Text quick toolbar

The text quick toolbar provides easy access to commonly used formatting tools, enabling users to apply styles and adjustments effortlessly. This enhances the editing experience by streamlining text formatting.

Customize the quick toolbar items using the `text` property in the [quickToolbarSettings](https://ej2.syncfusion.com/vue/documentation/api/rich-text-editor/quickToolbarSettingsModel/#text). Any toolbar items available in the Rich Text Editor can be configured for the text quick toolbar. The example below demonstrates its customization.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/rich-text-editor/text-quick-tool-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/rich-text-editor/text-quick-tool-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/rich-text-editor/text-quick-tool-cs1" %}

## Quick inline toolbar

Quick commands are opened as context-menu on clicking the corresponding element. The commands must be passed as string collection to image, text, link and table attributes of the [quickToolbarSettings](https://ej2.syncfusion.com/vue/documentation/api/rich-text-editor/quickToolbarSettings/#quicktoolbarsettings) property.

| Target Element | Default Quick Toolbar items |
|----------------|---------|
|image | 'Replace', 'Align', 'Caption', 'Remove', 'InsertLink', 'Display', 'AltText','Dimension'.|
| link | 'Open', 'Edit', 'UnLink'.|
| text | null <br> (Any toolbar [items](https://ej2.syncfusion.com/vue/documentation/rich-text-editor/toolbar#toolbar-items) in the Rich Text Editor can be configured here).|
| table | 'TableHeader', 'TableRows', 'TableColumns', 'BackgroundColor', 'TableRemove', 'Alignments', 'TableCellVerticalAlign', 'Styles'.|

Custom tool can be added to the corresponding quick toolbar, using [quickToolbarSettings](https://ej2.syncfusion.com/vue/documentation/api/rich-text-editor/quickToolbarSettings/#quicktoolbarsettings) property.

The following sample demonstrates the option to insert the image to the Rich Text Editor content as well as option to rotate the image through the quick toolbar. The image rotation functionalities have been achieved through the [toolbarClick](https://ej2.syncfusion.com/vue/documentation/api/rich-text-editor/#toolbarclick) event.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/rich-text-editor/toolbar-cs20/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/rich-text-editor/toolbar-cs20/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/rich-text-editor/toolbar-cs20" %}