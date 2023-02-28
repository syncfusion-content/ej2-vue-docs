---
layout: post
title: Show hide context menu in Vue Diagram component | Syncfusion
description: Learn here all about Show hide context menu in Syncfusion Vue Diagram component of Syncfusion Essential JS 2 and more.
control: Show hide context menu 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Show hide context menu in Vue Diagram component

In the diagram, you can create the customized context menu. Refer to the [`contextmenu`](./context-menu) for further references.

## Step1

To add the [`customized context menu`] (./context-menu#), define the customized context menu as shown as follows.

```

<template>
    <div id="app">
        <ejs-diagram id="diagram">
        </ejs-diagram>
    </div>
</template>

```

```ts

//Defining customized context menu
contextMenuSettings: {
    show: true,
    items: [{
        text: 'Apple',
        id: 'apple',
    },
    {
        text: 'Carrot',
        id: 'carrot'
    }
    ],
    // Hides the default context menu items and shows only the custom menu
    showCustomMenuOnly: true,
};

```

## Step2

To load separate customized menu for each nodes, define the hidden ID of the context menu as shown as follows.

```ts

    // ...
    // ...
    // Defining the hidden Id for hiding the unwanted context menu item and displays the needed one
    let hiddenId = [];
        hiddenId = ['apple', 'carrot'];
    // ...
    // ...
    let diagram = this.$refs.diagram.ej2Instances
    if (diagram.selectedItems.nodes.length) {
        //From the hiddenId getting the needed context menu items
            if (diagram.selectedItems.nodes[0].id === "Fruit") {
                hiddenId.splice(hiddenId.indexOf('apple'),1);
                // ...
                // ...
            }
                // ...
                // ...
    }
    args.hiddenItems = hiddenId;

```

Refer to the following code sample for creating customized context menu with hiding the context menu item option.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/diagram/how-to/contextmenushowhide-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/diagram/how-to/contextmenushowhide-cs1" %}
