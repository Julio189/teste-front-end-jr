import TopHeader from './TopHeader/TopHeader'
import './Header.sass'
import Logo from './Logo/Logo'
import SearchBar from './SearchBar/SearchBar'

const Header = () => {
  return (
    <header className="header">
      <TopHeader />
      <div className="header__middle">
        <Logo />
        <SearchBar />
      </div>
    </header>
  )
}

export default Header
