---
layout: post
title:  Selection in Vue Rich Text Editor component | Syncfusion
description: Learn how to select a character range using Vue Rich Text Editor component of Syncfusion Essential JS 2 and more.
platform: ej2-vue
control: Text Selection
documentation: ug
domainurl: ##DomainURL##
---

# Selection in Vue Rich Text Editor Component

## Text selection

The Rich Text Editor supports character range-based text selection using the **Syncfusion Slider** component. This feature allows users to select a specific range of characters (e.g., 33–45) within the editor content, which is then automatically highlighted.

### Adding a Slider for character range selection

The Rich Text Editor can be integrated with the **Slider** component to enable precise character range-based text selection. The slider is configured in `range` type, allowing users to select a start and end index within the editor content. When the slider values change, the corresponding text range is highlighted automatically. 

This approach is particularly useful for scenarios where exact character-level selection is required for operations such as copying, formatting, or analysis.

{% tabs %}
{% highlight html tabtitle="~/src/App.vue" %}

<template>
    <ejs-slider id="range" :type="'Range'" :value="sliderValue" :min="0" :max="maxLength" />
</template>

<script>
export default {
    name: "App",
    components: {
        'ejs-richtexteditor': RichTextEditorComponent,
        'ejs-slider': SliderComponent,
    },
    data: function() {
        return {
            sliderValue: [0, 50],
            maxLength: 400,
        };
    },
    provide:{
        richtexteditor:[Toolbar, Link, Image, HtmlEditor, QuickToolbar]
    }
}
</script>

{% endhighlight %}
{% endtabs %}

### Dynamic range adjustment based on content

When the editor is created, the actual length of the text content is calculated, and the slider’s maximum value is updated dynamically to match this length. This ensures that the slider range always reflects the current content size. The editor is also focused programmatically to make the selection visible, and an initial selection is applied based on the slider’s default values.

{% tabs %}
{% highlight html tabtitle="~/src/App.vue" %}

<template>
    <ejs-richtexteditor ref="rteObj" id="editor" :value="rteValue" @created="onEditorCreated"> </ejs-richtexteditor>
</template>

<script>
export default {
    name: "App",
    components: {
        'ejs-richtexteditor': RichTextEditorComponent,
        'ejs-slider': SliderComponent,
    },
    data: function() {
        return {
            rteValue: `<p>The Syncfusion Rich Text Editor, a WYSIWYG ("what you see is what you get") editor, is a user interface that allows you to create, edit, and format rich text content. You can try out a demo of this editor here. Key features: Provides IFRAME and DIV modes. Bulleted and numbered lists. Handles images, hyperlinks, videos, uploads, etc. Contains undo/redo manager.</p>`,
        };
    },
    provide:{
        richtexteditor:[Toolbar, Link, Image, HtmlEditor, QuickToolbar]
    },
    methods: {
        onEditorCreated() {
            const panel = this.$refs.rteObj.ej2Instances.contentModule.getEditPanel();
            const realLength = panel?.textContent?.length ?? 0;
            this.maxLength = realLength;
            panel.focus();
            // Initial selection based on sliderValue
            this.onSliderChange({ value: this.sliderValue });
        },
    }
}
</script>

{% endhighlight %}
{% endtabs %}

### Precise selection using DOM range

