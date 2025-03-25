---
layout: post
title: Miscellaneous in Vue Rich text editor component | Syncfusion
description: Learn here all about Miscellaneous in Syncfusion Vue Rich text editor component of Syncfusion Essential JS 2 and more.
control: Miscellaneous 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Miscellaneous in Vue Rich text editor component

## Code view

Rich Text Editor includes the ability for users to directly edit HTML code via `Source View` in the text area. If you made any modification in Source view directly, the changes will be reflected in the Rich Text Editor's content. So, the users will have more flexibility over the content they have created.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/rich-text-editor/code-mirror-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/rich-text-editor/code-mirror-cs1/app.vue %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/rich-text-editor/code-mirror-cs1/index.html %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/rich-text-editor/code-mirror-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/rich-text-editor/code-mirror-cs1" %}

## Undo/Redo manager

Undo and redo tools allow you to edit the text by disregard/cancel the recently made changes and restore it to previous state. It is a useful tool to restore the performed action which got changed by mistake. By default, upto 30 actions can be undo/redo in the editor.

To undo and redo operations, do one of the following:
* Press the undo/redo button on the toolbar.
* Press the **Ctrl + Z/Ctrl + Y** combination on the keyboard.

Customize the undo/redo step count using the [undoRedoSteps](https://ej2.syncfusion.com/vue/documentation/api/rich-text-editor/#undoredosteps) property. By default, undo/redo actions take 300ms time interval for store the action to the undoRedoManager. The time interval can be customized by using the [undoRedoTimer](https://ej2.syncfusion.com/vue/documentation/api/rich-text-editor/#undoredotimer).



