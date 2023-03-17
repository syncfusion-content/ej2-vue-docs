---
layout: post
title: Styles in Vue Skeleton component | Syncfusion
description: Learn here all about Styles in Syncfusion Vue Skeleton component of Syncfusion Essential JS 2 and more.
control: Styles 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Styles in Vue Skeleton component

You can customize skeleton control in the below ways.

## cssClass

You can customize the style of a Skeleton control by using [`cssClass`](https://ej2.syncfusion.com/vue/documentation/api/skeleton#cssclass). The appearance of Vue Skeleton can be customized by changing the wave color, background color, width, and height. For detailed information, refer `index.css` file below.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/skeleton/styles-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/skeleton/styles-cs1" %}

## Visible

You can use the [`visible`](https://ej2.syncfusion.com/vue/documentation/api/skeleton#visible) property which defines the visible state of Skeleton.

```
<template>
    <div>
        <ejs-skeleton shape= 'Circle' width= "60px" visible='false'></ejs-skeleton>
    </div>
</template>

<script>
    import Vue from 'vue';
    import { SkeletonPlugin } from "@syncfusion/ej2-vue-notifications";

    Vue.use(SkeletonPlugin);

    export default { }
</script>

<style>
    @import "../node_modules/@syncfusion/ej2-base/styles/material.css";
    @import "../node_modules/@syncfusion/ej2-notifications/styles/material.css";
</style>
```