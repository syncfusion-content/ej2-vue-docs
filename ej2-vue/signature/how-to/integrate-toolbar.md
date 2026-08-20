---
layout: post
title: How to integrate toolbar in Vue Signature | Syncfusion
description: Wire the Syncfusion Vue Signature to a toolbar by syncing the toolbar change event with canUndo, canRedo, and isEmpty.
control: Integrate toolbar 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# How to integrate toolbar in Vue Signature

The Signature component integrates with the toolbar and the interaction performed using the `change` event of the toolbar. In that, [`canUndo`](https://ej2.syncfusion.com/vue/documentation/api/signature/#canundo), [`canRedo`](https://ej2.syncfusion.com/vue/documentation/api/signature/#canredo) and [`isEmpty`](https://ej2.syncfusion.com/vue/documentation/api/signature/#isempty) methods were used to enable/disable undo, redo, and clear buttons.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/signature/default-cs8/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/signature/default-cs8/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/signature/default-cs8" %}