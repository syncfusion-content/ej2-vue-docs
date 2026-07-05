<template>
  <div id="register-tool"></div>
  <div class="score-gauge-panel e-card">
  <div class="score-gauge"></div>
</div>

</template>
<script setup>
import { onMounted } from 'vue'
import { AIAssistView } from '@syncfusion/ej2-interactive-chat'
import { enableRipple } from '@syncfusion/ej2-base'
import {CircularGauge,Annotations,GaugeTooltip,Legend} from '@syncfusion/ej2-circulargauge'

enableRipple(true)
CircularGauge.Inject(Annotations, GaugeTooltip, Legend)

let aiAssistView
let scoreBlocks = []

const weatherData = [
  { blockType: "text", content: "Here is the current weather forecast for your location:" },
  { blockType: "tool", toolName: "weather-card" },
  {
    blockType: "text",
    content: "**Scattered Showers Expected** with temperatures ranging from **1°C to -4°C**. There is a **100% chance of snow**."
  }
]

onMounted(() => {
  aiAssistView = new AIAssistView({
    promptSuggestions: [
      "Suggest a healthy breakfast recipe under 5 ingredients",
      "What is the weather in New York?"
    ],
    enableStreaming: true,
    prompts: [{ prompt: 'What is the weather in New York?', blocks: weatherData }],
    toolbarSettings: {
      items: [{ iconCss: 'e-icons e-refresh', align: 'Right' }],
      itemClicked: toolbarItemClicked
    },
    promptRequest: onPromptRequest
  })

  registerTools()
  aiAssistView.appendTo('#register-tool')
})

/* -------------------- TOOL REGISTRATION -------------------- */
function registerTools() {

  aiAssistView.registerToolUI({
    toolName: 'weather-card',
    template: `
    <div tabindex="0" class="e-card">
        <div class="e-card-header">
            <div class="e-card-header-caption">
                <div class="e-card-header-title">Today</div>
                <div class="e-card-sub-title">New York - Scattered Showers.</div>
            </div>
        </div>
        <div class="e-card-header weather_report">
            <div class="e-card-header-caption">
                <div class="e-card-header-title">1º / -4º</div>
                <div class="e-card-sub-title">Chance for snow: 100%</div>
            </div>
        </div>
    </div>`
  })

  aiAssistView.registerToolUI({
    toolName: 'recipe-maker',
    template: recipeTemplate,
    handler: recipeHandler
  })

  aiAssistView.registerToolUI({
    toolName: 'recipe-score-gauge',
    template: recipeScoreGaugeTemplate,
    handler: gaugeHandler
  })
}

/* -------------------- RECIPE TEMPLATE -------------------- */
function recipeTemplate(args = {}) {
  const data = {
    title: "Custom Recipe",
    ingredients: [],
    instructions: [],
    ...args
  }

  return `
    <div class="recipe-panel e-card">
      <h2 class="recipe-title">${data.title}</h2>

      ${renderIngredients(data.ingredients)}
      ${renderInstructions(data.instructions)}

      <button class="e-btn e-primary check-score-btn">
        Check Recipe Score
      </button>
    </div>
  `
}

const renderIngredients = (ingredients) => `
  <div class="recipe-section">
    <div class="recipe-header">
      <h4>🥕 Ingredients</h4>
      <button class="e-btn e-primary e-small add-ingredient">Add Ingredient</button>
    </div>
    <div class="ingredients-list">
      ${ingredients.map(i => `
        <div class="ingredient-item">
          <span contenteditable="true">${i.name}</span>
          <span contenteditable="true">${i.quantity}</span>
          <button class="e-btn e-danger remove-ingredient">X</button>
        </div>`).join('')}
    </div>
  </div>
`

const renderInstructions = (steps) => `
  <div class="recipe-section">
    <div class="recipe-header">
      <h4>📋 Instructions</h4>
      <button class="e-btn e-primary e-small add-step">Add Step</button>
    </div>
    <div class="instructions-list">
      ${steps.map(s => `
        <div class="step-item">
          <span contenteditable="true">${s}</span>
          <button class="e-btn e-danger remove-step">X</button>
        </div>`).join('')}
    </div>
  </div>
`

/* -------------------- HANDLERS -------------------- */
function recipeHandler(container) {
  container.addEventListener('click', (e) => {
    const target = e.target

    if (target.classList.contains('add-ingredient')) {
      container.querySelector('.ingredients-list')
        .insertAdjacentHTML('beforeend', getIngredientHTML())
      return
    }

    if (target.classList.contains('add-step')) {
      container.querySelector('.instructions-list')
        .insertAdjacentHTML('beforeend', getStepHTML())
      return
    }

    if (target.classList.contains('remove-ingredient')) {
      target.closest('.ingredient-item')?.remove()
      return
    }

    if (target.classList.contains('remove-step')) {
      target.closest('.step-item')?.remove()
      return
    }

    if (target.classList.contains('check-score-btn')) {
      handleScoreCheck(container)
    }
  })
}

