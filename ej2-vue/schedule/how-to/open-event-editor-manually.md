---
layout: post
title: Open event editor manually in Vue Schedule component | Syncfusion
description: Learn here all about Open event editor manually in Syncfusion Vue Schedule component of Syncfusion Essential JS 2 and more.
control: Open event editor manually 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Open Event Editor Manually in Vue Schedule Component

## Open Editor Window Externally

The Vue Schedule component allows manually opening the event editor for a specific time range or an existing event by using the [`openEditor`](../api/schedule#openeditor) method. To open the editor for a selected time range, pass the cell details as the first argument and **Add** as the second argument. To open the editor for an existing event, pass that event’s details as the first argument and **Save** as the second argument. In the following example, clicking the corresponding button opens the respective editor window manually.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/schedule/open-editor-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/schedule/open-editor-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/schedule/open-editor-cs1" %}

## Open Editor Window on Single Click

By default, the editor window opens when cells or appointments are double-clicked. You can enable opening the editor with a single click by calling the [`openEditor`](../api/schedule#openeditor) method inside the [`eventClick`](https://ej2.syncfusion.com/vue/documentation/api/schedule#eventclick) and [`cellClick`](https://ej2.syncfusion.com/vue/documentation/api/schedule#cellclick) , and by setting the [`showQuickInfo`](../api/schedule#showquickinfo)property to `false`. The following example shows how to open the editor window on a single click of cells or appointments.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/schedule/default-cs4/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/schedule/default-cs4/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/schedule/default-cs4" %}
