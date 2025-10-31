---
layout: post
title: Text Selection Using Slider in Vue Rich Text Editor component | Syncfusion
description: Learn how to select a character range using Vue Rich Text Editor component of Syncfusion Essential JS 2 and more.
platform: ej2-vue
control: Text Selection
documentation: ug
domainurl: ##DomainURL##
---

# Text Selection Using Slider in Vue Component

The Rich Text Editor supports character range-based text selection using the **Syncfusion Slider** component. This feature allows users to select a specific range of characters (e.g., 33–45) within the editor content, which is then automatically highlighted.

This functionality is useful for scenarios where precise text selection is needed for operations such as copying, formatting, or analysis.

> **Note:** The example below assumes the Rich Text Editor contains plain text wrapped in a single `<p>` tag for simplicity.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/rich-text-editor/selection/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/rich-text-editor/selection/app.vue %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/rich-text-editor/selection" %}