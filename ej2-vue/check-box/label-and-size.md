---
layout: post
title: Label and Size in Vue Checkbox | Syncfusion
description: Set a Vue Checkbox caption with the label property, choose its position, and switch between default and small sizes.
control: Label and size 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Label and Size in Vue Checkbox

This section explains the different sizes and labels.

## Label

The CheckBox caption can be defined by using the [`label`](https://ej2.syncfusion.com/vue/documentation/api/check-box/#label) property. This reduces the manual addition of label for CheckBox. You can customize the label position before or after the CheckBox through the [`labelPosition`](https://ej2.syncfusion.com/vue/documentation/api/check-box/#labelposition)property.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/check-box/default-cs9/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/check-box/default-cs9/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/check-box/default-cs9" %}

## Size

The different CheckBox sizes available are default and small. To reduce the size of default CheckBox to small, set the [`cssClass`](https://ej2.syncfusion.com/vue/documentation/api/check-box/#cssclass) property to `e-small`.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/check-box/default-cs10/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/check-box/default-cs10/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/check-box/default-cs10" %}

## See Also

* [CheckBox customization](./how-to/customized-checkbox)