---
layout: post
title: Vue TreeGrid Column Style Customization | Syncfusion
description: Learn how to customize column styles in Vue TreeGrid using customAttributes, including applying custom CSS to header and content cells.
control: Customize column styles 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Customize Column Styles in Vue TreeGrid

You can customise the appearance of header and content of the particular column using the [`customAttributes`](https://ej2.syncfusion.com/vue/documentation/api/treegrid/column/#customattributes) property.

To customize the Tree Grid column, follow the given steps:

**Step 1**:

Create a css class with custom style to override the default style for rowcell and headercell.

```

.e-treegrid .e-rowcell.customcss{
    background-color: #ecedee;
    font-family: 'Bell MT';
    color: 'red';
    font-size: '20px';
}

.e-treegrid .e-headercell.customcss{
    background-color: #2382c3;
    color: white;
    font-family: 'Bell MT';
    font-size: '20px';
}

```

**Step 2**:

Add the custom css class to particular column by using [`customAttributes`](https://ej2.syncfusion.com/vue/documentation/api/treegrid/column/#customattributes) property.

```ts

<e-column field="taskName" headerText="Task Name" :customAttributes="{class: 'customcss'}"  width="100"></e-column>

```

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/treegrid/how-to/default-cs6/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/treegrid/how-to/default-cs6/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/treegrid/how-to/default-cs6" %}