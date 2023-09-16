import './CategoriesCard.sass'

import Monitor from '../../assets/images/Monitor.png'
import Whiskey from '../../assets/images/Whiskey.png'
import Supermercados from '../../assets/images/Supermercado.png'
import Ferramentas from '../../assets/images/Ferramentas.png'
import Saude from '../../assets/images/Saude.png'
import Corrida from '../../assets/images/Corrida.png'
import Moda from '../../assets/images/Moda.png'

import CategoriesCardItems from './CategoriesCardItems/CategoriesCardItems'

const CategoriesCard = () => {
  return (
    <div className="card__container">
      <CategoriesCardItems img={Monitor} title="Tecnologia" isSelect />
      <CategoriesCardItems img={Supermercados} title="Supermercado" />
      <CategoriesCardItems img={Whiskey} title="Bebidas" />
      <CategoriesCardItems img={Ferramentas} title="Ferramentas" />
      <CategoriesCardItems img={Saude} title="Saúde" />
      <CategoriesCardItems img={Corrida} title="Esportes e Fitness" />
      <CategoriesCardItems img={Moda} title="Moda" />
    </div>
  )
}

export default CategoriesCard
