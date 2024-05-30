---
layout: post
title: Positions in Vue Speed dial component | Syncfusion
description: Learn here all about Positions in Syncfusion Vue Speed dial component of Syncfusion Essential JS 2 and more.
control: Positions 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Positions in Vue Speed dial component

The Speed dial control can be positioned anywhere on the [`target`](https://ej2.syncfusion.com/vue/documentation/api/speed-dial/#target) using the [`position`](https://ej2.syncfusion.com/vue/documentation/api/speed-dial/#position) property. If the `target` is not defined, then Speed Dial is positioned based on the browser viewport.

The position values of Speed Dial are as follows:
* TopLeft
* TopCenter
* TopRight
* MiddleLeft
* MiddleCenter
* MiddleRight
* BottomLeft
* BottomCenter
* BottomRight

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/speed-dial/position-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/speed-dial/position-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/speed-dial/position-cs1" %}

## Opens items on hover

You can open the Speed Dial action items on mouse hover by setting the [`opensOnHover`](https://ej2.syncfusion.com/vue/documentation/api/speed-dial/#opensonhover) property.

```
<template>
    <ejs-speeddial id='speeddial' openIconCss='e-icons e-edit' closeIconCss='e-icons e-close' target='#targetElement' opensOnHover= true :items='items'></ejs-speeddial>
</template>

<script setup>
    import { SpeedDialComponent as EjsSpeeddial } from "@syncfusion/ej2-vue-buttons";
                const items = [
                    { iconCss: 'e-icons e-cut' },
                    { iconCss: 'e-icons e-copy' },
                    { iconCss: 'e-icons e-paste' }
                ]
</script>

<style>
    @import 'https://ej2.syncfusion.com/vue/documentation/node_modules/@syncfusion/ej2-base/styles/material.css';
    @import '../node_modules/@syncfusion/ej2-buttons/styles/material.css';
</style>
```

## Programmatically show/hide Speed Dial items

You can open/close the Speed Dial action items programmatically using [`show`](https://ej2.syncfusion.com/vue/documentation/api/speed-dial/#show) and [`hide`](https://ej2.syncfusion.com/vue/documentation/api/speed-dial/#hide) methods.

Below example demonstrates open/close action items on button click.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/speed-dial/position-cs2/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/speed-dial/position-cs2/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/speed-dial/position-cs2" %}

## Programmatically refresh the position

You can refresh the position of the Speed Dial using [`refreshPosition`](https://ej2.syncfusion.com/vue/documentation/api/speed-dial/#refreshposition) method when the `target`position is changed.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/speed-dial/position-cs3/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/speed-dial/position-cs3/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/speed-dial/position-cs3" %}