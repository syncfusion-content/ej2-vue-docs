---
layout: post
title: Create link tool using user handle in Vue Diagram component | Syncfusion
description: Learn here all about Create link tool using user handle in Syncfusion Vue Diagram component of Syncfusion Essential JS 2 and more.
control: Create link tool using user handle 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Create link tool using user handle in Vue Diagram component

You can create the link tool from the user handle using the `ConnectorDrawingTool` class.

## Step1

By extending the `ConnectorDrawingTool` class, create the link tool for the nodes and add the connectors in the mouse down method by assigning the source ID of the connector from which the connection is created. The following code snippet is used to create the link tool from the user handles.

```

<template>
    <div id="app">
        <ejs-diagram id="diagram" :getCustomTool='getCustomTool' :selectedItems='selectedItems'></ejs-diagram>
    </div>
</template>

```

```ts

//Enables the connector Tool for UserHandle.
function getTool(action) {
   // ...
   // ...
  let tool;
  let diagramInstance = this.$refs.diagram.ej2Instances;
  if (action === "clone") {
    tool = new ConnectorTool(diagramInstance.commandHandler);
  }
  return tool;
   // ...
   // ...
}

class ConnectorTool extends ConnectorDrawingTool {
    public diagram = null;
    public mouseDown(args) {
      let connector = {
        type: 'Straight',       //  initialize the straight line connector
        sourceID: this.diagram.selectedItems.nodes[0].id      // Source node id have been set
      };
      // sets the straight line connector as the drawing object.
      this.diagram.drawingObject = connector;
      // ...
      // ...
    }
  }

// ...
// ...
    // Invoking selection change event
    export default {
    name: 'app',
    data() {
        return {
            // ...
            // ...
             //set CustomTool
              getCustomTool: getTool
            // ...
            // ...
        }
    },
}
// ...
// ...

```

Here is the sample for creating link tool from the user handles.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/diagram/how-to/linktooluserhandle-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/diagram/how-to/linktooluserhandle-cs1" %}