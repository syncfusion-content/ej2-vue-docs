---
layout: post
title: New row position in Vue Gantt component | Syncfusion
description: Learn here all about New row position in Syncfusion Vue Gantt component of Syncfusion Essential JS 2 and more.
control: New row position 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# New row position in Vue Gantt component

In Gantt, a new row can be added in one of the following positions: Top, Bottom, Above, Below and Child. This position can be specified through the `newRowPostion` property. We can make use of the toolbarClick event to create a context menu that specifies the position in which the new row is to be added when adding a record through toolbar click.

The following code snippets demonstrate how to achieve this.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/gantt/how-to/new-row-position-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/gantt/how-to/new-row-position-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/gantt/how-to/new-row-position-cs1" %}