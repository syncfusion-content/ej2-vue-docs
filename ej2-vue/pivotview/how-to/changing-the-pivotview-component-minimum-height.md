---
layout: post
title: How to change the minimum height in Vue Pivot Table | Syncfusion
description: Step-by-step example showing how to set the Vue Pivot Table's minHeight property to control the minimum component height, default 300px, for responsive layouts.
control: Changing the pivotview component minimum height 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# How to change the minimum height in Vue Pivot Table

The `minHeight` property allows you to set the minimum height for the Vue Pivot Table component. By default, the component maintains a minimum height of **300px**. This property ensures the component remains visible and functional even when the container height is smaller than the specified minimum value.

When the content exceeds the minimum height, the component automatically adjusts to accommodate the data. This property is particularly useful for responsive layouts where the component needs to maintain usability across different screen sizes.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/pivot-grid/default-cs132/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/pivot-grid/default-cs132/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/pivot-grid/default-cs132" %}