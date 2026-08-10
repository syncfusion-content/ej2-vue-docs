---
layout: post
title: Vue TreeGrid Foreign Key Columns | Syncfusion
description: Learn how to display foreign key columns in Vue TreeGrid using external data sources, custom cell rendering, and dropdown editing support.
control: Display foreign key column in treegrid 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Foreign Key Columns in Vue TreeGrid

Since Tree Grid Databinding concept is of hierarchy relationship, we do not provide in-built support for foreignkey datasource.

To display the foreignKey value at initial rendering, we can use the [`queryCellInfo`](https://ej2.syncfusion.com/vue/documentation/api/treegrid/#querycellinfo) event of the treegrid and also by using the [`editType`](https://ej2.syncfusion.com/vue/documentation/api/treegrid/column/#edittype) and [`columns.edit`](https://ej2.syncfusion.com/vue/documentation/api/treegrid/column/#edit) properties of TreeGrid Column, we can render Dropdownlist with external or foreign dataSource.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/treegrid/how-to/default-cs10/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/treegrid/how-to/default-cs10/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/treegrid/how-to/default-cs10" %}