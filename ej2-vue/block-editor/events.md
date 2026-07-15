---
layout: post
title: Events in Vue Block Editor Component | Syncfusion
description: Checkout and learn about Blocks with Syncfusion Essential Vue Block Editor component, its elements, and more details.
platform: ej2-vue
control: Block Editor 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Events in Vue Block Editor component

The Block Editor component provides a comprehensive set of events that allow you to monitor and respond to various user interactions and editor state changes. These events enable you to implement custom behaviors, validation, logging, and integration with other systems.

## Created

The [created](https://ej2.syncfusion.com/vue/documentation/api/blockeditor/index-default#created) event is triggered when the Block Editor component is successfully initialized and ready for use. This event is useful for performing setup operations or initializing additional features after the editor is created.

## BlockChanged

The [blockChanged](https://ej2.syncfusion.com/vue/documentation/api/blockeditor/index-default#blockchanged) event is triggered whenever the editor blocks are changed. This includes block additions, deletions, or any structural modifications to the document. Its event handler receives details about the changes.

## SelectionChanged

The [selectionChanged](https://ej2.syncfusion.com/vue/documentation/api/blockeditor/index-default#selectionchanged) event is triggered when the user's text selection changes within the editor. The event arguments contain details about the new selection, which can be useful for updating UI elements.

## BlockDragStart

The [blockDragStart](https://ej2.syncfusion.com/vue/documentation/api/blockeditor/index-default#blockdragstart) event is triggered at the beginning of a block drag operation, providing information about the blocks being dragged and their initial position.

## BlockDragging

The [blockDragging](https://ej2.syncfusion.com/vue/documentation/api/blockeditor/index-default#blockdragging) event is triggered continuously during a dragging operation, providing information about the blocks being dragged and their current position.

## BlockDropped

The [blockDropped](https://ej2.syncfusion.com/vue/documentation/api/blockeditor/index-default#blockdropped) event is triggered when blocks are successfully dropped at their destination during a drag-and-drop operation. This event includes data about the drop target and position.

## Focus

The [focus](https://ej2.syncfusion.com/vue/documentation/api/blockeditor/index-default#focus) event is triggered when the editor gains focus. This is useful for updating UI states and managing editor interactions.

## Blur

The [blur](https://ej2.syncfusion.com/vue/documentation/api/blockeditor/index-default#blur) event is triggered when the editor loses focus. This is commonly used for auto-saving content or hiding UI elements that should only be visible when the editor is active.

## BeforePasteCleanup

The [beforePasteCleanup](https://ej2.syncfusion.com/vue/documentation/api/blockeditor/index-default#beforepastecleanup) event is triggered before content is pasted into the editor. This event allows you to inspect, modify, or cancel the paste operation via its event arguments.

## AfterPasteCleanup

The [afterPasteCleanup](https://ej2.syncfusion.com/vue/documentation/api/blockeditor/index-default#afterpastecleanup) event is triggered after content has been successfully pasted into the editor. This is useful for post-processing pasted content or updating related UI elements.