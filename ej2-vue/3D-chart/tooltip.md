---
layout: post
title: Tooltip in Vue 3D Chart component | Syncfusion
description: Learn here all about tooltip in Syncfusion 3D Chart component of Syncfusion Essential JS 2 and more.
control: 3D Chart
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Tooltip in Vue 3D Chart component

<!-- markdownlint-disable MD036 -->

The 3D Chart will display details about the points through tooltip, when the mouse is moved over the specific point.

## Default tooltip

By default, tooltip is not visible. The tooltip can be enabled by setting the [`enable`](https://ej2.syncfusion.com/vue/documentation/api/chart3d/tooltipSettings/#enable) property in `tooltipSettings` to **true** and by injecting `Tooltip3D` into the `provide`.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/chart3d/user-interaction/tooltip/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/chart3d/user-interaction/tooltip/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart3d/user-interaction/tooltip" %}

<!-- markdownlint-disable MD013 -->

## Fixed tooltip

By default, tooltip track the mouse movement, but the tooltip can be set in fixed position by using the [`location`](https://ej2.syncfusion.com/vue/documentation/api/chart3d/tooltipSettings/#location) property.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/chart3d/user-interaction/fixed-tooltip/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/chart3d/user-interaction/fixed-tooltip/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart3d/user-interaction/fixed-tooltip" %}

## Format the tooltip

<!-- markdownlint-disable MD013 -->

By default, tooltip shows information of x and y value in points. In addition to that, more information can be shown in tooltip by using the [`format`](https://ej2.syncfusion.com/vue/documentation/api/chart3d/tooltipSettings/#format) property. For example the format `${series.name} : ${point.y}` shows series name and point x value.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/chart3d/user-interaction/format-tooltip/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/chart3d/user-interaction/format-tooltip/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart3d/user-interaction/format-tooltip" %}

## Tooltip template

Any HTML elements can be displayed in the tooltip by using the [`template`](https://ej2.syncfusion.com/vue/documentation/api/chart3d/tooltipSettings/#template) property of the tooltip. The ${x} and ${y} can be used as place holders in the HTML element to display the x and y values of the corresponding data point.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/chart3d/user-interaction/tooltip-template/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/chart3d/user-interaction/tooltip-template/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart3d/user-interaction/tooltip-template" %}

## Customize the appearance of tooltip

The [`fill`](https://ej2.syncfusion.com/vue/documentation/api/chart3d/tooltipSettings/#fill) and [`border`](https://ej2.syncfusion.com/vue/documentation/api/chart3d/tooltipSettings/#border) properties are used to customize the background color and border of the tooltip respectively. The [`textStyle`](https://ej2.syncfusion.com/vue/documentation/api/chart3d/tooltipSettings/#textstyle) property in the tooltip is used to customize the font of the tooltip text.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/chart3d/user-interaction/custom-tooltip/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/chart3d/user-interaction/custom-tooltip/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart3d/user-interaction/custom-tooltip" %}