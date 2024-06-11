---
layout: post
title: Change header text dynamically in Vue Treegrid component | Syncfusion
description: Learn here all about Change header text dynamically in Syncfusion Vue Treegrid component of Syncfusion Essential JS 2 and more.
control: Change header text dynamically 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Change header text dynamically in Vue Treegrid component

You can change the column [`headerText`](https://ej2.syncfusion.com/vue/documentation/api/treegrid/column/#headertext) dynamically through an external button.

Follow the given steps to change the header text dynamically:

**Step 1**:

Get the column object corresponding to the field name by using the [`getColumnByField`](https://ej2.syncfusion.com/vue/documentation/api/treegrid#getcolumnbyfield) method.
Then change the header Text value.

```ts

      /** get the JSON object of the column corresponding to the field name */
      let column =  this.$refs.treegrid.getColumnByField("duration");
      /** assign a new header text to the column */
      column.headerText = "Changed Text";

```

**Step 2**:

To reflect the changes in the Tree Grid header, invoke the [`refreshColumns`](https://ej2.syncfusion.com/vue/documentation/api/treegrid#refreshcolumns) method.

```ts

     this.$refs.treegrid.refreshColumns();

```

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/treegrid/how-to/default-cs3/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/treegrid/how-to/default-cs3/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/treegrid/how-to/default-cs3" %}