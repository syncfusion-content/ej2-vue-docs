---
layout: post
title: How to Limit Group Count in Vue Query Builder | Syncfusion
description: Limit the number of nested groups in the Vue Query Builder UI by setting maxGroupCount, useful on mobile to control nesting depth.
control: Restrict groups 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# How to set the maximum group count in Vue Query Builder UI

You can restrict the condition set by defining the [`maxGroupCount`](https://ej2.syncfusion.com/vue/documentation/api/query-builder/index-default#maxgroupcount) property. By default, the value is 5. In the below demo, the `maxGroupCount` is set to 2 .

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/query-builder/default-cs14/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/query-builder/default-cs14/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/query-builder/default-cs14" %}

> You can use this property in the mobile mode to restrict the nested group creation.