---
layout: post
title: Cascading in Vue Drop down list component | Syncfusion
description: Learn here all about Cascading in Syncfusion Vue Drop down list component of Syncfusion Essential JS 2 and more.
control: Cascading 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Cascading in Vue Drop down list component

The cascading DropDownList is a series of DropDownList, where the value of one DropDownList depends upon  another's value. This can be configured by using the [`change`](https://ej2.syncfusion.com/vue/documentation/api/drop-down-list/#change) event of the parent DropDownList. Within that change event handler, data has to be loaded to the child DropDownList based on the selected value of the parent DropDownList.

The following example, shows the cascade behavior of country, state, and city DropDownList. Here, the `dataBind` method is used to reflect the property changes immediately to the DropDownList.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/drop-down-list/how-to/cascade-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/drop-down-list/how-to/cascade-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/drop-down-list/how-to/cascade-cs1" %}