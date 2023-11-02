---
layout: post
title: Icons in Vue DropDown Button Component | Syncfusion
description: Learn here all about icons support in Syncfusion Essential Vue DropDown Button component, it's elements and more.
control: Icons 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Icons in Vue DropDown Button Component

## DropDownButton icons

DropdownButton can have an icon to provide the visual representation of the action. To place the icon on a DropdownButton, set the [`iconCss`](https://ej2.syncfusion.com/vue/documentation/api/drop-down-button/#iconcss) property to `e-icons` with the required icon CSS. By default, the icon is positioned to the left side of the DropdownButton. You can customize the icon's position using the [`iconPosition`](https://ej2.syncfusion.com/vue/documentation/api/drop-down-button/#iconcss) property.

In the following example, the DropdownButton with default iconPosition and iconPosition as `Top` is showcased:

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/drop-down-button/default-cs13/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/drop-down-button/default-cs13" %}

### Icon only DropDownButton

Icon only DropDownButton can be achieved by using [`iconCss`](https://ej2.syncfusion.com/vue/documentation/api/drop-down-button/#iconcss) property and to hide drop down arrow `e-caret-hide` class is added using [`cssClass`](https://ej2.syncfusion.com/vue/documentation/api/drop-down-button/#cssclass) property.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/drop-down-button/default-cs14/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/drop-down-button/default-cs14" %}

> The Essential JS 2 provides a set of icons that can be loaded by applying `e-icons` class name to the element. You can also use third party icons on the DropDownButton using the [`iconCss`](https://ej2.syncfusion.com/vue/documentation/api/drop-down-button/#iconcss) property.

### DropDownButton with sprite image

Sprite images can be loaded in DropDownButton instead of font icons using [`iconCss`](	https://ej2.syncfusion.com/vue/documentation/api/drop-down-button/#iconcss) property.

In this following example, `e-image` class is added with background url of the sprite image along with X and Y positions. The `width` and `height` of the element set as `32px`.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/drop-down-button/default-cs15/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/drop-down-button/default-cs15" %}

## Vertical button

Vertical button in DropDownButton can be achieved by adding `e-vertical` class using [`cssClass`](https://ej2.syncfusion.com/vue/documentation/api/drop-down-button/#cssclass) property.

The following example illustrates how to provide vertical support in DropDownButton component.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/drop-down-button/default-cs16/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/drop-down-button/default-cs16" %}

## See Also

* [Dropdown popup with icons](./popup-items#icons)
* [Customized icon size](./how-to/customize-icon-and-width)