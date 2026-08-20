---
layout: post
title: Two Way Binding in Vue Color Picker | Syncfusion
description: Sync selected colors between two Syncfusion Vue Color Pickers using the v-model directive for two-way data binding.
control: Two way binding 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Two Way Binding in Vue Color Picker

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