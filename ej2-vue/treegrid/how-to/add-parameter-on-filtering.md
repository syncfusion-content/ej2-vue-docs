---
layout: post
title: Add parameter on filtering in Vue Treegrid component | Syncfusion
description: Learn here all about Add parameter on filtering in Syncfusion Vue Treegrid component of Syncfusion Essential JS 2 and more.
control: Add parameter on filtering 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Add parameter on filtering in Vue Treegrid component

You can customize the default settings of the components which are used in Menu filter by using params of filter property in column definition.
In the below sample, TaskID and Duration Columns are numeric columns, while open the filter dialog then you can see that NumericTextBox with spin button is displayed to change/set the filter value. Now using the params option we hide the spin button in NumericTextBox for TaskID Column.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/treegrid/how-to/default-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/treegrid/how-to/default-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/treegrid/how-to/default-cs1" %}