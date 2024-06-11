---
layout: post
title: Restrict decimal points with treegrid editing in Vue Treegrid component | Syncfusion
description: Learn here all about Restrict decimal points with treegrid editing in Syncfusion Vue Treegrid component of Syncfusion Essential JS 2 and more.
control: Restrict decimal points with treegrid editing 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Restrict decimal points with treegrid editing in Vue Treegrid component

By default, the number of decimal places will be restricted to two in the NumericTextBox while editing the numeric column. We can restrict to type the decimal points in a NumericTextBox by using the **validateDecimalOnType** and **decimals** properties of NumericTextBox.

In the below demo, while editing the row we have restricted to type the decimal point value in the NumericTextBox of **Price** column.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/treegrid/how-to/default-cs19/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/treegrid/how-to/default-cs19/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/treegrid/how-to/default-cs19" %}