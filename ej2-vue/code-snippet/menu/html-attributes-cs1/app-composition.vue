<template>
  <div>
    <ejs-menu :items='menuItems'></ejs-menu>
  </div>
</template>

<script setup>

import { MenuComponent as EjsMenu } from "@syncfusion/ej2-vue-navigations";

// Menu items definition
const menuItems = [
  {
    text: 'Home',
    htmlAttributes: {
      role: 'menuitem',
      'aria-label': 'Home',
      tabindex: '1'
    }
  },
  {
    text: 'Book Categories',
    items: [
      {
        text: 'Cookbooks',
        htmlAttributes: {
          role: 'menuitem',
          'aria-label': 'Cookbooks',
          tabindex: '1'
        }
      },
      {
        text: 'Children',
        htmlAttributes: {
          role: 'menuitem',
          'aria-label': 'Children',
          tabindex: '1'
        }
      }
    ],
    htmlAttributes: {
      role: 'menuitem',
      'aria-label': 'Book Categories',
      tabindex: '1'
    }
  },
  {
    text: 'Purchase',
    htmlAttributes: {
      role: 'menuitem',
      'aria-label': 'Purchase',
      tabindex: '1'
    }
  },
  {
    text: 'Contact Us',
    htmlAttributes: {
      role: 'menuitem',
      'aria-label': 'Contact Us',
      tabindex: '1'
    }
  },
  {
    separator: true
  },
  {
    text: 'Login',
    id: 'login',
    htmlAttributes: {
      role: 'menuitem',
      'aria-label': 'Login',
      tabindex: '1'
    }
  }
];
</script>
<style>
@import "../node_modules/@syncfusion/ej2-base/styles/bootstrap.css";
@import "../node_modules/@syncfusion/ej2-popups/styles/bootstrap.css";
@import "../node_modules/@syncfusion/ej2-navigations/styles/bootstrap.css";

body {
  margin-top: 100px;
  text-align: center;
}
</style>