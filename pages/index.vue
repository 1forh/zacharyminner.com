<template>
  <div class="pb-12">
    <div class="container max-w-5xl">
      <div v-if="tags" class="flex flex-wrap items-center max-w-3xl mb-5" :class="{ 'tags-are-active': activeTags.length > 0 }">
        <content-filter
          v-for="(tag, index) in tags"
          :key="index"
          :count="tag.count"
          :tag="tag.text"
          :active="activeTags.includes(tag.text)"
          :rotation="rotate()"
          class="mb-4 mr-5"
          @filter="onFilter"
        />
      </div>

      <div class="space-y-16">
        <div v-if="displayedNotes.length">
          <h2 class="mb-10 text-3xl font-bold">Notes</h2>
          <div class="grid md:grid-cols-2 gap-x-8 gap-y-10">
            <div v-for="(article, index) in displayedNotes" :key="index">
              <content-item-preview :item="article" :rotation="rotate()" />
            </div>
          </div>
        </div>

        <div v-if="displayedProjects.length">
          <h2 class="mb-10 text-3xl font-bold">Projects</h2>
          <div class="grid md:grid-cols-2 gap-x-8 gap-y-10">
            <div v-for="(project, index) in displayedProjects" :key="index">
              <content-item-preview :item="project" :rotation="rotate()" />
            </div>
          </div>
        </div>

        <div>
          <h2 class="mb-10 text-3xl font-bold">Snippets</h2>
          <div class="grid md:grid-cols-2 gap-x-8 gap-y-10">
            <div v-for="(snippet, index) in snippets" :key="index">
              <content-item-preview :item="snippet" :rotation="rotate()" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import get from 'lodash/get';
import flatten from 'lodash/flatten';

export default {
  async fetch() {
    const { $content } = this.$nuxt;

    try {
      this.notes = await $content('notes').only(['title', 'slug', 'summary', 'tags', 'date', 'path']).sortBy('createdAt', 'asc').fetch();
      this.projects = await $content('projects').only(['title', 'slug', 'summary', 'tags', 'date', 'path']).sortBy('createdAt', 'asc').fetch();
      this.snippets = await $content('snippets').only(['title', 'slug', 'summary', 'tags', 'date', 'path']).sortBy('createdAt', 'asc').fetch();
    } catch (error) {
      console.log(error);
    }
  },
  data() {
    return {
      activeTags: [],
      notes: [],
      projects: [],
      snippets: [],
    };
  },
  computed: {
    tags() {
      const noteTags = this.notes.map((n) => n.tags);
      const projectTags = this.projects.map((n) => n.tags);
      let tags = flatten([...noteTags, ...projectTags]);
      let countedTags = {};

      tags.forEach((tag) => {
        tag = tag.trim();
        if (countedTags[tag] >= 1) {
          countedTags[tag] = countedTags[tag] + 1;
        } else {
          countedTags[tag] = 1;
        }
      });

      let someOtherNameForTags = [];
      countedTags = Object.keys(countedTags).map((t) => {
        someOtherNameForTags.push({
          text: t,
          count: countedTags[t],
        });
      });
      someOtherNameForTags = someOtherNameForTags
        .sort((a, b) => {
          if (a.count < b.count) {
            return 1;
          } else {
            return -1;
          }
        })
        .filter((t) => t.count > 1);
      return someOtherNameForTags;
    },
    displayedNotes() {
      return this.notes
        .sort((a, b) => {
          const dateA = new Date(get(a, 'date'));
          const dateB = new Date(get(b, 'date'));
          if (dateA < dateB) {
            return 1;
          } else {
            return -1;
          }
        })
        .filter((note) => {
          if (this.activeTags.length) {
            let displayed = note.tags.filter((t) => this.activeTags.includes(t));
            if (displayed.length) {
              return true;
            } else {
              return false;
            }
          } else {
            return true;
          }
        });
    },
    displayedProjects() {
      return this.projects
        .sort((a, b) => {
          const dateA = new Date(get(a, 'date'));
          const dateB = new Date(get(b, 'date'));
          if (dateA < dateB) {
            return 1;
          } else {
            return -1;
          }
        })
        .filter((project) => {
          if (this.activeTags.length) {
            let displayed = project.tags.filter((t) => this.activeTags.includes(t));
            if (displayed.length) {
              return true;
            } else {
              return false;
            }
          } else {
            return true;
          }
        });
    },
  },
  methods: {
    onFilter(by) {
      if (this.activeTags.includes(by)) {
        this.activeTags = this.activeTags.filter((t) => t !== by);
      } else {
        this.activeTags.push(by);
      }
    },
    rotate() {
      let choice = Math.floor(Math.random() * Math.floor(6));
      let theClass = '';
      switch (choice) {
        case 0:
          theClass = 'rotate-1';
          break;
        case 1:
          theClass = '-rotate-1';
        case 2:
          theClass = 'rotate-2';
          break;
        case 3:
          theClass = '-rotate-2';
        case 4:
          theClass = 'rotate-3';
          break;
        case 5:
          theClass = '-rotate-3';
          break;
      }
      return theClass;
    },
  },
};
</script>

<style></style>
