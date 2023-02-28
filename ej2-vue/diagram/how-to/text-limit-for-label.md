---
layout: post
title: Text limit for label in Vue Diagram component | Syncfusion
description: Learn here all about Text limit for label in Syncfusion Vue Diagram component of Syncfusion Essential JS 2 and more.
control: Text limit for label 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Text limit for label in Vue Diagram component

You can limit the text for the labels at initial rendering time and dynamically.

## Step1

To limit the text for the label at initial rendering, it can be limited with the help of the text's substring method as shown as follows.

```ts

let nodes = [{
    id:"node1",
    // ...
    // ...
    // label added to the node
    annotations: [{ id: 'label1', content: setLimit("SyncfusionSyncfusionSyncfusion", 10)}]
    style: {
        fill: '#6BA5D7',
        strokeColor: 'white'
    },
    }]

function setLimit(text, limit) {
    let len;
    // Getting the length of the string
    len = text.length;
    // Checking whether it mets limiting criteria or not
    if (len > limit)
    // Removing the characters beyond the limit.
        text = text.substring(0, limit);
    return text;
}

```

Refer to the following code sample for limiting the text for labels.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/./diagram/how-to/textlimit-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/./diagram/how-to/textlimit-cs1" %}

To perform the text limiting for labels dynamically, set the [`max-width`] attribute for the text box ID which appears at the time of editing the labels text.