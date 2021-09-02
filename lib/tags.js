import fs from 'fs'
import matter from 'gray-matter'
import path from 'path'
import { getFiles } from './mdx'
import kebabCase from './utils/kebabCase'

const root = process.cwd()

export async function getAllTags(type) {
  let files = []

  if (type === 'all') {
    let blogFiles = await getFiles('blog')
    let projectFiles = await getFiles('projects')
    files = [...blogFiles, ...projectFiles]
  } else {
    files = await getFiles(type)
  }

  files = files.filter((file) => file !== '.DS_Store')

  let tagCount = {}
  // Iterate through each post, putting all found tags into `tags`
  files.forEach((file) => {
    let blogSource = null
    let projectSource = null

    try {
      blogSource = fs.readFileSync(path.join(root, 'data', 'blog', file), 'utf8')
    } catch (error) {
      /* nothing to see here */
    }

    try {
      projectSource = fs.readFileSync(path.join(root, 'data', 'projects', file), 'utf8')
    } catch (error) {
      /* nothing to see here */
    }

    let source = blogSource || projectSource
    const { data } = matter(source)
    if (data.tags && data.draft !== true) {
      data.tags.forEach((tag) => {
        const formattedTag = kebabCase(tag)
        if (formattedTag in tagCount) {
          tagCount[formattedTag] += 1
        } else {
          tagCount[formattedTag] = 1
        }
      })
    }
  })

  console.log(tagCount)

  return tagCount
}
