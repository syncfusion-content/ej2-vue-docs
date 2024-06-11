---
layout: post
title: Config in Vue Toast component | Syncfusion
description: Learn here all about Config in Syncfusion Vue Toast component of Syncfusion Essential JS 2 and more.
control: Config 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Config in Vue Toast component

This section explains the steps required to customize the appearance of the toast using built-in APIs.

## Title and content template

Toast can be created with the notification message. The message contains [title](https://ej2.syncfusion.com/vue/documentation/api/toast/#title) and [content](https://ej2.syncfusion.com/vue/documentation/api/toast/#content) of the toasts. The title and contents are adaptable in any resolution.

> The Title or Content property can be given as HTML element/element ID to a string that can be displayed as a toast.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/toast/config/title-content-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/toast/config/title-content-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/toast/config/title-content-cs1" %}

## Specifying custom target

By default, the toast can be rendered in the document body. You can change the target position for toast rendering using the [target](https://ej2.syncfusion.com/vue/documentation/api/toast/#target) property. Based on the target, the [position](https://ej2.syncfusion.com/vue/documentation/api/toast/#position) will be updated.

## Close button

By default, the [showCloseButton](https://ej2.syncfusion.com/vue/documentation/api/toast/#showclosebutton) is not enabled. You can enable it by setting the true value. Before expiring the toast, you can use this button to close or destroy toasts manually.

## Progress bar

By default, the [showProgressBar](https://ej2.syncfusion.com/vue/documentation/api/toast/#showprogressbar) is not enabled. If it is enabled, it can visually indicate how long to get toast expires. Based on the [timeOut](https://ej2.syncfusion.com/vue/documentation/api/toast/#timeout) property, progress bar will appear.

### Progress bar direction

By default, the [progressDirection](https://ej2.syncfusion.com/vue/documentation/api/toast/#progressDirection) is set to "Rtl" and it will appear from right to left direction. You can change the progressDirection to "Ltr" to make it appear from left to right direction.

## Newest on top

By default, the newly created toasts will append next with existing toasts. You can change the sequence like inserting before the toast by enabling the [newestOnTop](https://ej2.syncfusion.com/vue/documentation/api/toast/#newestontop).

Here, The following sample demonstrates the combination of the `target`, `showCloseButton`, `showProgressBar`, and `newestOnTop` properties in toast.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/toast/config/custom-target-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/toast/config/custom-target-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/toast/config/custom-target-cs1" %}

## Width and height

The dimensions of the toast can be set using the [width](https://ej2.syncfusion.com/vue/documentation/api/toast/#width) and [height](https://ej2.syncfusion.com/vue/documentation/api/toast/#height) properties. This will individually set all toasts. You can create different custom dimension toasts.

By default, the toast can be rendered with `300px` width with `auto` height.

> In mobile devices, the default width of the toast gets '100%' width of the page.
> When you set toast width as '100%', the toast occupies full width and will be displayed at the top or bottom based on the position `Y` property.

Both the width and height properties allow setting pixels/numbers/percentage. The number value is considered as pixels.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/toast/config/width-height-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/toast/config/width-height-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/toast/config/width-height-cs1" %}

## See Also

* [Prevent duplicate toasts](./how-to/prevent-duplicate-toast-display)
* [Customize the progress bar](./how-to/customize-progress-bar-theme-and-sizing)