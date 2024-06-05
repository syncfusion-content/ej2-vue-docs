---
layout: post
title: Card image in Vue Card component | Syncfusion
description: Learn here all about Card image in Syncfusion Vue Card component of Syncfusion Essential JS 2 and more.
control: Card image 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Card image in Vue Card component

## Images

The Card supports to include images within the elements, you can add image as direct element anywhere inside card root by adding the
`e-card-image` class to `div` element. Using the class defined, you can write CSS styles to load images to that element.

> By default, card images occupies full width of its parent element.

```
    <div class = "e-card">
        <div class="e-card-image">
        </div>
    </div>
```

### Title

Card image is supported to include a title or caption for the image. By default, Title is placed over the image on left-bottom position with
overlay.

```
    <div class = "e-card">
        <div class="e-card-image">
            <div class="e-card-title"></div>
        </div>
    </div>
```

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/card/images-divider/title-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/card/images-divider/title-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/card/images-divider/title-cs1" %}

## Divider

Divider used to separate the elements inside the card. You can add divider inside the card elements to separate it.

* Place the `div` element with `e-card-separator` class inside the card element for adding a divider.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/card/images-divider/divider-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/card/images-divider/divider-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/card/images-divider/divider-cs1" %}

## See Also

* [How to customize the card image title position](./how-to/customize-the-card-image-title-position/)