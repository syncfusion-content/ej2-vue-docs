---
layout: post
title: Template in Vue Spinner component | Syncfusion
description: Learn here all about Template in Syncfusion Vue Spinner component of Syncfusion Essential JS 2 and more.
control: Template 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Template in Vue Spinner component

You can use custom templates on the Spinner instead of the default Spinner by specifying the template in the `setSpinner` method.

The following steps explains you on how to define template for Spinner.

* Import the `setSpinner` method from `ej2-vue-popups` library into your `vue` as shown in below.

        ```ts
        import { setSpinner } from '@syncfusion/ej2-vue-popups';
        ```

* Pass your custom template to the `setSpinner` method like as below.

        ```ts

        // Specify the template content to be displayed in the Spinner

        setSpinner({ template: '<div style="width:100%;height:100%" class="custom-rolling"><div></div></div>'});
        ```

> You should set the template to the Spinner before creating the respective Essential<sup style="font-size:70%">&reg;</sup> JS 2 component.
> Also,until we replace `setSpinner` template, the further Essential<sup style="font-size:70%">&reg;</sup> JS 2 component rendering is created
> with given template only.

* Now, render the Essential<sup style="font-size:70%">&reg;</sup> JS 2 component. It's render the Spinner with the template specified in the `setSpinner` method.

> In the below sample, we have rendered the Grid component with custom Spinner using `setSpinner` method.
> You have to define the styles for the template in `index.css`.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/spinner/setspinner-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/spinner/setspinner-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/spinner/setspinner-cs1" %}