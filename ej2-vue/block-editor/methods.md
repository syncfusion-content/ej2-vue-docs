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

you can add a new block to the editor at a specified position using the [addBlock](../api/blockeditor/#addblock) method. You can also insert the block before or after a target block.

### Removing a block

You can remove a block from the editor using the [removeBlock](../api/blockeditor/#removeblock) method.

### Getting a block

You can retrieve a block model by its unique identifier using the [getBlock](../api/blockeditor/#getblock) method. Returns `null` if the block is not found.

### Moving a block

You can move a block from one position to another within the editor using the [moveBlock](../api/blockeditor/#moveblock) method.

### Updating a block

You can update the properties of an existing block using the [updateBlock](../api/blockeditor/#updateblock) method. Only the specified properties are modified while others remain unchanged. Returns `true` if the update was successful, `false` otherwise.

## Selection and Cursor Methods

### Setting text selection

You can set the text selection within a specific content element using start and end positions with the [setSelection](../api/blockeditor/#setselection) method.

### Setting cursor position

You can place the cursor at a specific position within a block using the [setCursorPosition](../api/blockeditor/#setcursorposition) method.

### Getting selected blocks

You can retrieve the currently selected blocks in the editor using the [getSelectedBlocks](../api/blockeditor/#getselectedblocks) method. Returns `null` if no blocks are selected.

### Getting selection range

You can get the current selection range  in the editor using the [getRange](../api/blockeditor/#getrange) method. This method returns a `Range` object representing the selected text. Returns `null` if no selection is active.

### Setting selection range

You can set the selection range in the editor using the [selectRange](../api/blockeditor/#selectrange) method. This method accepts a `Range` object that defines the start and end positions of the selection within the editor.

### Selecting a block

You can select a specific block in the editor using the [selectBlock](../api/blockeditor/#selectblock) method.

### Selecting all blocks

You can select all blocks in the editor using the [selectAllBlocks](../api/blockeditor/#selectallblocks) method.

## Focus Management Methods

### FocusIn

You can utilize the [focusIn](../api/blockeditor/#focusin) method to give focus to the editor. This method ensures that the editor is ready for user input.

### FocusOut

You can remove focus from the editor using the [focusOut](../api/blockeditor/#focusout) method. This method clears any active selections and makes the editor inactive for user input.

## Formatting Methods

### Executing toolbar action

You can execute a built-in toolbar formatting command using the [executeToolbarAction](../api/blockeditor/#executetoolbaraction) method. This method is used to apply formatting such as bold, italic, or color to the selected text.

### Enabling toolbar items

You can enable specific toolbar items in the inline toolbar using the [enableToolbarItems](../api/blockeditor/#enabletoolbaritems) method. This method accepts a single item or an array of items to be enabled.

### Disabling toolbar items

You can disable specific toolbar items in the inline toolbar using the [disableToolbarItems](../api/blockeditor/#disabletoolbaritems) method. This method accepts a single item or an array of items to be disabled.

## Data Export Methods

### Getting data as JSON

You can export the editor content in JSON format using the [getDataAsJson](../api/blockeditor/#getdataasjson) method. This method allows you to export all blocks or a specific block.

### Getting data as HTML

You can export the editor content in HTML format using the [getDataAsHtml](../api/blockeditor/#getdataashtml) method. This method allows you to export all blocks or a specific block.

## Utility Methods

### Getting block count

You can utilize the [getBlockCount](../api/blockeditor/#getblockcount) method to retrieve the total number of blocks in the editor.

### Printing editor content

You can print the editor content using the [print](../api/blockeditor/#print) method. This method opens a print dialog with the current editor content formatted for printing.