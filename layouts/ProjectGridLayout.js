import Link from '@/components/Link'
import Image from '@/components/Image'
import Tag from '@/components/Tag'
import { useState } from 'react'

export default function ProjectGridLayout({ posts, title, capitalizeTitle }) {
  const [searchValue, setSearchValue] = useState('')
  const filteredNotes = posts.filter((frontMatter) => {
    const searchContent = frontMatter.title + frontMatter.summary + frontMatter.tags.join(' ')
    return searchContent.toLowerCase().includes(searchValue.toLowerCase())
  })

  const displayPosts = posts.length > 0 && !searchValue ? posts : filteredNotes

  return (
    <>
      <div className="divide-y">
        <div className="pt-6 pb-8 space-y-2 md:space-y-5">
          <h1
            className={`text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14 ${
              capitalizeTitle === true ? 'capitalize' : ''
            }`}
          >
            {title}
          </h1>
          <div className="relative max-w-lg">
            <input
              aria-label="Search projects"
              type="text"
              onChange={(e) => setSearchValue(e.target.value)}
              placeholder="Search projects"
              className="block w-full px-4 py-2 text-gray-900 bg-white border border-gray-300 rounded-md outline-none dark:border-gray-900 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-800 dark:text-gray-100"
            />
            <svg
              className="absolute w-5 h-5 text-gray-400 right-3 top-3 dark:text-gray-300"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
        </div>
        <ul className="grid grid-cols-1 gap-8 pt-8 mt-8 lg:gap-12 md:grid-cols-2">
          {!filteredNotes.length && <li className="mt-6">No projects found.</li>}
          {displayPosts.map((frontMatter) => {
            const { slug, title, summary, tags, featured } = frontMatter

            return (
              <li key={slug} className="py-4">
                <article className="xl:items-baseline group">
                  <div className="space-y-3">
                    <div>
                      {featured && (
                        <div className="mb-2">
                          <Link href={`/projects/${slug}`}>
                            <Image
                              src={featured}
                              alt={title}
                              width={500}
                              height={300}
                              className="object-cover rounded-md"
                            />
                          </Link>
                        </div>
                      )}
                      <h3 className="mb-1 text-2xl font-semibold leading-8 tracking-tight">
                        <Link
                          href={`/projects/${slug}`}
                          className="text-gray-900 dark:text-gray-100 group-hover:!opacity-50 !duration-200"
                        >
                          {title}
                        </Link>
                      </h3>
                      <div className="flex flex-wrap">
                        {tags.map((tag) => (
                          <Tag key={tag} text={tag} />
                        ))}
                      </div>
                    </div>
                    <div className="prose text-gray-500 max-w-none dark:text-gray-400">
                      {summary}
                    </div>
                  </div>
                </article>
              </li>
            )
          })}
        </ul>
      </div>
    </>
  )
}
