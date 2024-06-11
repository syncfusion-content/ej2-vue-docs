---
layout: post
title: Styling in Vue Rich text editor component | Syncfusion
description: Learn here all about Styling in Syncfusion Vue Rich text editor component of Syncfusion Essential JS 2 and more.
control: Styling 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Styling in Vue Rich text editor component

## Font name and size

By default, the editor is initialized with font name and  font size as **null**. To change it, select a different font name and font size from the drop-down in the editor’s toolbar.

To apply different font style for section of the content, select the text that you would like to change, and select a required font style from the drop-down to apply the changes to the selected text.

### FontName DropDowns

The following table lists the default font name and width of the fontname drop-down and available list of font names.

| **Property** | **Default value** |
| --- | --- |
| Default font name | null |
| Width | 65px |
| Items | { text: 'Segoe UI', value: 'Segoe UI' }, <br /> { text: 'Arial', value: 'Arial,Helvetica,sans-serif' }, <br /> { text: 'Courier New', value: 'Courier New,Courier,monospace' }, <br /> { text: 'Georgia', value: 'Georgia,serif' }, <br /> { text: 'Impact', value: 'Impact,Charcoal,sans-serif' }, <br /> { text: 'Lucida Console', value: 'Lucida Console,Monaco,monospace' }, <br /> { text: 'Tahoma', value: 'Tahoma,Geneva,sans-serif' }, <br /> { text: 'Times New Roman', value: 'Times New Roman,Times,serif' }, <br /> { text: 'Trebuchet MS', value: 'Trebuchet MS,Helvetica,sans-serif' }, <br /> { text: 'Verdana', value: 'Verdana,Geneva,sans-serif' } |

### FontSize DropDowns

The following table list the default font size and width of the fontsize dropdown and available list of font size.

| **Property** | **Default value** |
| --- | --- |
| Default font size | null |
| Width | 35px |
| Items | { text: '8', value: '8pt' }, <br /> { text: '10', value: '10pt' }, <br /> { text: '12', value: '12pt' }, <br /> { text: '14', value: '14pt' }, <br /> { text: '18', value: '18pt' }, <br /> { text: '24', value: '24pt' }, <br /> { text: '36', value: '36pt' } |

The following sample demonstrates the option to add the font name and font size tools to the toolbar as well as modify the default width of the tools.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/rich-text-editor/getting-started-cs30/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/rich-text-editor/getting-started-cs30/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/rich-text-editor/getting-started-cs30" %}

## Custom font and size

Rich Text Editor supports to provide custom font and size with existing list.

