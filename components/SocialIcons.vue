<template>
  <div class="flex items-center space-x-5">
    <a :href="social.github" target="_blank" class="block w-6 text-gray-600 hover:text-gray-800">
      <font-awesome-icon :icon="['fab', 'github']" />
    </a>
    <a :href="social.twitter" target="_blank" class="block w-6 text-gray-600 hover:text-gray-800">
      <font-awesome-icon :icon="['fab', 'twitter']" />
    </a>
    <a :href="social.linkedin" target="_blank" class="block w-6 text-gray-600 hover:text-gray-800">
      <font-awesome-icon :icon="['fab', 'linkedin-in']" />
    </a>
  </div>
</template>

<script>
import CONFIG from '@/zach.config';

export default {
  name: 'SocialIcons',
  data() {
    return {
      social: CONFIG.social,
    };
  },
};
</script>
