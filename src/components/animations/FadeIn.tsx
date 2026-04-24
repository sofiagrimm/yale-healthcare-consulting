import { motion, useMotionValue, useSpring, useInView, AnimatePresence } from 'motion/react'
import { ReactNode, useEffect, useRef, useState } from 'react'

type Direction = 'up' | 'down' | 'left' | 'right'

// ── FadeIn ────────────────────────────────────────────────────────────────────

export function FadeIn({
  children, direction = 'up', delay = 0, duration = 0.55, className,
}: {
  children: ReactNode; direction?: Direction; delay?: number; duration?: number; className?: string
}) {
  const offset: Record<Direction, object> = { up: { y: 28 }, down: { y: -28 }, left: { x: 28 }, right: { x: -28 } }
  return (
    <motion.div
      initial={{ opacity: 0, ...offset[direction] }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration, delay, ease: [0.16, 1, 0.3, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

// ── Stagger ───────────────────────────────────────────────────────────────────

export function StaggerContainer({ children, className, stagger = 0.1 }: {
  children: ReactNode; className?: string; stagger?: number
}) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-40px' }}
      variants={{ hidden: {}, visible: { transition: { staggerChildren: stagger } } }}
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
        hidden: { opacity: 0, y: 24 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } },
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

// ── ScaleIn ───────────────────────────────────────────────────────────────────

export function ScaleIn({ children, delay = 0, className }: {
  children: ReactNode; delay?: number; className?: string
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.55, delay, ease: [0.16, 1, 0.3, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

// ── HoverCard — lift + subtle glow on hover ───────────────────────────────────

export function HoverCard({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <motion.div
      whileHover={{ y: -6, boxShadow: '0 20px 40px -12px rgba(15,77,146,0.15)' }}
      transition={{ duration: 0.22, ease: 'easeOut' }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

// ── BlurReveal — blurry fade used for hero text ───────────────────────────────

export function BlurReveal({ children, delay = 0, className }: {
  children: ReactNode; delay?: number; className?: string
}) {
  return (
    <motion.div
      initial={{ opacity: 0, filter: 'blur(8px)', y: 16 }}
      animate={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
      transition={{ duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

// ── CountUp — animated number counter ────────────────────────────────────────

export function CountUp({ target, suffix = '', prefix = '', duration = 1.8, className }: {
  target: number; suffix?: string; prefix?: string; duration?: number; className?: string
}) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true })
  const mv = useMotionValue(0)
  const spring = useSpring(mv, { duration: duration * 1000, bounce: 0 })

  useEffect(() => { if (inView) mv.set(target) }, [inView, mv, target])
  useEffect(() =>
    spring.on('change', (v) => { if (ref.current) ref.current.textContent = `${prefix}${Math.round(v)}${suffix}` }),
    [spring, prefix, suffix]
  )
  return <span ref={ref} className={className}>{prefix}0{suffix}</span>
}

// ── SlideReveal — horizontal slide for section dividers/labels ────────────────

export function SlideReveal({ children, delay = 0, className }: {
  children: ReactNode; delay?: number; className?: string
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45, delay, ease: [0.16, 1, 0.3, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

// ── Parallax — subtle vertical scroll parallax ───────────────────────────────

export function ParallaxDiv({ children, speed = 0.15, className }: {
  children: ReactNode; speed?: number; className?: string
}) {
  const ref = useRef<HTMLDivElement>(null)
  const [offset, setOffset] = useState(0)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const onScroll = () => {
      const rect = el.getBoundingClientRect()
      const center = rect.top + rect.height / 2 - window.innerHeight / 2
      setOffset(center * speed)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [speed])

  return (
    <div ref={ref} className={className} style={{ transform: `translateY(${offset}px)` }}>
      {children}
    </div>
  )
}

// ── AnimatedNumber — count up for inline use ─────────────────────────────────

export function AnimatedNumber({ value, className }: { value: number; className?: string }) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true })
  const mv = useMotionValue(0)
  const spring = useSpring(mv, { duration: 1500, bounce: 0 })

  useEffect(() => { if (inView) mv.set(value) }, [inView, mv, value])
  useEffect(() =>
    spring.on('change', (v) => { if (ref.current) ref.current.textContent = Math.round(v).toString() }),
    [spring]
  )
  return <span ref={ref} className={className}>0</span>
}

// ── Pulse — subtle heartbeat for attention ───────────────────────────────────

export function Pulse({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <motion.div
      animate={{ scale: [1, 1.03, 1] }}
      transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

// ── Reveal — masked text reveal used for headings ────────────────────────────

export function Reveal({ children, delay = 0, className }: {
  children: ReactNode; delay?: number; className?: string
}) {
  return (
    <div className={`overflow-hidden ${className ?? ''}`}>
      <motion.div
        initial={{ y: '100%' }}
        whileInView={{ y: '0%' }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] }}
      >
        {children}
      </motion.div>
    </div>
  )
}

// Re-export AnimatePresence for convenience
export { AnimatePresence }
