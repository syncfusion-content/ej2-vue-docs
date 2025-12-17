---
layout: post
title: Methods in Vue Block Editor Component | Syncfusion
description: Checkout and learn about Methods with Syncfusion Essential Vue Block Editor component, its elements, and more details.
platform: ej2-vue
control: Block Editor 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Methods in Vue Block Editor component

The Block Editor component provides a comprehensive set of public methods that allow you to programmatically interact with and manipulate the editor content. These methods enable you to add, remove, update, and manage blocks, as well as control selection, formatting, and other editor operations. 

## Block Management Methods

### Adding a block

Add a new block to the editor at a specified position using the [addBlock](../api/blockeditor#addblock) method. This method can also insert the block before or after a target block.

```
<template>
  <div id='container'>
    <ejs-blockeditor ref="blockEditor"></ejs-blockeditor>
    <div id="controls">
        <div class="button-group">
            <button @click="addBlock">Add Block</button>
        </div>
    </div>  
  </div>
</template>

<script>
import { BlockEditorComponent, ContentType, AfterPasteEventArgs  } from "@syncfusion/ej2-vue-blockeditor";

export default {
    components: {
        'ejs-blockeditor': BlockEditorComponent,
    },
    data() {
        return {
        }
    },
    methods: {
    // Add a new paragraph block after a specific block
    addBlock: function() {
        const newBlock = {
            id: 'new-block',
            blockType: 'Paragraph',
            content: [
            {
                contentType: ContentType.Text,
                content: 'This is a newly added block'
            }
            ]
        };
        this.$refs.blockEditor.ej2Instances.addBlock(newBlock, 'block-2', true);
        }, // true = after, false = before
    }
};
</script>
```

### Removing a block

Remove a block from the editor using the [removeBlock](../api/blockeditor#removeblock) method.

### Moving a block

Move a block from one position to another within the editor using the [moveBlock](../api/blockeditor#moveblock) method.

### Updating a block

Update the properties of an existing block with the [updateBlock](../api/blockeditor#updateblock) method. Only the specified properties are modified, while others remain unchanged. It returns `true` if the update was successful and `false` otherwise.

### Getting a block

Retrieve a block model by its unique identifier using the [getBlock](../api/blockeditor#getblock) method. It returns `null` if the block is not found.

### Getting block count

Use the [getBlockCount](../api/blockeditor#getblockcount) method to retrieve the total number of blocks in the editor.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/block-editor/methods/block/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/block-editor/methods/block/app.vue %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/code-snippet/block-editor/methods/block" %}

## Selection and Cursor Methods

### Setting text selection

Set the text selection within a specific content element using start and end positions with the [setSelection](../api/blockeditor#setselection) method.

### Setting cursor position

Place the cursor at a specific position within a block using the [setCursorPosition](../api/blockeditor#setcursorposition) method.

### Getting selected blocks

Retrieve the currently selected blocks in the editor with the [getSelectedBlocks](../api/blockeditor#getselectedblocks) method. It returns `null` if no blocks are selected.

### Getting selection range

Get the current selection range in the editor using the [getRange](../api/blockeditor#getrange) method. This method returns a `Range` object representing the selected text, or `null` if no selection is active.

### Setting selection range

Set the selection range in the editor using the [selectRange](../api/blockeditor#selectrange) method. This method accepts a `Range` object that defines the start and end positions of the selection.

### Selecting a block

Select a specific block in the editor using the [selectBlock](../api/blockeditor#selectblock) method.

### Selecting all blocks

Select all blocks in the editor using the [selectAllBlocks](../api/blockeditor#selectallblocks) method.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/block-editor/methods/selection/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/block-editor/methods/selection/app.vue %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/code-snippet/block-editor/methods/selection" %}

## Focus Management Methods

### FocusIn

Use the [focusIn](../api/blockeditor#focusin) method to programmatically set focus on the editor, making it ready for user input.

### FocusOut

Use the [focusOut](../api/blockeditor#focusout) method to programmatically remove focus from the editor. This clears any active selections and makes the editor inactive.

## Formatting Methods

### Executing toolbar action

Execute a built-in toolbar formatting command using the [executeToolbarAction](../api/blockeditor#executetoolbaraction) method. Use this to apply formatting such as bold, italic, or color to the selected text.

### Enabling toolbar items

Enable specific items in the inline toolbar using the [enableToolbarItems](../api/blockeditor#enabletoolbaritems) method. This method accepts a single item or an array of items to enable.

### Disabling toolbar items

Disable specific items in the inline toolbar using the [disableToolbarItems](../api/blockeditor#disabletoolbaritems) method. This method accepts a single item or an array of items to disable.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/block-editor/methods/formatting/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/block-editor/methods/formatting/app.vue %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/code-snippet/block-editor/methods/formatting" %}

## Data Export Methods

### Getting data as JSON

Export the editor content in JSON format using the [getDataAsJson](../api/blockeditor#getdataasjson) method. This method allows exporting all blocks or a specific block.

### Getting data as HTML

Export the editor content in HTML format using the [getDataAsHtml](../api/blockeditor#getdataashtml) method. This method allows exporting all blocks or a specific block.

### Rendering Blocks from JSON

Renders blocks from JSON data using the [renderBlocksFromJson](../api/blockeditor#renderblocksfromjson) method. This method allows either replacing all existing content or inserting at the cursor position.

```typescript
// Replace all existing content
const replaceAllBlocks = editor.renderBlocksFromJson(jsonData, true);

// Insert at cursor (default behavior)
// Insert at cursor without replacing existing blocks (default behavior)
const insertedAtCursor = editor.renderBlocksFromJson(jsonData);

// Insert after a specific block (only applicable when replace = false)
const insertedAfterTarget = editor.renderBlocksFromJson(jsonData, false, 'target-block-id');
```

### Parsing HTML to Blocks
Convert an HTML string into an array of `BlockModel` objects using the [parseHtmlToBlocks](../api/blockeditor#parsehtmltoblocks) method. This method allows transforming HTML content into structured editor blocks.

```typescript
// Parse HTML into block
const blocks: BlockModel[] = editor.parseHtmlToBlocks(html);
```

### Printing editor content

Print the editor content using the [print](../api/blockeditor#print) method. This action opens the browser's print dialog with the current editor content.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/block-editor/methods/data/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/block-editor/methods/data/app.vue %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/code-snippet/block-editor/methods/data" %}