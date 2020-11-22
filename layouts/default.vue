<template>
  <the-wrapper>
    <main>
      <the-navbar class="mb-5" />
      <Nuxt />
      <the-footer class="mt-10" />
    </main>
  </the-wrapper>
</template>

<style lang="postcss">
html,
body {
  @apply antialiased;
  text-rendering: optimizeLegibility;
}

img {
  max-width: 100%;
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
