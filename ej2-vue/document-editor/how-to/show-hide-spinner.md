---
layout: post
title: Show hide spinner in Vue Document editor component | Syncfusion
description: Learn here all about Show hide spinner in Syncfusion Vue Document editor component of Syncfusion Essential JS 2 and more.
control: Show hide spinner 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Show hide spinner in Vue Document editor component

Using [`spinner`](https://ej2.syncfusion.com/documentation/spinner/getting-started/#create-the-spinner-globally) component, you can show/hide spinner while opening document in DocumentEditor .

Example code snippet to show/hide spinner

```
// showSpinner() will make the spinner visible
showSpinner(document.getElementById('container'));

// hideSpinner() method used hide spinner
hideSpinner(document.getElementById('container'));
```

Refer to the following example.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/document-editor/spinner-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/document-editor/spinner-cs1" %}

>Note: In above example, we have used setInterval to hide spinner, just for demo purpose.
