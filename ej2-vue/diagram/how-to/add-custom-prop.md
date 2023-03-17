---
layout: post
title: Add custom prop in Vue Diagram component | Syncfusion
description: Learn here all about Add custom prop in Syncfusion Vue Diagram component of Syncfusion Essential JS 2 and more.
control: Add custom prop 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Add custom prop in Vue Diagram component

You can add custom properties for the nodes or connectors using the [`addinfo`](https://ej2.syncfusion.com/vue/documentation/api/diagram#addInfo-object) property.

## Step1

The following code snippet are used to add custom properties for the nodes/connectors:

```ts

//adding custom properties through addInfo
let addInfo = { Designation: 'manager' };

//Assinging the defined custom property to the node
 let nodes = [{
     // ...
    // ...
    //Adding custom properties
    addInfo: addInfo,
    // ...
    // ...
    }
    // Text(label) added to the node
}]

```

## Step2

After adding the custom property, you can access it during runtime. In the following code snippet, the custom property have been accessed using the client-side events.

```ts

// Selection change event definition
function selectionChange(args) {
    if (args.state === 'Changing') {
        if (args.newValue.length > 0) {
          alert("The Added custom property is:" + (args.newValue[0].addInfo).Designation);
        }
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
            selectionChange: selectionChange,
            // ...
            // ...
        }
    },
}
// ...
// ...

```

The below sample shows adding custom properties to the node/connectors and accessing it during runtime.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/diagram/how-to/commondocs-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/diagram/how-to/commondocs-cs1" %}