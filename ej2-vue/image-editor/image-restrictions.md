---
layout: post
title: Image Restrictions in Vue Image editor component | Syncfusion
description: Learn here all about Image Restrictions in Syncfusion Vue Image editor component of Syncfusion Essential JS 2 and more.
control: Image Restrictions
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Image Restrictions in the Vue Image Editor component

The Image Editor allows users to specify image extensions, as well as the minimum and maximum image sizes for uploaded or loaded images using the [`uploadSettings`](https://ej2.syncfusion.com/vue/documentation/api/image-editor/#uploadSettings) property. End users will receive a clear alert message if an uploaded image does not meet the defined criteria, ensuring a seamless and user-friendly upload experience.

`Note:` File restrictions apply when uploading images to the Image Editor, whether through the open method or the built-in uploader. If uploadSettings is not defined in the sample, the Image Editor, by default, allows files with .jpg, .png, .svg, and .webp extensions, without any file size restrictions.

## Allowed image extensions

The Image Editor allows users to specify acceptable file extensions for uploaded images using the [`uploadSettings.allowedExtensions`](https://ej2.syncfusion.com/vue/documentation/api/image-editor/uploadSettingsModel/#allowedExtensions) property, ensuring that only supported formats, such as `.jpg`, `.png`, and `.webp` and `.svg` are allowed. This helps maintain compatibility and prevents errors caused by unsupported file types. By default, the Image Editor allows files with .jpg, .png, .webp, and .svg extensions.

`Note:` To specify allowed extensions in the upload settings, use the format '.png, .svg', listing the permitted file types as a comma-separated string.

Here is an example of configuring image restrictions using the [`uploadSettings`] property.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/image-editor/getting-started-cs63/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/image-editor/getting-started-cs63/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/image-editor/getting-started-cs63" %}

## Minimum and maximum image size

The Image Editor allows users to specify the minimum and maximum size limits for uploaded image files by using the [uploadSettings.minFileSize](https://ej2.syncfusion.com/vue/documentation/api/image-editor/uploadSettingsModel/#minfilesize) and [uploadSettings.maxFileSize](https://ej2.syncfusion.com/vue/documentation/api/image-editor/uploadSettingsModel/#maxfilesize) properties. This ensures that images meet specific requirements, maintaining consistency and preventing oversized or undersized files from being processed.

`Note:` Users can also upload images as base64 strings, in which case file extension validation is bypassed, but file size restrictions still apply.

Here is an example of configuring image restrictions using the [`uploadSettings`] property.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/image-editor/getting-started-cs64/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/image-editor/getting-started-cs64/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/image-editor/getting-started-cs64" %}