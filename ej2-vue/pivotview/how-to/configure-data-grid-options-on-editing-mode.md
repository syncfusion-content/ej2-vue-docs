---
layout: post
title: Configure data grid options on editing mode in Vue | Syncfusion
description: Learn here all about Configure data grid options on editing mode in Syncfusion Vue Pivotview component of Syncfusion Essential JS 2 and more.
control: Configure data grid options on editing mode 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Configure data grid options in editing mode in the Vue Pivot Table

The Vue Pivot Table component provides the ability to configure various data grid options when working with drill-through functionality in editing mode. When users double-click on value cells (cells containing aggregated data), the component displays the underlying raw data in a drill-through grid popup. The [`beginDrillThrough`](https://ej2.syncfusion.com/vue/documentation/api/pivotview/index-default#begindrillthrough) event allows users to access and configure grid features such as sorting, grouping, and filtering before displaying the drill-through grid popup.

## Implementation

The [`beginDrillThrough`](https://ej2.syncfusion.com/vue/documentation/api/pivotview/index-default#begindrillthrough) event occurs when users double-click on any value cell in the pivot table. This event provides access to the grid instance and its configuration options before displaying the drill-through popup, enabling users to customize the grid behavior according to their requirements.

> Grid features are segregated into individual feature-wise modules. For example, to use the sorting feature, the `Sort` module must be injected using the `Grid.Inject(Sort)` method.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/pivot-grid/default-cs133/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/pivot-grid/default-cs133/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/pivot-grid/default-cs133" %}
