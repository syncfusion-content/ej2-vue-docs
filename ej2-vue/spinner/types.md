---
layout: post
title: Types in Vue Spinner component | Syncfusion
description: Learn here all about Types in Syncfusion Vue Spinner component of Syncfusion Essential JS 2 and more.
control: Types 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Types in Vue Spinner component

By default, the Spinner is loaded in the applicable Essential<sup style="font-size:70%">&reg;</sup> JS 2 component based on the theme imported into the page. Based on the theme, the type is set to the Spinner.

The available types are:
* Material
* Fabric
* Bootstrap

You can change the Essential<sup style="font-size:70%">&reg;</sup> JS 2 component spinner type by passing the type of the spinner as parameter to the `setSpinner` method like as below.

```ts

// Specify the type of the Spinner to be displayed
setSpinner({ type: 'Bootstrap'});
```

> After Essential<sup style="font-size:70%">&reg;</sup> JS 2 component creation only, you can change the Essential<sup style="font-size:70%">&reg;</sup> JS 2 component spinner type.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/spinner/setspinner-cs2/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/spinner/setspinner-cs2/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/spinner/setspinner-cs2" %}