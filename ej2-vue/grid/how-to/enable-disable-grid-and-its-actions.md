---
layout: post
title: Enable disable grid and its actions in Vue Grid component | Syncfusion
description: Learn here all about Enable disable grid and its actions in Syncfusion Vue Grid component of Syncfusion Essential JS 2 and more.
control: Enable disable grid and its actions 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Enable disable grid and its actions in Vue Grid component

You can enable or disable the Syncfusion Vue Grid and its actions by applying or removing specific CSS styles. This functionality is particularly useful in scenarios where interactions need to be restricted. Follow the steps below to implement this feature.

**Step 1**: Create CSS class with custom style to override the default style of Grid.

```
.disablegrid {
    pointer-events: none;
    opacity: 0.4;
}
.wrapper {
    cursor: not-allowed;
}
```

**Step 2**: Add/Remove the CSS class to the Grid in the [click](https://ej2.syncfusion.com/vue/documentation/api/button#click) event handler of Button.

{% tabs %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
btnClick() {
    if (this.$refs.Grid.$el.classList.contains('disablegrid')) {
        this.$refs.Grid.$el.classList.remove('disablegrid');
        document.getElementById("GridParent").classList.remove('wrapper');
    }
    else {
        this.$refs.Grid.$el.classList.add('disablegrid');
        document.getElementById("GridParent").classList.add('wrapper');
    }
}
{% endhighlight %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
const btnClick = () => {
  if (Grid.value.$el.classList.contains('disablegrid')) {
    Grid.value.$el.classList.remove('disablegrid');
    document.getElementById("GridParent").classList.remove('wrapper');
  }
  else {
    Grid.value.$el.classList.add('disablegrid');
    document.getElementById("GridParent").classList.add('wrapper');
  }
{% endhighlight %}
{% endtabs %}

In the example below, clicking the button will toggle the enable/disable state of the Grid and its actions:

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/grid/edit/default-cs45/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/grid/edit/default-cs45/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/edit/default-cs45" %}