---
layout: post
title: Set the cursor at the specific range in Vue Rich text editor component | Syncfusion
description: Learn here all about Set the cursor at the specific range in Syncfusion Vue Rich text editor component of Syncfusion Essential JS 2 and more.
control: Set the cursor at the specific range 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Set the cursor at the specific range in Vue Rich text editor component

This can be achieved by using `setRange` method in the Rich Text Editor using `NodeSelection` instance. In this below sample, we have passed the text node (specific location in Rich Text Editor content) in `setStart` method and passed the range in `setRange` method of Rich Text Editor.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/rich-text-editor/toolbar-cs10/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/rich-text-editor/toolbar-cs10" %}
