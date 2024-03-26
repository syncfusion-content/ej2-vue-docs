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

The Ribbon supports Gallery view which allows users to perform specific actions by displaying a collection of related items, including icons, content, or images. You can render the gallery item by setting the [type](https://ej2.syncfusion.com/vue/documentation/api/ribbon/ribbonItemType/) property to `Gallery` and customize the it by using the [RibbonGallerySettingsModel](https://ej2.syncfusion.com/vue/documentation/api/ribbon/ribbonGallerySettingsModel/), which provides options such as `groups`, `itemCount`, `popupHeight`, `popupWidth` and more.

## Groups 

You can render the groups inside the gallery items by using [groups](https://ej2.syncfusion.com/vue/documentation/api/ribbon/ribbonGallerySettingsModel/#groups) property and customize the groups using [RibbonGalleryGroupModel](https://ej2.syncfusion.com/vue/documentation/api/ribbon/ribbonGalleryGroupModel/), which provides options such as `items`, `cssClass`, `header` and more.

### Adding items

You can render the gallery items by using [items](https://ej2.syncfusion.com/vue/documentation/api/ribbon/ribbonGalleryGroupModel/#items) property and customize using the [RibbonGalleryItemModel](https://ej2.syncfusion.com/vue/documentation/api/ribbon/ribbonGalleryItemModel/), which provides options such as `content`, `iconCss`, `disabled` and more.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/ribbon/gallery-items/galleryItems/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/ribbon/gallery-items/galleryItems" %}

#### Adding content

You can use the [content](https://ej2.syncfusion.com/vue/documentation/api/ribbon/ribbonGalleryItemModel/#content) property to define the text content for the gallery item.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/ribbon/gallery-items/ItemContent/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/ribbon/gallery-items/ItemContent" %}

#### Adding icons

You can use the [iconCss](https://ej2.syncfusion.com/vue/documentation/api/ribbon/ribbonGalleryItemModel/#iconcss) property to define the icons for the gallery item.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/ribbon/gallery-items/galleryIcon/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/ribbon/gallery-items/galleryIcon" %}

#### Adding html attributes

You can use the [htmlAttributes](https://ej2.syncfusion.com/vue/documentation/api/ribbon/ribbonGalleryItemModel/#htmlattributes) property to add HTML attributes to the Ribbon gallery item.

The following sample showcases how to add title attribute to the gallery item using `htmlAttributes` property.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/ribbon/gallery-items/htmlAttribute/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/ribbon/gallery-items/htmlAttribute" %}

#### Css class

You can use the [cssClass](https://ej2.syncfusion.com/vue/documentation/api/ribbon/ribbonGalleryItemModel/#cssclass) property to customize the gallery item.

The following sample showcases how to customize the appearance of each gallery item using the `cssClass` property .

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/ribbon/gallery-items/classCustomization/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/ribbon/gallery-items/classCustomization" %}

#### Disabled

You can use the [disabled](https://ej2.syncfusion.com/vue/documentation/api/ribbon/ribbonGalleryItemModel/#disabled) property to disable the Ribbon gallery item. It prevents the user interaction when set to `true`. By default, the value is `false`.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/ribbon/gallery-items/disabledItem/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/ribbon/gallery-items/disabledItem" %}

### Custom header

You can use the [header](https://ej2.syncfusion.com/vue/documentation/api/ribbon/ribbonGalleryGroupModel/#header) property to set header for the group items in the Ribbon gallery popup.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/ribbon/gallery-items/galleryItems/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/ribbon/gallery-items/galleryItems" %}

### Setting item width

You can use the [itemWidth](https://ej2.syncfusion.com/vue/documentation/api/ribbon/ribbonGalleryGroupModel/#itemwidth) property to specify the width of gallery items.

### Setting item height

You can use the [itemHeight](https://ej2.syncfusion.com/vue/documentation/api/ribbon/ribbonGalleryGroupModel/#itemheight) property to set the height of the gallery items. If the `itemHeight` of the gallery item is smaller the remaining gallery items are aligned based on the [itemCount](https://ej2.syncfusion.com/vue/documentation/api/ribbon/ribbonGallerySettingsModel/#itemcount) specified.

The provided example demonstrates how to customize gallery items using the `itemWidth` and `itemHeight` properties.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/ribbon/gallery-items/itemWidthHeight/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/ribbon/gallery-items/itemWidthHeight" %}

### Group styling

You can use the [cssClass](https://ej2.syncfusion.com/vue/documentation/api/ribbon/ribbonGalleryGroupModel/#cssclass) property to customize the appearance of gallery groups.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/ribbon/gallery-items/groupCustomization/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/ribbon/gallery-items/groupCustomization" %}

## Setting item count

You can customize the number if items to be displayed in Ribbon gallery by using the [itemCount](https://ej2.syncfusion.com/vue/documentation/api/ribbon/ribbonGallerySettingsModel/#itemcount) property, enabling you to specify the desired number of items. By default the `itemCount` will be `3`.

The following example showcases the utilization of the `itemCount` property, displaying a ribbon gallery with `4` items.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/ribbon/gallery-items/itemCount/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/ribbon/gallery-items/itemCount" %}

## Setting selected item

You can use the [selectedItemIndex](https://ej2.syncfusion.com/vue/documentation/api/ribbon/ribbonGallerySettingsModel/#selecteditemindex) property to define the currently selected item in the Ribbon gallery items.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/ribbon/gallery-items/selectedIndex/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/ribbon/gallery-items/selectedIndex" %}

## Setting popup height

You can specify the height of the gallery popup by using the [popupHeight](https://ej2.syncfusion.com/vue/documentation/api/ribbon/ribbonGallerySettingsModel/#popupheight) property.

## Setting popup width

you can specify the width of the gallery popup by using the [popupWidth](https://ej2.syncfusion.com/vue/documentation/api/ribbon/ribbonGallerySettingsModel/#popupwidth) propery.

The example demonstrates the customization of popup with `popupHeight` and `popupWidth` properties.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/ribbon/gallery-items/popupWidthHeight/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/ribbon/gallery-items/popupWidthHeight" %}

> To know more about the built-in Ribbon items, please refer to the [Ribbon Items](./items) section.