import { InlineAIAssist } from '@syncfusion/ej2-interactive-chat';
import { enableRipple } from '@syncfusion/ej2-base';

enableRipple(true);

var commandSettings = {
  commands: [
    { label: 'Summarize', prompt: 'Summarize the content' },
    { label: 'Shorten', prompt: 'Shorten the content' },
    { label: 'Translate', prompt: 'Translate the content' },
    { label: 'Make professional', prompt: 'Make the content more professional' }
  ]
};

document.addEventListener('DOMContentLoaded', function () {
  var inlineAIAssist = new InlineAIAssist({
    relateTo: '#summarizeBtn',
    promptRequest: function () {
      setTimeout(function () {
        var defaultResponse = 'For real-time prompt processing, connect the Inline AI Assist component to your preferred AI service.';
        inlineAIAssist.addResponse(defaultResponse);
      }, 1000);
    },
    responseSettings: {
      itemSelect: function (args) {
        if (args.command.label === 'Accept') {
          var editable = document.getElementById('editableText');
          if (editable) {
            editable.innerHTML = '<p>' + inlineAIAssist.prompts[inlineAIAssist.prompts.length - 1].response + '</p>';
          }
          inlineAIAssist.hidePopup();
        } else if (args.command.label === 'Discard') {
          inlineAIAssist.hidePopup();
        }
      }
    }
  });

  inlineAIAssist.appendTo('#show-hide-command-popup');

  var summarizeBtn = document.querySelector('#summarizeBtn');
  var showCommandsBtn = document.querySelector('#showCommandsBtn');
  var hideCommandsBtn = document.querySelector('#hideCommandsBtn');

  if (summarizeBtn) {
    summarizeBtn.addEventListener('click', function () {
      inlineAIAssist.commandSettings.commands = [];
      inlineAIAssist.dataBind();
      inlineAIAssist.showPopup();
    });
  }

  if (showCommandsBtn) {
    showCommandsBtn.addEventListener('click', function () {
      inlineAIAssist.commandSettings = commandSettings;
      inlineAIAssist.dataBind();
      inlineAIAssist.showPopup();
      inlineAIAssist.showCommandPopup();
    });
  }

  if (hideCommandsBtn) {
    hideCommandsBtn.addEventListener('click', function () {
      inlineAIAssist.hideCommandPopup();
    });
  }
});
