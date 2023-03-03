---
layout: post
title: Restrict groups in Vue Query builder component | Syncfusion
description: Learn here all about Restrict groups in Syncfusion Vue Query builder component of Syncfusion Essential JS 2 and more.
control: Restrict groups 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Restrict groups in Vue Query builder component

You can restrict the condition set by defining the [`maxGroupCount`](https://ej2.syncfusion.com/vue/documentation/api/query-builder/#maxgroupcount) property. By default, the value is 5. In the below demo, the `maxGroupCount` is set to 2 .

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/query-builder/default-cs14/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/query-builder/default-cs14" %}

> You can use this property in the mobile mode to restrict the nested group creation.