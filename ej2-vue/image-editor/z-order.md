---
layout: post
title: Z-order in Vue Image editor component | Syncfusion
description: Learn here all about Toolbar in Syncfusion Vue Image editor component of Syncfusion Essential JS 2 and more.
control: Toolbar 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Z-order in the Vue Image Editor component

We are excited to introduce `z-order` support in the Image Editor. It's a powerful tool that allows users to adjust the positioning of annotations. This feature is particularly useful for designing personalized templates like greeting cards or posters, where managing the layering of multiple annotations is crucial for a polished final product.
 
Types of adjustment in the Image Editor `z-order` support.

* [Bring forward](https://ej2.syncfusion.com/vue/documentation/api/image-editor/#bringforward) - Switch the selected annotation with the annotation one layer ahead of it.

* [Sent Backward](https://ej2.syncfusion.com/vue/documentation/api/image-editor/#sendbackward) - Switch the selected annotation with the annotation one layer behind it.

* [Bring to Front](https://ej2.syncfusion.com/vue/documentation/api/image-editor/#bringtofront) - Move the selected annotation to ahead of all other annotations.

* [Send to Back](https://ej2.syncfusion.com/vue/documentation/api/image-editor/#sendtoback) - Move the selected annotation to behind all other annotations.

In the following example, you can use the `z-order` support.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/image-editor/getting-started-cs46/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/image-editor/getting-started-cs46/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/image-editor/getting-started-cs46" %}