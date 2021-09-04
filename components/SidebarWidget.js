import React from 'react'

export default function SidebarWidget({ children, heading, className, last }) {
  return (
    <div
      className={`w-full pt-6 pb-6  ${className} ${
        last ? '' : 'xl:border-b xl:border-gray-200 xl:dark:border-gray-700'
      }`}
    >
      {heading && (
        <h2 className="text-xs tracking-wide text-gray-500 uppercase dark:text-gray-400">
          {heading}
        </h2>
      )}
      <div>{children}</div>
    </div>
  )
}
