---
layout: post
title: Custom tool bar in Vue Grid component | Syncfusion
description: Learn here all about Custom tool bar in Syncfusion Vue Grid component of Syncfusion Essential JS 2 and more.
control: Custom tool bar 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Custom toolbar in Vue Grid component

Custom toolbar in Syncfusion Vue Grid allows you to create a distinctive toolbar layout, style, and functionality that aligns with the specific needs of your application, providing a personalized experience within the Grid component.

This can be achieved by utilizing the [toolbarTemplate](https://ej2.syncfusion.com/vue/documentation/api/grid/#toolbartemplate) property, which offers extensive customization options for the toolbar. You can define a custom template for the toolbar and handle the actions of the toolbar items in the **clicked** event.

The following example demonstrates, how to render the custom toolbar using `toolbarTemplate`

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/grid/toolbar/custom-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/grid/toolbar/custom-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/toolbar/custom-cs1" %}

## Render image with text in custom toolbar

Render an image with text in custom toolbar in Syncfusion Vue Grid allows easily render an image along with text in the toolbar of the Grid. This feature enhances the visual presentation of the Grid, providing additional context and improving the overall experience.

To render an image with text in custom toolbar, This can be achieved by utilizing the [toolbarTemplate](https://ej2.syncfusion.com/vue/documentation/api/grid/#toolbartemplate) property.

The following example demonstrates how to render an image in the toolbar of the grid using `toolbarTemplate`.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/grid/toolbar/custom-cs2/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/grid/toolbar/custom-cs2/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/toolbar/custom-cs2" %}

> You can further customize the styles and layout of the image and text in the custom toolbar to suit your specific design requirements.

## Render DropDownList in custom toolbar

Render DropDownList in custom toolbar in Syncfusion Vue Grid enables you to extend the functionality of the custom toolbar by incorporating a [DropDownList](https://ej2.syncfusion.com/vue/documentation/drop-down-list/getting-started) component, allowing you to perform various actions within the Grid based on their selections.

This can be achieved by utilizing the [toolbarTemplate](https://ej2.syncfusion.com/vue/documentation/api/grid/#toolbartemplate). The example below demonstrates how to render the **DropDownList** component in the custom toolbar, where the toolbar template includes the its [change](https://ej2.syncfusion.com/vue/documentation/api/drop-down-list#change) event is bound to the **onChange** method.

In the **onChange** method, the text of the selected item is checked to determine the appropriate action. For example, if **Update** is chosen, the [endEdit](https://ej2.syncfusion.com/vue/documentation/api/grid#endedit) method is called to exit the edit mode. If **Edit** is selected, the selected record is passed to the [startEdit](https://ej2.syncfusion.com/vue/documentation/api/grid#startedit) method to initiate the edit mode dynamically. Similarly, if **Delete** is picked, the selected record is passed to the [deleteRecord](https://ej2.syncfusion.com/vue/documentation/api/grid#deleterecord) method to remove it from the grid.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/grid/toolbar/custom-cs3/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/grid/toolbar/custom-cs3/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/toolbar/custom-cs3" %}

## Render a component or element using the toolbar template

Rendering a component or element using the toolbar template in the Syncfusion Vue Grid allows you to extend the capabilities of the grid toolbar by incorporating custom components or elements. This provides flexibility to enhance the toolbar with custom buttons, dropdowns, input fields, icons, or any other desired UI elements. You can bind event handlers or handle interactions within the template to enable specific actions or behaviors associated with the added components or elements.

To render custom components or elements within the toolbar, use the [toolbarTemplate](https://ej2.syncfusion.com/vue/documentation/api/grid/#toolbartemplate). This allows you to include other components, such as a [Button](https://ej2.syncfusion.com/vue/documentation/button/getting-started), and perform specific grid actions based on the button click. For example, when the **ExcelExport** button is clicked, the [excelExport](https://ej2.syncfusion.com/vue/documentation/api/grid/#excelexport) method is called to export the grid to Excel. Similarly, when the **PdfExport** button is clicked, the [pdfExport](https://ej2.syncfusion.com/vue/documentation/api/grid/#pdfexport) method is called to export the grid to PDF format.Likewise, when the **Print** button is clicked, the [print](https://ej2.syncfusion.com/vue/documentation/api/grid/#print) method will triggered to print the grid.

The following example demonstrates how to render a **Button** component in the toolbar using `toolbarTemplate` and perform grid action based on the respected button click.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/grid/toolbar/custom-cs4/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/grid/toolbar/custom-cs4/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/toolbar/custom-cs4" %}