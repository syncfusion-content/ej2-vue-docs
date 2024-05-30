---
layout: post
title: Format code block in Vue Rich text editor component | Syncfusion
description: Learn here all about Format code block in Syncfusion Vue Rich text editor component of Syncfusion Essential JS 2 and more.
control: Format code block 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Format code block in Vue Rich text editor component

You can configure code block formatting as a separate toolbar button by adding the **InsertCode** keyword within the [`toolbarSettings`](https://ej2.syncfusion.com/vue/documentation/api/rich-text-editor/toolbarSettings/#toolbarsettings) items property.

The InsertCode button has a toggle state to apply code block formatting to the editor and remove code block formatting from the editor.

The following sample demonstrates how to config the InsertCode button in toolbar and set the background color to “pre” tag for highlighting the code block.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/rich-text-editor/toolbar-cs9/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/rich-text-editor/toolbar-cs9/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/rich-text-editor/toolbar-cs9" %}