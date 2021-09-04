import React from 'react'
import Image from '@/components/Image'
import Link from '@/components/Link'

export default function AuthorsWidget({ authorDetails }) {
  return (
    <dl>
      <dt className="sr-only">Authors</dt>
      <dd>
        <ul className="flex justify-center space-x-8 xl:block sm:space-x-12 xl:space-x-0 xl:space-y-8">
          {authorDetails.map((author) => (
            <li className="flex items-center space-x-2" key={author.name}>
              {author.avatar && (
                <Image
                  src={author.avatar}
                  width="38px"
                  height="38px"
                  alt="avatar"
                  className="w-10 h-10"
                />
              )}
              <dl className="text-sm font-medium leading-5 whitespace-nowrap">
                <dt className="sr-only">Name</dt>
                <dd className="text-gray-900 dark:text-gray-100">{author.name}</dd>
                <dt className="sr-only">Twitter</dt>
                <dd>
                  {author.twitter && (
                    <Link
                      href={author.twitter}
                      className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                    >
                      {author.twitter.replace('https://twitter.com/', '@')}
                    </Link>
                  )}
                </dd>
              </dl>
            </li>
          ))}
        </ul>
      </dd>
    </dl>
  )
}
