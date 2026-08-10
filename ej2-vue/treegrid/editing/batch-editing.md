---
layout: post
title: Vue TreeGrid Batch Editing | Syncfusion
description: Learn how to use batch editing in Vue TreeGrid to edit multiple cells, perform bulk updates, and save changes efficiently.
control: Batch editing 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Batch Editing in Vue TreeGrid

In Batch edit mode, when you double-click on the tree grid cell, then the target cell changed to edit state. You can bulk save (added, changed and deleted data in the single request) to data source by click on the toolbar's **Update** button or by externally invoking the [`batchSave`](https://ej2.syncfusion.com/vue/documentation/api/treegrid/edit#batchsave) method. To enable Batch edit, set the [`editSettings.mode`](https://ej2.syncfusion.com/vue/documentation/api/treegrid/editSettings#mode) as **Batch**.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/treegrid/editing/default-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/treegrid/editing/default-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/treegrid/editing/default-cs1" %}