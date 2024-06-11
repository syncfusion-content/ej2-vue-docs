---
layout: post
title: Two way binding in Vue Drop down list component | Syncfusion
description: Learn here all about Two way binding in Syncfusion Vue Drop down list component of Syncfusion Essential JS 2 and more.
control: Two way binding 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Two way binding in Vue Drop down list component

Two-way binding can be achieved by using the `v-model` directive in Vue. In the following sample, when you change the value in one DropDownList component, v-model will automatically update the value in the other DropDownList.

The following example demonstrates how to set the `two-way-binding` in the DropDownList.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/drop-down-list/two-way-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/drop-down-list/two-way-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/drop-down-list/two-way-cs1" %}