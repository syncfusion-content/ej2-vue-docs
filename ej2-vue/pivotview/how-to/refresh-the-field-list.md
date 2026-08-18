---
layout: post
title: How to refresh the field list in Vue Pivot Table | Syncfusion
description: Step-by-step example showing how to refresh the Vue Pivot Table and field list with new data on a button click, by resetting fieldList and assigning a dataset.
control: Refresh the field list 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# How to refresh the field list in Vue Pivot Table

The Vue Pivot Table component allows dynamic data source updates, enabling you to refresh both the pivot table and field list with new data at runtime. This approach is especially useful in scenarios where data changes frequently or when switching between different datasets without reinitializing the entire component.

## Implementation

The following code example demonstrates how to refresh the Pivot Table and field list with new data using an external button click. The implementation involves clearing the existing field list cache by resetting the `fieldList` object and updating the data source with a new dataset. This approach ensures that the component recognizes structural changes in the data and rebuilds the field list accordingly.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/pivot-grid/common-cs12/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/pivot-grid/common-cs12/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/pivot-grid/common-cs12" %}