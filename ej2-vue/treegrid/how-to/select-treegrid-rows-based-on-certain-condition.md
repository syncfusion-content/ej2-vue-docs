---
layout: post
title: Vue TreeGrid Conditional Row Selection | Syncfusion
description: Learn how to select Vue TreeGrid rows based on specific conditions to automate row selection and highlight matching records.
control: Select treegrid rows based on certain condition 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Select Rows Based on Conditions in Vue TreeGrid

You can select the specific row in the Tree Grid based on a certain condition by using the [`selectRows`](https://ej2.syncfusion.com/vue/documentation/api/treegrid/#selectrows) method in the [`dataBound`](https://ej2.syncfusion.com/vue/documentation/api/treegrid/#databound) event of Tree Grid.

In the below demo, we have selected the Tree Grid rows only when *Duration* column value greater than *4*.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/treegrid/how-to/default-cs20/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/treegrid/how-to/default-cs20/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/treegrid/how-to/default-cs20" %}