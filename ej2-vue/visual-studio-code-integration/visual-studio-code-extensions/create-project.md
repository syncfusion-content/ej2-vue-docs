---
layout: post
title: Create Vue project in Visual studio code | Syncfusion
description: Learn here all about Create project in Syncfusion Vue Visual studio code integration component of Syncfusion Essential JS 2 and more.
control: Create project 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Visual Studio Code Extensions

## Create project

Syncfusion<sup style="font-size:70%">&reg;</sup> provides project templates for Visual Studio Code to create Syncfusion<sup style="font-size:70%">&reg;</sup> web applications. The Syncfusion<sup style="font-size:70%">&reg;</sup> Web Project template creates applications with the selected framework (React, Pure React, Angular, and Vue), required Syncfusion<sup style="font-size:70%">&reg;</sup> npm packages, component render code for the Grid, Chart, and Scheduler components, and styles to simplify development with Syncfusion<sup style="font-size:70%">&reg;</sup> components.
> The Syncfusion<sup style="font-size:70%">&reg;</sup> Visual Studio Code project template is supported from v18.3.0.47.
The steps below describe how to create Syncfusion<sup style="font-size:70%">&reg;</sup> web applications using Visual Studio Code:
1. In Visual Studio Code, open the command palette by pressing Ctrl+Shift+P. The Visual Studio Code palette opens, search the word Syncfusion<sup style="font-size:70%">&reg;</sup>, so you can get the templates provided.

    ![CreateProjectPalette](../images/CreateProjectPalette.png)

2. Select **Syncfusion<sup style="font-size:70%">&reg;</sup> Web Template Studio: Launch** and then press enter, Template Studio wizard for configuring the Syncfusion<sup style="font-size:70%">&reg;</sup> Web app will appear. Provide the require Project Name and Path to create the new Syncfusion<sup style="font-size:70%">&reg;</sup> Web application along with any one of the Framework (React, Pure React, Angular, and Vue).

    ![ProjectLocation](../images/ProjectLocationName.png)

3. Click either **Next** or **Framework** tab, and the Framework types will be appears. Choose any one of the Framework:
   * React
   * Pure React
   * Angular
   * Vue

     ![Framework](../images/frameworktype.png)

    If you choose the Vue framework, the **Select Vue Version** option will appear in the **Project Details** section. You can create the Vue application using either the Vue 3 or Vue 2 versions.

    ![VueVersions](../images/vue-versions.png)

4. Click either **Next** or the **Configuration** tab, and the Configuration section will be loaded. Choose the preferred theme and then click **Create**. The project will be created.

    ![Themes](../images/Themes.png)

5. The created Syncfusion<sup style="font-size:70%">&reg;</sup> Web App is configured with the Syncfusion<sup style="font-size:70%">&reg;</sup> NPM packages, styles, and the component render code for the Syncfusion<sup style="font-size:70%">&reg;</sup> component added.

    ![NPM Packages](../images/vue-npm-install.png)

    ![Styles](../images/vue-styles.png)

    ![Components](../images/vue-components.png)

## Run the application

1. Press **F5** or navigate to **Run > Start Debugging**.
    ![Run](../images/run.png)

2. After compilation completes, open the provided localhost URL in a browser to view the application output.
    ![Output](../images/vue-compilation.png)