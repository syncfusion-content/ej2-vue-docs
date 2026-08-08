---
layout: post
title: Vue TreeGrid Filtering Parameters | Syncfusion
description: Learn how to add filtering parameters in Vue TreeGrid, including menu filter customization, parameter handling, and advanced filtering options.
control: Add parameter on filtering 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Add Parameters for Filtering in Vue TreeGrid

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