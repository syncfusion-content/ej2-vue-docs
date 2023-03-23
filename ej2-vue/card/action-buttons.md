---
layout: post
title: Action buttons in Vue Card component | Syncfusion
description: Learn here all about Action buttons in Syncfusion Vue Card component of Syncfusion Essential JS 2 and more.
control: Action buttons 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Action buttons in Vue Card component

You can include Action buttons within the Card and customize them. Action button is a `div` element with `e-card-actions` class followed by button tag or anchor tag within the card root element.

* For adding action buttons you can create button or anchor tag with `e-card-btn` class within the card action element.

    ```
        <div class = "e-card">
            <div class="e-card-actions">
                <button class="e-card-btn"></button>
                <a href="#"></a>
            </div>
        </div>
    ```

## Vertical

By default, action buttons positioned in horizontal alignment , and also it can be aligned to show in vertical alignment by adding `e-card-vertical` class.

```
    <div class = "e-card">
        <div class="e-card-actions e-card-vertical">
            <button class="e-card-btn">More</button>
            <a href="#">Share</a>
        </div>
    </div>
```

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/card/card_action_btn-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/card/card_action_btn-cs1" %}

## See Also

* [How to integrate other component inside the card](./how-to/integrate-other-component-inside-the-card/)