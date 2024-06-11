---
layout: post
title: Immutable mode in Vue Treegrid component | Syncfusion
description: Learn here all about Immutable mode in Syncfusion Vue Treegrid component of Syncfusion Essential JS 2 and more.
control: Immutable mode 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Immutable mode in Vue Treegrid component

The immutable mode optimizes the TreeGrid re-rendering performance by using the object reference and [`deep compare`](https://dmitripavlutin.com/how-to-compare-objects-in-javascript/#4-deep-equality) concept. When performing the TreeGrid actions, it will only re-render the modified or newly added rows and prevent the re-rendering of the unchanged rows.

To enable this feature, you have to set the [`enableImmutableMode`](https://ej2.syncfusion.com/vue/documentation/api/treegrid#enableimmutablemode) property as **true**.

> * This feature uses the primary key value for data comparison. So, you need to provide the [`isPrimaryKey`](https://ej2.syncfusion.com/vue/documentation/api/treegrid/column/#isprimarykey) column.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/treegrid/immutable-mode/default-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/treegrid/immutable-mode/default-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/treegrid/immutable-mode/default-cs1" %}

## Limitations

The following features are not supported in the immutable mode:

* Frozen rows and columns
* Row Template
* Detail Template
* Column reorder
* Virtualization