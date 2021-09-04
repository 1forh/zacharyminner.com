import { useEffect, useState } from 'react'
import { useTheme } from 'next-themes'
import { motion } from 'framer-motion'

const ThemeSwitch = () => {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme, resolvedTheme } = useTheme()

  const svgVariants = {
    sun: { rotate: 90 },
    moon: { rotate: 40 },
  }

  const circleVariants = {
    sun: { r: 4 },
    moon: { r: 9 },
  }

  const lineVariants = {
    sun: { opacity: 1 },
    moon: { opacity: 0 },
  }

  // When mounted on client, now we can show the UI
  useEffect(() => setMounted(true), [])

  return (
    <button
      aria-label="Toggle Dark Mode"
      type="button"
      className="w-8 h-8 p-1 ml-1 mr-1 rounded sm:ml-4"
      onClick={() => setTheme(theme === 'dark' || resolvedTheme === 'dark' ? 'light' : 'dark')}
    >
      <motion.svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        transition={{ type: 'spring', duration: 0.5 }}
        animate={theme === 'dark' ? 'sun' : 'moon'}
        variants={svgVariants}
        class="!origin-center"
      >
        <mask id="mask">
          <rect x="0" y="0" width="100%" height="100%" fill="white" />
          <circle cx="12" cy="4" r="9" fill="currentColor" />
        </mask>
        <motion.circle
          cx="12"
          cy="12"
          r="9"
          mask="url(#mask)"
          fill="currentColor"
          animate={theme === 'dark' ? 'sun' : 'moon'}
          variants={circleVariants}
          transition={{ type: 'spring', duration: 0.2 }}
        />
        <motion.g
          stroke="currentColor"
          transition={{ type: 'spring', duration: 0.2 }}
          animate={theme === 'dark' ? 'sun' : 'moon'}
          variants={lineVariants}
        >
          <line x1="12" y1="1" x2="12" y2="3" />
          <line x1="12" y1="21" x2="12" y2="23" />
          <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
          <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
          <line x1="1" y1="12" x2="3" y2="12" />
          <line x1="21" y1="12" x2="23" y2="12" />
          <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
          <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
        </motion.g>
      </motion.svg>
    </button>
  )
}

export default ThemeSwitch
