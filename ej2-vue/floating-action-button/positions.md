---
layout: post
title: Positions in Vue Floating action button component | Syncfusion
description: Learn here all about Positions in Syncfusion Vue Floating action button component of Syncfusion Essential JS 2 and more.
control: Positions 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Positions in Vue Floating action button component

The floating action button can be positioned anywhere on the [`target`](https://ej2.syncfusion.com/vue/documentation/api/floating-action-button/fab/#target) using the [`position`](https://ej2.syncfusion.com/vue/documentation/api/floating-action-button/fab/#position) property. If the `target` is not defined, then FAB is positioned based on the browser viewport.

The position values of Floating Action Button are as follows:
* TopLeft
* TopCenter
* TopRight
* MiddleLeft
* MiddleCenter
* MiddleRight
* BottomLeft
* BottomCenter
* BottomRight

```
<template>
    <!-- To render Floating Action Button in BottomLeft position -->
    <ejs-fab id='fab' content='Add' position='BottomLeft'></ejs-fab>
</template>

<script>
    import Vue from 'vue';
    import { FabPlugin } from "@syncfusion/ej2-vue-buttons";
    import { enableRipple } from '@syncfusion/ej2-base';

    enableRipple(true);
    Vue.use(FabPlugin);

    export default {}
</script>

<style>
    @import '../node_modules/@syncfusion/ej2-base/styles/material.css';
    @import '../node_modules/@syncfusion/ej2-buttons/styles/material.css';
</style>
```

Below example demonstrates different supported positions of FAB.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/floating-action-button/positions-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/floating-action-button/positions-cs1" %}

## Custom position

You can define the custom position of the Floating Action Button by override the `top`, `left`, `right`, and `bottom` CSS properties using [`cssClass`](https://ej2.syncfusion.com/vue/documentation/api/floating-action-button/fab/#cssclass). For detailed information, refer `app.vue` file below.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/floating-action-button/positions-cs2/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/floating-action-button/positions-cs2" %}
