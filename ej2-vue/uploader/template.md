---
layout: post
title: Template in Vue Uploader | Syncfusion
description: Customize the Syncfusion Vue Uploader file list with the template property to add file-type icons, custom rows, and progress layouts.
control: Template 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Template in Vue Uploader

You can customize the default appearance of the Uploader using a template along with buttons.

## File list template

The [template](https://ej2.syncfusion.com/vue/documentation/api/uploader/index-default#template) property is used to customize the default appearance of each file in the list. It can be represented as an HTML element or string. The selected or dropped files are displayed as per the template layout provided. The remove and progress bar actions are handled using the corresponding events when the template is defined.

For example, you can display the file type icon along with the default UI elements.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/uploader/filelist-template-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/uploader/filelist-template-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/uploader/filelist-template-cs1" %}

## Custom template

You can design your own template by preventing the default file list including buttons.
When you use a custom template to upload or remove the files, pass the custom UI argument as true to call the
[upload](https://ej2.syncfusion.com/vue/documentation/api/uploader/index-default#upload) / [remove](https://ej2.syncfusion.com/vue/documentation/api/uploader/index-default#remove) public methods as follows:

* `UploaderObj.upload(filesData, true);`

* `UploaderObj.remove(filesData, true);`

Refer to the following code sample.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/uploader/custom-template-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/uploader/custom-template-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/uploader/custom-template-cs1" %}

>You can also explore [Vue File Upload](https://www.syncfusion.com/vue-ui-components/vue-file-upload) feature tour page for its groundbreaking features. You can also explore our [Vue File Upload example](https://ej2.syncfusion.com/vue/demos/#/material/uploader/default.html) to understand how to browse the files which you want to upload to the server.

## See Also

* [Customize progress bar](./how-to/customize-progressbar)
* [Customize button with HTML element](./how-to/customize-button-with-html-element)
* [Customize drop area](./how-to/hide-default-drop-area)