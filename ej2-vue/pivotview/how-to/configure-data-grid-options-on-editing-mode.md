---
layout: post
title: Configure data grid options on editing mode in Vue Pivotview component | Syncfusion
description: Learn here all about Configure data grid options on editing mode in Syncfusion Vue Pivotview component of Syncfusion Essential JS 2 and more.
control: Configure data grid options on editing mode 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Configure data grid options on editing mode in Vue Pivotview component

You can access the data grid options such as sort, group, filter on editing mode using the `beginDrillThrough` event in the pivot table. The event occurs in every value cell on double click and provides the data grid information before display the drill through grid pop-up.

> Grid features are segregated into individual feature-wise modules. For example, to use sorting feature, you should inject `Sort` using the `Grid.Inject(Sort)` section.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/pivot-grid/default-cs133/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/pivot-grid/default-cs133/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/pivot-grid/default-cs133" %}