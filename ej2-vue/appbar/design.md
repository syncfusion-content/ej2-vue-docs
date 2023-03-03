---
layout: post
title: Design in Vue Appbar component | Syncfusion
description: Learn here all about Design in Syncfusion Vue Appbar component of Syncfusion Essential JS 2 and more.
control: Design 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Design in Vue Appbar component

## Spacer

`Spacer` is used to provide spacing between the AppBar contents which gives additional space to the content layout.

The following example depicts the code to provide spacing between the home and pan buttons in the AppBar:

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/appbar/getting-started-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/appbar/getting-started-cs1" %}

## Separator

`Separator` shows a vertical line to visually group or separate the AppBar contents.

The following example depicts the code to provide a vertical line between a group of buttons in the AppBar.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/appbar/getting-started-cs2/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/appbar/getting-started-cs2" %}

## Media Query

Media Query is used to adjusting the AppBar for different screen sizes. Resize the screen to observe the responsive layout of the AppBar.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/appbar/getting-started-cs3/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/appbar/getting-started-cs3" %}

## Designing AppBar with Menu

AppBar is rendered with a Menu component in its AppBar header area. Menu component's styles are inherited from the AppBar component using the `e-inherit` CSS class.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/appbar/getting-started-cs4/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/appbar/getting-started-cs4" %}

## Designing AppBar with Buttons

The AppBar is rendered with a Button and DropDownButton component in its AppBar header area. Button and DropDownButton components’ styles are inherited from the AppBar component using the `e-inherit` CSS class.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/appbar/buttons-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/appbar/buttons-cs1" %}

## Designing AppBar with SideBar

The AppBar is rendered with the SideBar component below the AppBar. Click on the menu icon to expand/collapse the Sidebar. In the following sample, the `toggle` method has been used to show or hide the Sidebar on the AppBar button click.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/appbar/sidebar-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/appbar/sidebar-cs1" %}