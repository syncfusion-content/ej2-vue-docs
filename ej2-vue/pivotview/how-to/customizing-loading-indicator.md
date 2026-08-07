---
layout: post
title: How to customize the loading indicator in Vue Pivot Table | Syncfusion
description: Step-by-step example showing how to customize or disable the loading indicator in the Vue Pivot Table through the spinnerTemplate property with a custom HTML string.
control: Customizing loading indicator 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# How to customize the loading indicator in Vue Pivot Table

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
