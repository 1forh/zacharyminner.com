import { getAllFilesFrontMatter } from '@/lib/mdx'
import siteMetadata from '@/data/siteMetadata'
import SnippetListLayout from '@/layouts/SnippetListLayout'
import { PageSEO } from '@/components/SEO'

export async function getStaticProps() {
  let snippets = await getAllFilesFrontMatter('snippets')
  snippets = snippets.sort((a, b) => {
    if (a.weight > b.weight) {
      return 1
    } else {
      return -1
    }
  })
  return { props: { snippets } }
}

export default function Notes({ snippets }) {
  return (
    <>
      <PageSEO
        title={`Useful snippets - ${siteMetadata.author}`}
        description={siteMetadata.description}
      />
      <SnippetListLayout posts={snippets} title="Useful snippets" />
    </>
  )
}
