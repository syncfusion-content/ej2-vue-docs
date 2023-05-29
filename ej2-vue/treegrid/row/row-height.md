---
layout: post
title: Row height in Vue Treegrid component | Syncfusion
description: Learn here all about Row height in Syncfusion Vue Treegrid component of Syncfusion Essential JS 2 and more.
control: Row height 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Row height in Vue Treegrid component

You can customize the row height of treegrid rows through the [`rowHeight`](https://ej2.syncfusion.com/vue/documentation/api/treegrid/#rowheight) property. The `rowHeight` property is used to change the row height of entire treegrid rows.

In the below example, the `rowHeight` is set as '60px'.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/treegrid/row/row-cs4/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/treegrid/row/row-cs4" %}

## Customize row height for particular row

Grid row height for particular row can be customized using the [`rowDataBound`](https://ej2.syncfusion.com/vue/documentation/api/treegrid/#rowdatabound)
event by setting the `rowHeight` in arguments for each row based on the requirement.

In the below example, the row height for the row with Task ID as '3' is set as '90px' using the `rowDataBound` event.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/treegrid/row/row-cs5/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/treegrid/row/row-cs5" %}