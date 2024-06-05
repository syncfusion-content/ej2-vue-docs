---
layout: post
title: Virtualization in Vue Listview component | Syncfusion
description: Learn here all about Virtualization in Syncfusion Vue Listview component of Syncfusion Essential JS 2 and more.
control: Virtualization 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Virtualization in Vue Listview component

UI virtualization loads only viewable list items in a view port, which will improve the ListView performance while loading a large number of data.

## Module injection

In order to use UI Virtualization, `virtualization` module should be injected into the provide section and use `listview` as a key of the object.

```ts

export default {
  data: function() {
    return {
      listData: listData,
      enableUi: true
    };
  },
  provide: {
    listview: [Virtualization]
  }
}

```

## Getting started

UI virtualization can be enabled in the ListView by setting the [`enableVirtualization`](https://ej2.syncfusion.com/documentation/api/list-view/#enablevirtualization) property to true.

It has two types of scrollers as follows:

**Window scroll**: This scroller is used in the ListView by default.

**Container scroll**: This scroller is used, when the height property of the ListView is set.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/listview/virtualization/flat-list-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/listview/virtualization/flat-list-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/listview/virtualization/flat-list-cs1" %}

## Template

We can use `template` property to customize list items in UI virtualization.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/listview/virtualization/template-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/listview/virtualization/template-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/listview/virtualization/template-cs1" %}

## Conditional rendering

The following conditional rendering support is provided for the template and groupTemplate.

| Name | Syntax |
| --- | --- | --- |
| conditional class | `<div class="${ $id % 2 === 0 ? 'even-list' : 'odd-list'}"></div>`  |
| conditional attribute | `<div id="${ $id % 2 === 0 ? 'even-list' : 'odd-list'}"></div>`  |
| conditional text content | `<div>${ $id % 2 === 0 ? 'even-list' : 'odd-list'}</div>`  |

In the following sample, the light blue is applied for the even list and light coral is applied for the odd list based on the conditional class.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/listview/virtualization/conditional-ui-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/listview/virtualization/conditional-ui-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/listview/virtualization/conditional-ui-cs1" %}