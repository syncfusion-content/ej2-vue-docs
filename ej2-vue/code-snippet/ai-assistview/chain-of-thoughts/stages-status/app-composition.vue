<template>
  <div id='container'>
    <br>
    <ejs-aiassistview 
      id="aiAssistView" 
      ref="aiAssistViewRef"
      :promptSuggestions="suggestions"
      :prompt-request="onPromptRequest"
    ></ejs-aiassistview>
  </div>
</template>

<script setup>
import { AIAssistViewComponent as EjsAiassistview, AssistThinking } from "@syncfusion/ej2-vue-interactive-chat";
import { ref, provide } from "vue";

const aiAssistViewRef = ref(null);

provide('aiassistview', [AssistThinking]);

const suggestions = [
  'Build a modern dashboard for my business',
  'Create a login page with validation',
  'Make a task management board'
];

const onPromptRequest = () => {
  const inst = aiAssistViewRef.value.ej2Instances;
  
  // Step 1
  setTimeout(() => {
    inst.addPromptResponse({
      blocks: [
        {
          blockType: 'thinking',
          title: 'Understanding your request',
          collapsible: true,
          collapsed: false,
          isActive: true,
          stages: [
            {
              id: 'step1',
              status: 'inprogress',
              content: 'Identified request as a business dashboard requirement.'
            }
          ]
        }
      ]
    }, false);
    
    // Step 2
    setTimeout(() => {
      inst.addPromptResponse({
        blocks: [
          {
            blockType: 'thinking',
            title: 'Understanding your request',
            collapsible: true,
            collapsed: true,
            isActive: false,
            stages: [
              {
                id: 'step1',
                status: 'completed',
                content: 'Identified request as a business dashboard requirement.'
              }
            ]
          },
          {
            blockType: 'thinking',
            title: 'Selecting UI components',
            collapsible: true,
            collapsed: false,
            isActive: true,
            stages: [
              {
                id: 'step2',
                status: 'inprogress',
                content: 'Selecting the best UI components for the dashboard.'
              }
            ]
          }
        ]
      }, false);
      
      // Step 3 (FINAL RESPONSE)
      setTimeout(() => {
        inst.addPromptResponse({
          blocks: [
            {
              blockType: 'thinking',
              title: 'Understanding your request',
              collapsible: true,
              collapsed: true,
              isActive: false,
              stages: [
                {
                  id: 'step1',
                  status: 'completed',
                  content: 'Identified request as a business dashboard requirement.'
                }
              ]
            },
            {
              blockType: 'thinking',
              title: 'Selecting UI components',
              collapsible: true,
              collapsed: true,
              isActive: false,
              stages: [
                {
                  id: 'step2',
                  status: 'completed',
                  content: 'Selecting the best UI components for the dashboard.'
                }
              ]
            },
            {
              blockType: 'thinking',
              title: 'Finalizing output',
              collapsible: true,
              collapsed: true,
              isActive: false,
              stages: [
                {
                  id: 'step3',
                  status: 'completed',
                  iconCss: 'e-icons e-check',
                  content: 'Generated final dashboard structure successfully.'
                }
              ]
            }
          ],
          response: '## Business Dashboard Structure\n\n**Generated successfully.**\n\n### Features Included:\n- Key performance indicator cards\n- Revenue and sales charts\n- Recent activity data grid\n- Responsive layout for all devices\n- Clean navigation structure\n\n### Recommended Syncfusion Components:\n- Chart\n- Grid\n- Card\n- Sidebar\n- DropDownList'
        }, true);
      }, 1000);
    }, 1000);
  }, 1000);
};
</script>

<style>
@import "../node_modules/@syncfusion/ej2-base/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-inputs/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-navigations/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-notifications/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-interactive-chat/styles/tailwind3.css";
</style>