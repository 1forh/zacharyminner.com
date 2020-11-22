<template>
  <header class="py-3">
    <div class="container max-w-5xl flex justify-between">
      <div class="md:w-7/12">
        <p class="text-lg leading-normal hidden md:block" v-balance-text>
          Heyo, I'm <nuxt-link to="/" class="font-semibold text-primary-500 hover:text-primary-700">Zach Minner</nuxt-link>. I'm a web developer building 🔥 websites and applications at
          <a href="https://www.skycatchfire.com" target="_blank" class="font-semibold text-skycatchfire-primary">SKYCATCHFIRE</a>. I live in North Canton with my beautiful girlfriend Haley, my playful
          cat Ava, and my tiny kitten Lily. I'm a Zach of all trades and I'm always trying to learn more about myself and everything else.
        </p>
        <nuxt-link to="/" class="md:hidden font-semibold text-2xl">Zach Minner</nuxt-link>
      </div>
      <div>
        <social-icons />
      </div>
    </div>
  </header>
</template>

<script>
import get from 'lodash/get';

export default {
  name: 'TheNavbar',
};
</script>

<style lang="postcss" scoped></style>
