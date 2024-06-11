---
layout: post
title: Shapes in Vue Skeleton component | Syncfusion
description: Learn here all about Shapes in Syncfusion Vue Skeleton component of Syncfusion Essential JS 2 and more.
control: Shapes 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Shapes in Vue Skeleton component

The Skeleton control support various built-in shape variants to design layout of the page. You can use the [`shape`](https://ej2.syncfusion.com/vue/documentation/api/skeleton/#shape) property to create a preview of any layout.

The Skeleton component supports the following content shapes:

## Circle skeleton shape

```
<template>
    <div>
        <ejs-skeleton shape= 'Circle' width= "48px"></ejs-skeleton>
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

## Square skeleton shape

```
<template>
    <div>
        <ejs-skeleton shape= 'Square' width= "48px"></ejs-skeleton>
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

## Rectangle skeleton shape

```
<template>
    <div>
        <ejs-skeleton shape= 'Rectangle' width= "50px"></ejs-skeleton>
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

## Text skeleton shape

```
<template>
    <div>
        <ejs-skeleton shape= 'Text' width= "15px"></ejs-skeleton>
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

Below example demonstrates the above functionalities of a Skeleton component.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/skeleton/shapes-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/skeleton/shapes-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/skeleton/shapes-cs1" %}