---
layout: post
title: Nested items in Vue File Manager component | Syncfusion
description: Learn here all about Nested items in Syncfusion Vue File Manager component of Syncfusion Essential JS 2 and more.
control: Nested items 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Nested items in Vue File Manager component

File Manager can be rendered inside the other components like Tab, Dialog, and more.

* [Adding File Manager inside the dialog](#adding-file-manager-inside-the-dialog)
* [Adding  File Manager inside the tab](#adding-file-manager-inside-the-tab)

## Adding File Manager inside the dialog

The following example shows the File Manager component rendered inside the dialog. Click the browse button in the Upload element to open the File Manager inside the Dialog component.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/file-manager/file-upload-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/file-manager/file-upload-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/file-manager/file-upload-cs1" %}

## Adding File Manager inside the tab

The following example demonstrates that the File Manager component is placed inside the content area of tab element.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/file-manager/file-tab-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/file-manager/file-tab-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/file-manager/file-tab-cs1" %}