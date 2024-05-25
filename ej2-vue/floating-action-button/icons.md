---
layout: post
title: Icons in Vue Floating action button component | Syncfusion
description: Learn here all about Icons in Syncfusion Vue Floating action button component of Syncfusion Essential JS 2 and more.
control: Icons 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Icons in Vue Floating action button component

You can customize the icon and text of Vue Floating Action Button(FAB) using [`iconCss`](https://ej2.syncfusion.com/vue/documentation/api/floating-action-button/fab/#iconcss) and [`content`](https://ej2.syncfusion.com/vue/documentation/api/floating-action-button/fab/#content) properties.

## FAB with icon

You can show icon only in Floating Action Button by setting [`iconCss`](https://ej2.syncfusion.com/vue/documentation/api/floating-action-button/fab/#iconcss) property. You can show tooltip on hover to show additional details to end-user by setting `title` attribute.

```
<template>
    <!-- To render Floating Action Button with icon only -->
    <ejs-fab id='fab' iconCss='fab-icons fab-icon-people'></ejs-fab>
</template>

<script setup>
    import { FabComponent as EjsFab } from "@syncfusion/ej2-vue-buttons";
</script>

<style>
    @import '../node_modules/@syncfusion/ej2-base/styles/material.css';
    @import '../node_modules/@syncfusion/ej2-buttons/styles/material.css';
</style>
```

## FAB with icon and text

You can show icon along with text in Floating Action Button by setting [`iconCss`](https://ej2.syncfusion.com/vue/documentation/api/floating-action-button/fab/#iconcss) and [`content`](https://ej2.syncfusion.com/vue/documentation/api/floating-action-button/fab/#content) properties.

```
<template>
    <!-- To render Floating Action Button with icon and text -->
    <ejs-fab id='fab' iconCss='fab-icons fab-icon-people' content='Contacts'></ejs-fab>
</template>

<script setup>
    import { FabComponent as EjsFab } from "@syncfusion/ej2-vue-buttons";
    export default {}
</script>

<style>
    @import '../node_modules/@syncfusion/ej2-base/styles/material.css';
    @import '../node_modules/@syncfusion/ej2-buttons/styles/material.css';
</style>
```

### Icon position

You can change the position of icon when showing along with content by setting [`iconPosition`](https://ej2.syncfusion.com/vue/documentation/api/floating-action-button/fab/#iconposition) property. By default, the icon is positioned on the left side together with text.

```
<template>
    <!-- To render Floating Action Button with icon position -->
    <ejs-fab id='fab' iconCss='fab-icons fab-icon-people' content='Contacts' iconPosition='Right'></ejs-fab>
</template>

<script setup>
    import { FabComponent as EjsFab } from "@syncfusion/ej2-vue-buttons";
</script>

<style>
    @import '../node_modules/@syncfusion/ej2-base/styles/material.css';
    @import '../node_modules/@syncfusion/ej2-buttons/styles/material.css';
</style>
```

Below example demonstrates a FAB with icon and text.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/floating-action-button/icons-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue) %}
{% include code-snippet/floating-action-button/icons-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/floating-action-button/icons-cs1" %}