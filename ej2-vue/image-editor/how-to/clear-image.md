---
layout: post
title: Clear an Image in ##Platform_Name## Image editor control | Syncfusion
description: Learn here all about Clear an Image in Syncfusion ##Platform_Name## Image editor control of Syncfusion Essential JS 2 and more.
platform: ej2-vue
control: Clear an Image 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Clear an Image in the Vue Image Editor component

The [`clearImage`](https://ej2.syncfusion.com/vue/documentation/api/image-editor/index-default#clearimage) method in the image editor control is indeed useful for scenarios where you need to ensure that the image editor is emptied before reopening it, especially if the editor is used within a dialog. By using `clearImage` before closing the dialog, you can ensure that the editor does not retain the previously loaded image when the dialog is reopened. This allows users to start fresh with a new image selection.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/image-editor/getting-started-cs52/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/image-editor/getting-started-cs52/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/image-editor/getting-started-cs52" %}
