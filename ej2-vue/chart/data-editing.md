---
layout: post
title: Data editing in Vue Chart component | Syncfusion
description: Learn here all about Data editing in Syncfusion Vue Chart component of Syncfusion Essential JS 2 and more.
control: Data editing 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Data editing in Vue Chart component

## Enable Data Editing

We can use the data editing through inject the `DataEditing` module in the chart provider. It provides drag and drop support to the rendered points. Now, we can change the location or value of the point based on its `y` value.  To enable the data editing, set the `enable` property to true in the drag settings of the series. Also, we can set color using `fill` property and set the data editing minimum and maximum range using `minY` and `maxY` properties.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/chart/user-interaction/data-editing-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/chart/user-interaction/data-editing-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart/user-interaction/data-editing-cs1" %}