---
layout: post
title: Redact in Vue Image Editor component | Syncfusion
description: Hide sensitive regions of an image with blur or pixelate redactions in the Vue Image Editor, and draw, select, update, or delete them programmatically.
control: Redact
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Redact in the Vue Image Editor component

The redact feature in an Image Editor is a valuable tool that empowers users to conceal sensitive information by applying blur or pixel effects to specific areas of an image. This feature is particularly valuable for protecting privacy and complying with data protection regulations, making it easier to securely share images without compromising sensitive information.

## Apply redact to the image

The Image Editor control includes a [drawRedact](https://ej2.syncfusion.com/vue/documentation/api/image-editor/index-default#drawredact) method, which allows you to draw redaction on an image. This method takes six parameters that define how the redact should be carried out:

* `type`: The redaction type. Supported values are `ImageEditorRedactType.Blur` and `ImageEditorRedactType.Pixelate`. Defaults to `Blur`.
* `x`: The x-coordinate of the redaction, in pixels. Defaults to the center of the image.
* `y`: The y-coordinate of the redaction, in pixels. Defaults to the center of the image.
* `width`: The width of the redaction, in pixels. Default `100`.
* `height`: The height of the redaction, in pixels. Default `50`.
* `value`: The intensity of the effect — the blur radius for `Blur` or the pixel block size for `Pixelate`. Default `20` (since the default redaction is blur).

## Selecting a redact

The Image Editor control includes a [selectRedact](https://ej2.syncfusion.com/vue/documentation/api/image-editor/index-default#selectredact) method, which allows you to select a redaction based on the given redaction id. Use [getRedacts](https://ej2.syncfusion.com/vue/documentation/api/image-editor#getRedacts) method to get the redaction id which is then passed to perform selection. This method takes one parameter that define how the redact should be carried out:

* `id`: The redaction id to select.

## Deleting a redact

The Image Editor control includes a [deleteRedact](https://ej2.syncfusion.com/vue/documentation/api/image-editor/index-default#deleteredact) method, which allows you to delete a redaction based on the given redaction id. Use [getRedacts](https://ej2.syncfusion.com/vue/documentation/api/image-editor#getRedacts) method to get the redaction id which is then passed to perform selection. This method takes one parameter that define how the redact should be carried out:

* id: Specifies the shape id to delete a redact on an image.

## Updating a redact

The Image Editor control includes a [updateRedact](https://ej2.syncfusion.com/vue/documentation/api/image-editor/index-default#updateredact) method, which allows you to update the existing redacts by changing its height, width, blur, and pixel size in the component. Use [getRedacts](https://ej2.syncfusion.com/vue/documentation/api/image-editor#getRedacts) method to get the redacts which is then passed to change the options of a redacts. This method takes two parameters that define how the redact should be carried out:

* setting: Specifies the redact settings to be updated for the shape on an image.

* isSelected: Specifies to show the redacts in the selected state.

## Getting redacts

The Image Editor control includes a [getRedacts](https://ej2.syncfusion.com/vue/documentation/api/image-editor#getRedacts) method, which allows you to get all the redact details which is drawn on an image editor.

Here's an example demonstrating how to draw, select, delete, update, and get redacts on an image using the [drawRedact](https://ej2.syncfusion.com/vue/documentation/api/image-editor/index-default#drawredact), [selectRedact](https://ej2.syncfusion.com/vue/documentation/api/image-editor/index-default#selectredact), [deleteRedact](https://ej2.syncfusion.com/vue/documentation/api/image-editor/index-default#deleteredact), [updateRedact](https://ej2.syncfusion.com/vue/documentation/api/image-editor/index-default#updateredact) and [getRedacts](https://ej2.syncfusion.com/vue/documentation/api/image-editor#getRedacts) methods.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/image-editor/getting-started-cs47/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/image-editor/getting-started-cs47/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/image-editor/getting-started-cs47" %}