---
layout: post
title: Character count in Vue Rich Text Editor component | Syncfusion
description:  Learn here all about Character count in Syncfusion Vue Rich Text Editor component of Syncfusion Essential JS 2 and more.
platform: ej2-vue
control: Character count
documentation: ug
domainurl: ##DomainURL##
---

# Character Count in Vue Rich Text Editor component


The Character Count feature in the Rich Text Editor allows you to track and display the number of characters entered in the editor. This feature is particularly useful when you need to limit the content length or provide visual feedback to users about their input.

## How to Enable Character Count

To enable the character count feature, set the `showCharCount` property to `true`. By default, this property is set to `false`.

When enabled, the character count is displayed at the bottom right corner of the editor.

>To use quick `Character Count` feature, configure `Count` in the provider section.

## Understanding Character Count Color Indicators

The character count color will be modified based on the characters in the Rich Text Editor.

| Status | Description |
|----------------|---------|
| normal | The character count color remains black until 70% of the maxLength count is reached.|
| warning | When the character count reaches 70% of the maxLength, the color changes to orange, indicating that the maximum limit is approaching.|
| error |Once the character count hits 90% of the maxLength, the color turns red, signaling that the limit is nearly reached.|

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/rich-text-editor/getting-started-cs25/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/rich-text-editor/getting-started-cs25/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/rich-text-editor/getting-started-cs25" %}

## Setting Maximum Character Limit

You can restrict the number of characters entered in the editor by setting the `maxLength` property to a specific numeric value. When set, the maximum allowable character count is displayed alongside the current count at the bottom right of the editor.

If `maxLength` is not set, there is no limit to the character count in the editor.

## Retrieving Character Count Programmatically

You can programmatically get the current character count in the editor using the [getCharCount](https://ej2.syncfusion.com/vue/documentation/api/rich-text-editor/#getcharcount) public method.

```javascript

  const editorCount = this.$refs.editor.ej2Instances.getCharCount();

```

## See Also

* [How to Customize Character Count and Styles in Rich Text Editor](https://ej2.syncfusion.com/vue/documentation/rich-text-editor/style#customizing-character-count-display)