const getIngredientHTML = () => `
  <div class="ingredient-item">
    <span contenteditable="true">New Ingredient</span>
    <span contenteditable="true">qty</span>
    <button class="e-btn e-danger remove-ingredient">X</button>
  </div>
`

const getStepHTML = () => `
  <div class="step-item">
    <span contenteditable="true">New step...</span>
    <button class="e-btn e-danger remove-step">X</button>
  </div>
`

function handleScoreCheck(container) {
  const recipeData = getCurrentRecipeData(container)
  const score = calculateRecipeScore(recipeData)

  scoreBlocks = [
    {
      blockType: 'text',
      content: `**Recipe Score Analysis**\n\nHere is the score for **${recipeData.title}**.`
    },
    {
      blockType: 'tool',
      toolName: 'recipe-score-gauge',
      props: { score, title: recipeData.title }
    },
    {
      blockType: 'text',
      content: `💬 ${getScoreComment(score)}`
    }
  ]

  aiAssistView.executePrompt('Generate a score analysis for this recipe.')
}

/* -------------------- GAUGE -------------------- */
function recipeScoreGaugeTemplate(args) {
  return `<div class="score-gauge"><div>${args.score}/100</div></div>`
}

function gaugeHandler(container, args) {
  const score = args.score ?? 85
  const title = args.title ?? "Recipe Score"

  setTimeout(() => {
    const el = container.querySelector('.score-gauge')
    el.innerHTML = ''

    new CircularGauge({
      height: '320px',
      width: '100%',
      title,
      axes: [{
        annotations: [{
          content: `<div class="gauge-annotation">${score}</div>`
        }],
        minimum: 0,
        maximum: 10,
        pointers: [{ value: score / 10 }],
        ranges: [
          { start: 0, end: 2, color: '#F03E3E' },
          { start: 2, end: 5, color: '#f6961e' },
          { start: 5, end: 8, color: '#FFDD00' },
          { start: 8, end: 10, color: '#30B32D' }
        ]
      }]
    }).appendTo(el)

  }, 100)
}

/* -------------------- UTILITIES -------------------- */
function getCurrentRecipeData(container) {
  return {
    title: container.querySelector('.recipe-title').textContent.trim(),
    ingredients: [...container.querySelectorAll('.ingredient-item')].map(i => ({
      name: i.children[0].textContent.trim(),
      quantity: i.children[1].textContent.trim()
    })),
    instructions: [...container.querySelectorAll('.step-item')]
      .map(i => i.children[0].textContent.trim())
  }
}

function calculateRecipeScore({ ingredients = [], instructions = [] }) {
  if (!ingredients.length) return 15
  if (!instructions.length) return 20

  let score = 100
  let validIng = ingredients.filter(i => i.name && i.quantity).length
  let validSteps = instructions.filter(Boolean).length

  score -= (ingredients.length - validIng) * 12
  score -= (instructions.length - validSteps) * 15

  score += validIng >= 5 ? 10 : (validIng === 1 ? -20 : validIng === 2 ? -10 : 0)
  score += validSteps >= 4 ? 10 :
           validSteps === 1 ? -25 :
           validSteps === 2 ? -15 :
           validSteps === 3 ? -5 : 0

  if (validIng >= 3 && validSteps >= 3) score += 8

  score += Math.floor(Math.random() * 6)

  return Math.min(100, Math.max(10, score))
}

function getScoreComment(score) {
  if (score >= 90) return "Outstanding recipe!"
  if (score >= 80) return "Very good recipe."
  if (score >= 70) return "Solid recipe."
  return "Needs improvement."
}

/* -------------------- PROMPTS -------------------- */
function onPromptRequest(args) {
  setTimeout(() => {

    if (args.prompt === "What is the weather in New York?")
      return aiAssistView.addPromptResponse({ blocks: weatherData })

    if (args.prompt === "Generate a score analysis for this recipe.")
      return aiAssistView.addPromptResponse({ blocks: scoreBlocks })

    if (args.prompt.includes("healthy breakfast")) {
      return aiAssistView.addPromptResponse({
        blocks: [
          { blockType: 'text', content: '**Here is your recipe!**' },
          {
            blockType: 'tool',
            toolName: 'recipe-maker',
            props: {
              title: "Butter Toast",
              ingredients: [
                { name: "Bread", quantity: "2 slices" },
                { name: "Butter", quantity: "1 tbsp" }
              ],
              instructions: ["Spread butter", "Toast"]
            }
          }
        ]
      })
    }

  }, 300)
}

/* -------------------- TOOLBAR -------------------- */
function toolbarItemClicked(args) {
  if (args.item.iconCss === 'e-icons e-refresh') {
    aiAssistView.prompts = []
  }
}
</script>