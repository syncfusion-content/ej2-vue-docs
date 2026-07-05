<template>
  <div id="register-tool"></div>
  <div class="score-gauge-panel e-card">
  <div class="score-gauge"></div>
</div>
 
</template>

<script>
import { AIAssistView } from '@syncfusion/ej2-interactive-chat'
import { enableRipple } from '@syncfusion/ej2-base'
import {
  CircularGauge,
  Annotations,
  GaugeTooltip,
  Legend
} from '@syncfusion/ej2-circulargauge'

enableRipple(true)
CircularGauge.Inject(Annotations, GaugeTooltip, Legend)

export default {
  data() {
    return {
      aiAssistView: null,
      scoreBlocks: [],
      weatherData: [
        { blockType: "text", content: "Here is the current weather forecast for your location:" },
        { blockType: "tool", toolName: "weather-card" },
        {
          blockType: "text",
          content: "**Scattered Showers Expected** with temperatures ranging from **1°C to -4°C**. There is a **100% chance of snow**, so it's recommended to bundle up and exercise caution if traveling. The weather system is expected to continue throughout the day with moderate precipitation."
        }
      ]
    }
  },
  mounted() {
    this.aiAssistView = new AIAssistView({
      promptSuggestions: [
        "Suggest a healthy breakfast recipe under 5 ingredients",
        "What is the weather in New York?"
      ],
      enableStreaming: true,
      prompts: [{ prompt: 'What is the weather in New York?', blocks: this.weatherData }],
      toolbarSettings: {
        items: [{ iconCss: 'e-icons e-refresh', align: 'Right' }],
        itemClicked: this.toolbarItemClicked
      },
      promptRequest: this.onPromptRequest
    })

    this.registerTools()

    this.aiAssistView.appendTo('#register-tool')
  },
  methods: {
    registerTools() {
      this.aiAssistView.registerToolUI({
        toolName: 'weather-card',
        template: `
        <div tabindex="0" class="e-card" id="weather_card">
            <div class="e-card-header">
                <div class="e-card-header-caption">
                    <div class="e-card-header-title">Today</div>
                    <div class="e-card-sub-title">New York - Scattered Showers.</div>
                </div>
            </div>
 
            <div class="e-card-header weather_report">
                <div class="e-card-header-image"></div>
                <div class="e-card-header-caption">
                    <div class="e-card-header-title">1º / -4º</div>
                    <div class="e-card-sub-title">Chance for snow: 100%</div>
                </div>
            </div>
        </div>
        `
      })

      this.aiAssistView.registerToolUI({
        toolName: 'recipe-maker',
        template: this.recipeTemplate,
        handler: this.recipeHandler
      })

      this.aiAssistView.registerToolUI({
        toolName: 'recipe-score-gauge',
        template: this.recipeScoreGaugeTemplate,
        handler: this.gaugeHandler
      })
    },

    recipeTemplate(args) {
      const data = Object.assign({
        title: "Custom Recipe",
        ingredients: [],
        instructions: []
      }, args)

      return `
        <div class="recipe-panel e-card">
          <h2 class="recipe-title">${data.title}</h2>
 
          <div class="recipe-section">
            <div class="recipe-header">
              <h4>🥕 Ingredients</h4>
              <button class="e-btn e-primary e-small add-ingredient">Add Ingredient</button>
            </div>
 
            <div class="ingredients-list">
              ${data.ingredients.map(i => `
                <div class="ingredient-item">
                  <span class="ingredient-name" contenteditable="true">${i.name}</span>
                  <span class="ingredient-qty" contenteditable="true">${i.quantity}</span>
                  <button class="e-btn e-danger remove-ingredient">X</button>
                </div>
              `).join('')}
            </div>
          </div>
 
          <div class="recipe-section">
            <div class="recipe-header">
              <h4>📋Instructions</h4>
              <button class="e-btn e-primary e-small add-step">Add Step</button>
            </div>
 
            <div class="instructions-list">
              ${data.instructions.map(s => `
                <div class="step-item">
                  <span class="step-text" contenteditable="true">${s}</span>
                  <button class="e-btn e-danger remove-step">X</button>
                </div>
              `).join('')}
            </div>
          </div>
 
          <button class="e-btn e-primary check-score-btn">
            Check Recipe Score
          </button>
        </div>
      `
    },

    recipeHandler(container) {
      container.addEventListener('click', (e) => {
        if (e.target.classList.contains('add-ingredient')) {
          container.querySelector('.ingredients-list').insertAdjacentHTML('beforeend', `
            <div class="ingredient-item">
              <span contenteditable="true">New Ingredient</span>
              <span contenteditable="true">qty</span>
              <button class="e-btn e-danger remove-ingredient">X</button>
            </div>
          `)
          return
        }

        if (e.target.classList.contains('add-step')) {
          container.querySelector('.instructions-list').insertAdjacentHTML('beforeend', `
            <div class="step-item">
              <span contenteditable="true">New step...</span>
              <button class="e-btn e-danger remove-step">X</button>
            </div>
          `)
          return
        }

        if (e.target.classList.contains('remove-ingredient')) {
          e.target.closest('.ingredient-item').remove()
          return
        }

        if (e.target.classList.contains('remove-step')) {
          e.target.closest('.step-item').remove()
          return
        }

        if (e.target.classList.contains('check-score-btn')) {
          const recipeData = this.getCurrentRecipeData(container)

          const score = this.calculateRecipeScore(recipeData)
          const comment = this.getScoreComment(score)

          this.scoreBlocks = [
            {
              blockType: 'text',
              content: `**Recipe Score Analysis**
 
Here is the score for **${recipeData.title}**.`
            },
            {
              blockType: 'tool',
              toolName: 'recipe-score-gauge',
              props: {
                score: score,
                title: recipeData.title
              }
            },
            {
              blockType: 'text',
              content: `💬 ${this.getScoreComment(score)}
 
You can continue editing and check again anytime.`
            }
          ];

          this.aiAssistView.executePrompt('Generate a score analysis for this recipe.');
        }
      })
    },

    recipeScoreGaugeTemplate(args) {
      return `
        <div class="score-gauge">
          <div>${args.score}/100</div>
        </div>
      `
    },

    gaugeHandler(container, args) {
      const score = args.score || 85;
      const recipeTitle = args.title || "Recipe Score";

      setTimeout(() => {
        const gaugeContainer = container.querySelector('.score-gauge');
        gaugeContainer.innerHTML = '';
        const circulargauge = new CircularGauge({
          height: '320px',   // reduced size to fit card better
          width: '100%',     // responsive inside card
          title: recipeTitle,

          allowMargin: false,
          titleStyle: { size: '16px', fontFamily: 'inherit' },
          tooltip: { enable: true },

          axes: [
            {
              annotations: [
                {
                  content: `<div class="gauge-annotation">${score}</div>`,
                  angle: 0,
                  zIndex: '1',
                  radius: '-10%'
                }
              ],

              lineStyle: { width: 0 },

              labelStyle: {
                font: { size: '12px', fontFamily: 'inherit' },
                position: 'Outside',
                offset: -40
              },

              majorTicks: { height: 12, width: 1.5, interval: 2, offset: 35 },
              minorTicks: { height: 0 },

              startAngle: 270,
              endAngle: 90,
              minimum: 0,
              maximum: 10,
              radius: '100%',

              pointers: [
                {
                  radius: '70%',
                  needleEndWidth: 2,
                  pointerWidth: 5,
                  value: score / 10,
                  cap: { radius: 8, border: { width: 2 } }
                }
              ],

              ranges: [
                { start: 0, end: 2, color: '#F03E3E', radius: '80%', startWidth: 30, endWidth: 30 },
                { start: 2, end: 5, color: '#f6961e', radius: '80%', startWidth: 30, endWidth: 30 },
                { start: 5, end: 8, color: '#FFDD00', radius: '80%', startWidth: 30, endWidth: 30 },
                { start: 8, end: 10, color: '#30B32D', radius: '80%', startWidth: 30, endWidth: 30 }
              ]
            }
          ]
        });

        circulargauge.appendTo(gaugeContainer);

      }, 100);
    },

    getCurrentRecipeData(container) {
      return {
        title: container.querySelector('.recipe-title').textContent.trim(),
        ingredients: Array.from(container.querySelectorAll('.ingredient-item')).map(i => ({
          name: i.children[0].textContent.trim(),
          quantity: i.children[1].textContent.trim()
        })),
        instructions: Array.from(container.querySelectorAll('.step-item')).map(i =>
          i.children[0].textContent.trim()
        )
      }
    },

    calculateRecipeScore(recipe) {
      let score = 100,
        ingredients = recipe.ingredients || [],
        instructions = recipe.instructions || [],
        validIng = 0,
        validSteps = 0;

      if (!ingredients.length) return 15;
      if (!instructions.length) return 20;

      for (let i = 0; i < ingredients.length; i++) {
        let n = (ingredients[i].name || "").trim();
        let q = (ingredients[i].quantity || "").trim();

        if (!n || !q) score -= 12;
        else validIng++;
      }

      score += (validIng >= 5 ? 10 : validIng === 1 ? -20 : validIng === 2 ? -10 : 0);

      for (let i = 0; i < instructions.length; i++) {
        let s = (instructions[i] || "").trim();

        if (!s) score -= 15;
        else validSteps++;
      }

      score += (validSteps >= 4 ? 10 : validSteps === 1 ? -25 :
        validSteps === 2 ? -15 : validSteps === 3 ? -5 : 0);

      if (validIng >= 3 && validSteps >= 3) score += 8;

      score += Math.floor(Math.random() * 6);

      return score < 10 ? 10 : score > 100 ? 100 : score;
    },

    getScoreComment(score) {
      if (score >= 90) return "Outstanding recipe! Highly recommended.";
      if (score >= 80) return "Very good recipe with excellent balance.";
      if (score >= 70) return "Solid recipe. Minor improvements possible.";
      return "Average recipe. Consider refining ingredients or steps.";
    },

    onPromptRequest(args) {
      setTimeout(() => {
        if (args.prompt === "What is the weather in New York?") {
          this.aiAssistView.addPromptResponse({ blocks: this.weatherData })
        }

        else if (args.prompt === "Generate a score analysis for this recipe.") {
          this.aiAssistView.addPromptResponse({ blocks: this.scoreBlocks })
        }

        else if (args.prompt === "Suggest a healthy breakfast recipe under 5 ingredients") {
          var mockRecipe = {
            title: "Butter Toast",
            ingredients: [
              { name: "Bread slices", quantity: "2" },
              { name: "Butter", quantity: "1 tbsp" },
              { name: "Sugar", quantity: "1 tsp" }
            ],
            instructions: [
              "Spread butter on bread slices",
              "Toast until golden and sprinkle sugar on top"
            ]
          };

          this.aiAssistView.addPromptResponse({
            blocks: [
              {
                blockType: 'text',
                content: '**Here is your recipe!** Feel free to edit ingredients and steps, then click **Check Recipe Score**.'
              },
              {
                blockType: 'tool',
                toolName: 'recipe-maker',
                props: mockRecipe
              }
            ]
          });
        }
      }, 500)
    },

    toolbarItemClicked(args) {
      if (args.item.iconCss === 'e-icons e-refresh') {
        this.aiAssistView.prompts = []
      }
    }
  }
}
</script>