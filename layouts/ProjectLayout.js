import Link from '@/components/Link'
import PageTitle from '@/components/PageTitle'
import SectionContainer from '@/components/SectionContainer'
import { BlogSEO } from '@/components/SEO'
import Image from '@/components/Image'
import Tag from '@/components/Tag'
import siteMetadata from '@/data/siteMetadata'
import Comments from '@/components/comments'
import DownloadOnAppStore from '@/components/DownloadOnAppStore'
import AuthorsWidget from '@/components/AuthorsWidget'
import SidebarWidget from '@/components/SidebarWidget'

const editUrl = (fileName) => `${siteMetadata.siteRepo}/blob/master/data/projects/${fileName}`
const discussUrl = (slug) =>
  `https://mobile.twitter.com/search?q=${encodeURIComponent(
    `${siteMetadata.siteUrl}/projects/${slug}`
  )}`

const postDateTemplate = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }

export default function PostLayout({ frontMatter, authorDetails, next, prev, children }) {
  const { slug, fileName, date, title, tags, website, appStoreUrl } = frontMatter

  return (
    <SectionContainer>
      <BlogSEO
        url={`${siteMetadata.siteUrl}/projects/${slug}`}
        authorDetails={authorDetails}
        {...frontMatter}
      />
      <article>
        <div className="xl:divide-y xl:divide-gray-200 xl:dark:divide-gray-700">
          <header className="pt-6 xl:pb-6">
            <div className="space-y-1 text-center">
              <dl className="space-y-10">
                <div>
                  <dt className="sr-only">Published on</dt>
                  <dd className="text-base font-medium leading-6 text-gray-500 dark:text-gray-400">
                    <time dateTime={date}>
                      {new Date(date).toLocaleDateString(siteMetadata.locale, postDateTemplate)}
                    </time>
                  </dd>
                </div>
              </dl>
              <div>
                <PageTitle>{title}</PageTitle>
              </div>
            </div>
          </header>
          <div
            className="pb-8 divide-y divide-gray-200 xl:divide-y-0 dark:divide-gray-700 xl:grid xl:grid-cols-4 xl:gap-x-6"
            style={{ gridTemplateRows: 'auto 1fr' }}
          >
            <div className="flex flex-col lg:pt-8">
              {appStoreUrl && (
                <SidebarWidget>
                  <dl>
                    <dt className="sr-only">Download on the app store</dt>
                    <dd>
                      <DownloadOnAppStore href={appStoreUrl} />
                    </dd>
                  </dl>
                </SidebarWidget>
              )}

              {website && (
                <SidebarWidget className="pt-0 lg:pt-6">
                  <div className="flex justify-center lg:justify-start">
                    <a
                      href={website}
                      className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                    >
                      View website
                    </a>
                  </div>
                </SidebarWidget>
              )}
            </div>
            <div className="divide-y divide-gray-200 dark:divide-gray-700 xl:pb-0 xl:col-span-3 xl:row-span-2">
              <div className="pt-10 pb-8 prose dark:prose-dark max-w-none">{children}</div>
              <div className="pt-6 pb-6 text-sm text-gray-700 dark:text-gray-300">
                <Link href={discussUrl(slug)} rel="nofollow">
                  {'Discuss on Twitter'}
                </Link>
                {` • `}
                <Link href={editUrl(fileName)}>{'View on GitHub'}</Link>
              </div>
              <Comments frontMatter={frontMatter} />
            </div>
            <footer>
              <div className="text-sm font-medium leading-5 divide-gray-200 xl:divide-y dark:divide-gray-700 xl:col-start-1 xl:row-start-2">
                {tags && (
                  <SidebarWidget heading="Tags">
                    <div className="flex flex-wrap">
                      {tags.map((tag) => (
                        <Tag key={tag} text={tag} />
                      ))}
                    </div>
                  </SidebarWidget>
                )}
                {(next || prev) && (
                  <div className="flex justify-between lg:flex-col">
                    {prev && (
                      <SidebarWidget heading="Previous Project">
                        <div className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400">
                          <Link href={`/projects/${prev.slug}`}>{prev.title}</Link>
                        </div>
                      </SidebarWidget>
                    )}
                    {next && (
                      <SidebarWidget heading="Next Project">
                        <div className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400">
                          <Link href={`/projects/${next.slug}`}>{next.title}</Link>
                        </div>
                      </SidebarWidget>
                    )}
                  </div>
                )}
              </div>

              <SidebarWidget>
                <Link
                  href="/projects"
                  className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                >
                  &larr; Back to projects
                </Link>
              </SidebarWidget>
            </footer>
          </div>
        </div>
      </article>
    </SectionContainer>
  )
}
