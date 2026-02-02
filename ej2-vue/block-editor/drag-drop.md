---
layout: post
title: Drag and drop in Vue Block Editor Component | Syncfusion
description: Checkout and learn about Drag and drop with Syncfusion Essential Vue Block Editor component, its elements, and more details.
platform: ej2-vue
control: Block Editor 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Drag and drop in Vue Block Editor component

The drag and drop feature in the Block Editor allows users to intuitively rearrange content blocks by dragging them to different positions within the editor.

## Enable Drag and Drop

You can control the drag and drop functionality within the Block Editor using the [enableDragAndDrop](../api/blockeditor#enabledraganddrop) property. This feature is enabled by default (`true`).

## Dragging blocks

When drag and drop is enabled, users can rearrange blocks in the following ways:

The Block Editor supports both single and multiple block dragging. Users can drag individual blocks or select multiple blocks and drag them together to a new position.

- **Single Block Dragging**: To drag a single block, hover over it to reveal the drag handle. Click and hold the handle, then drag the block to a new position.

- **Multiple Block Dragging**: To move multiple blocks, first select the desired blocks. Once selected, click and drag the entire group to a new location.

During the drag operation, a visual indicator will show precisely where the blocks will be placed when dropped, ensuring accurate placement.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/block-editor/drag-drop/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/block-editor/drag-drop/app.vue %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/code-snippet/block-editor/drag-drop" %}