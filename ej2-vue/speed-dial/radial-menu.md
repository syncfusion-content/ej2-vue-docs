---
layout: post
title: Radial menu in Vue Speed dial component | Syncfusion
description: Learn here all about Radial menu in Syncfusion Vue Speed dial component of Syncfusion Essential JS 2 and more.
control: Radial menu 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Radial menu in Vue Speed dial component

The React Speed Dial action items can be displayed in a circular patter like a radial menu by setting [`mode`](https://ej2.syncfusion.com/vue/documentation/api/speed-dial/#mode) property. You can customize the `direction`, `startAngle`, `endAngle` and `offset` by setting [`radialSettings`](https://ej2.syncfusion.com/vue/documentation/api/speed-dial/#radialsettings) property.

## Radial menu direction

You can open the action items in either clockwise or anticlockwise by setting [`direction`](https://ej2.syncfusion.com/vue/documentation/api/speed-dial/radialSettingsModel/#direction) property. The default value is [`Auto`](https://ej2.syncfusion.com/vue/documentation/api/speed-dial/radialDirection/) where the action items are displayed based on the `position` property of the Speed Dial.

```
<template>
    <ejs-speeddial id='speeddial' openIconCss='e-icons e-edit' closeIconCss='e-icons e-close' target='#targetElement' mode= 'Radial' :items='items' :radialSettings='radialSettings'></ejs-speeddial>
</template>

<script>
    import Vue from 'vue';
    import { SpeedDialPlugin } from "@syncfusion/ej2-vue-buttons";

    Vue.use(SpeedDialPlugin);

    export default {
        data() {
            return {
                items: [
                    { iconCss: 'e-icons e-cut' },
                    { iconCss: 'e-icons e-copy' },
                    { iconCss: 'e-icons e-paste' },
                    { iconCss: 'e-icons e-edit' },
                    { iconCss: 'e-icons e-save' }
                ],
                radialSettings: { direction: 'AntiClockwise' }
            };
        }
    }
</script>

<style>
    @import 'https://ej2.syncfusion.com/vue/documentation/node_modules/@syncfusion/ej2-base/styles/material.css';
    @import '../node_modules/@syncfusion/ej2-buttons/styles/material.css';
</style>
```

## Radial menu start and end angle

You can modify the start and end angle of action items by setting [`startAngle`](https://ej2.syncfusion.com/vue/documentation/api/speed-dial/radialSettingsModel/#startangle) and [`endAngle`](https://ej2.syncfusion.com/vue/documentation/api/speed-dial/radialSettingsModel/#endangle) properties. If the angle is not defined, the action items are displayed based on the `position` property of the Speed Dial.

```
<template>
    <ejs-speeddial id='speeddial' openIconCss='e-icons e-edit' closeIconCss='e-icons e-close' target='#targetElement' mode= 'Radial' position='MiddleCenter' :items='items' :radialSettings='radialSettings'></ejs-speeddial>
</template>

<script>
    import Vue from 'vue';
    import { SpeedDialPlugin } from "@syncfusion/ej2-vue-buttons";

    Vue.use(SpeedDialPlugin);

    export default {
        data() {
            return {
                items: [
                    { iconCss: 'e-icons e-cut' },
                    { iconCss: 'e-icons e-copy' },
                    { iconCss: 'e-icons e-paste' },
                    { iconCss: 'e-icons e-edit' },
                    { iconCss: 'e-icons e-save' }
                ],
                radialSettings: { direction: 'AntiClockwise', startAngle: 180, endAngle: 360 }
            };
        }
    }
</script>

<style>
    @import 'https://ej2.syncfusion.com/vue/documentation/node_modules/@syncfusion/ej2-base/styles/material.css';
    @import '../node_modules/@syncfusion/ej2-buttons/styles/material.css';
</style>
```

## Offset

You can modify the offset distance between action items and Speed Dial button using [`offset`](https://ej2.syncfusion.com/vue/documentation/api/speed-dial/radialSettingsModel/#offset) property.

```
<template>
    <ejs-speeddial id='speeddial' openIconCss='e-icons e-edit' closeIconCss='e-icons e-close' target='#targetElement' mode= 'Radial' :items='items' :radialSettings='radialSettings'></ejs-speeddial>
</template>

<script>
    import Vue from 'vue';
    import { SpeedDialPlugin } from "@syncfusion/ej2-vue-buttons";

    Vue.use(SpeedDialPlugin);

    export default {
        data() {
            return {
                items: [
                    { iconCss: 'e-icons e-cut' },
                    { iconCss: 'e-icons e-copy' },
                    { iconCss: 'e-icons e-paste' },
                    { iconCss: 'e-icons e-edit' },
                    { iconCss: 'e-icons e-save' }
                ],
                radialSettings: { offset: '80px' }
            };
        }
    }
</script>

<style>
    @import '../node_modules/@syncfusion/ej2-base/styles/material.css';
    @import '../node_modules/@syncfusion/ej2-buttons/styles/material.css';
</style>
```

Below example demonstrates the radial menu settings of the Speed Dial.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/speed-dial/radial-cs2/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/speed-dial/radial-cs2" %}