---
layout: post
title: Exporting hierarchy grid in Vue Grid component | Syncfusion
description: Learn here all about Exporting hierarchy grid in Syncfusion Vue Grid component of Syncfusion Essential JS 2 and more.
control: Exporting hierarchy grid 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Exporting hierarchy grid in Vue Grid component

The grid have an option to export the hierarchy grid to pdf document. By default, grid will exports the master grid with expanded child grids alone. you can change the exporting option by using the **PdfExportProperties.hierarchyExportMode** property. The available options are,

| Mode     | Behavior    |
|----------|-------------|
| Expanded | Exports the master grid with expanded child grids. |
| All      | Exports the master grid with all the child grids. |
| None     | Exports the master grid alone. |

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/grid/hierarchy-grid/default-cs9/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/hierarchy-grid/default-cs9" %}