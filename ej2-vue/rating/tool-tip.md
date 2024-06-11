---
layout: post
title: Tool tip in Vue Rating component | Syncfusion
description: Learn here all about Tool tip in Syncfusion Vue Rating component of Syncfusion Essential JS 2 and more.
control: Tool tip 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Tool tip in Vue Rating component

The rating component supports tooltip to show additional information in rating items by setting the [`showTooltip`](https://ej2.syncfusion.com/vue/documentation/api/rating/#showtooltip) property. If enabled, the tooltip appears when the user hovers over a rating item.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/rating/tooltip/showtooltip-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/rating/tooltip/showtooltip-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/rating/tooltip/showtooltip-cs1" %}

## Tooltip template

You can use the [`tooltipTemplate`](https://ej2.syncfusion.com/vue/documentation/api/rating/#tooltiptemplate) tag directive to specify a custom template for the `tooltip` of the rating. The current value of the rating will be passed as the `value` property in the template context when building the content of the tooltip. This allows you to include dynamic information about the rating in the template.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/rating/tooltip/tooltip-template-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/rating/tooltip/tooltip-template-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/rating/tooltip/tooltip-template-cs1" %}

## Tooltip customization

You can customize the appearance of the tooltips using the `cssClass` property of the rating component and by defining the custom styles for tooltip elements like the below example.

> You can find more information about customizing the appearance of the tooltip in the [Tooltip Customization](https://ej2.syncfusion.com/vue/documentation/tooltip/style/) documentation.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/rating/tooltip/custom-tooltip-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/rating/tooltip/custom-tooltip-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/rating/tooltip/custom-tooltip-cs1" %}