---
layout: post
title: Nested items in Vue File Manager component | Syncfusion
description: Learn here all about Nested items in Syncfusion Vue File Manager component of Syncfusion Essential JS 2 and more.
control: File Manager 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Nested items in Vue File Manager component

The File Manager can be rendered inside other components such as Tab, Dialog, and more.

* [Adding File Manager inside the dialog](#adding-file-manager-inside-the-dialog)
* [Adding  File Manager inside the tab](#adding-file-manager-inside-the-tab)

## Adding File Manager inside the dialog

The example below shows the File Manager rendered inside a Dialog. Use the Upload component's browse button to open the File Manager inside the Dialog.

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

The following example demonstrates placing the File Manager inside a Tab's content area.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/file-manager/file-tab-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/file-manager/file-tab-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/file-manager/file-tab-cs1" %}