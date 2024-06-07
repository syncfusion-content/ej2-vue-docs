---
layout: post
title: Show spinner on exporting in Vue Treegrid component | Syncfusion
description: Learn here all about Show spinner on exporting in Syncfusion Vue Treegrid component of Syncfusion Essential JS 2 and more.
control: Show spinner on exporting 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Show spinner on exporting in Vue Treegrid component

You can show/ hide spinner component while exporting the Tree Grid using [`showSpinner`](https://ej2.syncfusion.com/vue/documentation/api/treegrid/#showspinner)/ [`hideSpinner`](https://ej2.syncfusion.com/vue/documentation/api/treegrid/#hidespinner) methods. You can use  [`toolbarClick`](https://ej2.syncfusion.com/vue/documentation/api/treegrid/#toolbarclick) event to show spinner before exporting and hide a spinner in the [`pdfExportComplete`](https://ej2.syncfusion.com/vue/documentation/api/treegrid/#pdfexportcomplete) or [`excelExportComplete`](https://ej2.syncfusion.com/vue/documentation/api/treegrid/#excelexportcomplete) event after the exporting.

In the [`toolbarClick`](https://ej2.syncfusion.com/vue/documentation/api/grid/#toolbarclick) event, based on the parameter **args.item.text** as **PDF Export** or **Excel Export** we can call the [`showSpinner`](https://ej2.syncfusion.com/vue/documentation/api/treegrid/#showspinner) method from Tree Grid instance.

In the [`pdfExportComplete`](https://ej2.syncfusion.com/vue/documentation/api/treegrid/#pdfexportcomplete) or [`excelExportComplete`](https://ej2.syncfusion.com/vue/documentation/api/treegrid/#excelexportcomplete) event, We can call the [`hideSpinner`](https://ej2.syncfusion.com/vue/documentation/api/treegrid/#hidespinner) method.

In the below demo, we have rendered the default spinner component when exporting the Tree Grid.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/treegrid/how-to/default-cs21/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/treegrid/how-to/default-cs21/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/treegrid/how-to/default-cs21" %}