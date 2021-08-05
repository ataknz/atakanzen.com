import { Hero } from './Hero'
import { Nav } from './Nav'

const Layout = ({ children, index }) => {
  return (
    <>
      <Nav />
      {index && (
        <div>
          <Hero />
        </div>
      )}
      {<div>{children}</div>}
    </>
  )
}

export default Layout
