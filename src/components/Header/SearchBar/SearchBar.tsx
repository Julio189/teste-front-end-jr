import MagnifyingGlass from '../../icons/MagnifyingGlass'
import './SearchBar.sass'

const SearchBar = () => {
  return (
    <div className="search__container">
      <input
        className="search__input"
        type="text"
        placeholder="O que você está buscando?"
      />
      <div className="search__icon">
        <MagnifyingGlass />
      </div>
    </div>
  )
}

export default SearchBar
