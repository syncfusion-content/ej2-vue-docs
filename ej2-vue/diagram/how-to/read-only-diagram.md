---
layout: post
title: Read only diagram in Vue Diagram component | Syncfusion
description: Learn here all about Read only diagram in Syncfusion Vue Diagram component of Syncfusion Essential JS 2 and more.
control: Read only diagram 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Read only diagram in Vue Diagram component

You can create the read-only diagram by using [`DiagramConstraints`](./constrains#diagram-constraints).

## Step1

To create the read-only diagram, remove the page editable constraints from the diagram constraints as shown as follows.

```ts

export default {
    name: 'app',
    data() {
        return {
            //Removing the page editable constraints from the Diagram default constraints
            constraints: DiagramConstraints.Default & ~DiagramConstraints.PageEditable
        }
    }
}

```

## Step2

After defining the read-only constraint to the diagram, you cannot perform any operations over the diagram except the click event. Refer to the following code sample for defining click event and page editable constraints for the diagram.

```ts

function clickEvent(args) {
// ...
// ...
alert('click event triggered')
}

export default {
    name: 'app',
    data() {
        // ...
        // ...
        return {
            //Removing the page editable constraints from the Diagram default constraints
            constraints: DiagramConstraints.Default & ~DiagramConstraints.PageEditable,
            //Callling the defined click event
            click:clickEvent
        }
         // ...
        // ...
    }
}

```

Refer to the following sample for creating read-only diagram and performing actions on click events.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/diagram/how-to/readonly-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/diagram/how-to/readonly-cs1" %}