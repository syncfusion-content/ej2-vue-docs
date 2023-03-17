---
layout: post
title: Flow of connectors in Vue Diagram component | Syncfusion
description: Learn here all about Flow of connectors in Syncfusion Vue Diagram component of Syncfusion Essential JS 2 and more.
control: Flow of connectors 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Flow of connectors in Vue Diagram component

You can get the connectors inward entry and the outward entry through the `inEdges` and the outEdges properties.

## Step1

The `inEdges` holds the collection of incoming connector/edges of the node. To get the `inEdges` collection, use the following code snippet.

 ```ts

// gets the incoming connectors of the selected node
let diagram = this.$refs.diagram.ej2Instances;
let connectors = (diagram.selectedItems.connectors[0]).inEdges;

 ```

## Step2

The `outEdges` holds the collection of outgoing connector/edges of the node. To get the `OutEdges` collection,use the following code snippet.

```ts

//gets the out going connectors of the selected node
let diagram = this.$refs.diagram.ej2Instances;
let connectors = (diagram.selectedItems.connectors[0]).outEdges;

```

## Step3

To get the collection of `inEdges` and outEdges of the nodes, you need to perform iteration as shown as follows. In the following code snippet, the collection of `inEdges` and outEdges of the selected nodes can be iterated.

```ts
    let diagram = this.$refs.diagram.ej2Instances;
    // Consider the below flow chart
    if (diagram.selectedItems.nodes.length) {
            // Finds the connectors with in-ward communication
            // Initialy if we select the Design node it will retrieve the connector between the design node and the start node
            let connectors = (diagram.selectedItems.connectors[0]).inEdges;
            for (let i = 0; i < connectors.length; i++) {
                // Retrieves the inward linked node's connectors with the particular node.
                //if we select the Design node it will retrieve the connectors between the Start and the design node. And connectors in between the Design and Design error node.
                let index = diagram.connectors.indexOf(diagram.nameTable[connectors[i]]);
                // Retrieves the nodes id connected with the  particular node based on the  connector's source
                // If we select the start node it will retrieve the Design node.
                 let nodeId = diagram.nameTable[connectors[i]].sourceID;
            }
    }

```

Like `inEdges` iterating the need to iterate outEdges collections for the selected node.

```ts
  let diagram = this.$refs.diagram.ej2Instances;
    // Consider the below flow chart
    if (diagram.selectedItems.nodes.length) {
            // Finds the connectors with out-ward communication
            let connectors = (diagram.selectedItems.connectors[0]).outEdges;
            for (let i = 0; i < connectors.length; i++) {
                // Retrieves the connectors with outward communication with the selected node
                // Initially if we select the start node ot will retrieve the connectors between start node and the design node
                let index = diagram.connectors.indexOf(diagram.nameTable[connectors[i]]);
                // Retrieves the nodes id connected with the  particular node based on the  connector's target
                // If select the Design node it will retrieve the Coding node
                let nodeId = diagram.nameTable[connectors[i]].targetID;
            }
    }

```

In the following sample, the flow of connections is described by various stages from top to bottom.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/diagram/how-to/flowofconnectors-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/diagram/how-to/flowofconnectors-cs1" %}