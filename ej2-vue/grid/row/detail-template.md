---
layout: post
title: Detail template in Vue Grid component | Syncfusion
description: Learn here all about Detail template in Syncfusion Vue Grid component of Syncfusion Essential JS 2 and more.
control: Detail template 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Detail template in Vue Grid component

The [`detailTemplate`](https://ej2.syncfusion.com/vue/documentation/api/grid/#detailtemplate) provides an additional information about a data row which can show or hide by clicking on expand or collapse button. The [`detailTemplate`](https://ej2.syncfusion.com/vue/documentation/api/grid/#detailtemplate) property accepts the template for the detail row.

The [`detailTemplate`](https://ej2.syncfusion.com/vue/documentation/api/grid/#detailtemplate) property should be a function which returns an object. The object should contain a Vue component which should be assigned to the `template` property. The grid will look for the template property and render it as new Vue instance.

To use `detailTemplate`, inject the `DetailRow` in the `provide` section.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/grid/column/template-cs4/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/column/template-cs4" %}

## Limitations for detail template

Detail template is not supported with the following features:

* Frozen rows and columns
* Immutable mode
* Infinite scrolling
* Virtual scrolling
* Print
* Row template
* Row spanning
* Column spanning
* Lazy load grouping
* State persistence
* Hierarchy Grid