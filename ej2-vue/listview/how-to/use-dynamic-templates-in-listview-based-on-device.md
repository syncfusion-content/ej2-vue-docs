---
layout: post
title: Templates based on device in Vue Listview component | Syncfusion
description: Learn here all about Use dynamic templates in listview based on device in Syncfusion Vue Listview component of Syncfusion Essential JS 2 and more.
control: Use dynamic templates in listview based on device 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Use dynamic templates in listview based on device in Vue Listview component

The Syncfusion Essential JS2 components are desktop and mobile-friendly. Therefore, you can use Syncfusion components in both modes. The component templates are not always fixed. Applications may need to load different templates depending on the device being used.

## Integration

In the ListView component, template support is being used. In some cases, while the component wrapper is responsive across all devices, the template contents are dynamically changed with unspecified dimensions on the sample side. CSS customization is also needed on the sample side to align template content responsively in both mobile and desktop modes. Here, two templates have been loaded for mobile and desktop modes. To check the device mode, a browser module has been imported from the [ej2-base](https://ej2.syncfusion.com/documentation/api/base/overview/) package.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/listview/dynamic-template-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/listview/dynamic-template-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/listview/dynamic-template-cs1" %}