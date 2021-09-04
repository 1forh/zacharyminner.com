import React from 'react'

export default function Button({ href, children }) {
  return (
    <a
      href={href}
      className="inline-flex items-center justify-center px-5 py-3 text-sm font-medium text-center text-white border border-transparent rounded shadow-sm bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
    >
      {children}
    </a>
  )
}
