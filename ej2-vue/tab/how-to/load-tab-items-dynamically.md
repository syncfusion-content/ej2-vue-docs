---
layout: post
title: How to load tab items dynamically in Vue Tabs | Syncfusion
description: Add or remove Vue Tabs items at runtime using the addTab and removeTab public methods to dynamically change the tab collection based on user actions.
control: Load tab items dynamically 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# How to load tab items dynamically in Vue Tabs

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