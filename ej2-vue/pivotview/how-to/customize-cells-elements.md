---
layout: post
title: Customize cells elements in Vue Pivotview component | Syncfusion
description: Learn here all about Customize cells elements in Syncfusion Vue Pivotview component of Syncfusion Essential JS 2 and more.
control: Customize cells elements 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Customize cells elements in Vue Pivotview component

You can customize the pivot table cell element by using the `cellTemplate` property.

The cellTemplate property accepts either an HTML string or the element's ID, which can be used to append additional HTML elements to showcase each cell with custom format.

In this demo, the revenue cost for each year is represented with trend icons.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/pivot-grid/renewableEnergy-cs2/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/pivot-grid/renewableEnergy-cs2/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/pivot-grid/renewableEnergy-cs2" %}