import { TagSEO } from '@/components/SEO'
import siteMetadata from '@/data/siteMetadata'
import NoteListLayout from '@/layouts/NoteListLayout'
import generateRss from '@/lib/generate-rss'
import { getAllFilesFrontMatter } from '@/lib/mdx'
import { getAllTags } from '@/lib/tags'
import kebabCase from '@/lib/utils/kebabCase'
import fs from 'fs'
import path from 'path'

const root = process.cwd()

export async function getStaticPaths() {
  const tags = await getAllTags('all')

  return {
    paths: Object.keys(tags).map((tag) => ({
      params: {
        tag,
      },
    })),
    fallback: false,
  }
}

export async function getStaticProps({ params }) {
  const tags = await getAllTags('all')
  const posts = await getAllFilesFrontMatter('notes')
  let projects = await getAllFilesFrontMatter('projects')
  projects = projects.map((project) => {
    project.postType = 'projects'
    return project
  })
  const allPosts = [...posts, ...projects]

  const filteredPosts = allPosts.filter(
    (post) =>
      post.draft !== true && post.tags && post.tags.map((t) => kebabCase(t)).includes(params.tag)
  )

  // rss
  const rss = generateRss(filteredPosts, `tags/${params.tag}/feed.xml`)
  const rssPath = path.join(root, 'public', 'tags', params.tag)
  fs.mkdirSync(rssPath, { recursive: true })
  fs.writeFileSync(path.join(rssPath, 'feed.xml'), rss)

  return { props: { posts: filteredPosts, tag: params.tag, allTags: tags } }
}

export default function Tag({ posts, tag, allTags }) {
  // Capitalize first letter and convert space to dash
  const theTag = allTags[tag]
  console.log(theTag)

  return (
    <>
      <TagSEO
        title={`${theTag?.tag} notes and projects`}
        description={`Articles and projects tagged with ${theTag?.tag} by Zachary Minner`}
      />
      <NoteListLayout posts={posts} title={theTag?.tag} capitalizeTitle />
    </>
  )
}
