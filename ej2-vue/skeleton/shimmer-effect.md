---
layout: post
title: Shimmer effect in Vue Skeleton component | Syncfusion
description: Learn here all about Shimmer effect in Syncfusion Vue Skeleton component of Syncfusion Essential JS 2 and more.
control: Shimmer effect 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Shimmer effect in Vue Skeleton component

You can use the [`shimmerEffect`](https://ej2.syncfusion.com/vue/documentation/api/skeleton/#shimmereffect) property to change animation effect in the skeleton control. Skeleton supports `Wave`, `Pulse` and `Fade` effects and by default, the `shimmerEffect` is set to `Wave` effect.

```
<template>
    <div>
        <ejs-skeleton shape= 'Circle' width= "60px" shimmerEffect= 'Pulse'></ejs-skeleton>
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

Below example demonstrates a list with pulse effect skeleton.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/skeleton/effects-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/skeleton/effects-cs1" %}