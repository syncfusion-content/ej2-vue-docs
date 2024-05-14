---
layout: post
title: Access grid instance in Vue Grid component | Syncfusion
description: Learn here all about access grid instance in Syncfusion Essentials Vue Grid control, its elements and more.
control: Access grid instance 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Access grid instance in Vue Grid component

You can access the instance of the Vue Grid in the following way.

```ts
dataBound: function (args) {
    var gridObj = this.$refs.grid1.$el.ej2_instances[0]; // get the instance of the Grid.
    Object.assign(gridObj.filterModule.filterOperators, {
        startsWith: "contains", // change the default operator as contains for string type column.
    });
}
```

In the following sample, the filter operation is performed by getting the instance of the Vue Grid component.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/grid/how-to/dropdown-cs3/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/how-to/dropdown-cs3" %}
