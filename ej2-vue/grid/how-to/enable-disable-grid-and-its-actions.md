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

You can enable/disable the Grid and its actions by applying/removing corresponding CSS styles.

To enable/disable the grid and its actions, follow the given steps:

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

**Step 2**: Add/Remove the CSS class to the Grid in the click event handler of Button.

```ts
btnClick(args) {
    if (this.$refs.Grid.$el.classList.contains('disablegrid')) {
        this.$refs.Grid.$el.classList.remove('disablegrid');
        document.getElementById("GridParent").classList.remove('wrapper');
    }
    else {
        this.$refs.Grid.$el.classList.add('disablegrid');
        document.getElementById("GridParent").classList.add('wrapper');
    }
}
```

In the below demo, the button click will enable/disable the Grid and its actions.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/grid/edit/default-cs45/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/edit/default-cs45" %}
