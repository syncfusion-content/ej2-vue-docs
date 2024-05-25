---
layout: post
title: Load tab items dynamically in Vue Tab component | Syncfusion
description: Learn here all about Load tab items dynamically in Syncfusion Vue Tab component of Syncfusion Essential JS 2 and more.
control: Load tab items dynamically 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Load tab items dynamically in Vue Tab component

Tabs can be added dynamically by passing array of items and index value to the [`addTab`](https://ej2.syncfusion.com/vue/documentation/api/tab/#addtab) method.

```ts
    // New tab title and content inputs are fetched and stored in local variable
    let title = document.getElementById('tab-title').value;
    let content = document.getElementById('tab-content').value;
    var tabObj = this.$refs.TabInstance.ej2Instances;

    // Required tab item object formed by using textbox inputs
    let item =  { header: { text: title }, content: createElement('pre', { innerHTML: content.replace(/\n/g, '<br>\n') }).outerHTML };

    // Item object and the index argument passed into the addTab method to add a new tab
    tabObj.addTab([item], totalItems-1);
```

In the following demo, you can add the tab content by clicking the **+**. Enter the new Tab heading and  content details in the available text boxes, click 'Add Tab' button to pass the details as an array and here last index is calculated to append the new tab at the end.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/tab/how-to/dynamic-tab-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/tab/how-to/dynamic-tab-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/tab/how-to/dynamic-tab-cs1" %}