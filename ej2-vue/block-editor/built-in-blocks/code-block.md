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

You can render Code blocks by setting the [type](../api/blockeditor/blockModel/#type) property as `Code`. By setting the `props` property, you can configure the languages available for syntax highlighting and the default language. The default language is `javascript`.

## Configure code properties

For Code blocks, you can configure syntax highlighting and language options using the [props](../api/blockeditor/blockModel/) property.

The code [props](../api/blockeditor/blockModel/) property supports the following options:

| Property | Description | Default Value |
|----------|-------------|---------------|
| [languages](../api/blockeditor/codeSettingsModel/#languages) | Array of language options for syntax highlighting | [] |
| [defaultLanguage](../api/blockeditor/codeSettingsModel/#defaultlanguage) | The default language to use for syntax highlighting | 'javascript' |

Each language object in the `languages` array should have:
- [language](../api/blockeditor/codeLanguageModel/#language): The language value used for syntax highlighting
- [label](../api/blockeditor/codeLanguageModel/#label): The display name shown in the language selector

### Type & Props
```typescript
// Adding Code block
{
    type: 'Code',
    content: [
        {
            //your content
        }
    ],
    props: {
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