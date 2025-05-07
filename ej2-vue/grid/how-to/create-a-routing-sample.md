---
layout: post
title:  Create a routing sample in Vue Grid component | Syncfusion
description: Learn here all about  Create a routing sample in Syncfusion Vue Grid component of Syncfusion Essential JS 2 and more.
control:  Create a routing sample
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# How to create a routing sample in Vue Grid component

[Vue Router](https://router.vuejs.org/introduction.html) is the official routing library for Vue.js which is widely used for building single-page applications (SPA's). It provides a way to handle navigation and routing within an application. In Vue routing, you can able to configure the different routes for different URL's or paths to navigate between different sections or pages of the application. This approach is particularly advantageous for SPA's since it permits the loading of content dynamically without requiring a complete page refresh.

## Steps to create a routing sample in Vue Grid component

**1. Creating a vue project and integrating the Syncfusion<sup style="font-size:70%">&reg;</sup> Grid component:**

A simple vue project can be created by following the steps under [getting started](https://ej2.syncfusion.com/vue/documentation/grid/getting-started) section of this documentation. Install the Vue Router package by running the following command in your project's directory.

```
npm install vue-router
```
To use Vue routing in your application, you need to create at least two components that can be navigated from one to another.

**2. Defining Routes:**

To define the routes create a new folder **router** under src directory and create new file named **index.js** inside it (**src\router\index.js**). You can define the routes that correspond to different components in this file. Import the components and define an array of route objects that specifies the path and the component to be rendered for each route.

```
import Vue from 'vue'
import Router from 'vue-router'
import About from '../components/About'
import Home from '../components/Home'
import Contact from '../components/Contact'

Vue.use(Router);

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/contact',
      name: 'Contact',
      component: Contact
    },
  ]
});

export default router;
```

**3. Configuring the router module:**

Open the **src/main.js** file and import the router.js.

```
import router from './router'
```

**4. Setting up navigation:**

Include the below code lines in **App.vue** file to set up the navigation.

```
<template>
  <div id="app">
    <nav>
      <ul>
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/about">About</router-link></li>
        <li><router-link to="/contact">Contact</router-link></li>
      </ul>
    </nav>
    <router-view></router-view> 
    </div>
</template>
```

The `<router-link>` components are used for navigation, the `to` attribute specifies the path to navigate.
The `<router-view>` component is responsible for rendering the content of each route. It acts as a placeholder that will be replaced with the component corresponding to the active route.

[Here](https://github.com/SyncfusionExamples/DataGrid-routing-vue), you can find the Vue Routing sample with Syncfusion<sup style="font-size:70%">&reg;</sup> DataGrid.