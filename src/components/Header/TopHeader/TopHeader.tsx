import './TopHeader.sass'
import TextTwoColor from '../TextTwoColor/TextTwoColor'
import ShieldCheck from '../../icons/ShieldCheck'
import Truck from '../../icons/Truck'
import CreditCard from '../../icons/CreditCard'

const TopHeader = () => {
  return (
    <div className="header__items">
      <TextTwoColor
        icon={<ShieldCheck />}
        firstText="Compra "
        secondText="100% segura"
        firstColor="Gray"
        secondColor="Pink"
      />
      <TextTwoColor
        icon={<Truck />}
        firstText="Frete grátis "
        secondText="acima de R$ 200"
        firstColor="Pink"
        secondColor="Gray"
      />
      <TextTwoColor
        icon={<CreditCard />}
        firstText="Parcele "
        secondText="suas compras"
        firstColor="Pink"
        secondColor="Gray"
        isLast
      />
    </div>
  )
}

export default TopHeader
