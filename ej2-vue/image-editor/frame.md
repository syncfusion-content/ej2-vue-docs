---
layout: post
title: Frame in Vue Image Editor component | Syncfusion
description: Add decorative borders such as mat, bevel, line, hook, and inset frames to images in the Vue Image Editor with customizable color, size, and style.
platform: ej2-vue
control: Frame 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Frames in the Vue Image Editor component

The frame feature in an Image Editor provides users with the capability to add decorative borders or frames around their images. Frames are a visual design element that can enhance the overall appearance and appeal of an image.

## Apply frame to the image

The [drawFrame](https://ej2.syncfusion.com/vue/documentation/api/image-editor/index-default#drawframe) method is a function designed to enable the application of various frame options to an image. This method simplifies the process of adding decorative frames, such as mat, bevel, line, hook, and inset, to an image by allowing users to specify their desired frame type.

Depending on the frame type selected, users may have additional customization options, such as adjusting the frame's thickness, color, texture, or other attributes. This allows for fine-tuning the appearance of the frame to match the image's theme or the user's preferences

The `drawFrame` method in the Image Editor control takes 9 parameters to define the properties of the frame:

* `frameType`: Specified the image data or url of the image to be inserted.

* `Color`: Specifies the primary color of the frame (CSS color value, e.g., `#000000` or `red`).

* `gradientColor`: Specifies the gradient color blended with the primary color.

* `size`: Specifies the thickness of the frame (in pixels).

* `inset`: Specifies the inset distance (in pixels) for `Line`, `Hook`, and `Inset` frame types.

* `offset`: Specifies the offset distance (in pixels) for `Line` and `Inset` frame types.

* `borderRadius`: Specifies the corner radius (in pixels) for the `Line` frame type.

* `frameLineStyle`: Specifies the line style for the `Line` frame type. Supported values are `Solid`, `Dashed`, and `Dotted`.

* `lineCount`: Specifies the number of lines to draw for the `Line` frame type.

The following example uses the `drawFrame` method in a button click event.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/image-editor/getting-started-cs41/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/image-editor/getting-started-cs41/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/image-editor/getting-started-cs41" %}

## Frame changing event

The [frameChanging](https://ej2.syncfusion.com/vue/documentation/api/image-editor/index-default#framechange) event is triggered when applying frame on the image. This event provides information encapsulated within an object, which includes details about the frame applied in an image. This information encompasses:

Frame Type: This indicates the specific type of frame being applied, whether it's a mat, bevel, line, or hook.

Customization Values: These values contain information about any adjustments or modifications made to the frame. For instance, if the frame can be customized with attributes like color, size, or style, these details are conveyed within the event object.

The properties available in the `FrameChangeEventArgs` are:

* [previousFrameSetting](https://ej2.syncfusion.com/vue/documentation/api/image-editor/frameChangeEventArgs#previousFrameSetting): The frame settings (including `size`, `color`, `inset`, `offset`, `gradientColor`) that were applied before the change.

* [currentFrameSetting](https://ej2.syncfusion.com/vue/documentation/api/image-editor/frameChangeEventArgs#currentFrameSetting): The frame settings (including `size`, `color`, `inset`, `offset`, `gradientColor`) that will be applied after the change.

* [cancel](https://ej2.syncfusion.com/vue/documentation/api/image-editor/frameChangeEventArgs#cancel): Specifies whether to cancel the frame change action (`boolean`). When set to `true`, the new frame is not applied.