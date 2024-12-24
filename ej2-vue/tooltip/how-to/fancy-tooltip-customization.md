---
layout: post
title: Fancy tooltip customization in Vue Tooltip component | Syncfusion
description: Learn here all about Fancy tooltip customization in Syncfusion Vue Tooltip component of Syncfusion Essential JS 2 and more.
control: Fancy tooltip customization 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Fancy tooltip customization in Vue Tooltip component

The arrow of the tooltip can be customized as needed by modifying CSS on the sample side. The EJ2 tooltip component is achieved through CSS3 format and positions the tip arrow according to the tooltip positions like `TopCenter`, `BottomLeft`, `RightTop`, and more.

Here, the tip arrow is customized as Curved tooltip and Bubble tooltip.

## Curved tip

Content has been added for the tip pointer arrow. To customize the curved tip arrow, override the following CSS class of the tip arrow.

```ts

      .e-arrow-tip-outer.e-tip-bottom,
      .e-arrow-tip-outer.e-tip-top {
           border-left: none !important;
           border-right: none !important;
           border-top: none !important;
      }
      .e-arrow-tip.e-tip-top {
           transform: rotate(170deg);
      }

```

## Bubble tip

Two `divs`(inner div and outer div) elements have been added to achieve the bubble tip arrow. To customize the bubble tip arrow, override the following CSS class of the tip arrow.

```ts

    .e-arrow-tip-outer.e-tip-bottom, .e-arrow-tip-outer.e-tip-top
      {
         border-radius: 50px;
         height: 10px;
         width: 10px;
      }

      .e-arrow-tip-inner.e-tip-bottom, .e-arrow-tip-inner.e-tip-top
        {
         border-radius: 50px;
         height: 10px;
         width: 10px;
        }
```

These tip arrow customizations have been achieved through CSS changes at the sample level. The tooltip position can be changed by using the radio button click event.

The arrow tip pointer can also be disabled by using the [`showTipPointer`](https://ej2.syncfusion.com/vue/documentation/api/tooltip/#showtippointer) property in a tooltip.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/tooltip/customize-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/tooltip/customize-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/tooltip/customize-cs1" %}