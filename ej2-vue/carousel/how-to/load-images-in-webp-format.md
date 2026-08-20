---
layout: post
title: How to load images in webp format in Vue Carousel | Syncfusion
description: Load Vue Carousel slide images in WebP format to reduce file size and improve page load performance without sacrificing visual quality.
control: Load images in webp format 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# How to load images in webp format in Vue Carousel

You can load the carousel image in the webp format, which aims to create smaller, better-looking images. Choosing webp as your image format can significantly improve your website's performance without sacrificing visual quality. webp images are significantly smaller in file size compared to formats like JPEG and PNG. This results in faster load times and less data usage. To achieve this, you can convert your image format to webp and pass them to Carousel items. The following sample illustrates how to load a carousel image in the webp format component.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/carousel/how-to/default-webp/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/carousel/how-to/default-webp/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/carousel/how-to/default-webp" %}