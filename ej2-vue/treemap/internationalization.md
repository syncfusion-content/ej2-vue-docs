---
layout: post
title: Internationalization in Vue Treemap component | Syncfusion
description: Learn here all about Internationalization in Syncfusion Vue Treemap component of Syncfusion Essential JS 2 and more.
control: Internationalization 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Internationalization in Vue Treemap component

The TreeMap control supports internationalization for the following elements:

* Data label
* Tooltip

For more information about number and date formatter, refer to [`internationalization`](https://ej2.syncfusion.com/documentation/common/internationalization/).

<!-- markdownlint-disable MD036 -->

## Globalization

Globalization is the process of designing and developing a component that works in different cultures/locales. Internationalization library is used to globalize number, date, and time values in the TreeMap control using the [`format`](https://ej2.syncfusion.com/vue/documentation/api/treemap/#format) property in the TreeMap.

**Numeric format**

In the following code example, tooltip is globalized to Deutsch culture.

```
<template>
    <div class="control_wrapper">
        <ejs-treemap id="treemap" :dataSource='dataSource' :weightValuePath='weightValuePath' :format='format' :leafItemSettings='leafItemSettings' useGroupingSeparator='true'></ejs-treemap>
    </div>
</template>
<script>
import Vue from 'vue';
import { TreeMapPlugin } from "@syncfusion/ej2-vue-treemap";
Vue.use(TreeMapPlugin);

export default {
  data: function() {
    return {
        format:'c',
    dataSource: [
        {State:"United States", GDP:17946, percentage:11.08, Rank:1},
    {State:"China", GDP:10866, percentage: 28.42, Rank:2},
    {State:"Japan", GDP:4123, percentage:-30.78, Rank:3},
    {State:"Germany", GDP:3355, percentage:-5.19, Rank:4},
    {State:"United Kingdom", GDP:2848, percentage:8.28, Rank:5},
    {State:"France", GDP:2421, percentage:-9.69, Rank:6},
    {State:"India", GDP:2073, percentage:13.65, Rank:7},
    {State:"Italy", GDP:1814, percentage:-12.45, Rank:8},
    {State:"Brazil", GDP:1774, percentage:-27.88, Rank:9},
    {State:"Canada", GDP:1550, percentage:-15.02, Rank:10}
    ],
    weightValuePath: 'GDP',
    leafItemSettings: {
        labelPath: 'GDP',
    }
    }
  }
}
</script>
```

## Right-to-left rendering

The TreeMap control supports right-to-left rendering for all its elements such as nodes, tooltip, data labels, and legends.

## Legend with Rtl support

If the [`enableRtl`](https://ej2.syncfusion.com/vue/documentation/api/treemap/#enablertl) property is set to **true**, then the legend icon will be rendered on the right and the legend text will be rendered on the left of the legend icon.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/treemap/getting-started-cs20/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/treemap/getting-started-cs20" %}

## Tooltip with Rtl support

If the [`enableRtl`](https://ej2.syncfusion.com/vue/documentation/api/treemap/#enablertl) property is set to **true**, the tooltip data will be rendered in reverse direction.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/treemap/getting-started-cs21/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/treemap/getting-started-cs21" %}

## Treemap Item Rendering Direction

The direction of TreeMap item is `TopLeftBottomRight` by default and customize the rendering direction of the TreeMap item by setting the [`renderDirection`](https://ej2.syncfusion.com/vue/documentation/api/treemap/#renderdirection) property.

The TreeMap can be rendered in the following directions:

* TopLeftBottomRight
* TopRightBottomLeft
* BottomRightTopLeft
* BottomLeftTopRight

The following example demonstrate, how to render the treemap in the RTL direction with `TopLeftBottomRight`.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/treemap/getting-started-cs22/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/treemap/getting-started-cs22" %}

The following example demonstrate, how to render the treemap in the RTL direction with `TopRightBottomLeft`.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/treemap/getting-started-cs23/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/treemap/getting-started-cs23" %}

The following example demonstrate, how to render the treemap in the RTL direction with `BottomRightTopLeft`.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/treemap/getting-started-cs24/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/treemap/getting-started-cs24" %}

The following example demonstrate, how to render the treemap in the RTL direction with `BottomLeftTopRight`.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/treemap/getting-started-cs25/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/treemap/getting-started-cs25" %}