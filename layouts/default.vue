<template>
  <main>
    <the-navbar class="mb-5" />
    <Nuxt />
  </main>
</template>

<style lang="postcss">
html,
body {
  @apply text-gray-900 text-16 leading-normal font-normal antialiased;
  text-rendering: optimizeLegibility;
}

img {
  max-width: 100%;
}

pre {
  @apply bg-gray-100 p-2 rounded-lg text-14 text-gray-800;
}

hr {
  @apply my-6;
}

a {
  @apply duration-300 transition-all;
}

/* Code for Firefox */
::-moz-selection {
  @apply bg-gray-800;
  @apply text-white;
}

::selection {
  @apply bg-gray-800;
  @apply text-white;
}
</style>
