---
layout: post
title: Enable disable grid and its actions in Vue Treegrid component | Syncfusion
description: Learn here all about Enable disable grid and its actions in Syncfusion Vue Treegrid component of Syncfusion Essential JS 2 and more.
control: Enable disable grid and its actions 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Enable disable grid and its actions in Vue Treegrid component

You can enable/disable the Tree Grid and its actions by applying/removing corresponding CSS styles.

To enable/disable the Tree Grid and its actions, follow the given steps:

**Step 1**:

Create CSS class with custom style to override the default style of Tree Grid.

```
    .disabletreegrid {
        pointer-events: none;
        opacity: 0.4;
    }
    .wrapper {
        cursor: not-allowed;
    }

```

**Step 2**:

Add/Remove the CSS class to the Tree Grid in the click event handler of Button.

```ts
    btnClick(args) {
      if (this.$refs.treegrid.$el.classList.contains('disablegrid')) {
          this.$refs.treegrid.$el.classList.remove('disablegrid');
          document.getElementById("TreeGridParent").classList.remove('wrapper');
      }
      else {
          this.$refs.treegrid.$el.classList.add('disablegrid');
          document.getElementById("TreeGridParent").classList.add('wrapper');
      }
    }

```

In the below demo, the button click will enable/disable the Tree Grid and its actions.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/treegrid/how-to/default-cs12/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/treegrid/how-to/default-cs12/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/treegrid/how-to/default-cs12" %}