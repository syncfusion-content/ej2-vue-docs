---
layout: post
title: Horizontal in Vue Card | Syncfusion
description: Lay out Vue Card elements side-by-side by adding the e-card-horizontal class to the root card element for a horizontal card layout.
control: Horizontal
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Horizontal in Vue Card

By default, card elements are stacked vertically in DOM order. To lay out elements side-by-side, add the `e-card-horizontal` class to the root card element.

## Stacked cards

* An horizontally aligned card can push a specific column to align vertical using `e-card-stacked` class. This will align the stacked section vertically aligned differentiating from horizontal layout.

        Class   | Description
        ------------ | -------------
        `e-card-horizontal` | To align card elements horizontally.
        `e-card-stacked` | To align elements vertically within the horizontal layout.

        ```
                <div tabindex="0" class="e-card e-card-horizontal">
                    <img src="code1.png" alt="Sample">   --> Aligned in horizontal
                    <div class="e-card-stacked">         --> Aligned in horizontal
                    // Inside the element all are aligned vertical directions
                    </div>
                </div>
        ```

        {% tabs %}
        {% highlight html tabtitle="Composition API (~/src/App.vue)" %}
        {% include code-snippet/card/horizontal-cs1/app-composition.vue %}
        {% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
        {% include code-snippet/card/horizontal-cs1/app.vue %}
        {% endhighlight %}
        {% endtabs %}
                
        {% previewsample "page.domainurl/code-snippet/card/horizontal-cs1" %}