
import { createApp } from "vue";

createApp({
	template: `
  <div class="msg-default">
    <div id="msg" class="e-message" role="alert">
      <span class="e-msg-icon"></span>
      <div class="e-msg-content">Please read the comments carefully</div>
    </div>
  </div>`
}).mount('#app');