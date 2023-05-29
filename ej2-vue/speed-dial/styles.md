---
layout: post
title: Styles in Vue Speed dial component | Syncfusion
description: Learn here all about Styles in Syncfusion Vue Speed dial component of Syncfusion Essential JS 2 and more.
control: Styles 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Styles in Vue Speed dial component

This section briefs different ways to style SpeedDial component.

## SpeedDial button

You can customize the icon and text of Vue Speed Dial button using [`openIconCss`](https://ej2.syncfusion.com/vue/documentation/api/speed-dial#openiconcss), [`closeIconCss`](https://ej2.syncfusion.com/vue/documentation/api/speed-dial#closeiconcss) and [`content`](https://ej2.syncfusion.com/vue/documentation/api/speed-dial#content) properties.

### Icon only

You can use the [`openIconCss`](https://ej2.syncfusion.com/vue/documentation/api/speed-dial#openiconcss) and [`closeIconCss`](https://ej2.syncfusion.com/vue/documentation/api/speed-dial#closeiconcss) properties to show icons in speed dial button. You can also show tooltip on hover to show additional details to end-user by setting `title` attribute.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/speed-dial/styles-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/speed-dial/styles-cs1" %}

### Text only

You can show only text in Speed Dial button by setting [`content`](https://ej2.syncfusion.com/vue/documentation/api/speed-dial#content) property  without setting icon properties..

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/speed-dial/styles-cs2/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/speed-dial/styles-cs2" %}

### Icon with text

You show icon and text in SpeedDial button using [`openIconCss`](https://ej2.syncfusion.com/vue/documentation/api/speed-dial#openiconcss), [`closeIconCss`](https://ej2.syncfusion.com/vue/documentation/api/speed-dial#closeiconcss) and [`content`](https://ej2.syncfusion.com/vue/documentation/api/speed-dial#content) properties together.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/speed-dial/styles-cs3/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/speed-dial/styles-cs3" %}

## Disabled

You can enable or disable the SpeedDial component using [`disabled`](https://ej2.syncfusion.com/vue/documentation/api/speed-dial#disabled) property.

```
<template>
    <ejs-speeddial id='speeddial' content='Edit' disabled=true></ejs-speeddial>
</template>

<script>
import Vue from 'vue';
import { SpeedDialPlugin  } from "@syncfusion/ej2-vue-buttons";
import { enableRipple } from '@syncfusion/ej2-base';

enableRipple(true);
Vue.use(SpeedDialPlugin);
export default {}
</script>

<style>
@import '../node_modules/@syncfusion/ej2-base/styles/material.css';
@import '../node_modules/@syncfusion/ej2-buttons/styles/material.css';
</style>
```

## cssClass

The Vue Speed Dial supports the following predefined styles that can be defined using the [`cssClass`](https://ej2.syncfusion.com/vue/documentation/api/speed-dial#cssclass) property. You can customize by setting the `cssClass` property with the below defined class.

| cssClass | Description |
| -------- | -------- |
| e-primary | Used to represent a primary action. |
| e-outline |  Used to represent an appearance of button with outline. |
| e-info |  Used to represent an informative action. |
| e-success | Used to represent a positive action. |
| e-warning | Used to represent an action with caution. |
| e-danger | Used to represent a negative action. |

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/speed-dial/styles-cs4/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/speed-dial/styles-cs4" %}

## Visible

You can set the Speed Dial button to visible/hidden state using [`visible`](https://ej2.syncfusion.com/vue/documentation/api/speed-dial#visible) property.

```
<template>
    <ejs-speeddial id='speeddial' content='Edit' visible=false></ejs-speeddial>
</template>

<script>
import Vue from 'vue';
import { SpeedDialPlugin  } from "@syncfusion/ej2-vue-buttons";
import { enableRipple } from '@syncfusion/ej2-base';

enableRipple(true);
Vue.use(SpeedDialPlugin);
export default {}
</script>

<style>
@import '../node_modules/@syncfusion/ej2-base/styles/material.css';
@import '../node_modules/@syncfusion/ej2-buttons/styles/material.css';
</style>
```

## Tooltip

You can show tooltip on hover to show additional details to end-user by setting [`title`](https://ej2.syncfusion.com/vue/documentation/api/speed-dial/speedDialItemModel/#title) to Speed Dial button.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/speed-dial/styles-cs5/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/speed-dial/styles-cs5" %}

## Opens on hover

You can use [`opensOnHover`](https://ej2.syncfusion.com/vue/documentation/api/speed-dial/#opensonhover) property to open actions items on hover itself. By default action items displayed only when clicking the speed dial button.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/speed-dial/styles-cs6/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/speed-dial/styles-cs6" %}