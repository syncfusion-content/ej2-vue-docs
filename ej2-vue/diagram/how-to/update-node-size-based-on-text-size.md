---
layout: post
title: Update node size based on text size in Vue Diagram component | Syncfusion
description: Learn here all about Update node size based on text size in Syncfusion Vue Diagram component of Syncfusion Essential JS 2 and more.
control: Update node size based on text size 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Update node size based on text size in Vue Diagram component

You can update the size of the node based on the labels text size in two ways.

## Step1

  Without assigning the width and height properties for the nodes.

  If you did not assign the width and height for the nodes by default, the nodes width and height will be updated based on the text size. Refer to the following code snippet for updating the node size based on the text size.

  ```ts

let nodes = [{
        id: 'industry', offsetX: 400, offsetY: 200, style: {
        fill: '#6BA5D7',
        strokeColor: 'white'
    },
    //Adding nodes annotation without specifying the nodes width and height
            annotations: [{ content: 'Node size based on the text size when the node is not assigned with a height and width property' }]
    }]
  
  ```

## Step2

  By assigning minimum width for the nodes.

  If you assign minimum width for the nodes and if the text size exceeds the minimum width, the content inside the labels will be wrapped. Refer to the following code snippet for updating the node size based on the text size even though if you assign minimum width for the nodes.

```ts

let nodes = [{
        id: 'industry', offsetX: 400, offsetY: 200, minWidth: 100, minHeight: 50, style: {
        fill: '#6BA5D7',
        strokeColor: 'white'
    },
    //Adding nodes annotation by specifying the nodes minWidth and minHeight
            annotations: [{ content: 'Nodes size based on the text size even though the node is assigned with minimum width' }]
    }]

```

Refer to the following sample for updating the nodes size based on the text size without assigning the width and height property for the nodes.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/diagram/how-to/textlimit-cs2/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/diagram/how-to/textlimit-cs2" %}