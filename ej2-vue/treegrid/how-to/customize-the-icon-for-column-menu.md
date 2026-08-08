---
layout: post
title: Vue TreeGrid Column Menu Icon Customization | Syncfusion
description: Learn how to customize the column menu icon in Vue TreeGrid using CSS overrides to apply custom icons and enhance the grid interface.
control: Customize the icon for column menu 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Customize the Column Menu Icon in Vue TreeGrid

You can customize the column menu icon by overriding the default Tree Grid class **.e-icons.e-columnmenu** with a custom property **content** as mentioned below,

```
    .e-treegrid .e-columnheader .e-icons.e-columnmenu::before {
        content: "\e903";
    }
```

In the below sample, Tree Grid is rendered with a customized column menu icon.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/treegrid/how-to/default-cs9/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/treegrid/how-to/default-cs9/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/treegrid/how-to/default-cs9" %}