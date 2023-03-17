---
layout: post
title: Import native files into diagram in Vue Diagram component | Syncfusion
description: Learn here all about Import native files into diagram in Syncfusion Vue Diagram component of Syncfusion Essential JS 2 and more.
control: Import native files into diagram 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Import native files into diagram in Vue Diagram component

You can import SVG files into the diagram and the symbol palette, and also you can import SVG files during runtime. In the [`Nativenode`](https://ej2.syncfusion.com/vue/documentation/api/diagram/node#shape-shapemodel), add the SVG template and bind it into the nodes.

## Step1

Binding the SVG content to the nodes have been discussed in [`Nativenode`](../shapes#Native).

## Step2

To load the SVG files dynamically inside the symbol palette, refer to the following code snippet.

```

<template>
    <div id="app">
        <ejs-symbolpalette  ref="paletteObj"> </ejs-symbolpalette>
        </div>
</template>

```

```ts

            //uploading the svg files dynmically
            let shape;
            //Load the native content into the nodes;
            let shapeContent;
            shape = { id: 'newshape' + id.toString(), shape: { type: 'Native', content: '<g xmlns="http://www.w3.org/2000/svg" id="Tablet" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><path d="M8,35 L28,35 C28.5522847,35 29,34.5522847 29,34 L29,4 C29,3.44771525 28.5522847,3 28,3 L8,3 C7.44771525,3 7,3.44771525 7,4 L7,34 C7,34.5522847 7.44771525,35 8,35 Z" id="Fill-5" stroke="#5C90DF" stroke-width="2" fill="#C6D9F6" transform="translate(18.000000, 19.000000) rotate(-90.000000) translate(-18.000000, -19.000000) "/><path d="M29.5,21 C30.3284271,21 31,20.3284271 31,19.5 C31,18.6715729 30.3284271,18 29.5,18 C28.6715729,18 28,18.6715729 28,19.5 C28,20.3284271 28.6715729,21 29.5,21 Z" id="Oval-2" fill="#FFFFFF" transform="translate(29.500000, 19.500000) rotate(-90.000000) translate(-29.500000, -19.500000) "/></g> } }'
            //Creating Instance for the palette
            let paletteInstance = this.$refs.paletteObj.ej2Instances;
            //Adding the native content in to the symbol palette
            paletteInstance.addPaletteItem('symbolPalette', shape);

```

Refer to the following sample for loading SVG files into the palette and uploading the SVG files dynamically.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/diagram/how-to/nativefilesintothepalette-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/diagram/how-to/nativefilesintothepalette-cs1" %}