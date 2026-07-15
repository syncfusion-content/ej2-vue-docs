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

The Block Editor component provides a comprehensive set of public methods to programmatically interact with and manipulate the editor content. These methods enable adding, removing, updating, and managing blocks, as well as controlling selection, formatting, and other editor operations.

## Block Management Methods

### Adding a block

Add a new block to the editor at a specified position using the [addBlock](https://ej2.syncfusion.com/vue/documentation/api/blockeditor/index-default#addblock) method. This method can also insert the block before or after a target block.

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

Remove a block from the editor using the [removeBlock](https://ej2.syncfusion.com/vue/documentation/api/blockeditor/index-default#removeblock) method.

### Moving a block

Move a block from one position to another within the editor using the [moveBlock](https://ej2.syncfusion.com/vue/documentation/api/blockeditor/index-default#moveblock) method.

### Updating a block

Update the properties of an existing block with the [updateBlock](https://ej2.syncfusion.com/vue/documentation/api/blockeditor/index-default#updateblock) method. Only the specified properties are modified, while others remain unchanged. It returns `true` if the update was successful and `false` otherwise.

### Getting a block

Retrieve a block model by its unique identifier using the [getBlock](https://ej2.syncfusion.com/vue/documentation/api/blockeditor/index-default#getblock) method. It returns `null` if the block is not found.

### Getting block count

Use the [getBlockCount](https://ej2.syncfusion.com/vue/documentation/api/blockeditor/index-default#getblockcount) method to retrieve the total number of blocks in the editor.

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

Set the text selection within a specific content element using start and end positions with the [setSelection](https://ej2.syncfusion.com/vue/documentation/api/blockeditor/index-default#setselection) method.

### Setting cursor position

Place the cursor at a specific position within a block using the [setCursorPosition](https://ej2.syncfusion.com/vue/documentation/api/blockeditor/index-default#setcursorposition) method.

### Getting selected blocks

Retrieve the currently selected blocks in the editor with the [getSelectedBlocks](https://ej2.syncfusion.com/vue/documentation/api/blockeditor/index-default#getselectedblocks) method. It returns `null` if no blocks are selected.

### Getting selection range

Get the current selection range in the editor using the [getRange](https://ej2.syncfusion.com/vue/documentation/api/blockeditor/index-default#getrange) method. This method returns a `Range` object representing the selected text, or `null` if no selection is active.

### Setting selection range

Set the selection range in the editor using the [selectRange](https://ej2.syncfusion.com/vue/documentation/api/blockeditor/index-default#selectrange) method. This method accepts a `Range` object that defines the start and end positions of the selection.

### Selecting a block

Select a specific block in the editor using the [selectBlock](https://ej2.syncfusion.com/vue/documentation/api/blockeditor/index-default#selectblock) method.

### Selecting all blocks

Select all blocks in the editor using the [selectAllBlocks](https://ej2.syncfusion.com/vue/documentation/api/blockeditor/index-default#selectallblocks) method.

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

Use the [focusIn](https://ej2.syncfusion.com/vue/documentation/api/blockeditor/index-default#focusin) method to programmatically set focus on the editor, making it ready for user input.

### FocusOut

Use the [focusOut](https://ej2.syncfusion.com/vue/documentation/api/blockeditor/index-default#focusout) method to programmatically remove focus from the editor. This clears any active selections and makes the editor inactive.

## Formatting Methods

### Executing toolbar action

Execute a built-in toolbar formatting command using the [executeToolbarAction](https://ej2.syncfusion.com/vue/documentation/api/blockeditor/index-default#executetoolbaraction) method. Use this to apply formatting such as bold, italic, or color to the selected text.

### Enabling toolbar items

Enable specific items in the inline toolbar using the [enableToolbarItems](https://ej2.syncfusion.com/vue/documentation/api/blockeditor/index-default#enabletoolbaritems) method. This method accepts a single item or an array of items to enable.

### Disabling toolbar items

Disable specific items in the inline toolbar using the [disableToolbarItems](https://ej2.syncfusion.com/vue/documentation/api/blockeditor/index-default#disabletoolbaritems) method. This method accepts a single item or an array of items to disable.

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

Export the editor content in JSON format using the [getDataAsJson](https://ej2.syncfusion.com/vue/documentation/api/blockeditor/index-default#getdataasjson) method. This method allows exporting all blocks or a specific block.

### Getting data as HTML

Export the editor content in HTML format using the [getDataAsHtml](https://ej2.syncfusion.com/vue/documentation/api/blockeditor/index-default#getdataashtml) method. This method allows exporting all blocks or a specific block.

### Rendering Blocks from JSON

Renders blocks from JSON data using the [renderBlocksFromJson](https://ej2.syncfusion.com/vue/documentation/api/blockeditor/index-default#renderblocksfromjson) method. This method allows either replacing all existing content or inserting at the cursor position.

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
Convert an HTML string into an array of `BlockModel` objects using the [parseHtmlToBlocks](https://ej2.syncfusion.com/vue/documentation/api/blockeditor/index-default#parsehtmltoblocks) method. This method allows transforming HTML content into structured editor blocks.

```typescript
// Parse HTML into block
const blocks: BlockModel[] = editor.parseHtmlToBlocks(html);
```

### Printing editor content

Print the editor content using the [print](https://ej2.syncfusion.com/vue/documentation/api/blockeditor/index-default#print) method. This action opens the browser's print dialog with the current editor content.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/block-editor/methods/data/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/block-editor/methods/data/app.vue %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/code-snippet/block-editor/methods/data" %}