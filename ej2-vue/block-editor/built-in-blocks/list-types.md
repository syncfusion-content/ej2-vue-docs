---
layout: post
title: Lists in Vue Block Editor Component | Syncfusion
description: Checkout and learn about List Blocks with Vue Block Editor component of Syncfusion Essential JS 2 and more.
platform: ej2-vue
control: Block Editor
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Lists in Vue Block Editor component

The Syncfusion Vue Block Editor component uses list blocks to organize content into structured lists. To render a specific list type, set the [blockType](../../api/blockeditor/blockModel#blockType) property of the `BlockModel` to `BulletList`, `NumberedList`, or `Checklist`. Bullet lists are ideal for unordered items, numbered lists for ordered items, and checklists for interactive to-do lists.

## Configure bullet list 

You can render a Bullet List block by setting the [blockType](../../api/blockeditor/blockModel#blockType) property to `BulletList`. This block type is used to display unordered lists.

### BlockType

```typescript
// Adding bulletlist block
{
    blockType: 'BulletList',
    content: [
        {
            contentType: ContentType.Text,
            content: 'your content'
        }
    ]
}
```

### Configure placeholder

The [placeholder](../../api/blockeditor/blockModel#placeholder) property sets the text that appears when the block is empty. The default placeholder for a bullet list is `Add item`.

```typescript
// Adding placeholder value 
{
    blockType: 'BulletList',
    properties: { placeholder: 'bullet'},
    content: [
        {
            contentType: ContentType.Text,
            content: 'your content'
        }
    ]
}
```

## Configure numbered list

You can render a Numbered List block by setting the [blockType](../../api/blockeditor/blockModel#blockType) property to `NumberedList`. This block type is used to display ordered lists.

### BlockType

```typescript
// Adding numberedlist block
{
    blockType: 'NumberedList',
    content: [
        {
            contentType: ContentType.Text,
            content: 'your content'
        }
    ]
}
```

### Configure placeholder

The [placeholder](../../api/blockeditor/blockModel#placeholder) property sets the text that appears when the block is empty. The default placeholder for a numbered list is `Add item`.

```typescript
// Adding placeholder value 
{
    blockType: 'NumberedList',
    properties: { placeholder: 'number'},
    content: [
        {
            contentType: ContentType.Text,
            content: 'your content'
        }
    ]
}
```

## Configure the Checklist

You can render a Checklist block by setting the [blockType](../../api/blockeditor/blockModel#blockType) property to `Checklist`. This block type is used for creating interactive to-do lists.

### BlockType

```typescript
// Adding checklist block 
{
    blockType: 'Checklist',
    content: [
        {
            contentType: ContentType.Text,
            content: 'your content'
        }
    ]
}
```

### Configure checked state

For blocks that support selection states, such as a `Checklist`, you can configure the checked state using the `properties` property with [isChecked](../../api/blockeditor/blockModel#ischecked).

By default, the [isChecked](../../api/blockeditor/blockModel#ischecked) property is set to `false`.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/block-editor/blocks/isChecked/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/block-editor/blocks/isChecked/app.vue %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/code-snippet/block-editor/blocks/isChecked" %}

### Configure placeholder

The [placeholder](../../api/blockeditor/blockModel#placeholder) property sets the text that appears when the block is empty. The default placeholder for a checklist is `Todo`.

```typescript
// Adding placeholder value 
{
    blockType: 'Checklist',
    properties: { placeholder: 'check'},
    content: [
        {
            contentType: ContentType.Text,
            content: 'your content'
        }
    ]
}
```

## Configure list blocks

Below example illustrates how to render the different types of list blocks in the Block Editor.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/block-editor/blocks/block-types/list-block/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/block-editor/blocks/block-types/list-block/app.vue %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/code-snippet/block-editor/blocks/block-types/list-block" %}

