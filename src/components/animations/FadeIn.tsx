import { motion, useMotionValue, useSpring, useInView } from 'motion/react'
import { ReactNode, useEffect, useRef } from 'react'

type Direction = 'up' | 'down' | 'left' | 'right'

interface FadeInProps {
  children: ReactNode
  direction?: Direction
  delay?: number
  duration?: number
  className?: string
}

const directionMap: Record<Direction, { x?: number; y?: number }> = {
  up: { y: 24 },
  down: { y: -24 },
  left: { x: 24 },
  right: { x: -24 },
}

export function FadeIn({ children, direction = 'up', delay = 0, duration = 0.5, className }: FadeInProps) {
  const offset = directionMap[direction]
  return (
    <motion.div
      initial={{ opacity: 0, ...offset }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration, delay, ease: 'easeOut' }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export function StaggerContainer({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: 0.12 } },
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export function StaggerItem({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: 'easeOut' } },
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export function ScaleIn({ children, delay = 0, className }: { children: ReactNode; delay?: number; className?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.92 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay, ease: [0.16, 1, 0.3, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export function HoverCard({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <motion.div
      whileHover={{ y: -6, boxShadow: '0 20px 40px -12px rgba(0,0,0,0.15)' }}
      transition={{ duration: 0.25, ease: 'easeOut' }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

interface CountUpProps {
  target: number
  suffix?: string
  prefix?: string
  duration?: number
  className?: string
}

export function CountUp({ target, suffix = '', prefix = '', duration = 1.8, className }: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true })
  const motionVal = useMotionValue(0)
  const spring = useSpring(motionVal, { duration: duration * 1000, bounce: 0 })

  useEffect(() => {
    if (inView) motionVal.set(target)
  }, [inView, motionVal, target])

  useEffect(() => {
    return spring.on('change', (v) => {
      if (ref.current) ref.current.textContent = `${prefix}${Math.round(v)}${suffix}`
    })
  }, [spring, prefix, suffix])

  return <span ref={ref} className={className}>{prefix}0{suffix}</span>
}
