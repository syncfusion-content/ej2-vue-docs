---
layout: post
title: Inline editing  in Vue Rich text editor component | Syncfusion
description: Learn here all about Inline editing  in Syncfusion Vue Rich text editor component of Syncfusion Essential JS 2 and more.
control: Inline editing 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Inline editing in Vue Rich text editor component

Inline editing is a feature of the Rich Text Editor that allows users to edit content directly within the editor where it is displayed. Unlike traditional editing interfaces where the editor toolbar is in a separate area at the top or bottom, inline editing offers a seamless, on-the-spot editing experience. You can click on the text or select the text you wish to edit and make changes immediately.

Enable inline editing in the Rich Text Editor by using the [inlineMode](https://ej2.syncfusion.com/vue/documentation/api/rich-text-editor/#inlinemode) with the `enable` property as `true`. This configuration activates the feature, allowing direct content editing within its displayed context.

## Toolbar on Selection

The inline toolbar in the Rich Text Editor is triggered based on the [onSelection](https://ej2.syncfusion.com/vue/documentation/api/rich-text-editor/inlineMode/#onselection) option within the inlineMode settings. 

When `onSelection` is set to `true`, the toolbar appears only when text is selected. If `onSelection` is set to `false`, the inline toolbar appears when editable text is focused, regardless of selection.

This feature enhances the inline editing experience by providing immediate access to formatting options.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/rich-text-editor/getting-started-cs20/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/rich-text-editor/getting-started-cs20/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/rich-text-editor/getting-started-cs20" %}