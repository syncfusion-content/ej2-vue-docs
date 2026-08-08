---
layout: post
title: Vue TreeGrid Row Editing | Syncfusion
description: Learn how to use row editing in Vue TreeGrid, including editing rows, programmatic CRUD operations, and confirmation dialogs.
control: Row editing 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Row Editing in Vue TreeGrid

In Row edit mode, when you start editing the currently selected record, the entire row is changed to edit state.
You can change the cell values of the row and save edited data to the data source.
To enable Row edit, set the [`editSettings.mode`](https://ej2.syncfusion.com/vue/documentation/api/treegrid/editSettingsModel/#mode) as `Row`.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/treegrid/editing/default-cs13/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/treegrid/editing/default-cs13/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/treegrid/editing/default-cs13" %}