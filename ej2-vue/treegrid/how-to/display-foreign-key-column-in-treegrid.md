---
layout: post
title: Display foreign key column in treegrid in Vue Treegrid component | Syncfusion
description: Learn here all about Display foreign key column in treegrid in Syncfusion Vue Treegrid component of Syncfusion Essential JS 2 and more.
control: Display foreign key column in treegrid 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Display foreign key column in treegrid in Vue Treegrid component

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