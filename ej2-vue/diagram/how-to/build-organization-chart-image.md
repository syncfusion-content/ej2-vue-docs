---
layout: post
title: Build organization chart image in Vue Diagram component | Syncfusion
description: Learn here all about Build organization chart image in Syncfusion Vue Diagram component of Syncfusion Essential JS 2 and more.
control: Build organization chart image 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Build organization chart image in Vue Diagram component

In the [`organizationchart`](../automatic-layout#organizational-chart), bind the text inside the rectangle node annotation. In this section, you can see how to build the organization chart with Image nodes.

## Step1

The following code snippet are used to bind the data source to dataSourceSettings and how to map the image source from the data source.

```ts

// Data source
export let data = [{
        Id: "parent",
        Role: "Project Management",
        ImageUrl: "./diagram/images/employees/image30.png"
    },
    {
        Id: 1,
        Role: "R&D Team",
        Team: "parent",
        ImageUrl: "./diagram/images/employees/image2.png"
    }
];

```

## Step2

Image nodes can be created on the organization chart using the `doBinding` method. In this method, you can customize the nodes properties.
In the following code sample, the image node and annotation properties can be customized. Refer to the [image node](../shapes#image) for creating the image node.

```ts

export default {
    data() {
        return{
          dataSourceSettings: {
            doBinding: (node, data) => {
                node.shape = {
                    // sets the type of the shape as image
                    type: 'Image',
                    // image url for the image node
                    source: node.data.ImageUrl,
                    // sets the alignment the image
                    align:'XMinYMin',

                };
                node.annotations = [{
                    // sets the annotation content for the Node
                    content:node.data.Name,
                    // sets postions of the annotation
                    offset:{x:0.82, y:0.9}}];
            }
        }
    }
// ...
// ...
}
}


```

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/diagram/how-to/organizationimagenode-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/diagram/how-to/organizationimagenode-cs1" %}