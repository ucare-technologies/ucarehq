import * as React from 'react'
import { useInView } from 'react-intersection-observer'
import 'intersection-observer'
import Header from './header'
import Footer from './footer'

type ChildrenFunc = (menuOpen: boolean, onClick: () => void) => React.ReactNode
type ChildrenType = React.ReactNode | ChildrenFunc
function isFunc(func: React.ReactNode): func is ChildrenFunc {
  return typeof func === 'function'
}
const Layout: React.FC<{ children: ChildrenType }> = ({ children }) => {
  const [menuOpen, setMenuOpen] = React.useState(false)
  const handleClick = React.useCallback(
    () => setMenuOpen(!menuOpen),
    [menuOpen, setMenuOpen]
  )
  const [isTopRef, isTop] = useInView()
  const refHeader = React.useRef<HTMLElement>(null) // to stop white bg flash
  return (
    <>
      <div ref={isTopRef} />
      <Header
        forwardRef={refHeader}
        isTop={!refHeader.current ? true : isTop}
        menuOpen={menuOpen}
        onClick={handleClick}
      />
      {isFunc(children) ? children(menuOpen, handleClick) : children}

      <Footer />
    </>
  )
}
export default Layout
