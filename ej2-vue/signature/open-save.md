---
layout: post
title: Open save in Vue Signature component | Syncfusion
description: Learn here all about Open save in Syncfusion Vue Signature component of Syncfusion Essential JS 2 and more.
control: Open save 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Open save in Vue Signature component

The Signature component supports to open the signature by using hosted/online URL or base64. And it also supports various save options like image, base64, and blob.

## Open Signature

The signature component opens a pre-drawn signature as either base64 or hosted/ online URL using the [`load`](https://ej2.syncfusion.com/vue/documentation/api/signature/#load) method. It supports the PNG, JPEG, and SVG image’s base64.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/signature/default-cs9/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/signature/default-cs9" %}

## Save Signature

The Signature component saves the signature as base64, blob, and image like PNG, JPEG, and SVG.

### Save as Base64

The `getSignature` method is used to get the signature as base64 with the PNG, JPEG, and SVG type. This can be loaded to signature using [`load`](https://ej2.syncfusion.com/vue/documentation/api/signature/#load) method.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/signature/default-cs10/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/signature/default-cs10" %}

### Save as Blob

The [`saveAsBlob`](https://ej2.syncfusion.com/vue/documentation/api/signature/#saveasblob) method is used to saves the signature as Blob. It is defined as the chunk of binary data stored as a single entity in a database system.

### Save as Image

The [`save`](https://ej2.syncfusion.com/vue/documentation/api/signature/#save) method is used to saves the signature as an image. And it accepts file name and file type as parameter. The file type parameter supports PNG, JPEG, and SVG and the default file type is PNG.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/signature/default-cs11/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/signature/default-cs11" %}

## Save with Background

The [`saveWithBackground`](https://ej2.syncfusion.com/vue/documentation/api/signature/#savewithbackground) property is used to saves the signature with its background and its default value is true. So, by default the signature is saved with its background.

In the following sample, the background color is set as ‘rgb(103 58 183)’ and save with background as true.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/signature/default-cs12/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/signature/default-cs12" %}