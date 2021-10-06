import React from 'react'
import Image from './Image'

export default function DownloadOnPlayStore({ href }) {
  return (
    <div className="flex justify-center w-full">
      <a href={href} target="_blank" rel="noreferrer" className="max-w-[200px]">
        <Image
          src="/static/images/google-play-badge.png"
          alt="Download on Google Play Store"
          width={200}
          height={92}
          className="object-contain"
        />
      </a>
    </div>
  )
}
