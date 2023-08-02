import { PageContext } from '../providers/PageProvider'
import { useContext } from 'react'
import Home from './Home'
import About from './About'
import Contact from './Contact'
import Projects from './Projects'

const PageContainer = () => {
  const { page } = useContext(PageContext)
  switch(page) {
    case 'About':
      return <About />

    case 'Contact':
      return <Contact />

    case 'Projects':
      return <Projects />

    default:
      return <Home />
  }
}

export default PageContainer;