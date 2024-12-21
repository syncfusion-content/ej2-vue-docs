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

File manager can be rendered inside the other components like Tab, Dialog, and more.

* [Adding File manager inside the dialog](#adding-file-manager-inside-the-dialog)
* [Adding  File manager inside the tab](#adding-file-manager-inside-the-tab)

## Adding File manager inside the dialog

The following example shows the File manager component rendered inside the dialog. Click the browse button in the Upload element to open the File manager inside the Dialog component.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/file-manager/file-upload-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/file-manager/file-upload-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/file-manager/file-upload-cs1" %}

## Adding File manager inside the tab

The following example demonstrates that the File manager component is placed inside the content area of tab element.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/file-manager/file-tab-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/file-manager/file-tab-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/file-manager/file-tab-cs1" %}