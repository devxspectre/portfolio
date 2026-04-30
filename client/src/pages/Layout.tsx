import { Outlet } from 'react-router-dom'
import Navigation from '../components/Navigation'

const Layout = () => {
  return (
    <div className="bg-white min-h-screen">
      <Navigation />
      <Outlet />
    </div>
  )
}

export default Layout
