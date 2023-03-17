---
layout: post
title: Events in Vue Floating action button component | Syncfusion
description: Learn here all about Events in Syncfusion Vue Floating action button component of Syncfusion Essential JS 2 and more.
control: Events 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Events in Vue Floating action button component

This section explains the available events in Floating Action Button component.

## created

Event triggers after the creation of Floating Action Button.

```
<template>
        <!-- To render Floating Action Button -->
        <ejs-fab id='fab' iconCss='e-icons e-edit' content='Edit' :created="onCreate"></ejs-fab>
</template>

<script>
    import Vue from 'vue';
    import { FabPlugin } from "@syncfusion/ej2-vue-buttons";

    Vue.use(FabPlugin);

    export default {
        methods: {
            onCreate: function () {
                //Your required action here
            }
        }
    }

</script>

<style>
    @import '../node_modules/@syncfusion/ej2-base/styles/material.css';
    @import '../node_modules/@syncfusion/ej2-buttons/styles/material.css';
</style>
```

## onclick

Event triggers when the Floating Action Button is clicked.

```
<template>
        <!-- To render Floating Action Button -->
        <ejs-fab id='fab' iconCss='e-icons e-edit' content='Edit' v-on:click.native="onClick"></ejs-fab>
</template>

<script>
    import Vue from 'vue';
    import { FabPlugin } from "@syncfusion/ej2-vue-buttons";

    Vue.use(FabPlugin);

    export default {
        methods: {
            onClick: function () {
                //Your required action here
            }
        }
    }

</script>

<style>
    @import '../node_modules/@syncfusion/ej2-base/styles/material.css';
    @import '../node_modules/@syncfusion/ej2-buttons/styles/material.css';
</style>
```

Below example demonstrates the click event of the Floating Action Button.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/floating-action-button/events-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/floating-action-button/events-cs1" %}
