---
layout: post
title: Getting Started with Syncfusion Grid in Replit | Vue
description: Learn how to build your first Syncfusion Grid application in Vue using Replit, a browser-based development environment, without any local setup.
platform: ej2-vue
control: Quick start with Replit
documentation: ug
domainurl: ##DomainURL##
---

# Getting Started with Syncfusion® Grid in Replit

This section provides a step-by-step guide for setting up a Vue application in Replit and integrating the Syncfusion® Grid component — without installing any local tools.

`Replit` is a browser-based development environment that lets you write, run, and deploy applications entirely in the cloud. It requires no local setup and is well suited for users who are new to software development, or who want to prototype and iterate quickly without configuring local development tools.

## Prerequisites

Before getting started, ensure the following:

* A free or paid Replit account
* A valid Syncfusion® license key (licensed or trial)

> No local Node.js, npm, or IDE installation is required. All development happens inside the Replit browser environment.

## Create a project in Replit

1. Sign in to [Replit](https://replit.com/).
2. Click **New** and select **Empty project**.

![Empty Project in Replit](./images/replit-empty-project.png)

3. To rename the project, click the project name dropdown located at the top of the Replit workspace, select **Edit project details**, and enter a name such as `grid-app`.

![Edit project details in Replit](./images/replit-edit-project.png)

## Integrate the Vue Grid component

This section explains how to integrate the Syncfusion® Vue Grid component into your existing Replit Vue project with the minimum required configuration. You can use either of the following approaches to add and run the Grid component successfully.

Before proceeding, click the **+** icon in the tab bar and select **Shell** from the new tab. The Shell is required for both the Agent Skills and Vite CLI approaches described in the following sections.

![Shell tab in Replit](./images/replit-shell-tab.png)

{% tabs %}
{% highlight bash tabtitle="Agent Skills" %}

Use the pre-installed Syncfusion® Vue Grid Skills with the Replit Agent to generate the application code automatically.

## Install the Vue Grid skills

```bash
npx skills add syncfusion/vue-ui-components-skills --skill syncfusion-vue-grid
```

Once skills are installed, the Replit Agent automatically:

* **Reads the skill files** — The agent retrieves component APIs, best practices, and code patterns from the installed Syncfusion® skills.
* **Grounds code generation** — The agent uses skill-based knowledge instead of generic AI suggestions, ensuring accurate Syncfusion® APIs and patterns.
* **Generates production-ready code** — The agent generates complete, working implementations that can be directly integrated into your application.
* **Enforces best practices** — The agent recommends correct packages, proper license registration, theme setup, and configuration.

Once skills are installed, the Replit Agent can generate Grid component code automatically. Open the Replit Agent panel and enter a prompt such as:

> Create a minimal Vue Replit web app using the Syncfusion EJ2 Vue Grid and the Fluent 2 theme. Configure the project with Vue 3 and TypeScript support. Install the required packages: @syncfusion/ej2-vue-grids, @syncfusion/ej2-base, @syncfusion/ej2-fluent2-theme, and vite. Render a single Grid with sample order data. Enable sorting by column headers and filtering with the Grid's filter menus by injecting the Sort and Filter modules. Keep the page simple, with just the Grid and no dashboard or additional interface. Start the Replit preview and verify that the Vue application builds and loads successfully. Do not publish, deploy, or configure a custom domain.

![Replit Agent panel](./images/replit-agent-panel.png)

The agent will:

* Create a Vue application structure
* Install the required Syncfusion® packages (@syncfusion/ej2-vue-grids, @syncfusion/ej2-fluent2-theme, etc.)
* Register the license key before component initialization if mentioned
* Import the theme CSS in the correct file
* Generate the complete Grid component implementation with your requested features
* Create sample data and configuration based on your requirements

Review the generated code by opening the Library panel on the right side. Click the **Files** tab to view all project files. Then, click on files like `src/App.vue`, `index.html`, and `src/style.css` to view and edit the generated code if needed. You can also press Ctrl + Shift + L to quickly toggle the Library panel.

![Files Panel in Replit](./images/replit-files-panel.png)

## Run the application

Once the agent finishes generating the application code, the Vue Grid application will be automatically displayed in the preview pane.

![App in Replit](./images/replit-app.png)

{% endhighlight %}
{% highlight bash tabtitle="Vite CLI" %}

Create the Vue application manually using the Vite CLI and add the Syncfusion® Vue Grid component step by step.

## Create a Vite Vue project

1. In the Shell tab, run the following command to create a Vite Vue project:

```bash
npm create vite@latest . -- --template vue
```

> Since the Replit workspace already contains configuration files, Vite may prompt that the current directory is not empty. Choose to ignore the existing files and continue when prompted.

2. Install the project dependencies:

```bash
npm install
```

3. Install the Syncfusion® Grid package and the Fluent2 theme:

```bash
npm install @syncfusion/ej2-vue-grids @syncfusion/ej2-fluent2-theme --save
```

4. Open the `src/style.css` file, remove the default Vite template styles to avoid conflicts with the Syncfusion® theme, and add the following import statement:

```css
@import "@syncfusion/ej2-fluent2-theme/styles/fluent2.css";
```

5. Open the `src/main.js` file and register the license key and theme:

```javascript
import { createApp } from 'vue'
import App from './App.vue'
import { registerLicense } from '@syncfusion/ej2-base'
import './style.css'

// Register Syncfusion License
registerLicense('YOUR_LICENSE_KEY');

createApp(App).mount('#app')
```

6. Open the `src/App.vue` file and replace its contents with:

```vue
<template>
  <ejs-grid :dataSource="data" :allowSorting="true" :allowFiltering="true">
    <e-columns>
      <e-column field='OrderID' headerText='Order ID' width='120' textAlign='Right'></e-column>
      <e-column field='CustomerID' headerText='Customer ID' width='140'></e-column>
      <e-column field='Freight' headerText='Freight' width='120' format='C2' textAlign='Right'></e-column>
      <e-column field='OrderDate' headerText='Order Date' width='150' format='yMd'></e-column>
    </e-columns>
  </ejs-grid>
</template>

<script>
import { GridComponent, ColumnsDirective, ColumnDirective, Sort, Filter } from '@syncfusion/ej2-vue-grids';

export default {
  components: {
    'ejs-grid': GridComponent,
    'e-columns': ColumnsDirective,
    'e-column': ColumnDirective
  },
  provide: {
    grid: [Sort, Filter]
  },
  data() {
    return {
      data: [
        {
          OrderID: 10248,
          CustomerID: 'VINET',
          Freight: 32.38,
          OrderDate: new Date(8364186e5)
        },
        {
          OrderID: 10249,
          CustomerID: 'TOMSP',
          Freight: 11.61,
          OrderDate: new Date(8367642e5)
        },
        {
          OrderID: 10250,
          CustomerID: 'HANAR',
          Freight: 65.83,
          OrderDate: new Date(8371242e5)
        },
        {
          OrderID: 10251,
          CustomerID: 'VICTE',
          Freight: 41.34,
          OrderDate: new Date(8374842e5)
        },
        {
          OrderID: 10252,
          CustomerID: 'SUPRD',
          Freight: 51.3,
          OrderDate: new Date(8378442e5)
        }
      ]
    }
  }
};
</script>

<style scoped>
/* Add any component-specific styles here */
</style>
```

{% endhighlight %}
{% endtabs %}

For more information on obtaining and registering a license key, see [How to Register a Syncfusion® License Key](../../licensing/license-key-registration).

## Run the application

Once you have completed all the setup steps, click the **Run** button (▶) at the top of the Replit workspace. The Vue Grid application will be built and rendered in the preview pane.

![Syncfusion Grid rendered in Replit](./images/replit-grid-preview.png)

## Key features to explore

Once your Grid is running, you can enhance it with:

* Data binding: Bind data from APIs or remote sources
* Sorting and filtering: Enable sorting and filtering on columns using Grid properties
* Paging: Add pagination to handle large datasets
* Selection: Enable row or cell selection
* Editing: Allow inline editing of cell values with the Edit module
* Exporting: Export data to Excel or PDF formats
* Responsive design: Build responsive layouts that adapt to different screen sizes

## Tips for working in Replit

* Shell access: Use the Shell tab to run any npm commands, such as installing additional packages or starting or stopping the development server manually.
* Persistent storage: Replit persists your project files automatically. Changes are saved as you type.
* File management: Use the file browser to view and edit project files. You can also use the context menu to create, edit, and manage files.

## Troubleshooting

| Issue | Resolution |
|-------|-----------|
| Preview shows "Your app is not running" | Open the Agent panel and enter the error text from the preview along with a prompt such as "My app is not starting in preview. Check the workflow, start the development server, and fix any runtime errors." The agent will diagnose and resolve the issue. |
| Module not found errors | Open the Shell and run `npm install` to restore all dependencies. |
| License warning banner | Verify that `registerLicense` is called before initializing the Grid component in `src/main.js`. |
| Grid not displaying | Ensure the theme CSS is imported in `src/style.css` and that the Grid component is properly registered in `src/App.vue`. |
| Shell commands not working | Wait for Replit to finish booting the environment, then retry the command. |
| Blocked request: This host is not allowed | This occurs when Vite blocks the Replit preview hostname. Configure `server.allowedHosts` in `vite.config.js` to allow Replit preview domains, and then restart the application. |

If you encounter an error similar to:

```text
Blocked request. This host ("<replit-preview-host>.replit.dev") is not allowed.
To allow this host, add "<replit-preview-host>.replit.dev" to server.allowedHosts in vite.config.js.
```

Create or update the `vite.config.js` file with the following configuration:

```javascript
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  server: {
    host: '0.0.0.0',
    port: 5000,
    allowedHosts: ['.replit.dev', '.repl.co'],
  },
})
```

After updating `vite.config.js`, restart the application. The Replit preview should then load the application without the blocked host error.

## See also

* [Grid Getting Started Documentation](https://ej2.syncfusion.com/vue/documentation/grid/getting-started)
* [How to register Syncfusion® license key](https://ej2.syncfusion.com/vue/documentation/licensing/license-key-registration)
* [Syncfusion® Vue Themes](https://ej2.syncfusion.com/vue/documentation/appearance/theme)
* [Replit Documentation](https://docs.replit.com/)
