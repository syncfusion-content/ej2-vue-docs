---
layout: post
title: Customize column styles in Vue Treegrid component | Syncfusion
description: Learn here all about Customize column styles in Syncfusion Vue Treegrid component of Syncfusion Essential JS 2 and more.
control: Customize column styles 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Customize column styles in Vue Treegrid component

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
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/treegrid/how-to/default-cs6/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/treegrid/how-to/default-cs6" %}
