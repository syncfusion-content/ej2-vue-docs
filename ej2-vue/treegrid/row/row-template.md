---
layout: post
title: Row template in Vue Treegrid component | Syncfusion
description: Learn here all about Row template in Syncfusion Vue Treegrid component of Syncfusion Essential JS 2 and more.
control: Row template 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Row template in Vue Treegrid component

The [`rowTemplate`](https://ej2.syncfusion.com/vue/documentation/api/treegrid/#rowtemplate) has an option to customise the look and behavior of the treegrid rows. The [`rowTemplate`](https://ej2.syncfusion.com/vue/documentation/api/treegrid/#rowtemplate) property accepts either the template string or HTML element ID.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/treegrid/row/rowtemplate-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/treegrid/row/rowtemplate-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/treegrid/row/rowtemplate-cs1" %}

The [`rowTemplate`](https://ej2.syncfusion.com/vue/documentation/api/treegrid/#rowtemplate) property accepts only the TR element.

## Row template with formatting

If the [`rowTemplate`](https://ej2.syncfusion.com/vue/documentation/api/treegrid/#rowtemplate) is used, the value cannot be  formatted  inside the template using the [`columns.format`](https://ej2.syncfusion.com/vue/documentation/api/treegrid/column/#format) property. In that case, a function should be defined globally to format the value and invoke it inside the template.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/treegrid/row/rowtemplateformat-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/treegrid/row/rowtemplateformat-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/treegrid/row/rowtemplateformat-cs1" %}

## Limitations

Row template feature is not compatible with all the features which are available in treegrid and it has limited features support. Here we have listed out the features which are not compatible with row template feature.

* Filtering
* Paging
* Sorting
* Scrolling
* Searching
* Rtl
* Context Menu
* State Persistence