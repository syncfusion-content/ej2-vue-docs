---
layout: post
title: Work Breakdown Structure (WBS) in Vue Gantt Component | Syncfusion
description: Learn how to integrate and manage WBS codes in the Syncfusion Vue Gantt component to improve task hierarchy visualization and project tracking.
control: WBS Column 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Work Breakdown Structure (WBS) in Vue Gantt Component

The Work Breakdown Structure (WBS) organizes project tasks hierarchically in the Gantt component by assigning unique codes to each task. This system enhances visualization and management by clearly reflecting task relationships and levels. It is especially useful in complex environments like construction projects or enterprise-scale software development.

---

## Configuration and implementation

To enable and configure WBS in your Gantt component:

- **Enable WBS Codes**: Set the [`enableWBS`](https://ej2.syncfusion.com/vue/documentation/api/gantt/#enablewbs) property to `true` to automatically generate unique task codes and their predecessors.
- **Auto-Update Codes**: Set the [`enableAutoWbsUpdate`](https://ej2.syncfusion.com/vue/documentation/api/gantt/#enableautowbsupdate) property to `true` to maintain WBS code accuracy during operations like sorting, filtering, editing, or drag-and-drop.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/gantt/wbscolumn-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/gantt/wbscolumn-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/gantt/wbscolumn-cs1" %}

---

## Managing WBS code updates

For better performance, you can control when WBS codes are updated by using the [`actionBegin`](https://ej2.syncfusion.com/vue/documentation/api/gantt/#actionbegin) and [`dataBound`](https://ej2.syncfusion.com/vue/documentation/api/gantt/#databound) events. This is particularly useful during actions like dragging and dropping rows.

In the following example, WBS auto-update is enabled only during the **row drag and drop** action using these events.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/gantt/wbscolumn-cs2/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/gantt/wbscolumn-cs2/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/gantt/wbscolumn-cs2" %}

---

## Limitations

The WBS feature has a few limitations in the Vue Gantt component:

- Editing of the WBS code and WBS predecessor columns is not supported.
- Load on demand is not supported with the WBS feature.
- WBS Code and WBS Predecessor fields cannot be mapped directly from the data source.

