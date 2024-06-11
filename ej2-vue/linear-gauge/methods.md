---
layout: post
title: Methods in Vue Linear gauge component | Syncfusion
description: Learn here all about Methods in Syncfusion Vue Linear gauge component of Syncfusion Essential JS 2 and more.
control: Methods 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---
# Methods in Vue Linear gauge component

The following methods are available in the Linear Gauge component.

## setPointerValue

To change the pointer value dynamically, use the [`setPointerValue`](https://ej2.syncfusion.com/vue/documentation/api/linear-gauge/#setpointervalue) method in the Linear Gauge component. The following are the arguments for this method.

|   Argument name      |   Description                            |
|----------------------| -----------------------------------------|
|     axisIndex        |    Specifies the index of the axis in which the pointer value is to be updated.|
|     pointerIndex     |    Specifies the index of the pointer to be updated.           |
|     pointerValue     |    Specifies the value of the pointer to be updated.           |

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/linear-gauge/getting-started-cs52/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/linear-gauge/getting-started-cs52/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/linear-gauge/getting-started-cs52" %}

## setAnnotationValue

To change the annotation content dynamically, use the [`setAnnotationValue`](https://ej2.syncfusion.com/vue/documentation/api/linear-gauge/#setannotationvalue) method in the Linear Gauge component. The following are the arguments for this method.

|   Argument name      |   Description                            |
|----------------------| -----------------------------------------|
|     annotationIndex  |    Specifies the index number of the annotation to be updated. |
|     content          |    Specifies the text for the annotation to be updated.        |
|     axisValue        |    Specifies the value of the axis where the annotation is to be placed.|

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/linear-gauge/getting-started-cs53/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/linear-gauge/getting-started-cs53/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/linear-gauge/getting-started-cs53" %}

## refresh

The [`refresh`](https://ej2.syncfusion.com/vue/documentation/api/linear-gauge/#refresh) method can be used to change the state of the component and render it again.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/linear-gauge/getting-started-cs54/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/linear-gauge/getting-started-cs54/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/linear-gauge/getting-started-cs54" %}