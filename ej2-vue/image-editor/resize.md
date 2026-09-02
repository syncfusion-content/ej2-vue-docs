---
layout: post
title: Resize in Vue Image Editor component | Syncfusion
description: Programmatically resize the image to a specific width and height in the Vue Image Editor, with an option to preserve the original aspect ratio.
control: Resize
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Resize in the Vue Image Editor component

The resize feature in an Image Editor is a valuable tool that empowers users to modify the size or dimensions of an image to meet their specific requirements. Whether it's for printing, web display, or any other purpose, this feature allows users to tailor images to their desired specifications.

## Apply resize to the image

Use the [resize](https://ej2.syncfusion.com/vue/documentation/api/image-editor/index-default#resize) method to adjust the dimensions of an image. The method accepts three parameters:

* width: Specifies the resizing width of the image.

* height: Specifies the resizing height of the image.

* isAspectRatio: Specifies a boolean value indicating whether the image should maintain its original aspect ratio during resizing.
    * When set to `true`, the image maintains its original aspect ratio. The width is applied as specified, and the height is automatically adjusted to maintain the aspect ratio.
    * When set to `false`, the image is resized according to the specified width and height, without maintaining the aspect ratio.
    * The default value is `false`.

Here is an example of resizing the image using the `resize` method. 

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/image-editor/getting-started-cs42/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/image-editor/getting-started-cs42/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/image-editor/getting-started-cs42" %}

## Resizing event

The [resizing](https://ej2.syncfusion.com/vue/documentation/api/image-editor/index-default#resizing) event is triggered when resizing the image. This event provides information encapsulated within an object, which includes details about the previous and current height and width of an image.

The parameter available in [ResizeEventArgs](https://ej2.syncfusion.com/vue/documentation/api/image-editor/resizeEventArgs) is,

* [previousWidth](https://ej2.syncfusion.com/vue/documentation/api/image-editor/resizeEventArgs#previousWidth): The width of the image before resizing (`number`, in pixels).

* [previousHeight](https://ej2.syncfusion.com/vue/documentation/api/image-editor/resizeEventArgs#previousHeight): The height of the image before resizing (`number`, in pixels).

* [width](https://ej2.syncfusion.com/vue/documentation/api/image-editor/resizeEventArgs#width): The width of the image after resizing (`number`, in pixels).

* [height](https://ej2.syncfusion.com/vue/documentation/api/image-editor/resizeEventArgs#height): The height of the image after resizing (`number`, in pixels).

* [isAspectRatio](https://ej2.syncfusion.com/vue/documentation/api/image-editor/resizeEventArgs#isAspectRatio): Whether the resize preserved the original aspect ratio (`boolean`).

* [cancel](https://ej2.syncfusion.com/vue/documentation/api/image-editor/resizeEventArgs#cancel): Whether to cancel the resize action (`boolean`). Set to `true` to prevent the resize.