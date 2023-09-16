import './IconsNavigation.sass'

import Heart from '../../icons/Heart'
import ShoppingCart from '../../icons/ShoppingCart'
import UserCircle from '../../icons/UserCircle'
import Vector from '../../icons/Vector'

const IconsNavigation = () => {
  return (
    <div className="icons__container">
      <div className="icons__vector">
        <Vector />
      </div>
      <div className="icons__heart">
        <Heart />
      </div>
      <div className="icons__user">
        <UserCircle />
      </div>
      <div>
        <ShoppingCart />
      </div>
    </div>
  )
}

export default IconsNavigation
