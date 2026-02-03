---
layout: post
title: Ribbon Gallery Items in Vue Ribbon component | Syncfusion
description:  Learn here all about Ribbon Gallery Items in Syncfusion Vue Ribbon component of Syncfusion Essential JS 2 and more.
platform: ej2-vue
control: Ribbon
documentation: ug
domainurl: ##DomainURL##
---

# Gallery Items in Vue Ribbon component

The Ribbon component supports a gallery feature that displays a collection of related items, such as icons, content, or images, to allow users to perform specific actions. To render a gallery in the Ribbon, use the `<e-ribbon-item>` tag directive with the [type](https://ej2.syncfusion.com/vue/documentation/api/ribbon/ribbonItemType/) property set to `Gallery`.

The gallery can be configured through the [RibbonGallerySettingsModel](https://ej2.syncfusion.com/vue/documentation/api/ribbon/ribbonGallerySettingsModel/), which provides options to manage `groups`, `itemCount`, `popupHeight`, `popupWidth`, and more.

## Groups 

The gallery can be organized into logical groups using the [groups](https://ej2.syncfusion.com/vue/documentation/api/ribbon/ribbonGallerySettingsModel/#groups) property. Each group can be customized using the [RibbonGalleryGroupModel](https://ej2.syncfusion.com/vue/documentation/api/ribbon/ribbonGalleryGroupModel/), which includes options for `items`, `cssClass`, `header`, and more.

### Adding items

Gallery items are defined using the [items](https://ej2.syncfusion.com/vue/documentation/api/ribbon/ribbonGalleryGroupModel/#items) property. Each item can be configured with the [RibbonGalleryItemModel](https://ej2.syncfusion.com/vue/documentation/api/ribbon/ribbonGalleryItemModel/), which provides options like `content`, `iconCss`, and `disabled`.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/ribbon/gallery-items/galleryItems/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/ribbon/gallery-items/galleryItems/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/ribbon/gallery-items/galleryItems" %}

#### Defining Item Content

The [content](https://ej2.syncfusion.com/vue/documentation/api/ribbon/ribbonGalleryItemModel/#content) property specifies the text to be displayed for a gallery item.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/ribbon/gallery-items/ItemContent/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/ribbon/gallery-items/ItemContent/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/ribbon/gallery-items/ItemContent" %}

#### Defining Item Icons

To associate an icon with a gallery item, use the [iconCss](https://ej2.syncfusion.com/vue/documentation/api/ribbon/ribbonGalleryItemModel/#iconcss) property.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/ribbon/gallery-items/galleryIcon/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/ribbon/gallery-items/galleryIcon/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/ribbon/gallery-items/galleryIcon" %}

#### Adding HTML Attributes to Items

The [htmlAttributes](https://ej2.syncfusion.com/vue/documentation/api/ribbon/ribbonGalleryItemModel/#htmlattributes) property allows you to add custom HTML attributes to a gallery item's element.

The following sample shows how to add a `title` attribute to a gallery item.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/ribbon/gallery-items/htmlAttribute/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/ribbon/gallery-items/htmlAttribute/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/ribbon/gallery-items/htmlAttribute" %}

#### Customizing Item Appearance

To apply a custom style to a gallery item, use the [cssClass](https://ej2.syncfusion.com/vue/documentation/api/ribbon/ribbonGalleryItemModel/#cssclass) property.

The following sample demonstrates how to customize the appearance of a gallery item.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/ribbon/gallery-items/classCustomization/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/ribbon/gallery-items/classCustomization/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/ribbon/gallery-items/classCustomization" %}

#### Disabling a Gallery Item

To disable a gallery item and prevent user interaction, set its [disabled](https://ej2.syncfusion.com/vue/documentation/api/ribbon/ribbonGalleryItemModel/#disabled) property to `true`. By default, this value is `false`.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/ribbon/gallery-items/disabledItem/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/ribbon/gallery-items/disabledItem/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/ribbon/gallery-items/disabledItem" %}

### Defining a Group Header

The [header](https://ej2.syncfusion.com/vue/documentation/api/ribbon/ribbonGalleryGroupModel/#header) property sets a title for a group of items within the gallery popup.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/ribbon/gallery-items/galleryItems/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/ribbon/gallery-items/galleryItems/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/ribbon/gallery-items/galleryItems" %}

### Setting Item Dimensions

The size of gallery items can be controlled using the [itemWidth](https://ej2.syncfusion.com/vue/documentation/api/ribbon/ribbonGalleryGroupModel/#itemwidth) and [itemHeight](https://ej2.syncfusion.com/vue/documentation/api/ribbon/ribbonGalleryGroupModel/#itemheight) properties. When an `itemHeight` is set, items are aligned in rows according to the specified [itemCount](https://ej2.syncfusion.com/vue/documentation/api/ribbon/ribbonGallerySettingsModel/#itemcount).

The following sample demonstrates how to set custom dimensions for gallery items.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/ribbon/gallery-items/itemWidthHeight/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/ribbon/gallery-items/itemWidthHeight/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/ribbon/gallery-items/itemWidthHeight" %}

### Customizing Group Appearance

To apply custom styles to a gallery group container, use the group's [cssClass](https://ej2.syncfusion.com/vue/documentation/api/ribbon/ribbonGalleryGroupModel/#cssclass) property.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/ribbon/gallery-items/groupCustomization/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/ribbon/gallery-items/groupCustomization/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/ribbon/gallery-items/groupCustomization" %}

## Setting the Displayed Item Count

To control the number of items displayed inline in the Ribbon gallery, use the [itemCount](https://ej2.syncfusion.com/vue/documentation/api/ribbon/ribbonGallerySettingsModel/#itemcount) property. By default, the `itemCount` is `3`.

The following example showcases a gallery with `4` items displayed.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/ribbon/gallery-items/itemCount/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/ribbon/gallery-items/itemCount/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/ribbon/gallery-items/itemCount" %}

## Pre-selecting an Item

The [selectedItemIndex](https://ej2.syncfusion.com/vue/documentation/api/ribbon/ribbonGallerySettingsModel/#selecteditemindex) property allows you to define the initially selected item in the gallery.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/ribbon/gallery-items/selectedIndex/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/ribbon/gallery-items/selectedIndex/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/ribbon/gallery-items/selectedIndex" %}

## Setting Popup Dimensions

The dimensions of the gallery popup can be explicitly set using the [popupHeight](https://ej2.syncfusion.com/vue/documentation/api/ribbon/ribbonGallerySettingsModel/#popupheight) and [popupWidth](https://ej2.syncfusion.com/vue/documentation/api/ribbon/ribbonGallerySettingsModel/#popupwidth) properties.

This sample demonstrates how to configure a custom size for the gallery popup.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/ribbon/gallery-items/popupWidthHeight/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/ribbon/gallery-items/popupWidthHeight/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/ribbon/gallery-items/popupWidthHeight" %}

## Template

You can completely redefine the appearance and content of gallery items by using the [template](../api/ribbon/ribbonGallerySettingsModel/#template) property.

### Popup Template

To customize the gallery's popup container, use the [popupTemplate](https://ej2.syncfusion.com/vue/documentation/api/ribbon/ribbonGallerySettingsModel/#popuptemplate) property.

The example below demonstrates how to implement both an `template` and a `popupTemplate`.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/ribbon/gallery-template/app.vue %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/ribbon/gallery/galleryTemplate" %}

> To learn more about other built-in Ribbon item types, refer to the [Ribbon Items](./items) documentation.