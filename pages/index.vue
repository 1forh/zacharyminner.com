<template>
  <div class="pb-12">
    <div class="container max-w-5xl space-y-16">
      <div>
        <h2 class="text-3xl font-bold mb-10">Notes</h2>
        <div class="grid md:grid-cols-2 gap-x-8 gap-y-10">
          <div v-for="(article, index) in notes" :key="index">
            <content-item-preview :item="article" :rotation="rotate()" />
          </div>
        </div>
      </div>

      <div>
        <h2 class="text-3xl font-bold mb-10">Projects</h2>
        <div class="grid md:grid-cols-2 gap-x-8 gap-y-10">
          <div v-for="(project, index) in projects" :key="index">
            <content-item-preview :item="project" :rotation="rotate()" />
          </div>
        </div>
      </div>

      <div>
        <h2 class="text-3xl font-bold mb-10">Snippets</h2>
        <div class="grid md:grid-cols-2 gap-x-8 gap-y-10">
          <div v-for="(snippet, index) in snippets" :key="index">
            <content-item-preview :item="snippet" :rotation="rotate()" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import get from 'lodash/get';

export default {
  async asyncData({ $content }) {
    try {
      let notes = await $content('notes').only(['title', 'slug', 'summary', 'tags', 'date', 'path']).fetch();
      notes = notes.sort((a, b) => {
        const dateA = get(a, 'date');
        const dateB = get(b, 'date');

        if (dateA < dateB) {
          return 1;
        } else {
          return -1;
        }
      });

      let projects = await $content('projects').only(['title', 'slug', 'summary', 'tags', 'date', 'path']).fetch();
      projects = projects.sort((a, b) => {
        const dateA = get(a, 'date');
        const dateB = get(b, 'date');

        if (dateA < dateB) {
          return 1;
        } else {
          return -1;
        }
      });
      let snippets = await $content('snippets').only(['title', 'slug', 'summary', 'tags', 'date', 'path']).fetch();

      return { notes, projects, snippets };
    } catch (error) {
      console.log(error);
    }
  },
  methods: {
    rotate() {
      let choice = Math.floor(Math.random() * Math.floor(4));
      let theClass = '';

      switch (choice) {
        case 0:
          theClass = 'rotate-2';
          break;
        case 1:
          theClass = '-rotate-2';
        case 2:
          theClass = 'rotate-3';
          break;
        case 3:
          theClass = '-rotate-3';
          break;
      }

      return theClass;
    },
  },
};
</script>

<style></style>
