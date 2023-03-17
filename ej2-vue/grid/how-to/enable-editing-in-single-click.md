---
layout: post
title: Enable editing in single click in Vue Grid component | Syncfusion
description: Learn here all about Enable editing in single click in Syncfusion Vue Grid component of Syncfusion Essential JS 2 and more.
control: Enable editing in single click 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Enable editing in single click in Vue Grid component

## Normal Editing

You can make a row editable on a single click with **Normal** mode of editing in Grid, by using the [`startEdit`](https://ej2.syncfusion.com/vue/documentation/api/grid/#startedit) and [`endEdit`](https://ej2.syncfusion.com/vue/documentation/api/grid/#endedit) methods.

Bind the **mouseup** event for Grid and in the event handler call the [`startEdit`](https://ej2.syncfusion.com/vue/documentation/api/grid/#startedit) and [`endEdit`](https://ej2.syncfusion.com/vue/documentation/api/grid/#endedit), based on the clicked target element.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/grid/edit/single-click-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/edit/single-click-cs1" %}

### Open dropdown edit popup on single click

You can open the default dropdown edit popup with single click edit by focusing the dropdown element and calling the EJ2 dropdown list's [`showPopup`](https://ej2.syncfusion.com/vue/documentation/api/drop-down-list/#showpopup) method in the Grid's [`actionComplete`](https://ej2.syncfusion.com/vue/documentation/api/grid/#actioncomplete) event. In this demo we have used a global flag variable in the **mouseup** event to ensure if the dropdown column is the clicked edit target.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/grid/edit/single-click-cs2/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/edit/single-click-cs2" %}