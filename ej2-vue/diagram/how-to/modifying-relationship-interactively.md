---
layout: post
title: Modifying relationship interactively in Vue Diagram component | Syncfusion
description: Learn here all about Modifying relationship interactively in Syncfusion Vue Diagram component of Syncfusion Essential JS 2 and more.
control: Modifying relationship interactively 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Modifying relationship interactively in Vue Diagram component

You can modify the parent child relationship in an organization chart interactively using the drop event.

## Step1

To modify the parent child relationship in an organization chart, use the following code snippet to create connection and layout interactively.

```

<template>
    <div id="app">
        <ejs-diagram id="diagram"></ejs-diagram>
    </div>
</template>

```

```ts

export default {
    name: 'app',
    data() {
        return {
            // ...
            // ...
            //Setting tooltip constraints
            constraints: DiagramConstraints.Default | DiagramConstraints.Tooltip,
            nodes: nodes,
            tooltip: {
                //Setting the content for the tooltip
                content: 'Nodes',
                //Positioning the tooltip
                position: 'TopLeft'
            }
            // ...
            // ...
        }
    }
}
        let diagram = this.$refs.diagram.ej2Instances;
        diagram.drop = (args) => {
        // ...
        // ...
        //Adding conectors and configuring the source and target
        diagram.add({ id: 'connector', sourceID: (args.element).id, targetID: (args.target).id });
        //Apllying layout
        diagram.doLayout();
        // ...
        // ...
    };

```