The selection logic is implemented in the [change](https://ej2.syncfusion.com/vue/documentation/api/slider/index-default#change) event of the slider. It retrieves the start and end positions from the slider and ensures they are within valid bounds. The code then uses a helper function, `getTextNodeAtOffset()`, which employs a `TreeWalker` to traverse text nodes and locate the exact node and offset for the given character positions. 

A Range object is created using these offsets and applied to the current selection using the browser’s `Selection` API. This guarantees accurate highlighting even when the content spans multiple text nodes.

{% tabs %}
{% highlight html tabtitle="~/src/App.vue" %}

<template>
    <ejs-slider id="range" :type="'Range'"  @change="onSliderChange" :value="sliderValue" :min="0" :max="maxLength" />
</template>

<script>
export default {
    name: "App",
    components: {
        'ejs-richtexteditor': RichTextEditorComponent,
        'ejs-slider': SliderComponent,
    },
    data: function() {
        return {
            sliderValue: [0, 50],
            maxLength: 400,
        };
    },
    provide:{
        richtexteditor:[Toolbar, Link, Image, HtmlEditor, QuickToolbar]
    },
    methods: {
        onSliderChange(args) {
            const [start, end] = args.value;
            const panel = this.$refs.rteObj.ej2Instances.contentModule.getEditPanel();
            const maxLen = panel?.textContent?.length ?? 0;

            const safeStart = Math.min(start, maxLen);
            const safeEnd = Math.min(end, maxLen);

            const startInfo = this.getTextNodeAtOffset(panel, safeStart);
            const endInfo = this.getTextNodeAtOffset(panel, safeEnd);

            if (startInfo && endInfo) {
                const range = document.createRange();
                range.setStart(startInfo.node, startInfo.offset);
                range.setEnd(endInfo.node, endInfo.offset);

                const selection = window.getSelection();
                if (selection) {
                    selection.removeAllRanges();
                    selection.addRange(range);
                }
            }
            this.sliderValue = [safeStart, safeEnd];
        },
    }
}
</script>

{% endhighlight %}
{% endtabs %}

### Helper function for accurate offset calculation

The `getTextNodeAtOffset()` function uses a `TreeWalker` to traverse text nodes inside the editor and determine the exact node and offset for a given character index. This ensures that even complex content structures are handled correctly.

{% tabs %}
{% highlight html tabtitle="~/src/App.vue" %}

<script>
export default {
    name: "App",
    components: {
        'ejs-richtexteditor': RichTextEditorComponent,
        'ejs-slider': SliderComponent,
    },
    data: function() {},
    provide:{
        richtexteditor:[Toolbar, Link, Image, HtmlEditor, QuickToolbar]
    },
    methods: {
        getTextNodeAtOffset(root, offset) {
            let currentOffset = 0;
            const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, null);
            while (walker.nextNode()) {
                const node = walker.currentNode;
                const nodeLength = node.textContent.length;

                if (currentOffset + nodeLength >= offset) {
                    return {
                        node,
                        offset: offset - currentOffset,
                    };
                }
                currentOffset += nodeLength;
            }
            return null;
        },
    }
}
</script>

{% endhighlight %}
{% endtabs %}

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/rich-text-editor/selection/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/rich-text-editor/selection/app.vue %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/rich-text-editor/selection" %}

## Node selection

Node selection allows users to programmatically select entire HTML elements (nodes) such as paragraphs, images, or tables within the Rich Text Editor. This is useful when you want to highlight or manipulate specific content blocks without relying on manual user selection.

The following example demonstrates how to select a paragraph node programmatically using the browser's native `Range` and `Selection` APIs.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/rich-text-editor/node-selection/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/rich-text-editor/node-selection/app.vue %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/rich-text-editor/node-selection" %}

## Cell selection

Cell selection allows users to programmatically select specific table cells within the Rich Text Editor. This is useful for highlighting or manipulating content inside tables without requiring manual user interaction.

The following example demonstrates how to select a table cell programmatically using the browser's native `Range` and `Selection` APIs.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/rich-text-editor/cell-selection/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/rich-text-editor/cell-selection/app.vue %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/rich-text-editor/cell-selection" %}

## Select all content

To select all content within the Rich Text Editor, use the [selectAll](https://ej2.syncfusion.com/vue/documentation/api/rich-text-editor/index-default#selectall) method. This method highlights all the text and elements inside the editor, allowing users to perform actions such as formatting or deleting the entire content.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/rich-text-editor/select-all-content/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/rich-text-editor/select-all-content/app.vue %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/rich-text-editor/select-all-content" %}