---
layout: post
title: Retaining client side events in Vue Diagram component | Syncfusion
description: Learn here all about Retaining client side events in Syncfusion Vue Diagram component of Syncfusion Essential JS 2 and more.
control: Retaining client side events 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Retaining client side events in Vue Diagram component

In the diagram, you have the option for saving the diagram and also able to load the serialized JSON into the diagram. Refer to the [`Serialization`](./serialization) for further reference.

## Step1

In the following code snippet, define the click event for the diagram.

```ts

//defining the click event
function clickEvent(args) {
alert('click event triggered')
}

export default {
    name: 'app',
    data() {
        // ...
        // ...
        return {
    //calling the defined click event
    click: clickEvent
    // ...
    // ...
        }
    }
}

diagram.appendTo('#diagramElement');

```

If the diagram is saved, the methods cannot be serialized. While loading the diagram (de-serialize), retain the required methods and client events in the loaded diagram manually as shown below.

```ts

diagram.loadDiagram();
function clickEvent(args) {
alert('click event triggered')
}

```