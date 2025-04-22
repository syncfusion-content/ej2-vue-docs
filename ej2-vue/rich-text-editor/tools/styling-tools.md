---
layout: post
title: Styling tools in Vue Rich text editor component | Syncfusion
description: Learn here all about Styling tools in Syncfusion Vue Rich text editor component of Syncfusion Essential JS 2 and more.
control: Styling tools
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Styling Tools in Vue Rich Text Editor Component

## Font family
  
The Rich Text Editor initializes with a default font family, which inherits the font family of the parent element. You can change the font for selected text using the font family dropdown in the toolbar. When the default font family is selected, the toolbar will display "Font Name". However, for other font families, the toolbar will show the name of the selected font.

To apply a different font style to a specific section of the content, follow these steps:

1. Select the text you want to change.
2. Choose the desired font style from the drop-down menu in the toolbar.

These steps will apply the selected font style to the chosen text, allowing you to customize the appearance of your content easily.

### Built-in font family

You can add the `FontName` tool in the Rich Text Editor toolbar using the `toolbarSettings` [items](https://ej2.syncfusion.com/vue/documentation/api/rich-text-editor/toolbarSettings/#items) property.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/rich-text-editor/font-family-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/rich-text-editor/font-family-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/rich-text-editor/font-family-cs1" %}

The Rich Text Editor comes with a pre-configured set of [fontFamily](https://ej2.syncfusion.com/vue/documentation/api/rich-text-editor/#fontfamily) property.

### Custom font family

The Rich Text Editor supports providing custom fonts along with the existing list. To add additional font names to the font dropdown, you can configure the items field of the [fontFamily](https://ej2.syncfusion.com/vue/documentation/api/rich-text-editor/#fontfamily) property. This allows you to extend the available font options beyond the default selection.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/rich-text-editor/custom-font-family-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/rich-text-editor/custom-font-family-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/rich-text-editor/custom-font-family-cs1" %}

### Google font support

To use web fonts in Rich Text Editor, it is not needed for the web fonts to be present in local machine. To add the web fonts to Rich Text Editor, you need to refer the web font links and add the font names in the [fontFamily](https://ej2.syncfusion.com/vue/documentation/api/rich-text-editor/#fontfamily) property.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/rich-text-editor/toolbar-cs6/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/rich-text-editor/toolbar-cs6/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/rich-text-editor/toolbar-cs6" %}

The below font style links are referred in the page.

```ts

<link rel="stylesheet" href="http://fonts.googleapis.com/css?family=Roboto">
<link rel="stylesheet" href="http://fonts.googleapis.com/css?family=Great+Vibes">

```

> In the above sample, you can see that we have added two Google web fonts (`Roboto` and `Great vibes`) to `Rich Text Editor`.

## Font size

The Rich Text Editor initializes with a default font size, which inherits the font size of the parent element. You can change the font for selected text using the font size dropdown in the toolbar. When the default font size is selected, the toolbar will display "Font Size". However, for other font sizes, the toolbar will show the name of the selected font.

### Built-in font size

You can add the `FontSize` tool in the Rich Text Editor toolbar using the `toolbarSettings` [items](https://ej2.syncfusion.com/vue/documentation/api/rich-text-editor/toolbarSettings/#items) property.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/rich-text-editor/font-size-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/rich-text-editor/font-size-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/rich-text-editor/font-size-cs1" %}

The Rich Text Editor includes a default set of [fontSize](https://ej2.syncfusion.com/vue/documentation/api/rich-text-editor/#fontsize) property.

### Custom font size

The Rich Text Editor supports providing custom fonts along with the existing list. To add additional font names to the font dropdown, you can configure the items field of the [fontSize](https://ej2.syncfusion.com/vue/documentation/api/rich-text-editor/#fontsize) property. This allows you to extend the available font options beyond the default selection.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/rich-text-editor/getting-started-cs31/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/rich-text-editor/getting-started-cs31/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/rich-text-editor/getting-started-cs31" %}

## Font and background color

You can add the `FontColor` and `BackgroundColor` tool in the Rich Text Editor toolbar using the `toolbarSettings` [items](https://ej2.syncfusion.com/vue/documentation/api/rich-text-editor/toolbarSettings/#items) property.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/rich-text-editor/font-background-color-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/rich-text-editor/font-background-color-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/rich-text-editor/font-background-color-cs1" %}

### Custom font and background colors

To apply `font color` or `background color` to selected content in the Rich Text Editor, use the font color and background color tools.

The Rich Text Editor offers custom font and background colors along with the existing list through the [colorCode](https://ej2.syncfusion.com/vue/documentation/api/rich-text-editor/backgroundColor/#colorcode) field of the [fontColor](https://ej2.syncfusion.com/vue/documentation/api/rich-text-editor/#fontcolor) and [backgroundColor](https://ej2.syncfusion.com/vue/documentation/api/rich-text-editor/#backgroundcolor) properties.

Both the `FontColor` and `BackgroundColor` properties offer two modes: `Picker` and `Palette`. The Palette mode provides a predefined set of colors, while the Picker mode includes a color scheme to choose custom colors. You can switch between these options using the [modeSwitcher](https://ej2.syncfusion.com/vue/documentation/api/rich-text-editor/fontColorModel/#modeswitcher) feature.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/rich-text-editor/getting-started-cs32/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/rich-text-editor/getting-started-cs32/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/rich-text-editor/getting-started-cs32" %}