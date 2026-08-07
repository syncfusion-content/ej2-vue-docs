---
layout: post
title: Vue TreeGrid Cell Editing | Syncfusion
description: Learn how to use cell editing in the Vue TreeGrid, including enabling, editing, and handling cell edit events.
control: Cell editing 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Cell Editing in Vue TreeGrid

In Cell edit mode, when you double click on a cell, it is changed to edit state. You can change the cell value and save to the data source.
To enable Cell edit, set the [`editSettings.mode`](https://ej2.syncfusion.com/vue/documentation/api/treegrid/editSettingsModel#mode) as `Cell`.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/treegrid/editing/default-cs2/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/treegrid/editing/default-cs2/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/treegrid/editing/default-cs2" %}

> Cell edit mode is default mode of editing.