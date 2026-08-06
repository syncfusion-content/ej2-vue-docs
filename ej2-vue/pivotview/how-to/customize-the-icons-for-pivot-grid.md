---
layout: post
title: How to customize the pivot table icons in Vue Pivot Table | Syncfusion
description: Step-by-step example showing how to customize the field-list toggle icon in the Vue Pivot Table by overriding the .pivot-button CSS class with a custom content value.
control: Customize the icons for pivot grid 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# How to customize the pivot table icons in Vue Pivot Table

You can customize the pivot button icons in the pivot grid by overriding the class **.pivot-button** with a custom property content as mentioned below.

```

#PivotView_PivotFieldList .e-icons.e-toggle-field-list::before {
    content: '\e337';
}

```

In the below sample, pivot grid is rendered with a customized pivot button icons.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/pivot-grid/default-cs137/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/pivot-grid/default-cs137/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/pivot-grid/default-cs137" %}
