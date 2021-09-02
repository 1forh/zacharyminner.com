import fs from 'fs'
import matter from 'gray-matter'
import path from 'path'
import { getFiles } from './mdx'
import kebabCase from './utils/kebabCase'

const root = process.cwd()

export async function getAllTags(type) {
  let files = []

  if (type === 'all') {
    let notesFiles = await getFiles('notes')
    let projectFiles = await getFiles('projects')
    files = [...notesFiles, ...projectFiles]
  } else {
    files = await getFiles(type)
  }

  files = files.filter((file) => file !== '.DS_Store')

  let tagCount = {}
  // Iterate through each post, putting all found tags into `tags`
  files.forEach((file) => {
    let notesSource = null
    let projectSource = null

    try {
      notesSource = fs.readFileSync(path.join(root, 'data', 'notes', file), 'utf8')
    } catch (error) {
      /* nothing to see here */
    }

    try {
      projectSource = fs.readFileSync(path.join(root, 'data', 'projects', file), 'utf8')
    } catch (error) {
      /* nothing to see here */
    }

    let source = notesSource || projectSource
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
