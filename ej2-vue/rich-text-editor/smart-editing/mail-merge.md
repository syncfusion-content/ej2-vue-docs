---
layout: post
title: Mail Merge in Vue Rich Text Editor | Syncfusion
description: Learn how to use and customize the Mail Merge in the Syncfusion Vue Rich Text Editor component of Syncfusion Essential JS 2 and more.
platform: ej2-vue
control: Mail Merge
documentation: ug
domainurl: ##DomainURL##
---

# Mail Merge in Vue Rich Text Editor Component

The Rich Text Editor can be customized to implement **Mail Merge** functionality by inserting placeholders into the editor using custom toolbar items. These placeholders are later replaced with actual data to generate personalized content such as letters, invoices, and reports.

This feature simplifies the creation of dynamic documents by allowing users to insert merge fields that are automatically populated with real data during content generation.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/rich-text-editor/mail-merge/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/rich-text-editor/mail-merge/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/rich-text-editor/mail-merge" %}