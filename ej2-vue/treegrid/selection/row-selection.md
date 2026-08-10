---
layout: post
title: Vue TreeGrid Row Selection | Syncfusion
description: Learn how to use row selection in Vue TreeGrid, including programmatic selection, selected records, row indexes, and persistent selection.
control: Row selection 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Row Selection in Vue TreeGrid

## Toggle selection

The Toggle selection allows to perform selection and unselection of the particular row or cell. To enable toggle selection, set [`enableToggle`](https://ej2.syncfusion.com/vue/documentation/api/treegrid/selectionSettings/#enableToggle) property of the selectionSettings as true. If you click on the selected row or cell then it will be unselected and vice versa.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/treegrid/selection/default-cs4/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/treegrid/selection/default-cs4/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/treegrid/selection/default-cs4" %}

>If multi selection is enabled, then first click on any selected row (without pressing Ctrl key), it will clear the multi selection and in second click on the same row, it will be unselected.