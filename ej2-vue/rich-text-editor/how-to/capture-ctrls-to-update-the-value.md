---
layout: post
title: Implementing Ctrl+s Shortcut for Value Updates | Syncfusion
description: Learn here all about Update value in Syncfusion Vue Rich Text Editor component of Syncfusion Essential JS 2 and more.
platform: ej2-vue
control: Implementing Ctrl+s Shortcut for Value Updates
documentation: ug
domainurl: ##DomainURL##
---

# Implementing Ctrl+s Shortcut for Value Updates in Vue Rich Text Editor Component

To implement this functionality, you bind a `keydown` event to the Rich Text Editor content and capture the <kbd>Ctrl</kbd> + <kbd>s</kbd> key press using its keyCode.

In the `keydown` event handler, the `updateValue` method is called to update the [value](https://ej2.syncfusion.com/vue/documentation/api/rich-text-editor/#value) property and then you can save the content in the required database using the same.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/rich-text-editor/toolbar-cs4/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/rich-text-editor/toolbar-cs4/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/rich-text-editor/toolbar-cs4" %}