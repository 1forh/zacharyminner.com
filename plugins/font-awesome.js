import Vue from 'vue';
import { library, config } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

import { faGithub, faTwitter, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

// allow Nuxt to handle css
config.autoAddCss = false;

// add icons to use in project
library.add(faGithub, faTwitter, faLinkedinIn);

// Register the component globally
Vue.component('font-awesome-icon', FontAwesomeIcon);
