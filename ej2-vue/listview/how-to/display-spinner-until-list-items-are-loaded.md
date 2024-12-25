---
layout: post
title: Display spinner until loaded in Vue Listview component | Syncfusion
description: Learn here all about Display spinner until list items are loaded in Syncfusion Vue Listview component of Syncfusion Essential JS 2 and more.
control: Display spinner until list items are loaded 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Display spinner until list items are loaded in Vue Listview component

Some features of the ListView component, such as remote data-binding, take more time to fetch data from the corresponding dataSource or remote URL. In such cases, you can use the EJ2 `Spinner` component to enhance the appearance of the UI. This section explains how to load a spinner component to improve the appearance.

Refer to the following code sample to render the spinner component.

```ts
    createSpinner({
        target: this.spinnerEle.nativeElement
    });
    showSpinner(this.spinnerEle.nativeElement);
```

Here, the data is fetched from `Northwind` Service URL; it takes a few seconds to load the data. To enhance the UI, the spinner component is rendered initially. After the data is loaded from the remote URL, the spinner component will be hidden in the ListView's [`actionComplete`](https://ej2.syncfusion.com/vue/documentation/api/list-view/#actioncomplete) event.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/listview/data-binding/remote-data-cs3/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/listview/data-binding/remote-data-cs3/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/listview/data-binding/remote-data-cs3" %}