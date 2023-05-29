---
layout: post
title: Headers in Vue Grid component | Syncfusion
description: Learn here all about Headers in Syncfusion Vue Grid component of Syncfusion Essential JS 2 and more.
control: Headers 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Headers in Vue Grid component

## Header text

By default, column header title is displayed from column [`field`](https://ej2.syncfusion.com/vue/documentation/api/grid/column/#field) value. To override the default header title, you have to define the [`headerText`](https://ej2.syncfusion.com/vue/documentation/api/grid/column/#headertext) value.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/grid/column/default-cs28/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/column/default-cs28" %}

> If both the [`field`](https://ej2.syncfusion.com/vue/documentation/api/grid/column/#field) and [`headerText`](https://ej2.syncfusion.com/vue/documentation/api/grid/column/#headertext) are not defined in the column, the column renders with “empty” header text.

## Header template

Customize the header element using the [`headerTemplate`](https://ej2.syncfusion.com/vue/documentation/api/grid/column/#headertemplate) property. In this demo, the custom element is rendered for both the CustomerID and OrderDate column headers.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/grid/column/default-cs29/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/column/default-cs29" %}

## Change the orientation of header text

You can change the orientation of the header text by using the [`customAttributes`](https://ej2.syncfusion.com/vue/documentation/api/grid/column/#customattributes) property.

To change the Orientation of Header Text, Ensure the following steps:

**Step 1**: Create a css class with orientation style for grid header cell.

```
.orientationcss .e-headercelldiv {
    transform: rotate(90deg);
}
```

**Step 2**: Add the custom css class to particular column by using [`customAttributes`](https://ej2.syncfusion.com/vue/documentation/api/grid/column/#customattributes) property.

```
<e-column field='Freight' headerText='Freight' textAlign='Center' format='C2' :customAttributes='customAttributes' width=80></e-column>
```

**Step 3**: Resize the header cell height by using the following code.

```ts
setHeaderHeight(args) {
    let textWidth = document.querySelector(".orientationcss > div").scrollWidth;//Obtain the width of the headerText content.
    let headerCell = document.querySelectorAll(".e-headercell");
    for(let i = 0; i < headerCell.length; i++) {
       (headerCell.item(i)).style.height = textWidth + 'px'; //Assign the obtained textWidth as the height of the headerCell.
    }
}

```

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/grid/how-to/default-cs4/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/how-to/default-cs4" %}