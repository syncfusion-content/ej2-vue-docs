---
layout: post
title: Open mode in Vue Tooltip component | Syncfusion
description: Learn here all about Open mode in Syncfusion Vue Tooltip component of Syncfusion Essential JS 2 and more.
control: Open mode 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Open mode in Vue Tooltip component

You can decide the mode in which the Tooltip opens on a page, i.e., on hovering, focusing, or clicking on the target elements.

> On mobile devices, Tooltips appear when you tap and hold the element, even if the [`opensOn`](https://helpej2.syncfusion.com/vue/documentation/api/tooltip/#openson) option is assigned with `hover`.
> Tooltips are also displayed as long as you continue to tap and hold the element. On release, it disappears after 1.5 seconds.
> If there is another action before this time elapses, the Tooltip disappears.

The [`opensOn`](https://helpej2.syncfusion.com/vue/documentation/api/tooltip/#openson) property can take either a single or a combination of multiple values, separated by space from the following options. The table  below explains how the Tooltip opens on both desktop and mobile based on the value(s) assigned to the `opensOn` property. By default, it takes `auto` value.

| Values | Desktop | Mobile |
| ------------- | ------------- | ------------- |
| `Auto` | Tooltip appears when you hover over the target or when the target element receives the focus. | Tooltip opens on tap and hold of the target element. |
| `Hover` | Tooltip appears when you hover over the target. | Tooltip opens on tap and hold of the target element. |
| `Click` | Tooltip appears when you click a target element. | Tooltip appears when you single tap the target element. |
| `Focus` | Tooltip appears when you focus (say through tab key) on a target element. | Tooltip appears with a single tap on the target element. |
| `Custom` | Tooltip is not triggered by any default action. So, you have to bind your own events and use either `open` or `close` public methods. | Same as Desktop. |

To open the Tooltip for multiple actions, say while hovering over or clicking on a target element, the `opensOn` property can be assigned with multiple values, separated by space as `Hover Click`.

> `Auto` value cannot be used with any combination for multiple values.

The following code example shows how to set the open mode for Tooltips.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/tooltip/open-mode-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/tooltip/open-mode-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/tooltip/open-mode-cs1" %}

## Custom open mode

Other than the above specified options, the [`custom`](https://helpej2.syncfusion.com/vue/documentation/api/tooltip/#openson) mode makes the Tooltip appear on screen for user-defined custom actions, such as `right-click`, `double-click`, and so on. Here, the Tooltip is not triggered by any default action, and you have to bind your own events and use either `open` or `close` public methods to show or hide the Tooltips.

The following code example shows how to define custom open mode for the Tooltip.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/tooltip/custom-open-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/tooltip/custom-open-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/tooltip/custom-open-cs1" %}

## Sticky mode

With this mode set to `true`, Tooltips remain on the screen until the close icon is pressed. In this mode, close icon is attached to the Tooltip located at the top right corner. This mode can be enabled or disabled using the [`isSticky`](https://helpej2.syncfusion.com/vue/documentation/api/tooltip/#issticky) property.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/tooltip/sticky-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/tooltip/sticky-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/tooltip/sticky-cs1" %}

## Open/Close Tooltip with delay

The Tooltips can be opened or closed after some delay by using the [`openDelay`](https://helpej2.syncfusion.com/vue/documentation/api/tooltip/#opendelay) and [`closeDelay`](https://helpej2.syncfusion.com/vue/documentation/api/tooltip/#closedelay) properties.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/tooltip/open-close-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/tooltip/open-close-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/tooltip/open-close-cs1" %}