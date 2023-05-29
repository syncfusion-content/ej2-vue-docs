---
layout: post
title: Customize the icons for pivot grid in Vue Pivotview component | Syncfusion
description: Learn here all about Customize the icons for pivot grid in Syncfusion Vue Pivotview component of Syncfusion Essential JS 2 and more.
control: Customize the icons for pivot grid 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Customize the icons for pivot grid in Vue Pivotview component

You can customize the pivot button icons in the pivot table by overriding the class **.pivot-button** with a custom property content as mentioned below.

```

#PivotView_PivotFieldList .e-icons.e-toggle-field-list::before {
    content: '\e337';
}

```

In the below sample, pivot table is rendered with a customized pivot button icons.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/pivot-grid/default-cs137/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/pivot-grid/default-cs137" %}
