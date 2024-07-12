---
layout: post
title: Open event editor manually in Vue Schedule component | Syncfusion
description: Learn here all about Open event editor manually in Syncfusion Vue Schedule component of Syncfusion Essential JS 2 and more.
control: Open event editor manually 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Open event editor manually in Vue Schedule component

## Open Editor Window externally

Scheduler allows the user to manually open the event editor on specific time or on certain events using [`openEditor`](../api/schedule/#openeditor) method. To open the editor on specific range of time, user need to pass the cell details as first argument and **Add** as second argument whereas to open it on event pass that event detail and **Save** as arguments. In the following code example, on clicking the respective button will open the respective editor window manually.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/schedule/open-editor-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/schedule/open-editor-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/schedule/open-editor-cs1" %}

## Open editor window on single click

By default, Scheduler Editor window will open when double clicking the cells or appointments. You can also open the editor window with single click by using [`openEditor`](../api/schedule/#openeditor) method in [`eventClick`](https://ej2.syncfusion.com/vue/documentation/api/schedule/#eventclick) and [`cellClick`](https://ej2.syncfusion.com/vue/documentation/api/schedule/#cellclick) events of scheduler and setting `false` to [`showQuickInfo`](../api/schedule/#showquickinfo). The following example shows how to open editor window on single click of cells and appointments.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/schedule/default-cs4/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/schedule/default-cs4/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/schedule/default-cs4" %}
