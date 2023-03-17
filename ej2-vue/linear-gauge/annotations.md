---
layout: post
title: Annotations in Vue Linear gauge component | Syncfusion
description: Learn here all about Annotations in Syncfusion Vue Linear gauge component of Syncfusion Essential JS 2 and more.
control: Annotations 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Annotations in Vue Linear gauge component

<!-- markdownlint-disable MD013 -->

Annotations are used to mark the specific area of interest in the Linear Gauge with text, HTML elements, or images. Any number of annotations can be added to the Linear Gauge component.

## Adding annotation

To render the custom HTML elements in the Linear Gauge component, use the [`content`](https://ej2.syncfusion.com/vue/documentation/api/linear-gauge/annotation/#content) property in the [`e-annotation`](https://ej2.syncfusion.com/vue/documentation/api/linear-gauge/annotation/). The annotation can be rendered either by specifying the id of the element or specifying the code to create a new element that needs to be displayed in the gauge area.

<!-- markdownlint-disable MD036 -->

```ts

<template>
  <div class="control-section">
    <div align='center'>
      <ejs-lineargauge ref='lineargauge' style='display:block' align='center'>
        <e-annotations>
          <e-annotation :content='contentTemplate' :zIndex='zindex' :axisValue=50>
          </e-annotation>
        </e-annotations>
      </ejs-lineargauge>
    </div>
  </div>
</template>
<style>
  #control-container {
    padding: 0px !important;
  }
</style>
<script>
import Vue from "vue";
import { LinearGaugePlugin, Annotations } from "@syncfusion/ej2-vue-lineargauge";
Vue.use(LinearGaugePlugin);
export default {
  data:function() {
    return {
      zindex: 1,
      contentTemplate: '<div id="first"><h1>Gauge</h1></div>',
    }
  },
  provide: {
    lineargauge: [Annotations]
  },
};
</script>

```

## Customization

The following properties are used to customize the annotation.

* [`zIndex`](https://ej2.syncfusion.com/vue/documentation/api/linear-gauge/annotation/#zindex) - Bring the annotation to the front or back, when annotation overlaps with another element.
* [`axisValue`](https://ej2.syncfusion.com/vue/documentation/api/linear-gauge/annotation/#axisvalue) - To place the annotation in the specified axis value with respect to the provided axis index.
* [`axisIndex`](https://ej2.syncfusion.com/vue/documentation/api/linear-gauge/annotation/#axisindex) - To place the annotation in the specified axis with respect to the provided axis value.
* [`horizontalAlignment`](https://ej2.syncfusion.com/vue/documentation/api/linear-gauge/annotation#horizontalalignment) - To place the annotation horizontally.
* [`verticalAlignment`](https://ej2.syncfusion.com/vue/documentation/api/linear-gauge/annotation#verticalalignment) - To place the annotation vertically.
* [`x`](https://ej2.syncfusion.com/vue/documentation/api/linear-gauge/annotation/#x), [`y`](https://ej2.syncfusion.com/vue/documentation/api/linear-gauge/annotation/#y) - To place the annotation in the specified location.

### Changing the z-index

To change the stack order of an annotation element, the [`zIndex`](https://ej2.syncfusion.com/vue/documentation/api/linear-gauge/annotation/#zindex) property of the [`e-annotation`](https://ej2.syncfusion.com/vue/documentation/api/linear-gauge/annotation/) can be used.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/linear-gauge/getting-started-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/linear-gauge/getting-started-cs1" %}

### Positioning an annotation

The annotation can be placed anywhere in the Linear Gauge by setting the pixel value to the [`x`](https://ej2.syncfusion.com/vue/documentation/api/linear-gauge/annotation/#x) and [`y`](https://ej2.syncfusion.com/vue/documentation/api/linear-gauge/annotation/#y) properties in the [`e-annotation`](https://ej2.syncfusion.com/vue/documentation/api/linear-gauge/annotation/).

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/linear-gauge/getting-started-cs2/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/linear-gauge/getting-started-cs2" %}


### Alignment of annotation

The annotation can be aligned horizontally and vertically by using the [`horizontalAlignment`](https://ej2.syncfusion.com/vue/documentation/api/linear-gauge/annotation/#horizontalalignment) and [`verticalAlignment`](https://ej2.syncfusion.com/vue/documentation/api/linear-gauge/annotation/#verticalalignment) properties respectively. The possible values can be **Center**, **Far**, **Near**, and **None**. The [`horizontalAlignment`](https://ej2.syncfusion.com/vue/documentation/api/linear-gauge/annotation/#horizontalalignment) and [`verticalAlignment`](https://ej2.syncfusion.com/vue/documentation/api/linear-gauge/annotation/#verticalalignment) properties are not applicable when the [`x`](https://ej2.syncfusion.com/vue/documentation/api/linear-gauge/annotation/#x) and [`y`](https://ej2.syncfusion.com/vue/documentation/api/linear-gauge/annotation/#y) properties are set in the [`e-annotation`](https://ej2.syncfusion.com/vue/documentation/api/linear-gauge/annotation/).

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/linear-gauge/getting-started-cs3/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/linear-gauge/getting-started-cs3" %}

## Multiple annotations

Multiple annotations can be added to the Linear Gauge component by adding the multiple [`e-annotation`](https://ej2.syncfusion.com/vue/documentation/api/linear-gauge/annotation/) in the [`e-annotations`](https://ej2.syncfusion.com/vue/documentation/api/linear-gauge/#annotations) and customization for the annotation can be done with the [`e-annotation`](https://ej2.syncfusion.com/vue/documentation/api/linear-gauge/annotation/).

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/linear-gauge/getting-started-cs4/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/linear-gauge/getting-started-cs4" %}
