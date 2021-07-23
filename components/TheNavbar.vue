<template>
  <header class="py-3">
    <div class="container flex justify-between max-w-5xl">
      <div class="md:w-7/12">
        <div class="hidden text-lg leading-normal md:block" v-balance-text>
          Heyo, I'm <h1 class="inline"><nuxt-link to="/" class="font-semibold text-primary-500 hover:text-primary-700">Zac</nuxt-link></h1>. I'm a web developer building <span class="whitespace-nowrap">🔥 websites</span> and applications at
          <a href="https://www.skycatchfire.com" target="_blank" class="font-semibold text-skycatchfire-primary">SKYCATCHFIRE</a>. I live with my beautiful girlfriend Haley, my playful cat Ava, and my tiny kitten Lily. I'm a Zac of all trades and I'm always trying to learn more about myself and everything else.
        </div>
        <nuxt-link to="/" class="text-2xl font-semibold md:hidden">Zach Minner</nuxt-link>
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
