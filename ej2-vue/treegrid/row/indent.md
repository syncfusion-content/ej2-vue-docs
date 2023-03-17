---
layout: post
title: Indent in Vue Treegrid component | Syncfusion
description: Learn here all about Indent in Syncfusion Vue Treegrid component of Syncfusion Essential JS 2 and more.
control: Indent 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Indent in Vue Treegrid component

The Indent and Outdent feature will help to change the hierarchy level of rows in tree grid. The indent action moves the selected row as the last child of its previous row, whereas the outdent action moves the selected row as a sibling to its parent row.

To use the indent and outdent feature, inject the `RowDD` module in the Tree Grid. The tree grid toolbar has the built-in items to execute indent and outdent actions. Define this by using the toolbar property.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/treegrid/indent-outdent/default-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/treegrid/indent-outdent/default-cs1" %}

## Indent/Outdent a row programmatically

You can change the hierarchy level of record programmatically using `indent` and `outdent` methods.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/treegrid/programmatic-indent/default-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/treegrid/programmatic-indent/default-cs1" %}