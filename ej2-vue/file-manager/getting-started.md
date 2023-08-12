---
layout: post
title: Getting started with Vue File manager component | Syncfusion
description:  Checkout and learn about Getting started with Vue File manager component of Syncfusion Essential JS 2 and more details.
control: Getting started 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Getting Started with the Vue File manager Component in Vue 2

This article provides a step-by-step guide for setting up a Vue 2 project using [Vue-CLI](https://cli.vuejs.org/) and integrating the Syncfusion Vue Filemanager component

## Prerequisites

[System requirements for Syncfusion Vue UI components](https://ej2.syncfusion.com/vue/documentation/system-requirements/)

## Dependencies

The following are the dependencies required to use the File Manager component in your application:

```js
|-- @syncfusion/ej2-vue-filemanager
    |-- @syncfusion/ej2-vue-base
    |-- @syncfusion/ej2-vue-grids
    |-- @syncfusion/ej2-vue-navigations
        |-- @syncfusion/ej2-vue-inputs
        |-- @syncfusion/ej2-vue-lists
        |-- @syncfusion/ej2-vue-popups
            |-- @syncfusion/ej2-vue-buttons
    |-- @syncfusion/ej2-base
    |-- @syncfusion/ej2-data
    |-- @syncfusion/ej2-grids
    |-- @syncfusion/ej2-filemanager
    |-- @syncfusion/ej2-navigations
        |-- @syncfusion/ej2-inputs
        |-- @syncfusion/ej2-lists
        |-- @syncfusion/ej2-popups
            |-- @syncfusion/ej2-buttons
```

## Setting up the Vue 2 project

To generate a Vue 2 project using Vue-CLI, use the [vue create](https://cli.vuejs.org/#getting-started) command. Follow these steps to install Vue CLI and create a new project:

```bash
npm install -g @vue/cli
vue create quickstart
cd quickstart
npm run serve
```

or

```bash
yarn global add @vue/cli
vue create quickstart
cd quickstart
yarn run serve
```

When creating a new project, choose the option `Default ([Vue 2] babel, eslint)` from the menu.

![Vue 2 project](../appearance/images/vue2-terminal.png)

Once the `quickstart` project is set up with default settings, proceed to add Syncfusion components to the project.

## Add Syncfusion Vue packages

Syncfusion packages are available at [npmjs.com](https://www.npmjs.com/search?q=ej2-vue). To use Vue components, install the required npm package.

This article uses the [Vue File manager component](https://www.syncfusion.com/vue-components/vue-file-manager) as an example. Install the `@syncfusion/ej2-vue-filemanager` package by running the following command:

```bash
npm install @syncfusion/ej2-vue-filemanager --save
```
or

```bash
yarn add @syncfusion/ej2-vue-filemanager
```

## Import Syncfusion CSS styles

You can import themes for the Syncfusion Vue component in various ways, such as using CSS or SASS styles from npm packages, CDN, [CRG](https://ej2.syncfusion.com/javascript/documentation/common/custom-resource-generator/) and [Theme Studio](https://ej2.syncfusion.com/vue/documentation/appearance/theme-studio/). Refer to [themes topic](https://ej2.syncfusion.com/vue/documentation/appearance/theme/) to know more about built-in themes and different ways to refer to themes in a Vue project.

In this article, the `Material` theme is applied using CSS styles, which are available in installed packages. The necessary `Material` CSS styles for the File manager component and its dependents were imported into the `<style>` section of **src/App.vue** file.

{% tabs %}
{% highlight html tabtitle="~/src/App.vue" %}

<style>
@import "../node_modules/@syncfusion/ej2-base/styles/material.css";
@import "../node_modules/@syncfusion/ej2-icons/styles/material.css";
@import "../node_modules/@syncfusion/ej2-inputs/styles/material.css";
@import "../node_modules/@syncfusion/ej2-popups/styles/material.css";
@import "../node_modules/@syncfusion/ej2-buttons/styles/material.css";
@import "../node_modules/@syncfusion/ej2-splitbuttons/styles/material.css";
@import "../node_modules/@syncfusion/ej2-navigations/styles/material.css";
@import "../node_modules/@syncfusion/ej2-layouts/styles/material.css";
@import "../node_modules/@syncfusion/ej2-grids/styles/material.css";
@import "../node_modules/@syncfusion/ej2-vue-filemanager/styles/material.css";
</style>

{% endhighlight %}
{% endtabs %}

>Note: If you want to refer the combined component styles, please make use of our [CRG](https://crg.syncfusion.com/) (Custom Resource Generator) in your application.

## Add Syncfusion Vue component

Follow the below steps to add the Vue File manager component:

1\. First, import and register the File manager component in the `script` section of the **src/App.vue** file.

{% tabs %}
{% highlight html tabtitle="~/src/App.vue" %}

<script>
import { FileManagerComponent } from "@syncfusion/ej2-vue-filemanager";

export default {
    components: {
        'ejs-filemanager': FileManagerComponent
    }
}
</script>

{% endhighlight %}
{% endtabs %}

2\. In the `template` section, define the File manager component with [ajaxSettings](https://ej2.syncfusion.com/vue/documentation/api/file-manager#ajaxsettings) property.

{% tabs %}
{% highlight html tabtitle="~/src/App.vue" %}

<template>
    <div id="app">
        <ejs-filemanager id="file-manager" :ajaxSettings="ajaxSettings">
        </ejs-filemanager>
    </div>
</template>

{% endhighlight %}
{% endtabs %}

3\. Declare the value for the `ajaxSettings` property in the `script` section.

<script>
data () {
    return {
        ajaxSettings:
        {
            url: "https://ej2-aspcore-service.azurewebsites.net/api/FileManager/FileOperations"
        }
    }
}
</script>

{% endhighlight %}
{% endtabs %}

Here is the summarized code for the above steps in the **src/App.vue** file:

{% tabs %}
{% highlight html tabtitle="~/src/App.vue" %}
{% include code-snippet/file-manager/getting-started-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}

## Run the project

To run the project, use the following command:

```bash
npm run serve
```

or

```bash
yarn run serve
```
        
{% previewsample "page.domainurl/code-snippet/file-manager/getting-started-cs1" %}

## File Download support

To perform the download operation, initialize the `downloadUrl` property in a [ajaxSettings](https://ej2.syncfusion.com/vue/documentation/api/file-manager/#ajaxsettings) of File Manager component.

{% tabs %}
{% highlight html tabtitle="~/src/App.vue" %}

<script>
import { FileManagerComponent } from "@syncfusion/ej2-vue-filemanager";

export default {
    components: {
        'ejs-filemanager': FileManagerComponent
    },
    data () {
        return {
           ajaxSettings:
            {
                url: "https://ej2-aspcore-service.azurewebsites.net/api/FileManager/FileOperations",
                downloadUrl: "https://ej2-aspcore-service.azurewebsites.net/api/FileManager/Download"
            }
        }
    }
}
</script>

{% endhighlight %}
{% endtabs %}

## File Upload support

To perform the upload operation, initialize the `uploadUrl` property in a [ajaxSettings](https://ej2.syncfusion.com/vue/documentation/api/file-manager/#ajaxsettings) of File Manager Component.

{% tabs %}
{% highlight html tabtitle="~/src/App.vue" %}

<script>
import { FileManagerComponent } from "@syncfusion/ej2-vue-filemanager";

export default {
    components: {
        'ejs-filemanager': FileManagerComponent
    },
    data () {
        return {
           ajaxSettings:
            {
                url: "https://ej2-aspcore-service.azurewebsites.net/api/FileManager/FileOperations",
                uploadUrl: "https://ej2-aspcore-service.azurewebsites.net/api/FileManager/Upload"
            }
        }
    }
}
</script>

{% endhighlight %}
{% endtabs %}

## Image Preview support

To perform the image preview support in the File Manager component, need to initialize the `getImageUrl` property in a [ajaxSettings](https://ej2.syncfusion.com/vue/documentation/api/file-manager/#ajaxsettings) of File Manager component.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/file-manager/getting-started-cs2/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/file-manager/getting-started-cs2" %}

## Injecting feature modules

Basically, the file manager component contains large-icons view for displaying the files and folders, a breadcrumbbar for navigation and context menu for performing operations. However, these basic functionalities can be extended by using the additional feature modules like detailsview, toolbar, navigation pane, and context menu to change the layout and to simplify the navigation and file operations within the file system. The above modules can be injected using `provide`.

The following example shows you the File Manager with all feature modules.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/file-manager/overview-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/file-manager/overview-cs1" %}

>**Note:** The appearance of the File Manager can be customized by using [cssClass](https://ej2.syncfusion.com/vue/documentation/api/file-manager/#cssclass) property. This adds a css class to the root of the File Manager which can be used to add new styles or override existing styles to the File Manager.

## Switching initial view of the File Manager

The initial view of the File Manager can be changed to details or largeicons view with the help of [view](https://ej2.syncfusion.com/vue/documentation/api/file-manager/#view) property. By default, the File Manager will be rendered in large icons view. When the File Manager is initially rendered, [created](https://ej2.syncfusion.com/vue/documentation/api/file-manager/#created) will be triggered. This event can be utilized for performing operations once the File Manager has been successfully created.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/file-manager/view-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/file-manager/view-cs1" %}

## Maintaining component state on page reload

The File Manager supports maintaining the component state on page reload. This can be achieved by enabling [enablePersistence](https://ej2.syncfusion.com/vue/documentation/api/file-manager/#enablepersistence) property which maintains the following,
* Previous view of the File Manager - [View](https://ej2.syncfusion.com/vue/documentation/api/file-manager/#view)
* Previous path of the File Manager - [Path](https://ej2.syncfusion.com/vue/documentation/api/file-manager/#path)
* Previous selected items of the File Manager - [SelectedItems](https://ej2.syncfusion.com/vue/documentation/api/file-manager/#selecteditems)

For every operation in File Manager, ajax request will be sent to the server which then processes the request and sends back the response. When the ajax request is success, [success](https://ej2.syncfusion.com/vue/documentation/api/file-manager/#success) event will be triggered and [failure](https://ej2.syncfusion.com/vue/documentation/api/file-manager/#failure) event will be triggered if the request gets failed.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/file-manager/persistence-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/file-manager/persistence-cs1" %}

>**Note:** The files of the current folder opened in the File manager can be refreshed programatically by calling [refreshFiles](https://ej2.syncfusion.com/vue/documentation/api/file-manager/#refreshfiles) method.

## Rendering component in right-to-left direction

It is possible to render the File Manager in right-to-left direction by setting the [enableRtl](https://ej2.syncfusion.com/vue/documentation/api/file-manager/#enablertl) API to true.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/file-manager/rtl-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/file-manager/rtl-cs1" %}

## Specifying the current path of the File Manager

The current path of the File Manager can be specified initially or dynamically using the [path](https://ej2.syncfusion.com/vue/documentation/api/file-manager/#path) property.

The following code snippet demonstrates specifying the current path in File Manager on rendering.

{% tabs %}
{% highlight html tabtitle="~/src/App.vue" %}

<template>
    <div id="app">
        <ejs-filemanager id="file-manager" :path="path" :ajaxSettings="ajaxSettings">
        </ejs-filemanager>
    </div>
</template>
<script>
import { FileManagerComponent, DetailsView, NavigationPane, Toolbar } from "@syncfusion/ej2-vue-filemanager";
export default {
    components: {
        'ejs-filemanager': FileManagerComponent
    },
    data () {
        return {
           ajaxSettings:
            {
                url: "https://ej2-aspcore-service.azurewebsites.net/api/FileManager/FileOperations",
                getImageUrl: "https://ej2-aspcore-service.azurewebsites.net/api/FileManager/GetImage",
                uploadUrl: "https://ej2-aspcore-service.azurewebsites.net/api/FileManager/Upload",
                downloadUrl: "https://ej2-aspcore-service.azurewebsites.net/api/FileManager/Download"
            },
            // Initial view of File Manager is set to details view
            view: "Details",
            // Specify the required current path
            path: '/Food'
        };
    },
    provide: {
            filemanager: [DetailsView, NavigationPane, Toolbar]
    }
}
</script>
<style>
@import "../node_modules/@syncfusion/ej2-base/styles/material.css";
@import "../node_modules/@syncfusion/ej2-icons/styles/material.css";
@import "../node_modules/@syncfusion/ej2-inputs/styles/material.css";
@import "../node_modules/@syncfusion/ej2-popups/styles/material.css";
@import "../node_modules/@syncfusion/ej2-buttons/styles/material.css";
@import "../node_modules/@syncfusion/ej2-splitbuttons/styles/material.css";
@import "../node_modules/@syncfusion/ej2-navigations/styles/material.css";
@import "../node_modules/@syncfusion/ej2-layouts/styles/material.css";
@import "../node_modules/@syncfusion/ej2-grids/styles/material.css";
@import "../node_modules/@syncfusion/ej2-vue-filemanager/styles/material.css";
</style>

{% endhighlight %}
{% endtabs %}

N> You can refer to our [Vue File Manager](https://www.syncfusion.com/vue-ui-components/vue-file-manager) feature tour page for its groundbreaking feature representations. You can also explore our [Vue File Manager example](https://ej2.syncfusion.com/vue/demos/#/bootstrap5/file-manager/overview.html) that shows you how to render the File Manager in Vue.