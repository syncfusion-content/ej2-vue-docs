---
layout: post
title: Column template in Vue Grid component | Syncfusion
description: Learn here all about Column template in Syncfusion Vue Grid component of Syncfusion Essential JS 2 and more.
control: Column template 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Column template in Vue Grid component

## Render image in a column

The column [`template`](https://ej2.syncfusion.com/vue/documentation/api/grid/column/#template) has options to display custom element instead of a field value in the column.

The `template` property should be a function which returns an object. The object should contain a Vue component which should be assigned to the `template` property. The grid will look for the template property and render it as new Vue instance.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/grid/column/template-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/column/template-cs1" %}

## Render other components in a column

You can render any component in a grid column using the [`template`](https://ej2.syncfusion.com/vue/documentation/api/grid/column/#template) property.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/grid/how-to/dropdown-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/how-to/dropdown-cs1" %}

## Using condition template

You can render the template elements based on condition.

In the following code, checkbox is rendered based on `Discontinued` field value.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/grid/column/condition-template-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/column/condition-template-cs1" %}

## How to get the row object by clicking on the template element

You can get the row object without selecting the row and achieve it using the column template feature and the `getRowObjectFromUID` method of the Grid.

In the following sample, the button element is rendered in the Employee Data column. By clicking the button, you can get the row object using the `getRowObjectFromUID` method of the Grid and display it in the console.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/grid/column/template-cs2/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/column/template-cs2" %}