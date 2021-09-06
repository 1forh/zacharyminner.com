import { getAllFilesFrontMatter } from '@/lib/mdx'
import siteMetadata from '@/data/siteMetadata'
import ProjectGridLayout from '@/layouts/ProjectGridLayout'
import { PageSEO } from '@/components/SEO'

export async function getStaticProps() {
  let posts = await getAllFilesFrontMatter('projects')
  posts = posts.sort((a, b) => {
    if (a.weight > b.weight) {
      return 1
    } else {
      return -1
    }
  })
  console.log(posts)
  return { props: { posts } }
}

export default function Projects({ posts }) {
  return (
    <>
      <PageSEO title={`Projects - ${siteMetadata.author}`} description={siteMetadata.description} />
      <ProjectGridLayout posts={posts} title="Projects" />
    </>
  )
}
