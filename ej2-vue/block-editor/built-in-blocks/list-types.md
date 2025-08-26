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

List blocks in the BlockEditor component are used to organize content into structured lists. You can render List blocks by setting the [type](../api/blockeditor/blockModel/#type) property as `BulletList`, `NumberedList`, or `Checklist`. Bullet lists and numbered lists are ideal for unordered and ordered items, respectively, while checklist blocks enable interactive to-do lists with checkable items.

## Configure bullet list 

You can render Bullet List block by setting the [type](../api/blockeditor/blockModel/#type) property as `BulletList`. This block type is used for unordered lists.

### Type

```typescript
// Adding bulletlist block
{
    type: 'BulletList',
    content: [
        {
            type: ContentType.Text,
            content: 'your content'
        }
    ]
}
```

### Configure placeholder

You can configure placeholder text for block using the [placeholder](../api/blockeditor/blockModel/#placeholder) property. This text appears when the block is empty. The default placeholder for bullet list is  `Add item`.

```typescript
// Adding placeholder value 
{
    type: 'BulletList',
    props: { placeholder: 'bullet'},
    content: [
        {
            type: ContentType.Text,
            content: 'your content'
        }
    ]
}
```

## Configure numbered list

You can render Numbered List block by setting the [type](../api/blockeditor/blockModel/#type) property as  `NumberedList`.This block type is used for ordered lists.

### Type

```typescript
// Adding numberedlist block
{
    type: 'NumberedList',
    content: [
        {
            type: ContentType.Text,
            content: 'your content'
        }
    ]
}
```

### Configure placeholder

You can configure placeholder text for block using the [placeholder](../api/blockeditor/blockModel/#placeholder) property. This text appears when the block is empty. The default placeholder for numbered list is  `Add item`.

```typescript
// Adding placeholder value 
{
    type: 'NumberedList',
    props: { placeholder: 'number'},
    content: [
        {
            type: ContentType.Text,
            content: 'your content'
        }
    ]
}
```

## Configure checklist

You can render Check List block by setting the [type](../api/blockeditor/blockModel/#type) property as `Checklist`. This block type is used for creating interactive to-do lists.

### Type

```typescript
// Adding checklist block 
{
    type: 'Checklist',
    content: [
        {
            type: ContentType.Text,
            content: 'your content'
        }
    ]
}
```

### Configure checked state

For blocks that support selection states such as `CheckList`, you can configure the checked state using the `props` property with [isChecked](../api/blockeditor/blockModel/#ischecked).

By default, the [isChecked](../api/blockeditor/blockModel/#ischecked) property is set to `false`.

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

You can configure placeholder text for block using the [placeholder](../api/blockeditor/blockModel/#placeholder) property. This text appears when the block is empty. The default placeholder for check list is  `To Do`.

```typescript
// Adding placeholder value 
{
    type: 'Checklist',
    props: { placeholder: 'check'},
    content: [
        {
            type: ContentType.Text,
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

