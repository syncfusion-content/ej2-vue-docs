---
layout: post
title: Reordering on grouped columns in Vue Grid component | Syncfusion
description: Learn here all about Reordering on grouped columns in Syncfusion Vue Grid component of Syncfusion Essential JS 2 and more.
control: Reordering on grouped columns 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Reordering on grouped columns in Vue Grid component

Grid provides an option to interchange the position of the Grouped Columns by dragging and dropping the grouped headercells in the droparea. So, any new column entering into the droparea can also be dropped in any position.

To enable this feature, you have to set the [`groupSettings.allowReordering`](https://ej2.syncfusion.com/vue/documentation/api/grid/groupSettings/#allowReordering) property as **true**.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/grid/group/default-cs9/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/group/default-cs9" %}
