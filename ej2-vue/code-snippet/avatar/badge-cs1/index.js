
import Vue from "vue";


new Vue({
	el: '#app',
	template: `
    <div id='element'>
        <div class="sample_container avatar-badge">
            <div class="avatar-block">
                <!-- Card Component -->
                <div class="e-card e-avatar-showcase">
                    <div class="e-card-content">
                        <div class="avatar-sub-block">
                            <!-- xSmall Avatar-->
                            <div class="e-avatar e-avatar-xsmall">
                                <img src="./pic01.png" alt="profile_pic">
                            </div>
                            <!-- Notification Badge -->
                            <span class="e-badge e-badge-primary e-badge-overlap e-badge-notification e-badge-circle">6</span>
                        </div>
                        <div class="avatar-sub-block">
                            <!-- Small Avatar-->
                            <div class="e-avatar e-avatar-small">
                                <img src="./pic01.png" alt="profile_pic">
                            </div>
                            <!-- Notification Badge -->
                            <span class="e-badge e-badge-primary e-badge-overlap e-badge-notification e-badge-circle">12</span>
                        </div>
                        <div class="avatar-sub-block">
                            <!-- Avatar-->
                            <div class="e-avatar">
                                <img src="./pic01.png" alt="profile_pic">
                            </div>
                            <!-- Notification Badge -->
                            <span class="e-badge e-badge-primary e-badge-overlap e-badge-notification">46</span>
                        </div>
                        <div class="avatar-sub-block">
                            <!-- Large Avatar-->
                            <div class="e-avatar e-avatar-large">
                                <img src="./pic01.png" alt="profile_pic">
                            </div>
                            <!-- Notification Badge -->
                            <span class="e-badge e-badge-primary e-badge-overlap e-badge-notification">82</span>
                        </div>
                        <div class="avatar-sub-block">
                            <!-- xLarge Avatar-->
                            <div class="e-avatar e-avatar-xlarge">
                                <img src="./pic01.png" alt="profile_pic">
                            </div>
                            <!-- Notification Badge -->
                            <span class="e-badge e-badge-primary e-badge-overlap e-badge-notification">99+</span>
                        </div>
                    </div>
                </div>
            </div>

            <div class="circleAvatar avatar-block">
                <!-- Card Component -->
                <div class="e-card e-avatar-showcase">
                    <div class="e-card-content">
                        <div class="avatar-sub-block">
                            <!-- xSmall Circle Avatar-->
                            <div class="e-avatar e-avatar-circle e-avatar-xsmall">
                                <img src="./pic01.png" alt="profile_pic">
                            </div>
                            <!-- Notification Badge -->
                            <span class="e-badge e-badge-primary e-badge-overlap e-badge-notification e-badge-circle">6</span>
                        </div>
                        <div class="avatar-sub-block">
                            <!-- Small Circle Avatar-->
                            <div class="e-avatar e-avatar-circle e-avatar-small">
                                <img src="./pic01.png" alt="profile_pic">
                            </div>
                            <!-- Notification Badge -->
                            <span class="e-badge e-badge-primary e-badge-overlap e-badge-notification e-badge-circle">12</span>
                        </div>
                        <div class="avatar-sub-block">
                            <!-- Circle Avatar-->
                            <div class="e-avatar e-avatar-circle">
                                <img src="./pic01.png" alt="profile_pic">
                            </div>
                            <!-- Notification Badge -->
                            <span class="e-badge e-badge-primary e-badge-overlap e-badge-notification">46</span>
                        </div>
                        <div class="avatar-sub-block">
                            <!-- Large Circle Avatar-->
                            <div class="e-avatar e-avatar-circle e-avatar-large">
                                <img src="./pic01.png" alt="profile_pic">
                            </div>
                            <!-- Notification Badge -->
                            <span class="e-badge e-badge-primary e-badge-overlap e-badge-notification">82</span>
                        </div>
                        <div class="avatar-sub-block">
                            <!-- xLarge Circle Avatar-->
                            <div class="e-avatar e-avatar-circle e-avatar-xlarge">
                                <img src="./pic01.png" alt="profile_pic">
                            </div>
                            <!-- Notification Badge -->
                            <span class="e-badge e-badge-primary e-badge-overlap e-badge-notification">99+</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
`,

  data() {
    return {};
  }

});