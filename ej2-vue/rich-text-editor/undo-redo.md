---
layout: post
title: Undo redo in Vue Rich Text Editor component | Syncfusion
description: Learn here all about Undo redo in Syncfusion Vue Rich Text Editor component of Syncfusion Essential JS 2 and more.
platform: ej2-vue
control: Undo redo 
documentation: ug
domainurl: ##DomainURL##
---

# Undo redo in the Vue Rich Text Editor component

The Undo and Redo features in the Rich Text Editor allowing you to reverse or restore recent changes, providing a safety net for text edits and enhancing the overall editing experience.

There are two ways to perform Undo and Redo operations:

1. Click the Undo or Redo buttons on the toolbar.
2. Use keyboard shortcuts:
   - For Undo: `Ctrl + Z` (Windows) or `Cmd + Z` (Mac)
   - For Redo: `Ctrl + Y` (Windows) or `Cmd + Shift + Z` (Mac)

## Configuring Undo/Redo timer

By default, the time interval for storing Undo/Redo actions is 300 milliseconds. You can adjust this interval using the [undoRedoTimer](https://ej2.syncfusion.com/vue/documentation/api/rich-text-editor/#undoredotimer) property.

## Configuring Undo/Redo steps

The editor allows up to 30 Undo/Redo actions by default. You can modify the number of undo/redo steps using the [undoRedoSteps](https://ej2.syncfusion.com/vue/documentation/api/rich-text-editor/#undoredosteps) property.

Here's an example of how to customize both the Undo/Redo timer and steps:

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/rich-text-editor/getting-started-cs26/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/rich-text-editor/getting-started-cs26/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/rich-text-editor/getting-started-cs26" %}

## Clear Undo/Redo stack

The Rich Text Editor automatically maintains an undo/redo stack, allowing users to revert or redo changes made during editing.

To clear the entire undo and redo stack, use the public [clearUndoRedo](https://ej2.syncfusion.com/vue/documentation/api/rich-text-editor/#clearundoredo) method. This is helpful when loading new content dynamically or resetting the editor to its initial state.

Here's an example of how to clear the Undo/Redo stack:

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/rich-text-editor/undo-redo-stack/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/rich-text-editor/undo-redo-stack/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/rich-text-editor/undo-redo-stack" %}