import { defineCliConfig } from 'sanity/cli'

export default defineCliConfig({
  api: {
    projectId: 'cpcy2oar',
    dataset: 'production'
  },
  project: {
    basePath: '/studio',
    name: 'Neve Studio Blog'
  },
})
