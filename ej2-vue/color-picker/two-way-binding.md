---
layout: post
title: Two way binding in Vue Color picker component | Syncfusion
description: Learn here all about Two way binding in Syncfusion Vue Color picker component of Syncfusion Essential JS 2 and more.
control: Two way binding 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Two way binding in Vue Color picker component

It can be achieved by using the `v-model` directive in vue. In the following sample the color value is selected in one ColorPicker will automatically changes in the other ColorPicker. It will update in the other ColorPicker using value property.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/color-picker/default-cs20/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/color-picker/default-cs20/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/color-picker/default-cs20" %}