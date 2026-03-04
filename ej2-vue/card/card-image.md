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

> By default, card images occupy the full width of their parent element.

```
    <div class = "e-card">
        <div class="e-card-image">
        </div>
    </div>
```

### Title

Card images can include a title or caption. By default, the title is placed over the image at the bottom-left position with an overlay.

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

Use a divider to separate elements inside the card.

* Add a `div` with the `e-card-separator` class inside the card element to insert a divider.

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

* [How to customize the card image title position](./how-to/customize-the-card-image-title-position)