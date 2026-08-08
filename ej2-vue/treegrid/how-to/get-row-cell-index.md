---
layout: post
title: Vue TreeGrid Row Cell Index | Syncfusion
description: Learn how to get the specific row and cell index in the Vue TreeGrid using the rowSelected event and element attributes.
control: Get row cell index 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Get Row Cell Index in Vue TreeGrid

You can get the specific row and cell index of the Tree Grid by using [`rowSelected`](https://ej2.syncfusion.com/vue/documentation/api/treegrid/#rowselected) event of the treegrid. Here, we can get the row and cell index by using *aria-rowindex* (get row Index from *tr* element) and *aria-colindex* (column index from *td* element) attribute.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/treegrid/how-to/default-cs15/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/treegrid/how-to/default-cs15/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/treegrid/how-to/default-cs15" %}