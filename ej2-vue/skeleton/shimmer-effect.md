---
layout: post
title: Shimmer Effect in Vue Skeleton | Syncfusion
description: Apply Wave, Pulse, or Fade shimmer effects to Vue Skeleton using the shimmerEffect property to animate placeholder loading.
control: Shimmer effect 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Shimmer Effect in Vue Skeleton

You can use the [`shimmerEffect`](https://ej2.syncfusion.com/vue/documentation/api/skeleton#shimmereffect) property to change animation effect in the skeleton control. Skeleton supports `Wave`, `Pulse` and `Fade` effects and by default, the `shimmerEffect` is set to `Wave` effect.

```
<template>
    <div>
        <ejs-skeleton shape= 'Circle' width= "60px" shimmerEffect= 'Pulse'></ejs-skeleton>
    </div>
</template>

<script setup>
    
    import { SkeletonComponent } from "@syncfusion/ej2-vue-notifications";

    

    export default { }
</script>

<style>
    @import "../node_modules/@syncfusion/ej2-base/styles/material.css";
    @import "../node_modules/@syncfusion/ej2-notifications/styles/material.css";
</style>
```

Below example demonstrates a list with pulse effect skeleton.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/skeleton/effects-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/skeleton/effects-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/skeleton/effects-cs1" %}