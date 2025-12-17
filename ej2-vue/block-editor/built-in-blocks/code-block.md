---
layout: post
title: Code Blocks in Vue Block Editor Component | Syncfusion
description: Checkout and learn about Code Blocks with Vue Block Editor component of Syncfusion Essential JS 2 and more.
platform: ej2-vue
control: Block Editor
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Code Blocks in Vue Block Editor component

The Syncfusion Block Editor allows you to render code snippets with syntax highlighting by setting the block's [blockType](../api/blockeditor/blockModel#blockType) property to `Code`. You can customize the available programming languages and set a default language using the `properties` property.

## Global Code Settings

You can configure global settings for code blocks using the `codeBlockSettings` property in the Block Editor root configuration. This ensures consistent behavior for syntax highlighting and language options across all code blocks.

The `codeBlockSettings` property supports the following options:

| Property | Description | Default Value |
|----------|-------------|---------------|
| [languages](../api/blockeditor/codeSettingsModel#languages) | Specifies the array of language options for syntax highlighting. | [] |
| [defaultLanguage](../api/blockeditor/codeSettingsModel#defaultlanguage) | Defines the default language to use for syntax highlighting. | 'plaintext' |

## Configure code properties

For Code blocks, you can specify the language for syntax highlighting using the [properties](../api/blockeditor/blockModel) property. This property supports the following options:
- [language](../api/blockeditor/codeLanguageModel#language): The language value used for syntax highlighting.

### BlockType & Properties
```typescript
// Adding Code block
{
    blockType: 'Code',
    content: [
        {
            const x = 10;
        }
    ],
    properties: {
        defaultLanguage: 'javascript',
        languages: [
        { language: 'javascript', label: 'JavaScript' },
        { language: 'typescript', label: 'TypeScript' },
        { language: 'html', label: 'HTML' },
        { language: 'css', label: 'CSS' }
        ]
    }
    }
```

Below example illustrates how to render the different code block in the Block Editor.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/block-editor/blocks/block-types/code-block/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/block-editor/blocks/block-types/code-block/app.vue %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/code-snippet/block-editor/blocks/block-types/code-block" %}