---
layout: post
title: Customize empty value cells in Vue Pivotview component | Syncfusion
description: Learn here all about Customize empty value cells in Syncfusion Vue Pivotview component of Syncfusion Essential JS 2 and more.
control: Customize empty value cells 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Customize empty value cells in Vue Pivotview component

You can show the custom string in the empty value cells using the `emptyCellsTextContent` string type property in `dataSourceSettings` object of the pivot table. It can be configured through code behind during initial rendering.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/pivot-grid/default-cs134/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/pivot-grid/default-cs134/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/pivot-grid/default-cs134" %}