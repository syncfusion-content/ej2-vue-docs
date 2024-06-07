---
layout: post
title: Position in Vue Toast component | Syncfusion
description: Learn here all about Position in Syncfusion Vue Toast component of Syncfusion Essential JS 2 and more.
control: Position 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Position in Vue Toast component

The toast position can be updated based on predefined positions or customizable positions. The predefined position combinations are updated in the [`X`](https://ej2.syncfusion.com/vue/documentation/api/toast/toastPositionModel/#x) and [`Y`](https://ej2.syncfusion.com/vue/documentation/api/toast/toastPositionModel/#y) position properties.

## Predefined

`X` Positions

* Left
* Center
* Right

`Y` Positions

* Top
* Bottom

> In multiple toast display, the new toast position will not be updated on dynamic change of property values until the old toast messages removed.
> The toast occupies full width when you set the width to '100%', so the X positions will not affect the changes when the width is '100%'.

## Custom

Custom `X` and `Y` positions can be given as pixels/numbers/percentage. The number value is considered as pixels based on the top and left values updated in the toast.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/toast/positioning-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/toast/positioning-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/toast/positioning-cs1" %}

## See Also

* [Render toast with different positions](./how-to/prevent-duplicate-toast-display)
* [Customize the progress bar](./how-to/show-multiple-toasts-in-various-positions)