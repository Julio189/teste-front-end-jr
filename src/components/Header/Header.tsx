import TopHeader from './TopHeader/TopHeader'
import './Header.sass'
import Logo from './Logo/Logo'
import SearchBar from './SearchBar/SearchBar'
import IconsNavigation from './IconsNavigation/IconsNavigation'
import Categories from './Categories/Categories'

const Header = () => {
  return (
    <header className="header">
      <TopHeader />
      <div className="header__middle">
        <Logo />
        <SearchBar />
        <IconsNavigation />
      </div>
      <div>
        <Categories />
      </div>
    </header>
  )
}

export default Header
