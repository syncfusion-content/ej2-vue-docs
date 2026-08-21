---
layout: post
title: Open a dialog on popup item click in Vue Split Button | Syncfusion
description: Open a Dialog component when a Vue Split Button popup item is selected by handling the dialog open action in the select event.
control: Open a dialog on popup item click 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# How to open a dialog on popup item click in Vue Split Button

This section explains about how to open a dialog on SplitButton popup item click. This can be achieved by handling dialog open in [`select`](https://ej2.syncfusion.com/vue/documentation/api/split-button/#select) event of the SplitButton.

Install Syncfusion<sup style="font-size:70%">&reg;</sup> `Popup` packages using below command.

```bash
npm install @syncfusion/ej2-vue-popups --save
```

In the following example, Dialog will open while selecting `Update...` item:

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/split-button/default-cs5/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/split-button/default-cs5/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/split-button/default-cs5" %}