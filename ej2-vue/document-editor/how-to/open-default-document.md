---
layout: post
title: Open default document in Vue Document editor component | Syncfusion
description: Learn here all about Open default document in Syncfusion Vue Document editor component of Syncfusion Essential JS 2 and more.
control: Open default document 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Open default document in Vue Document editor component

In this article, we are going to see how to open a default document when Document Editor & Document Editor Container is initialized.

## Opening a default document in DocumentEditor

By default, Document Editor will open blank document. You can use [`open`](https://ej2.syncfusion.com/vue/documentation/api/document-editor/#open) API in Document Editor to open the sfdt content.

Document editor have [`created`](https://ej2.syncfusion.com/vue/documentation/api/document-editor/#created) event which gets triggered once Document editor control created. So, if you want to open the document by default, you can use [`open`](https://ej2.syncfusion.com/vue/documentation/api/document-editor/#open) and [`created`](https://ej2.syncfusion.com/vue/documentation/api/document-editor/#created) API.

The following example illustrates how to open the default SFDT content once Document editor control gets created.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/document-editor/open-default-document-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/document-editor/open-default-document-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/document-editor/open-default-document-cs1" %}

## Opening a default document in DocumentEditorContainer

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/document-editor/open-default-document-cs2/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/document-editor/open-default-document-cs2/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/document-editor/open-default-document-cs2" %}