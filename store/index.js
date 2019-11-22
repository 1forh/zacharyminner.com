export const state = () => ({
  articles: [],
  projects: [],
});

export const mutations = {
  setArticles(state, list) {
    state.articles = list;
  },
  setProjects(state, list) {
    state.projects = list;
  },
};

export const actions = {
  async nuxtServerInit({ commit }) {
    const articleFiles = await require.context('~/assets/content/articles/', false, /\.json$/);
    const projectFiles = await require.context('~/assets/content/projects/', false, /\.json$/);
    const articles = articleFiles.keys().map((key) => {
      let res = files(key);
      res.slug = key.slice(2, -5);
      return res;
    });
    const projects = projectFiles.keys().map((key) => {
      let res = files(key);
      res.slug = key.slice(2, -5);
      return res;
    });
    await commit('setArticles', articles);
    await commit('setProjects', projects);
  },
};
