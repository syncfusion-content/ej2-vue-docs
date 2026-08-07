---
layout: post
title: Vue TreeGrid Custom Column Tooltips | Syncfusion
description: Learn how to add custom tooltips for columns in Vue TreeGrid using the Tooltip component and queryCellInfo event.
control: Custom tool tip for columns 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Custom Tooltips for Columns in Vue TreeGrid

You can achieve the custom tooltip([`EJ2 Tooltip`](../../tooltip/getting-started)) for Tree Grid by using the [`queryCellInfo`](https://ej2.syncfusion.com/vue/documentation/api/treegrid/#querycellinfo) event.

Render the ToolTip component for the Tree Grid cells by using the following code in the [`queryCellInfo`](https://ej2.syncfusion.com/vue/documentation/api/treegrid/#querycellinfo) event.

```ts

  tooltip (args) {
    let tooltip = new Tooltip({
        content: args.data[args.column.field].toString();
    }, args.cell);
}

```

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/treegrid/how-to/default-cs5/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/treegrid/how-to/default-cs5/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/treegrid/how-to/default-cs5" %}