import * as React from 'react'
import { useInView } from 'react-intersection-observer'
import 'intersection-observer'

function fadeClassName(inView: boolean, fade: string | undefined) {
  if (inView) {
    return fade ? `-${fade}` : ''
  }
  return '-hidden'
}
const FadeIn: React.FC<{
  as?: 'section'
  className?: string
  fade?: 'left' | 'right' | 'up'
}> = ({ as, className, fade, children }: any) => {
  const [inViewRef, inView] = useInView({ triggerOnce: true })
  return React.createElement(
    as || 'div',
    {
      ref: inViewRef,
      className: `${className || ''} fade-in${fadeClassName(inView, fade)}`,
    },
    children
  )
}
export default FadeIn
