---
layout: post
title: Template in Vue Uploader component | Syncfusion
description: Learn here all about Template in Syncfusion Vue Uploader component of Syncfusion Essential JS 2 and more.
control: Template 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Template in Vue Uploader component

You can customize the default appearance of the uploader using a template along with buttons.

## File list template

The [template](https://ej2.syncfusion.com/vue/documentation/api/uploader/#template) property is used to customize the default appearance of each file in the list. It can be represented as the HTML element or string. The selected or dropped files are displayed as per the template layout provided. The remove and progress bar action is handled using the corresponding events when the template is defined.

For example, you can display file type icon along with default UI elements.

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

You can design the own template by preventing the default file list including buttons.
when you use custom template to upload or remove the files, pass the custom UI argument as true to call
[upload](https://ej2.syncfusion.com/vue/documentation/api/uploader/#upload) / [remove](https://ej2.syncfusion.com/vue/documentation/api/uploader/#remove) public method as follows:

* UploaderObj.upload(filesData, true);

* UploaderObj.remove(filesData, true);

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