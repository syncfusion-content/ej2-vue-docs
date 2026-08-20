---
layout: post
title: Open a dialog on popup item click in Vue Dropdown Button | Syncfusion
description: Open a dialog when a Vue Dropdown Button popup item is selected by handling the dialog open action in the select event.
control: Open a dialog on popup item click 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# How to open a dialog on popup item click in Vue Dropdown Button

This section explains about how to open a dialog on DropdownButton popup item click. This can be achieved by handling dialog open in [`select`](https://ej2.syncfusion.com/vue/documentation/api/drop-down-button/#select) event of the DropdownButton.

Install Syncfusion<sup style="font-size:70%">&reg;</sup> `List` packages using below command.

```bash
npm install @syncfusion/ej2-vue-list --save
```

In the following example, Dialog will open while selecting `Other Folder...` item.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/drop-down-button/default-cs10/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/drop-down-button/default-cs10/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/drop-down-button/default-cs10" %}