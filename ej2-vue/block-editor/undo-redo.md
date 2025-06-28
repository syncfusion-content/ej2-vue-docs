---
layout: post
title: Undo redo in Vue Block Editor Component | Syncfusion
description: Checkout and learn about Undo redo with Syncfusion Essential Vue Block Editor component, its elements, and more details.
platform: ej2-vue
control: Block Editor 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Undo redo in Vue Block Editor component

The undo/redo feature in Block Editor enables users to revert or reapply changes made to the content, offering a safety net for edits and enhancing the overall editing experience.

## Keyboard shortcuts

| Action | Windows | Mac | Description |
|------------|--------------|---------|-----------------|
| Undo       | Ctrl + Z     | ⌘ + Z   | Reverts the last action. |
| Redo       | Ctrl + Y     | ⌘ + Y | Reapplies the last undone action. |

## Configuring Undo/Redo stack

Block Editor allows up to `30` Undo/Redo actions by default. You can modify the number of undo/redo steps using the [undoRedoStack](../api/blockeditor/#undoRedoStack) property.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/block-editor/undo-redo/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/block-editor/undo-redo/app.vue %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/code-snippet/block-editor/undo-redo" %}