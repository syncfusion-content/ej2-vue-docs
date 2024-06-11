---
layout: post
title: Finetune in ##Platform_Name## Image Editor component | Syncfusion
description: Learn here all about Finetune in Syncfusion Vue Image editor component of Syncfusion Essential JS 2 and more.
platform: ej2-vue
control: Finetune 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Finetune in the Vue Image Editor component

Fine-tuning involves making precise adjustments to the settings of an image filter in order to achieve a specific desired effect. It provides control over the intensity and specific aspects of the filter's impact on the image. For example, fine-tuning allows you to modify parameters like brightness, saturation, or other relevant properties to fine-tune the level or quality of the filter's effect. This level of control enables you to achieve the exact look or outcome you want for your image.

## Adjust the brightness, contrast, or sharpness

The [`finetuneImage`](https://ej2.syncfusion.com/vue/documentation/api/image-editor/#finetuneImage) method is designed to facilitate fine-tuning operations on an image. It accepts two parameters: the first parameter is [`ImageFinetuneOption`](https://ej2.syncfusion.com/vue/documentation/api/image-editor/imageFinetuneOption/) which determines the type of fine-tuning to be applied (brightness, contrast, or sharpness), and the second parameter represents the fine-tuning value, indicating the degree or intensity of the adjustment. This method allows for convenient adjustment of brightness, contrast, or sharpness by specifying the desired type and corresponding value.

The [`finetuneImage`](https://ej2.syncfusion.com/vue/documentation/api/image-editor/#finetuneImage) method is used to perform brightness, contrast, or sharpness fine-tuning by specifying this type as a first parameter and specifying the fine-tuning value as the second parameter of the method. 

Here is an example of brightness, contrast, and sharpness fine-tuning using the [`finetuneImage`](https://ej2.syncfusion.com/vue/documentation/api/image-editor/#finetuneImage) method. 

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/image-editor/getting-started-cs31/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/image-editor/getting-started-cs31/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/image-editor/getting-started-cs31" %}

## Adjust the hue, exposure, blur, or opacity

The [`finetuneImage`](https://ej2.syncfusion.com/vue/documentation/api/image-editor/#finetuneImage) method is designed to facilitate fine-tuning operations on an image. It accepts two parameters: the first parameter is [`ImageFinetuneOption`](https://ej2.syncfusion.com/vue/documentation/api/image-editor/imageFinetuneOption/) which determines the type of fine-tuning to be applied (hue, exposure, or blur), and the second parameter represents the fine-tuning value, indicating the degree or intensity of the adjustment. This method allows for convenient adjustment of hue, exposure, or blur by specifying the desired type and corresponding value.

Here is an example of hue, exposure, and blur fine-tuning using the [`finetuneImage`](https://ej2.syncfusion.com/vue/documentation/api/image-editor/#finetuneImage) method.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/image-editor/getting-started-cs25/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/image-editor/getting-started-cs25/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/image-editor/getting-started-cs25" %}

## Finetune value changing event 

The [`FinetuneValueChanging`](https://ej2.syncfusion.com/vue/documentation/api/image-editor/#finetunevaluechanging) event is triggered when performing fine-tuning on the image. This event is passed an object that contains information about the fine-tuning event, such as the type of fine-tuning and the value of fine-tuning performed.

The parameter available in the [`FinetuneEventArgs`](https://ej2.syncfusion.com/vue/documentation/api/image-editor/#finetuneEventArgs) event is, 

* FinetuneEventArgs.finetune - The type of fine-tuning as [`ImageFinetuneOption`](https://ej2.syncfusion.com/vue/documentation/api/image-editor/#imagefinetuneoption) to be applied in the image editor. 

* FinetuneEventArgs.value - The fine-tuning value to be applied in the image editor. 

* FinetuneEventArgs.cancel – Specifies a boolean value to cancel the fine-tuning action. 

> Please note that the Filter and Finetune features were unavailable on iOS due to the non-functioning CanvasContext.filter property on this platform.