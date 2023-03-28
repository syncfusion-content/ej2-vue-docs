---
layout: post
title: Getting started vue 3 with Vue Sidebar component | Syncfusion
description:  Checkout and learn about Getting started vue 3 with Vue Sidebar component of Syncfusion Essential JS 2 and more details.
control: Getting started vue 3 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Getting Started with Syncfusion Sidebar Component in Vue 3

This section explains how to use Sidebar component in Vue 3 application.

## Prerequisites

[System requirements for Syncfusion Vue UI components](https://ej2.syncfusion.com/vue/documentation/system-requirements/)

## Creating Vue application using Vue CLI

The easiest way to create a Vue application is to use the [`Vue CLI`](https://github.com/vuejs/vue-cli). Vue CLI versions above [`4.5.0`](https://v3.vuejs.org/guide/migration/introduction.html#vue-cli) are mandatory for creating applications using Vue 3. Use the following command to uninstall older versions of the Vue CLI.

```bash
npm uninstall vue-cli -g

```

Use the following commands to install the latest version of Vue CLI.

```bash
npm install -g @vue/cli
npm install -g @vue/cli-init
```

Create a new project using the command below.

```bash
vue create quickstart

```

Initiating a new project prompts us to choose the type of project to be used for the current application. Select the option `Default (Vue 3)` from the menu.

![Reference](./images/vue3-terminal.png)

## Adding Syncfusion Sidebar package in the application

 Syncfusion Vue packages are maintained in the [`npmjs.com`](https://www.npmjs.com/~syncfusionorg) registry.
The Sidebar component will be used in this example. To install it use the following command.

```bash
npm install @syncfusion/ej2-vue-navigations --save
```

## Adding CSS reference for Syncfusion Vue Sidebar component

Import the needed CSS styles for the Sidebar component along with dependency styles in the `<style>` section of the `src/App.vue` file as follows.

```
<style>
  @import "../node_modules/@syncfusion/ej2-base/styles/material.css";
  @import "../node_modules/@syncfusion/ej2-vue-navigations/styles/material.css";
</style>
```

## Adding Syncfusion Vue Sidebar component in the application

You have completed all the necessary configurations needed for rendering the Syncfusion Vue component. Now, you are going to add the Sidebar component using following steps.

  1. Import the Sidebar component in the `<script>` section of the `src/App.vue` file.

     ```
      <script>
      import { SidebarComponent } from '@syncfusion/ej2-vue-navigations';
      </script>

     ```
  2. Register the Sidebar component in `src/App.vue` file which are used in this example.

     ```js
      import { SidebarComponent } from '@syncfusion/ej2-vue-navigations';
        //Component registeration
      export default {
          name: "App",
          components: {
            'ejs-sidebar' : SidebarComponent
          }
      }
     ```

     In the above code snippet, you have registered Sidebar component.

  3. Add the component definition in template section.

     ```
      <template>
        <div id="app">
          <ejs-sidebar id="default-sidebar">
            <div class="title"> Sidebar content</div>
          </ejs-sidebar>
          <div>
            <div class="title">Main content</div>
            <div class="sub-title">Content goes here.</div>
          </div>
        </div>
      </template>
     ```
  4. Summarizing the above steps, update the `src/App.vue` file with following code.
  
     ```
      <template>
        <div id="app">
          <ejs-sidebar id="default-sidebar">
              <div class="title"> Sidebar content</div>
          </ejs-sidebar>
          <div>
              <div class="title">Main content</div>
              <div class="sub-title">Content goes here.</div>
          </div>
        </div>
      </template>
      <script>
      import { SidebarComponent } from '@syncfusion/ej2-vue-navigations';

      export default {
        name: 'App',
        components: {
          'ejs-sidebar' : SidebarComponent
        }
      };
      </script>
      <style>
        @import "../node_modules/@syncfusion/ej2-base/styles/material.css";
        @import "../node_modules/@syncfusion/ej2-vue-navigations/styles/material.css";
        #default-sidebar {
          background-color: rgb(25, 118, 210);
          color: #ffffff;
        }
        .title {
          text-align: center;
          font-size: 20px;
          padding: 15px;
        }

        .sub-title {
          text-align: center;
          font-size: 16px;
          padding: 10px;
        }
      </style>
     ```

## Running the application

Run the application using the following command.

```bash
npm run serve
```

Web server will be initiated, Open the quick start app in the browser at port `localhost:8080`.

![Output](./images/sidebar.PNG)

## Enable backdrop

Enabling the [showBackdrop](https://ej2.syncfusion.com/vue/documentation/api/sidebar#showbackdrop) in the Sidebar component will prevent the main content from user interactions, when it is in expanded state. Here, the DOM elements will not get changed. It only closes the main content by covering with a black backdrop overlay and focuses the Sidebar in the screen. Sidebar can be rendered with specific width by setting `width` property

In the following example, the `showBackdrop` and `closeOnDocumentClick` properties are enabled.

    ```
    <template>
      <div id="app">
        <div class="wrapper">
            <ejs-sidebar id="default-sidebar" :showBackdrop="showBackdrop" :closeOnDocumentClick="closeOnDocumentClick">
              <div class="title"> Sidebar content</div>
            </ejs-sidebar>
            <div>
                <div class="title">Main content</div>
            </div>
        </div>
      </div>
    </template>
    <script>
    import { SidebarComponent } from '@syncfusion/ej2-vue-navigations';

    export default {
      name: 'App',
      components: {
        'ejs-sidebar' : SidebarComponent
      },
      data () {
        return {
          showBackdrop :true,
          closeOnDocumentClick:true,
        }
      }
    };
    </script>
    <style>
      @import "../node_modules/@syncfusion/ej2-base/styles/material.css";
      @import "../node_modules/@syncfusion/ej2-vue-navigations/styles/material.css";
  
      .title {
        text-align: center;
        font-size: 20px;
        padding: 15px;
      }

      #default-sidebar {
        background-color: rgb(25, 118, 210);
        color: #ffffff;
      }
    </style>
    ```

You can get the following output while using above code blocks in Sidebar component.

![Output](./images/sidebar-showbackdrop.PNG)

## Position

Positioning the Sidebar to the right or left of the main content can be achieved by using the [position](https://ej2.syncfusion.com/vue/documentation/api/sidebar#position) property. If the position is not set, the Sidebar will expand from the left to the body element. [`enablePersistence`](https://ej2.syncfusion.com/vue/documentation/api/sidebar#enablepersistence) will persist the component's state between page reloads. [`change`](https://ej2.syncfusion.com/vue/documentation/api/sidebar#change) event will be triggered when the state(expand/collapse) of the component is changed.

In the following example, the `position` property is set as `Right`.

    ```
    <template>
      <div id="app">
        <div class="wrapper">
            <ejs-sidebar id="default-sidebar" :position="position">
              <div class="title"> Sidebar content</div>
            </ejs-sidebar>
            <div>
                <div class="title">Main content</div>
            </div>
        </div>
      </div>
    </template>
    <script>
    import { SidebarComponent } from '@syncfusion/ej2-vue-navigations';

    export default {
      name: 'App',
      components: {
        'ejs-sidebar' : SidebarComponent
      },
      data () {
        return {
          position :'Right'
        }
      }
    };
    </script>
    <style>
      @import "../node_modules/@syncfusion/ej2-base/styles/material.css";
      @import "../node_modules/@syncfusion/ej2-vue-navigations/styles/material.css";
  
      .title {
        text-align: center;
        font-size: 20px;
        padding: 15px;
      }

      #default-sidebar {
        background-color: rgb(25, 118, 210);
        color: #ffffff;
      }
    </style>
    ```

You can get the following output while using above code blocks in Sidebar component.

![Output](./images/sidebar-position.PNG)

## Animate

Animation transitions can be set while expanding or collapsing the Sidebar using the [`animate`](https://ej2.syncfusion.com/vue/documentation/api/sidebar#animate) property. By default, [`animate`](https://ej2.syncfusion.com/vue/documentation/api/sidebar#animate) property is set to true. [`enableRTL`](https://ej2.syncfusion.com/vue/documentation/api/sidebar#enablertl) will display the sidebar in the right-to-left direction.

In the following example, the `animate` property is disabled.

    ```
    <template>
      <div id="app">
        <div class="wrapper">
          <ejs-sidebar id="default-sidebar" ref="sidebar" :type="type" :width="width" :animate="animate" :enableRtl="enableRtl">
            <div class="title"> Sidebar content</div>
              <div class="sub-title">
                Click the button to close the Sidebar
              </div>
              <div class="center-align">
                <ejs-button  id="close" v-on:click="closeClick"  class="e-btn close-btn">Close Sidebar</ejs-button>
              </div>
          </ejs-sidebar>
          <div>
              <div class="title">Main content</div>
              <div class="sub-title"> Click the button to open/close the Sidebar.</div>
              <div style="padding:20px" class="center-align">
                <ejs-button id="toggle"  class="e-btn e-info" v-on:click="toggleClick" >Toggle Sidebar</ejs-button>
              </div>
          </div>
      </div>
      </div>
    </template>
    <script>
    import { SidebarComponent } from '@syncfusion/ej2-vue-navigations';
    import { ButtonComponent } from '@syncfusion/ej2-vue-buttons';

    export default {
      name: 'App',
      components: {
        'ejs-sidebar' : SidebarComponent,
        'ejs-button' : ButtonComponent
      },
      data () {
        return {
          animate:false,
          enableRtl: true,
          width:'280px',
          type:'Push'
        }
      },
      methods: {
        toggleClick :function() {
          this.$refs.sidebar.toggle();
        },
        closeClick: function() {
        this.$refs.sidebar.hide();
        }
      }
    };
    </script>
    <style>
      @import "../node_modules/@syncfusion/ej2-base/styles/material.css";
      @import "../node_modules/@syncfusion/ej2-buttons/styles/material.css";
      @import "../node_modules/@syncfusion/ej2-vue-navigations/styles/material.css";
  
      .center-align {
        text-align: center;
        padding: 20px;
      }

      .title {
        text-align: center;
        font-size: 20px;
        padding: 15px;
      }

      .sub-title {
        text-align: center;
        font-size: 16px;
        padding: 10px;
      }

      .center {
        text-align: center;
        display: none;
        font-size: 13px;
        font-weight: 400;
        margin-top: 20px;
      }

      #default-sidebar {
        background-color: rgb(25, 118, 210);
        color: #ffffff;
      }

      .close-btn:hover {
        color: #fafafa;
      }
    </style>
    ```

You can get the following output while using above code blocks in Sidebar component.

![Output](./images/sidebar-animate.gif)

## Close on document click

Sidebar can be closed on document click by setting [`closeOnDocumentClick`](https://ej2.syncfusion.com/vue/documentation/api/sidebar#closeondocumentclick) to true. If this property is not set, the Sidebar will not close on document click since its default value is false. Sidebar can be kept opened during rendering using [`isOpen`](https://ej2.syncfusion.com/vue/documentation/api/sidebar#isopen) property.

In the following example, the `closeOnDocumentClick` property is enabled.

    ```
    <template>
      <div id="app">
        <div class="wrapper">
          <ejs-sidebar id="default-sidebar" ref="sidebar" :width="width" :type="type" :isOpen="isOpen" :closeOnDocumentClick="closeOnDocumentClick">
          <div class="title"> Sidebar content</div>
          </ejs-sidebar>
          <div>
            <div class="title">Main content</div>
            <div class="sub-title"> Click the button to open the Sidebar.</div>
            <div style="padding:20px" class="center-align">
              <ejs-button id="toggle"  class="e-btn e-info" v-on:click="toggleClick" >Open Sidebar</ejs-button>
            </div>
          </div>
      </div>
      </div>
    </template>
    <script>
    import { SidebarComponent } from '@syncfusion/ej2-vue-navigations';
    import { ButtonComponent } from '@syncfusion/ej2-vue-buttons';

    export default {
      name: 'App',
      components: {
        'ejs-sidebar' : SidebarComponent,
        'ejs-button' : ButtonComponent
      },
      data () {
        return {
          closeOnDocumentClick: true,
          isOpen:true,
          type:'Push',
          width:'280px'
        }
      },
      methods: {
        toggleClick :function() {
          this.$refs.sidebar.toggle();
        }
      }
    };
    </script>
    <style>
      @import "../node_modules/@syncfusion/ej2-base/styles/material.css";
      @import "../node_modules/@syncfusion/ej2-buttons/styles/material.css";
      @import "../node_modules/@syncfusion/ej2-vue-navigations/styles/material.css";
  
      .center-align {
        text-align: center;
        padding: 20px;
      }

      .title {
        text-align: center;
        font-size: 20px;
        padding: 15px;
      }

      .sub-title {
        text-align: center;
        font-size: 16px;
        padding: 10px;
      }

      .center {
        text-align: center;
        display: none;
        font-size: 13px;
        font-weight: 400;
        margin-top: 20px;
      }

      #default-sidebar {
        background-color: rgb(25, 118, 210);
        color: #ffffff;
      }

    .close-btn:hover {
          color: #fafafa;
      }
    </style>
    ```

You can get the following output while using above code blocks in Sidebar component.

![Output](./images/sidebar-closeondocumentclick.gif)

## Enable gestures

Expand or collapse the Sidebar while swiping in touch devices using `enableGestures` property. By default, `enableGestures` is set to true.

In the following example, the `enableGestures` property is enabled.

    ```
    <template>
      <div id="app">
        <div class="wrapper">
          <ejs-sidebar id="default-sidebar" ref="sidebar" :width="width" :type="type" :enableGestures="enableGestures">
            <div class="title"> Sidebar content</div>
              <div class="sub-title">
                Click the button to close the Sidebar.
              </div>
              <div class="center-align">
                <ejs-button  id="close" v-on:click="closeClick"  class="e-btn close-btn">Close Sidebar</ejs-button>
              </div>
          </ejs-sidebar>
          <div>
              <div class="title">Main content</div>
              <div class="sub-title"> Click the button to open/close the Sidebar.</div>
              <div style="padding:20px" class="center-align">
                <ejs-button ejs-button id="toggle"  class="e-btn e-info" v-on:click="toggleClick" >Toggle Sidebar</ejs-button>
              </div>
          </div>
      </div>
      </div>
    </template>
    <script>
    import { SidebarComponent } from '@syncfusion/ej2-vue-navigations';
    import { ButtonComponent } from '@syncfusion/ej2-vue-buttons';

    export default {
      name: 'App',
      components: {
        'ejs-sidebar' : SidebarComponent,
        'ejs-button' : ButtonComponent
      },
      data () {
        return {
          enableGestures: false,
          type:'Push',
          width:'280px'
        }
      },
      methods: {
        toggleClick :function() {
          this.$refs.sidebar.toggle();
        },
        closeClick: function() {
          this.$refs.sidebar.hide();
        }
      }
    };
    </script>
    <style>
      @import "../node_modules/@syncfusion/ej2-base/styles/material.css";
      @import "../node_modules/@syncfusion/ej2-buttons/styles/material.css";
      @import "../node_modules/@syncfusion/ej2-vue-navigations/styles/material.css";
  
      .center-align {
        text-align: center;
        padding: 20px;
      }

      .title {
        text-align: center;
        font-size: 20px;
        padding: 15px;
      }

      .sub-title {
        text-align: center;
        font-size: 16px;
        padding: 10px;
      }

      .center {
        text-align: center;
        display: none;
        font-size: 13px;
        font-weight: 400;
        margin-top: 20px;
      }

      #default-sidebar {
        background-color: rgb(25, 118, 210);
        color: #ffffff;
      }

      .close-btn:hover {
        color: #fafafa;
      }
    </style>
    ```

You can get the following output while using above code blocks in Sidebar component.

![Output](./images/sidebar-enablegestures.gif)