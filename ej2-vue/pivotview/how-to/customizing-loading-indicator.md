---
layout: post
title: Customizing loading indicator in Vue | Syncfusion
description: Learn here all about Customizing loading indicator in Syncfusion Vue Pivotview component of Syncfusion Essential JS 2 and more.
control: Customizing loading indicator 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Customizing the loading indicator in the Vue Pivot Table component

The Pivot Table displays a loading indicator during data processing operations such as filtering, sorting, and aggregation calculations. The default loading spinner can be customized to match application design requirements using the [`spinnerTemplate`](https://ej2.syncfusion.com/vue/documentation/api/pivotview/index-default#spinnertemplate) property.

The [`spinnerTemplate`](https://ej2.syncfusion.com/vue/documentation/api/pivotview/index-default#spinnertemplate) property accepts an HTML string that defines the custom loading indicator appearance. This enables control over the visual presentation, including custom styling and animations.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/pivot-grid/common-cs11/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/pivot-grid/common-cs11/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/pivot-grid/common-cs11" %}

## Disabling the loading indicator

The loading indicator can be completely disabled by setting the [`spinnerTemplate`](https://ej2.syncfusion.com/vue/documentation/api/pivotview/index-default#spinnertemplate) property to an empty string.

```js
function App() {
    return (<PivotViewComponent id='PivotView' height={350} spinnerTemplate={''}></PivotViewComponent>);
};
export default App;
```
