---
layout: post
title: Tool bar items in Vue Treegrid component | Syncfusion
description: Learn here all about Tool bar items in Syncfusion Vue Treegrid component of Syncfusion Essential JS 2 and more.
control: Tool bar items 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Tool bar items in Vue Treegrid component

## Built-in toolbar items

The following table shows built-in toolbar items and its actions.

| Built-in Toolbar Items | Actions |
|------------------------|---------|
| ExpandAll | Expands all the rows.|
| CollapseAll | Collapses all the rows.|
| Add | Adds a new record.|
| Edit | Edits the selected record.|
| Update | Updates the edited record.|
| Delete | Deletes the selected record.|
| Cancel | Cancels the edit state.|
| Search | Searches the records by the given key.|
| Print | Prints the treegrid.|
| ExcelExport | Exports the treegrid to Excel.|
| PdfExport | Exports the treegrid to PDF.|
| WordExport | Exports the treegrid to Word.|
| Indent | Indents the record to one level of hierarchy.|
| Outdent | Outdents the record to one level of hierarchy.|

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/treegrid/toolbar/default-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/treegrid/toolbar/default-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/treegrid/toolbar/default-cs1" %}

> * The [`toolbar`](https://ej2.syncfusion.com/vue/documentation/api/treegrid/#toolbar) has options to define both built-in and custom toolbar items.

## Custom toolbar items

Custom toolbar items can be added by defining the [`toolbar`](https://ej2.syncfusion.com/vue/documentation/api/treegrid/#toolbar) as a collection of
[`ItemModels`](https://ej2.syncfusion.com/vue/documentation/api/toolbar/#item). Actions for this customized toolbar items are defined in the [`toolbarClick`](https://ej2.syncfusion.com/vue/documentation/api/treegrid/#toolbarclick) event.

By default, Custom toolbar items are in position `Left`. You can change the position by using the [`align`](https://ej2.syncfusion.com/vue/documentation/api/toolbar/#item) property. In the below sample, we have applied position `Right` for the `Quick Filter` toolbar item.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/treegrid/toolbar/default-cs2/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/treegrid/toolbar/default-cs2/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/treegrid/toolbar/default-cs2" %}

> * The [`toolbar`](https://ej2.syncfusion.com/vue/documentation/api/treegrid/#toolbar) has options to define both built-in and custom toolbar items.
> * If a toolbar item does not match the built-in items, it will be treated as a custom toolbar item.

## Built-in and custom items in toolbar

TreeGrid have an option to use both built-in and custom toolbar items at same time.

In the below example, `ExpandAll`, `CollapseAll` are built-in toolbar items and `Click` is custom toolbar item.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/treegrid/toolbar/default-cs3/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/treegrid/toolbar/default-cs3/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/treegrid/toolbar/default-cs3" %}