---
layout: post
title: Customize listview as chat window in Vue Listview component | Syncfusion
description: Learn here all about Customize listview as chat window in Syncfusion Vue Listview component of Syncfusion Essential JS 2 and more.
control: Customize listview as chat window 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Customize listview as chat window in Vue Listview component

ListView can be customized as chat window. To achieve that, use the ListView [template](https://ej2.syncfusion.com/vue/documentation/api/list-view/#template) property and [Avatar](https://ej2.syncfusion.com/vue/documentation/avatar/getting-started) component.

    * The Listview template property is used to showcase the ListView as chat window.
    * Avatar component is used to design the image of contact person.

Refer the below template code snippet for Template of chat window.

```ts
var demoVue = Vue.component("demo", {
    template: `<div class='settings' v-if='data.chat!="receiver"'>
      <div id='content'>
      <div class='name'>{{data.text}}</div>
            <div id='info'>{{data.contact}}</div>
            </div>
            <div id='image' v-if='data.avatar!=""'><span class='e-avatar img1 e-avatar-circle'>{{data.avatar}}</span></div>
            <div id='image'  v-if='data.avatar==""'><span :class="[data.pic + ' img1 e-avatar e-avatar-circle']"> </span></div>
            </div>
            <div class='settings' v-else>
            <div id='image2'  v-if='data.avatar!=""'><span class='e-avatar img2 e-avatar-circle'>{{data.avatar}}</span></div>
            <div id='image2'  v-if='data.avatar==""'><span :class="[data.pic +' img2 e-avatar e-avatar-circle']"> </span></div>
            <div id='content1'>
            <div class='name1'>{{data.text}}</div>
            <div id='info1'>{{data.contact}}</div>
            </div>
            </div>`,
    data() {
        return {
        data: {}
        };
    }
});
```

## Chat order in template

In ListView template, we have rendered the list items based on receiver and sender information from dataSource of listview.

## Adding messages to chat window

    * Use textbox to get message from user.
    * Add the textbox message to ListView dataSource using [addItem](https://ej2.syncfusion.com/vue/documentation/api/list-view/#additem) method.

```ts

 btnClick: function() {
      let value = this.$refs.textbox.value;
      this.$refs.listObj.addItem([{ text: "Amenda", contact: value, id: "2", avatar: "A", pic: "", chat: "receiver" }]);
      this.$refs.textbox.value = "";
    }

```

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/listview/chat-window-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/listview/chat-window-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/listview/chat-window-cs1" %}