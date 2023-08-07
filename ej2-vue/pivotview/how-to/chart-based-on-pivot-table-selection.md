---
layout: post
title: Chart based on pivot table selection in Vue Pivotview component | Syncfusion
description: Learn here all about Chart based on pivot table selection in Syncfusion Vue Pivotview component of Syncfusion Essential JS 2 and more.
control: Chart based on pivot table selection 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Chart based on pivot table selection in Vue Pivotview component

The cell selection support is enabled using the [`allowSelection`](https://ej2.syncfusion.com/vue/documentation/api/pivotview/gridSettings/#allowselection) property and its type and mode are configured using the [`selectionSettings`](https://ej2.syncfusion.com/vue/documentation/api/pivotview/#gridsettings) property. The [`cellSelected`](https://ej2.syncfusion.com/vue/documentation/api/pivotview/#cellselected) event gets fired on every selection operation performed in the pivot table. This event returns the selected cell informations, like row header name, column header name, measure name, and value. Based on this information, the [`chart`](https://ej2.syncfusion.com/vue/documentation/chart/getting-started/) control will be plotted.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/pivot-grid/renewableEnergy-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/pivot-grid/renewableEnergy-cs1" %}
