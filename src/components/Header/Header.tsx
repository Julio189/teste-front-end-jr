import TopHeader from './TopHeader/TopHeader'
import './Header.sass'
import Logo from './Logo/Logo'

const Header = () => {
  return (
    <header className="header">
      <TopHeader />
      <Logo />
    </header>
  )
}

export default Header
