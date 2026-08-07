---
layout: post
title: Vue TreeGrid Indent and Outdent | Syncfusion
description: Learn how to indent and outdent rows in Vue TreeGrid to modify hierarchical relationships and manage parent-child records.
control: Indent 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Indent and Outdent in Vue TreeGrid

The Indent and Outdent feature will help to change the hierarchy level of rows in tree grid. The indent action moves the selected row as the last child of its previous row, whereas the outdent action moves the selected row as a sibling to its parent row.

To use the indent and outdent feature, inject the `RowDD` module in the Tree Grid. The tree grid toolbar has the built-in items to execute indent and outdent actions. Define this by using the toolbar property.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/treegrid/indent-outdent/default-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/treegrid/indent-outdent/default-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/treegrid/indent-outdent/default-cs1" %}

## Indent/Outdent a row programmatically

You can change the hierarchy level of record programmatically using `indent` and `outdent` methods.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/treegrid/programmatic-indent/default-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/treegrid/programmatic-indent/default-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/treegrid/programmatic-indent/default-cs1" %}