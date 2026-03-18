import { InlineAIAssist } from '@syncfusion/ej2-interactive-chat';
import { enableRipple } from '@syncfusion/ej2-base';

enableRipple(true);

document.addEventListener('DOMContentLoaded', function () {
  var inlineAIAssist = new InlineAIAssist({
    relateTo: '#showPopup',
    promptRequest: function () {
      setTimeout(function () {
        var defaultResponse = 'This is a default response from the Inline AI Assist sample.';
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

  inlineAIAssist.appendTo('#show-hide-popup');

  var showBtn = document.querySelector('#showPopup');
  var hideBtn = document.querySelector('#hidePopup');
  if (showBtn) showBtn.addEventListener('click', function () { inlineAIAssist.showPopup(); });
  if (hideBtn) hideBtn.addEventListener('click', function () { inlineAIAssist.hidePopup(); });
});
