---
layout: post
title: Vue TreeGrid Header Text Orientation | Syncfusion
description: Learn how to change header text orientation in Vue TreeGrid using custom CSS and rotated column headers to optimize space and improve readability.
control: Change orientation of header text 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Change Header Text Orientation in Vue TreeGrid

You can change the orientation of the header text by using the [`customAttributes`](https://ej2.syncfusion.com/vue/documentation/api/treegrid/column/#customattributes) property.

Ensure the following steps:

**Step 1**:

Create a css class with orientation style for treegrid header cell.

```
.orientationcss .e-headercelldiv {
    transform: rotate(90deg);
}

```

**Step 2**:

Add the custom css class to particular column by using [`customAttributes`](https://ej2.syncfusion.com/vue/documentation/api/treegrid/column/#customattributes) property.

```ts
    <e-column field='endDate' headerText='End Date' width='90' format="yMd" :customAttributes= "{class: 'orientationcss'}" textAlign='Center'></e-column>

```

**Step 3**:

Resize the header cell height in [`create`](https://ej2.syncfusion.com/vue/documentation/api/treegrid/#create) event by using the following code.

```ts
  setHeaderHeight: function(args) {
      let textWidth = document.querySelector(".orientationcss > div").scrollWidth; //Obtain the width of the headerText content.
      let headerCell = document.querySelectorAll(".e-headercell");
      for (let i = 0; i < headerCell.length; i++) {
        headerCell.item(i).style.height = textWidth + "px"; //Assign the obtained textWidth as the height of the headerCell.
      }
    }

```

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/treegrid/how-to/default-cs4/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/treegrid/how-to/default-cs4/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/treegrid/how-to/default-cs4" %}