If you want to add additional font names and font sizes to font drop-down, pass the font information as JSON data to the items field of the [`fontSize`](https://ej2.syncfusion.com/vue/documentation/api/rich-text-editor/fontSize/#fontsize) and the [`fontFamily`](https://ej2.syncfusion.com/vue/documentation/api/rich-text-editor/fontFamily/#fontfamily) property.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/rich-text-editor/getting-started-cs31/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/rich-text-editor/getting-started-cs31/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/rich-text-editor/getting-started-cs31" %}

## Font and Background color

To apply font color or background color for a selected content of Rich Text Editor, use font color and background color tools.

Rich Text Editor supports to provide customs font color and background color with existing list through the [colorCode](https://ej2.syncfusion.com/vue/documentation/api/rich-text-editor/fontColor/#colorcode) field of fontColor and backgroundColor.

The FontColor and the BackgroundColor property has two [mode](https://ej2.syncfusion.com/vue/documentation/api/rich-text-editor/fontColor/#mode) Picker and Palette. Palette mode has predefined set of colorCode and in the picker mode, more colors has been provided. Through [modeSwitcher](https://ej2.syncfusion.com/vue/documentation/api/rich-text-editor/fontColor/#modeswitcher), you can able to switch between these two options.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/rich-text-editor/getting-started-cs32/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/rich-text-editor/getting-started-cs32/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/rich-text-editor/getting-started-cs32" %}

## Editor content styles

By default, The content styles of Rich Text Editor are not returned while retrieving HTML value from the editor. So, the styles are not applied when using the HTML value outside of the editor. To get the styles to Rich Text Editor’s content for your application, You can copy and use the below styles directly in your application. The styles listed below which used in the UI elements of the Rich Text Editor.  

> Make sure to add a CSS class ‘e-rte-content’ to the content container.

```

.e-rte-content p {
  margin: 0 0 10px;
  margin-bottom: 10px;
}

.e-rte-content li {
  margin-bottom: 10px;
}

.e-rte-content h1 {
  font-size: 2.17em;
  font-weight: 400;
  line-height: 1;
  margin: 10px 0;
}

.e-rte-content h2 {
  font-size: 1.74em;
  font-weight: 400;
  margin: 10px 0;
}

.e-rte-content h3 {
  font-size: 1.31em;
  font-weight: 400;
  margin: 10px 0;
}

.e-rte-content h4 {
  font-size: 1em;
  font-weight: 400;
  margin: 0;
}

.e-rte-content h5 {
  font-size: 00.8em;
  font-weight: 400;
  margin: 0;
}

.e-rte-content h6 {
  font-size: 00.65em;
  font-weight: 400;
  margin: 0;
}

.e-rte-content blockquote {
  margin: 10px 0;
  margin-left: 0;
  padding-left: 5px;
}

.e-rte-content pre {
  background-color: inherit;
  border: 0;
  border-radius: 0;
  color: #333;
  font-size: inherit;
  line-height: inherit;
  margin: 0 0 10px;
  overflow: visible;
  padding: 0;
  white-space: pre-wrap;
  word-break: inherit;
  word-wrap: break-word;
}

.e-rte-content strong, .e-rte-content b {
  font-weight: 700;
}

.e-rte-content a {
  text-decoration: none;
  -webkit-user-select: auto;
  -ms-user-select: auto;
  user-select: auto;
}

.e-rte-content a:hover {
  text-decoration: underline;
}

.e-rte-content h3 + h4,
.e-rte-content h4 + h5,
.e-rte-content h5 + h6 {
  margin-top: 00.6em;
}

.e-rte-content .e-rte-image.e-imgbreak {
  border: 0;
  cursor: pointer;
  display: block;
  float: none;
  margin: 5px auto;
  max-width: 100%;
  position: relative;
}

.e-rte-content .e-rte-image {
  border: 0;
  cursor: pointer;
  display: block;
  float: none;
  margin: auto;
  max-width: 100%;
  position: relative;
}

.e-rte-content .e-rte-image.e-imginline {
  display: inline-block;
  float: none;
  margin-left: 5px;
  margin-right: 5px;
  max-width: calc(100% - (2 * 5px));
  vertical-align: bottom;
}

.e-rte-content .e-rte-image.e-imgcenter {
  cursor: pointer;
  display: block;
  float: none;
  margin: 5px auto;
  max-width: 100%;
  position: relative;
}

.e-rte-content .e-rte-image.e-imgleft {
  float: left;
  margin: 0 5px 0 0;
  text-align: left;
}

.e-rte-content .e-rte-image.e-imgright {
  float: right;
  margin: 0 0 0 5px;
  text-align: right;
}

.e-rte-content .e-rte-img-caption {
  display: inline-block;
  margin: 5px auto;
  max-width: 100%;
  position: relative;
}

.e-rte-content .e-rte-img-caption.e-caption-inline {
  display: inline-block;
  margin: 5px auto;
  margin-left: 5px;
  margin-right: 5px;
  max-width: calc(100% - (2 * 5px));
  position: relative;
  text-align: center;
  vertical-align: bottom;
}

.e-rte-content .e-rte-img-caption.e-imgcenter {
  display: block;
}

.e-rte-content .e-rte-img-caption .e-rte-image.e-imgright,
.e-rte-content .e-rte-img-caption .e-rte-image.e-imgleft {
  float: none;
  margin: 0;
}

.e-rte-content .e-rte-table {
  border-collapse: collapse;
  empty-cells: show;
}

.e-rte-content .e-rte-table td,
.e-rte-content .e-rte-table th {
  border: 1px solid #bdbdbd;
  height: 20px;
  min-width: 20px;
  padding: 2px 5px;
  vertical-align: middle;
}

.e-rte-content .e-rte-table.e-dashed-border td,
.e-rte-content .e-rte-table.e-dashed-border th {
  border-style: dashed;
}

.e-rte-content .e-rte-img-caption .e-img-inner {
  box-sizing: border-box;
  display: block;
  font-size: 16px;
  font-weight: initial;
  margin: auto;
  opacity: .9;
  position: relative;
  text-align: center;
  width: 100%;
}

.e-rte-content .e-rte-img-caption .e-img-wrap {
  display: inline-block;
  margin: auto;
  padding: 0;
  width: 100%;
}

.e-rte-content blockquote {
  border-left: solid 2px #333;
}

.e-rte-content a {
  color: #2e2ef1;
}

.e-rte-content .e-rte-table th {
  background-color: #e0e0e0;
}

```

## See Also

* [How to add google fonts to the font family](./how-to/add-google-fonts/)
* [How to customize the toolbar items shortcut key](./how-to/customize-shortcut-keys/)
* [How to customize the placeholder](./how-to/customize-placeholder-style/)
* [How to change the default font family](./how-to/change-default-font-family/)