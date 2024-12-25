---
layout: post
title: Create mobile contact layout in Vue Listview component | Syncfusion
description: Learn here all about Create mobile contact layout from listview in Syncfusion Vue Listview component of Syncfusion Essential JS 2 and more.
control: Create mobile contact layout from listview 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Create mobile contact layout from listview in Vue Listview component

You can customize the ListView using the [template](https://ej2.syncfusion.com/vue/documentation/api/list-view/#template) property. Refer to the following steps to customize ListView as mobile contact view with our `ej2-avatar`.

* Render the ListView with a [dataSource](https://ej2.syncfusion.com/vue/documentation/api/list-view/#datasource) that contains avatar data. You can set avatar data as either text or class names. Refer to the following codes.

  ```ts
   dataSource: [
    {
     text: "Jenifer", contact: "(206) 555-985774", id: "1", avatar: "", pic: "pic01"
    },
   {
     text: "Amenda", contact: "(206) 555-3412", id: "2", avatar: "A", pic: ""
    }
  ];

  ```

* Set `avatar` classes in ListView template to customize contact icon. In the following codes, medium size avatar has been set using the class name `e-avatar e-avatar-circle` from data source.

   ```ts

     <div class="listWrapper">
        <span :class="['e-avatar e-avatar-small e-avatar-circle']" v-if="data.avatar !== ''">{{data.avatar}}</span>
        <span :class="[data.pic + ' e-avatar e-avatar-small e-avatar-circle']" v-if="data.pic !== '' "> </span>
        <span class="list-text">{{data.text}}</span>
      </div>
   ```

> Avatars can be set in different sizes in avatar classes. To know more about avatar classes, refer to [Avatar](https://ej2.syncfusion.com/vue/demos/#/material/avatar/default.html).

* Sort the contact names using the [`sortOder`](https://ej2.syncfusion.com/vue/documentation/api/list-view/#sortorder) property of ListView.
* Enable the [`showHeader`](https://ej2.syncfusion.com/vue/documentation/api/list-view/#showheader) property, and set the [`headerTitle`](https://ej2.syncfusion.com/vue/documentation/api/list-view/#headertitle) as `Contacts`.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/listview/avatar-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/listview/avatar-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/listview/avatar-cs1" %}