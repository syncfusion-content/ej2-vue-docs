---
layout: post
title: How to configure cascading in Vue ComboBox | Syncfusion
description: Configure cascading Syncfusion Vue ComboBoxes by loading child data in the parent change event to react to the selected value.
control: Cascading 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# How to configure cascading in Vue ComboBox

The cascading ComboBox is a series of ComboBox, where the value of one ComboBox depends upon  another's value. This can be configured by using the [`change`](https://ej2.syncfusion.com/vue/documentation/api/combo-box#change) event of the parent ComboBox. Within that change event handler, data has to be loaded to the child ComboBox based on the selected value of the parent ComboBox.

The following example, shows the cascade behavior of country, state, and city ComboBox. Here, the [`dataBind`](https://ej2.syncfusion.com/vue/documentation/api/combo-box#databind) method is used to reflect the property changes immediately to the ComboBox.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/combobox/cascade-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/combobox/cascade-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/combobox/cascade-cs1" %}