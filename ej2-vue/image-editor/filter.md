---
layout: post
title: Filter in ##Platform_Name## Image Editor component | Syncfusion
description: Learn here all about Filter in Syncfusion Vue Image editor component of Syncfusion Essential JS 2 and more.
platform: ej2-vue
control: Filter 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Filters in the Vue Image Editor component

Filters are pre-defined effects that can be applied to an image to alter its appearance or mood. Image filters can be used to add visual interest or to enhance certain features of the image. Some common types of image filters include cold, warm, chrome, sepia, and invert. This can be done by either using the toolbar or the [`applyImageFilter`](https://ej2.syncfusion.com/vue/documentation/api/image-editor/#applyimagefilter) method which takes a single parameter: the filter applied to an image.

## Apply filter effect

The [`applyImageFilter`](https://helpej2.syncfusion.com/vue/documentation/api/image-editor/#applyimagefilter) method is utilized to apply filters to an image. By passing the desired filter type as the first parameter of the method, specified as [`ImageFilterOption`](https://ej2.syncfusion.com/vue/documentation/api/image-editor/imageFilterOption/) the method applies the corresponding filter to the image. This allows for easy and convenient application of various filters to enhance or modify the image based on the chosen filter type.

* filterOption - Specifies the filter options to the image.

In the following example, you can using the applyImageFilter method in the button click event.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/image-editor/getting-started-cs26/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/image-editor/getting-started-cs26" %}

## Image filtering event 

The [`imageFiltering`](https://ej2.syncfusion.com/vue/documentation/api/image-editor/#imagefiltering) event is triggered when applying filtering on the image. This event is passed an object that contains information about the filtering event, such as the type of filtering. 

The parameter available in the [`ImageFilterEventArgs`](https://ej2.syncfusion.com/vue/documentation/api/image-editor/imageFilterEventArgs) event is, 

ImageFilterEventArgs.Filter - The type of filtering as ImageFilterOption to be applied in the image editor. 

ImageFilterEventArgs.Cancel – Specifies to cancel the filtering action. 

> Please note that the Filter and Finetune features were unavailable on iOS due to the non-functioning CanvasContext.filter property on this platform.