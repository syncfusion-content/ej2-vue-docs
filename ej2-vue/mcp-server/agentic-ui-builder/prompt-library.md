---
layout: post
title: Agentic UI Builder Prompt Library | Syncfusion
description: Explore the Agentic UI Builder Prompt Library to enhance Vue productivity with layout blocks, component guidance, styling, and icons.
control: Syncfusion Agentic UI Builder Prompt Library
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Prompt Library - Agentic UI Builder

Speed up Vue development with ready-made prompts for common scenarios. Use them to generate complete applications, components, and custom styling.

## How to Use

Ensure that the Syncfusion MCP Server is configured and running before executing prompts.

* Select a prompt that aligns with your development requirements.
* Copy the complete prompt, including the tool (e.g., #sf_vue_ui_builder).
* Customize the prompt for your specific use case.
* Execute the prompt through the MCP Server.
* Validate all generated code through thorough testing before production deployment.

## General Project Prompts

These flexible prompts address common application development scenarios using intuitive natural language descriptions.

{% promptcards %}
{% promptcard Authentication %}
#sf_vue_ui_builder Create a login page with the Tailwind 3 theme using a centered card layout containing email and password input fields with validation. Include a "Remember Me" checkbox, a forgot password link, and a primary login button. Add a secondary "Create Account" button below. Ensure the layout is responsive and works on mobile, tablet, and desktop.
{% endpromptcard %}
{% promptcard Book Library Dashboard %}
#sf_vue_ui_builder Create a book library dashboard page with the Bootstrap 5.3 theme displaying a grid of book cards showing cover images, titles, authors, and reading progress bars. Add a search box and genre filter dropdown at the top. Include a sidebar showing reading statistics with charts for books completed this month, reading streaks, and favorite genres. Make the grid responsive (4 columns on desktop, 2 on tablet, 1 on mobile).
{% endpromptcard %}
{% promptcard Product Listing %}
#sf_vue_ui_builder Create a product catalog page with the Fluent 2 theme featuring a left sidebar containing category filters and a price range slider. The main content area should display product cards in a responsive grid layout (4 columns on desktop, 2 on tablet, 1 on mobile). Add a search box and sort dropdown at the top of the main content area. Include pagination at the bottom.
{% endpromptcard %}
{% promptcard Course Details Page %}
#sf_vue_ui_builder Create a course details page with the Material 3 theme, including a video player section at the top. Below the video, display the course overview; curriculum using a TreeView component with expandable chapters and lessons; student reviews with rating distribution; and frequently asked questions in separate card sections. Add a right sidebar with a course enrollment card showing price, an enroll button, instructor details with avatar and bio, and a course progress indicator.
{% endpromptcard %}
{% promptcard Task Management %}
#sf_vue_ui_builder Build a task board page using a Kanban layout with columns for To Do, In Progress, and Completed. Add an "Add Task" button and a search field at the top. Each task card should show title, assignee avatar, due date, and priority badge. Make the columns scrollable, with drag-and-drop functionality. Include filter dropdowns for priority and assignee.
{% endpromptcard %}
{% promptcard Order Tracking %}
#sf_vue_ui_builder Create an order tracking page with the Tailwind 3 theme featuring a search bar at the top to look up orders by ID. Display order details in a card layout showing customer info, order items in a grid, and order status using a stepper component. Add a timeline on the right showing shipping updates and delivery progress.
{% endpromptcard %}
{% endpromptcards %}

## Tool-Specific Prompts

This section provides targeted prompt examples for directly invoking individual specialized tools, offering more precise control over specific aspects of your application.

### Component Tool

The Component tool implements specific Syncfusion Vue components with configured properties and event handlers. Use #sf_vue_component for targeted component integration.

{% promptcards %}
{% promptcard Advanced Data Grid Setup %}
#sf_vue_component Create a Grid with paging (20 per page), sorting, and filtering. Columns: product image, name (link), category, price (currency), stock status (badge), actions (edit/delete). Enable row selection and Excel export.
{% endpromptcard %}
{% promptcard Event Calendar Integration %}
#sf_vue_component Add a Scheduler with month/day/week/agenda views. Toolbar with date navigation, view switcher, and an "Add Event" button. Color-coded categories and drag-and-drop rescheduling.
{% endpromptcard %}
{% promptcard Multi-Step Form Wizard %}
#sf_vue_component Build a step-by-step registration form with validation per step. Steps: TextBox (personal info), DropDownList (preferences), FileUpload (documents), summary. Add progress indicators and navigation with validation.
{% endpromptcard %}
{% promptcard Real-Time Chart Dashboard %}
#sf_vue_component Create a Chart component with a line series for real-time data visualization. Configure multiple y-axes, a tooltip with custom formatting, a legend with toggling, and zoom/pan functionality. Update data every 5 seconds.
{% endpromptcard %}
{% endpromptcards %}

### Styling Tool

The Styling tool applies custom themes, color schemes, visual treatments, and iconography across your application. Use #sf_vue_style for branding, aesthetic customization, and icon integration.

{% promptcards %}
{% promptcard Tailwind3 Dark Mode Setup %}
#sf_vue_style Apply the Syncfusion Tailwind 3 dark theme to the application. Configure CSS variables for the dark mode color scheme and enable theme toggle functionality.
{% endpromptcard %}
{% promptcard Bootstrap5.3 Theme Customization %}
#sf_vue_style Customize the Syncfusion Bootstrap 5.3 theme using CSS variables. Modify primary colors, component spacing, and typography to match brand guidelines.
{% endpromptcard %}
{% promptcard Fluent2 Responsive Styling %}
#sf_vue_style Apply the Syncfusion Fluent 2 theme with responsive adjustments. Customize component sizes, spacing, and layout breakpoints for mobile, tablet, and desktop views.
{% endpromptcard %}
{% promptcard Material3 CSS Variables %}
#sf_vue_style Configure the Syncfusion Material 3 theme CSS variables for a custom color palette, elevation shadows, border radius, and component-specific styling properties.
{% endpromptcard %}
{% promptcard User Actions & Navigation %}
#sf_vue_style Add appropriate icons for common user interactions in the application toolbar, including editing capabilities, navigation controls, and accessing various options.
{% endpromptcard %}
{% promptcard Content Editor Toolbar %}
#sf_vue_style Implement icons for text formatting operations, table manipulation, and image editing tools in the Rich Text Editor.
{% endpromptcard %}
{% promptcard Document Management %}
#sf_vue_style Find icons for file operations, document processing, printing capabilities, and export functionality in the File Manager toolbar.
{% endpromptcard %}
{% endpromptcards %}

## See also

* [Agentic UI Builder - Getting Started](./getting-started)
* [AI Coding Assistant - Getting Started](../ai-coding-assistant/getting-started)