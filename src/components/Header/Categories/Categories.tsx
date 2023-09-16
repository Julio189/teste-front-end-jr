import CrownSimple from '../../icons/CrownSimple'
import './Categories.sass'

import CategoriesItems from './CategoriesItems/CategoriesItems'

const Categories = () => {
  return (
    <div className="categories__container">
      <CategoriesItems title="Todas as Categorias" />
      <CategoriesItems title="Supermercado" />
      <CategoriesItems title="Livros" />
      <CategoriesItems title="Moda" />
      <CategoriesItems title="Lançamentos" />
      <CategoriesItems title="Ofertas do dia" isSelect />
      <CategoriesItems title="Assinatura" icon={<CrownSimple />} />
    </div>
  )
}

export default Categories
