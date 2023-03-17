---
layout: post
title: Types and styles in Vue Button component | Syncfusion
description: Learn here all about Types and styles in Syncfusion Vue Button component of Syncfusion Essential JS 2 and more.
control: Types and styles 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Types and styles in Vue Button component

This section explains the different styles and types of Buttons.

## Button styles

The Essential JS 2 Button has the following predefined styles that can be defined using the [`cssClass`](https://ej2.syncfusion.com/vue/documentation/api/button#cssclass) property.

| Class | Description |
| -------- | -------- |
| e-primary | Used to represent a primary action. |
| e-success | Used to represent a positive action. |
| e-info |  Used to represent an informative action. |
| e-warning | Used to represent an action with caution. |
| e-danger | Used to represent a negative action. |
| e-link |  Changes the appearance of the Button like a hyperlink. |

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/button/default-cs12/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/button/default-cs12" %}

> Predefined Button styles provide only the visual indication. So, Button content should define the Button style for the users of assistive technologies such as screen readers.
> Primary action button can also be achieved by setting [`isPrimary`](https://ej2.syncfusion.com/vue/documentation/api/button#isprimary) property as `true`.

## Button types

The types of Essential JS 2 Button are as follows:

* Basic types
* Flat Button
* Outline Button
* Round Button
* Toggle Button

### Basic types

The basic Button types are explained below.

| Type | Description |
| -------- | -------- |
| Button | Defines a click Button. |
| Submit | This Button submits the form data to the server. |
| Reset |  This Button resets all the controls in the form elements to their initial values. |

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/button/default-cs13/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/button/default-cs13" %}

### Flat Button

The Flat Button is styled with no background color. To create a flat Button, set the [`cssClass`](https://ej2.syncfusion.com/vue/documentation/api/button#cssclass) property to `e-flat`.

### Outline Button

An outline Button has a border with transparent background. To create an outline Button, set the [`cssClass`](https://ej2.syncfusion.com/vue/documentation/api/button#cssclass) property to `e-outline`.

### Round Button

A round Button is shaped like a circle. Usually, it contains an icon representing its action. To create a round Button, set the [`cssClass`](https://ej2.syncfusion.com/vue/documentation/api/button#cssclass) property to `e-round`.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/button/default-cs14/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/button/default-cs14" %}

### Toggle Button

A toggle Button allows you to change between the two states. The Button is active in toggled state and can be
recognized through the `e-active` class. The functionality of the toggle Button is handled by click event. To create a toggle Button, set the [`isToggle`](https://ej2.syncfusion.com/vue/documentation/api/button#istoggle) property to `true`. In the following code snippet, the toggle Button text changes to play/pause based on the state of the Button with the use of click event.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/button/default-cs15/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/button/default-cs15" %}

## Icons

### Button with font icons

The Button can have an icon to provide the visual representation of the action. To place the icon on a Button,
set the [`iconCss`](https://ej2.syncfusion.com/vue/documentation/api/button#iconcss) property to `e-icons` with the required icon CSS. By default, the icon is positioned to the left side of the Button. You can customize the icon's position by using the[`iconPosition`](https://ej2.syncfusion.com/vue/documentation/api/button#iconposition) property.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/button/default-cs16/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/button/default-cs16" %}

### Button with SVG image

SVG image can be added to the Button using [`iconCss`](https://ej2.syncfusion.com/vue/documentation/api/button#iconcss) property.

In the following example, SVG image is added using the iconCss class `e-search-icon` by setting `height` and `width`.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/button/default-cs17/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/button/default-cs17" %}

> The Essential JS 2 provides a set of icons that can be loaded by applying `e-icons` class name to the element. You can also use third party icons on the Button using the [`iconCss`](https://ej2.syncfusion.com/vue/documentation/api/button#iconcss) property.

## Button size

The two types of Button sizes are default and small. To change the size of the default Button to small Button,
set the [`cssClass`](https://ej2.syncfusion.com/vue/documentation/api/button#cssclass) property to `e-small`.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/button/default-cs18/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/button/default-cs18" %}

## See Also

* [Customize Button appearance](./how-to/customize-button-appearance)
* [How to create block button](./how-to/create-a-block-button)
* [How to create repeat button](./how-to/repeat-button)