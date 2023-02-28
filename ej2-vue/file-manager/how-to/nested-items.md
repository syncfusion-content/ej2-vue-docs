---
layout: post
title: Nested items in Vue File manager component | Syncfusion
description: Learn here all about Nested items in Syncfusion Vue File manager component of Syncfusion Essential JS 2 and more.
control: Nested items 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Nested items in Vue File manager component

FileManager can be rendered inside the other components like Tab, Dialog, and more.

* [Adding file manager inside the dialog](#adding-file-manager-inside-the-dialog)
* [Adding  file manager inside the tab](#adding-file-manager-inside-the-tab)

## Adding file manager inside the dialog

The following example shows the file manager component rendered inside the dialog. Click the browse button in the Uploader element to open the File Manager inside the Dialog control.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/file-manager/file-upload-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/file-manager/file-upload-cs1" %}

## Adding file manager inside the tab

The following example demonstrate that the file manager component is placed inside the content area of tab element.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/file-manager/file-tab-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/file-manager/file-tab-cs1" %}