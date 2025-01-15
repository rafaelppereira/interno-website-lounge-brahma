/* eslint-disable @typescript-eslint/no-explicit-any */
import { motion, useAnimation, useInView } from 'framer-motion'
import { ReactNode, useEffect, useRef } from 'react'

interface RevealProps {
  duration?: number
  children: ReactNode
  classes?: string
}

export function Reveal({ duration = 0.8, children, classes }: RevealProps) {
  const ref: any = useRef(null)
  const isInView = useInView(ref, { once: true })

  const mainControls = useAnimation()

  useEffect(() => {
    if (isInView) {
      mainControls.start('visible')
    }
  }, [isInView])

  return (
    <div ref={ref} className={classes}>
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{
          duration,
          delay: 0.25,
        }}
      >
        {children}
      </motion.div>
    </div>
  )
}
