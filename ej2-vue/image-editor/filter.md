---
layout: post
title: Filter in Vue Image Editor component | Syncfusion
description: Apply built-in image filters such as chrome, cold, warm, grayscale, sepia, black and white, and invert in the Vue Image Editor.
platform: ej2-vue
control: Filter 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Filters in the Vue Image Editor component

Filters are pre-defined effects that can be applied to an image to alter its appearance or mood. Image filters can be used to add visual interest or to enhance certain features of the image. Examples of supported filters include chrome, cold, warm, grayscale, sepia, black and white, invert, and sharpen. You can apply a filter using the toolbar Filter button or programmatically with the [applyImageFilter](https://ej2.syncfusion.com/vue/documentation/api/image-editor/index-default#applyimagefilter) method, which takes a single `ImageFilterOption` parameter. Each filter application is recorded in the undo/redo history, so it can be reversed with <kbd>Ctrl</kbd> + <kbd>Z</kbd> or the Undo button.

## Apply filter effect

The [applyImageFilter](https://ej2.syncfusion.com/vue/documentation/api/image-editor/index-default#applyimagefilter) method applies a filter to an image. Pass the desired filter type as the first parameter — an [ImageFilterOption](https://ej2.syncfusion.com/vue/documentation/api/image-editor/imagefilteroption) value — and the method applies the corresponding filter to the image. Applying a second filter replaces the first; filters are not stacked.

* `filterOption`: Specifies the filter to apply to the image.

The following example uses the `applyImageFilter` method in a button click event.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/image-editor/getting-started-cs26/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/image-editor/getting-started-cs26/app.vue %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/image-editor/getting-started-cs26" %}

## Image filtering event

The [imageFiltering](https://ej2.syncfusion.com/vue/documentation/api/image-editor/index-default#imagefiltering) event fires before a filter is applied to the image, allowing you to inspect or cancel the operation. This event receives an object ([ImageFilterEventArgs](https://ej2.syncfusion.com/vue/documentation/api/image-editor/imagefiltereventargs)) that contains information about the filter being applied. Setting `cancel` to `true` in the event handler prevents the filter from being applied.

The properties available in the `ImageFilterEventArgs` are:

* `Filter`: The type of filter as [ImageFilterOption](https://ej2.syncfusion.com/vue/documentation/api/image-editor/imagefilteroption) being applied to the image.

* `Cancel`: Specifies whether to cancel the filtering action (`boolean`). When set to `true`, the filter is not applied. 