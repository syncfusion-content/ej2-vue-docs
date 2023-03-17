---
layout: post
title: Connection when a node is dropped over another node in Vue Diagram component | Syncfusion
description: Learn here all about Connection when a node is dropped over another node in Syncfusion Vue Diagram component of Syncfusion Essential JS 2 and more.
control: Connection when a node is dropped over another node 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Connection when a node is dropped over another node in Vue Diagram component

The connection can be established when a node is dropped over the another node using the diagram [`DropEvent`](https://ej2.syncfusion.com/vue/documentation/api/diagram#drop--emittypeidropeventargs)

## Step1

To establish the connection over the dropped node, add connectors in the drop event and assign the source ID and target ID of the connectors to the appropriate nodes.

```

<template>
    <div id="app">
        <ejs-diagram id="diagram"></ejs-diagram>
    </div>
</template>

```

```ts

//Drop event

export default {
    name: 'app',
    data() {
        return {
        drop: dropEvent,
      }
    },
}

function dropEvent(arg) {
        diagram = diagram = this.$refs.diagram.ej2Instances;
        //Adding conectors and configuring the source and target
        diagram.add({ id: 'connector', sourceID: (args.element).id, targetID: (args.target).id });
        this.dataBind();
    };

```
