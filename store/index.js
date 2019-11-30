export const state = () => ({
  page: 'index',
  articles: [],
  projects: [],
  jobs: [],
});

export const mutations = {
  updatePage(state, pageName) {
    state.page = pageName;
  },
  setArticles(state, list) {
    state.articles = list;
  },
  setProjects(state, list) {
    state.projects = list;
  },
  setJobs(state, list) {
    state.jobs = list;
  },
};

export const actions = {
  async nuxtServerInit({ commit }) {
    const articleFiles = await require.context('~/assets/content/articles/', false, /\.json$/);
    const projectFiles = await require.context('~/assets/content/projects/', false, /\.json$/);
    const experienceFiles = await require.context('~/assets/content/experience/', false, /\.json$/);
    const articles = articleFiles.keys().map((key) => {
      let res = articleFiles(key);
      res.slug = key.slice(2, -5);
      return res;
    });
    const projects = projectFiles.keys().map((key) => {
      let res = projectFiles(key);
      res.slug = key.slice(2, -5);
      return res;
    });
    const jobs = experienceFiles.keys().map((key) => {
      let res = experienceFiles(key);
      res.slug = key.slice(2, -5);
      return res;
    });
    await commit('setArticles', articles);
    await commit('setProjects', projects);
    await commit('setJobs', jobs.reverse());
  },
};
