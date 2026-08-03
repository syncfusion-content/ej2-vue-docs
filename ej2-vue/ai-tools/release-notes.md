---
layout: post
title: Release Notes - Syncfusion Vue MCP Server | Syncfusion
description: Explore the release notes for Syncfusion Vue AI Coding Assistants, covering MCP Server, Skills, and Agentic UI Builder updates across all versions.
control: Syncfusion vue AI Coding Assistants Release Notes
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Syncfusion Vue AI Coding Assistants Release Notes

This document provides information about the changes and new features included in each version of the AI Coding Assistants, including the [@syncfusion/vue-mcp](https://www.npmjs.com/package/@syncfusion/vue-mcp) MCP Server, Skills, Agentic UI Builder and so on.

## MCP Server

**(v1.0.0) - August 3, 2026**

**Breaking Changes**

- The package has been renamed from [@syncfusion/vue-assistant](https://www.npmjs.com/package/@syncfusion/vue-assistant) to [@syncfusion/vue-mcp](https://www.npmjs.com/package/@syncfusion/vue-mcp). The [@syncfusion/vue-assistant](https://www.npmjs.com/package/@syncfusion/vue-assistant) package is deprecated and will no longer receive updates.

- The coding assistant tool identifier has been changed from **`sf_vue_assistant`** to **`search_docs`** for a better naming convention.

**(v2.0.0) – March 09, 2026**

**Features**

- Introduced **Agentic UI Builder** — a composite MCP tool that analyzes your UI requirements and coordinates specialized tools (Component and Styling) to generate complete Vue applications using natural language prompts, significantly boosting your productivity and accelerating development workflow.
- Agentic UI Builder sub-tools:
  - **Component Tool** (#sf_vue_component) — Provides full metadata, APIs, props, events, and configuration for 145+ Syncfusion Vue components.
  - **Styling Tool** (#sf_vue_style) — Applies theme configurations (Tailwind3 CSS, Bootstrap 5.3, Material 3, Fluent 2), dark mode, color customization, and icon integration.
- Unlimited, unrestricted access with strict privacy (no project file access, no prompt storage or training).

**Breaking Changes**

- Renamed the coding assistant tool identifier from **`SyncfusionVueAssistant`** to **`sf_vue_assistant`** for consistency, brevity, and improved user experience.

**(v1.0.1) – February 10, 2026**

**Features**

- Updated package dependencies to resolve security vulnerabilities and enhance stability.

**(v1.0.0) – December 16, 2025**

**Features**

- Added support for API key validation through file path reference.
- Updated package dependencies and security standards for improved reliability and safety.

**(v0.1.0) – October 10, 2025**

**Features**

- Initial release of AI Coding Assistants for Syncfusion Vue components.
- Provides context-aware assistance for building Vue applications with Syncfusion components.
- Includes support for component APIs, properties, and troubleshooting guidance.

## Skills

**Features**

- Introduced [Agent Skills](https://www.syncfusion.com/explore/agent-skills) — a set of lightweight, modular capabilities that extend the AI Coding Assistants with specialized knowledge, including pre-defined instructions, best practices, and curated code patterns for building Vue applications with Syncfusion components.
- Each skill is defined in a simple, readable `SKILL.md` file that specifies the correct setup, required modules, current APIs and patterns, and what a valid implementation looks like for a given component.
- Works as a standard, lightweight approach supported by modern AI development tools: install skills, the tool detects them, and the relevant skill is automatically applied to the user's prompt.