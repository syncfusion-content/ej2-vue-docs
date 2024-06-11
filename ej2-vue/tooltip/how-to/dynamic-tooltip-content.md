---
layout: post
title: Dynamic tooltip content in Vue Tooltip component | Syncfusion
description: Learn here all about Dynamic tooltip content in Syncfusion Vue Tooltip component of Syncfusion Essential JS 2 and more.
control: Dynamic tooltip content 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Dynamic tooltip content in Vue Tooltip component

The tooltip content can be changed dynamically using the `Fetch` request.

The Fetch request should be made within the [`beforeRender`](https://ej2.syncfusion.com/vue/documentation/api/tooltip/#beforerender) event of the tooltip. On every success, the corresponding retrieved data will be set to the [content](https://ej2.syncfusion.com/vue/documentation/api/tooltip/#content) property of the tooltip.

When you hover over the icons, its respective data will be retrieved dynamically and then assigned to the tooltip’s content.

Refer to the following code snippet to change the tooltip content dynamically.

```ts

 onBeforeRender(args) {
    this.$refs.box.content = 'Loading...';
    this.$refs.box.dataBind();
    let fetchApi = new Fetch('./tooltip.json', 'GET');
    fetchApi.send().then(
        (result) => {
            for (let i = 0; i < result.length; i++) {
                if (result[i].Id == args.target.id) {
                    /* tslint:disable */
                    this.$refs.box.content = result[i].Name;
                    /* tslint:enable */
                }
            }
             this.$refs.box.dataBind();
        },
        (reason) => {
            this.$refs.box.content = reason.message;
            this.$refs.box.dataBind();
        });
}

```

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/tooltip/dynamic-content-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/tooltip/dynamic-content-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/tooltip/dynamic-content-cs1" %}