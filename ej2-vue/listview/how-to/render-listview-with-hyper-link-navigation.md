---
layout: post
title: Render hyper link navigation in Vue ListView component | Syncfusion
description: Learn here all about Render ListView with hyper link navigation in Syncfusion Vue ListView component of Syncfusion Essential JS 2 and more.
control: Render ListView with hyper link navigation 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Render ListView with hyper link navigation in Vue ListView component

We can use an `anchor` tag along with the `href` attribute in our ListView's [`template`](https://ej2.syncfusion.com/vue/documentation/api/list-view/#template) property for navigation.

```ts

var listVue = Vue.component("demo", {
  template: `<a target='_blank' v-bind:href='data.url'>{{data.name}}</a>`,
  data() {
    return {
      data: {}
    };
  }
});

```

In the below sample, we have rendered a `ListView` with search engines URL.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/listview/checklist-cs8/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/listview/checklist-cs8/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/listview/checklist-cs8" %}