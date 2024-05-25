---
layout: post
title: Open a dialog on popup item click in Vue Split button component | Syncfusion
description: Learn here all about Open a dialog on popup item click in Syncfusion Vue Split button component of Syncfusion Essential JS 2 and more.
control: Open a dialog on popup item click 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Open a dialog on popup item click in Vue Split button component

This section explains about how to open a dialog on SplitButton popup item click. This can be achieved by handling dialog open in [`select`](https://ej2.syncfusion.com/vue/documentation/api/split-button/#select) event of the SplitButton.

Install Syncfusion `Popup` packages using below command.

```bash
npm install @syncfusion/ej2-vue-popups --save
```

In the following example, Dialog will open while selecting `Update...` item:

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/split-button/default-cs5/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue) %}
{% include code-snippet/split-button/default-cs5/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/split-button/default-cs5" %}