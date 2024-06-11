---
layout: post
title: Read only by default in Vue Document editor component | Syncfusion
description: Learn here all about Read only by default in Syncfusion Vue Document editor component of Syncfusion Essential JS 2 and more.
control: Read only by default 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Read only by default in Vue Document editor component

In this article, we are going to see how to open a document in read only mode by default in Document Editor & Document Editor Container.

## How to open a document in read only mode by default in DocumentEditor

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/document-editor/getting-started-cs4/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/document-editor/getting-started-cs4/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/document-editor/getting-started-cs4" %}

## How to open a document in ready only mode by default in DocumentEditorContainer

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/document-editor/getting-started-cs5/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/document-editor/getting-started-cs5/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/document-editor/getting-started-cs5" %}

Note: You can use the `restrictEditing` in Document Editor Container and `isReadOnly` in Document Editor based on your requirement to change component to read only mode.